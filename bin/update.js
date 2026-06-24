#!/usr/bin/env node

/**
 * Skills 更新命令
 * 支持 Claude Code 和 Codex 平台的更新
 */

const { detectPlatform, getPlatformConfig } = require('../lib/platform-detector');
const { convertToCodex, convertToClaude } = require('../lib/converter');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 获取命令行参数
const args = process.argv.slice(2);
const options = args.slice(1);

// 解析选项
function parseOptions(options) {
  const parsed = {
    projectDir: process.cwd(),
    checkOnly: false,
    force: false,
    verbose: false
  };
  
  for (let i = 0; i < options.length; i++) {
    switch (options[i]) {
      case '-d':
      case '--dir':
        parsed.projectDir = options[i + 1];
        i++;
        break;
      case '-c':
      case '--check':
        parsed.checkOnly = true;
        break;
      case '-f':
      case '--force':
        parsed.force = true;
        break;
      case '-v':
      case '--verbose':
        parsed.verbose = true;
        break;
      case '-h':
      case '--help':
        showHelp();
        process.exit(0);
    }
  }
  
  return parsed;
}

// 显示帮助
function showHelp() {
  console.log(`
Skills 更新命令

用法:
  skills update [选项]

选项:
  -d, --dir <directory>      指定项目目录
  -c, --check                仅检查更新
  -f, --force                强制更新
  -v, --verbose              显示详细信息
  -h, --help                 显示帮助信息

示例:
  skills update                         # 更新到最新版本
  skills update -c                      # 仅检查是否有更新
  skills update -f                      # 强制更新
  skills update -d ./my-project         # 更新指定目录
  `);
}

// 检查更新
function checkUpdate(skillsDir) {
  try {
    // 获取本地版本
    const localCommit = execSync('git rev-parse HEAD', { 
      cwd: skillsDir,
      encoding: 'utf8'
    }).trim();
    
    // 获取远程版本
    execSync('git fetch origin', { 
      cwd: skillsDir,
      stdio: 'ignore'
    });
    
    const remoteCommit = execSync('git rev-parse origin/main', { 
      cwd: skillsDir,
      encoding: 'utf8'
    }).trim();
    
    return {
      hasUpdate: localCommit !== remoteCommit,
      local: localCommit,
      remote: remoteCommit
    };
  } catch (e) {
    return {
      hasUpdate: false,
      error: e.message
    };
  }
}

// 更新函数
async function update(options) {
  const { projectDir, checkOnly, force, verbose } = options;
  
  console.log('🔄 Skills 更新程序');
  console.log('==================');
  console.log('');
  
  // 检测平台
  const platform = detectPlatform(projectDir);
  const config = getPlatformConfig(platform);
  
  console.log(`📁 项目目录: ${projectDir}`);
  console.log(`🔍 检测到平台: ${config.name}`);
  console.log('');
  
  // 获取技能目录
  const skillsDir = path.join(__dirname, '..');
  
  // 检查更新
  console.log('🔍 检查更新...');
  const updateInfo = checkUpdate(skillsDir);
  
  if (updateInfo.error) {
    console.error('❌ 检查更新失败:', updateInfo.error);
    process.exit(1);
  }
  
  if (!updateInfo.hasUpdate) {
    console.log('✅ 已是最新版本');
    console.log('');
    console.log(`📍 本地版本: ${updateInfo.local.substring(0, 8)}`);
    console.log(`📍 远程版本: ${updateInfo.remote.substring(0, 8)}`);
    return;
  }
  
  console.log('📦 发现新版本！');
  console.log('');
  console.log(`📍 本地版本: ${updateInfo.local.substring(0, 8)}`);
  console.log(`📍 远程版本: ${updateInfo.remote.substring(0, 8)}`);
  
  if (checkOnly) {
    console.log('');
    console.log('💡 运行 "skills update" 更新到最新版本');
    return;
  }
  
  // 拉取最新代码
  console.log('');
  console.log('📥 拉取最新代码...');
  
  try {
    execSync('git pull origin main', { 
      cwd: skillsDir,
      stdio: verbose ? 'inherit' : 'ignore'
    });
    console.log('✅ 代码更新完成');
  } catch (e) {
    console.error('❌ 拉取代码失败:', e.message);
    process.exit(1);
  }
  
  // 重新安装
  console.log('');
  console.log('📦 重新安装技能...');
  
  const installPath = platform === 'claude' 
    ? path.join(projectDir, '.claude', 'skills')
    : path.join(projectDir, 'AGENTS.md');
  
  // 删除旧安装
  if (fs.existsSync(installPath)) {
    if (fs.statSync(installPath).isDirectory()) {
      fs.rmSync(installPath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(installPath);
    }
  }
  
  // 重新安装
  let result;
  const skillsContentDir = path.join(skillsDir, 'skills');
  
  switch (platform) {
    case 'claude':
      result = convertToClaude(skillsContentDir, projectDir);
      break;
    case 'codex':
      result = convertToCodex(skillsContentDir, projectDir);
      break;
    default:
      console.error(`❌ 不支持的平台: ${platform}`);
      process.exit(1);
  }
  
  if (result.success) {
    console.log('');
    console.log('==================');
    console.log('✅ 更新完成！');
    console.log('');
    console.log(`📊 更新了 ${result.skillsCount} 个技能`);
  } else {
    console.error('❌ 更新失败');
    process.exit(1);
  }
}

// 执行更新
const parsedOptions = parseOptions(options);
update(parsedOptions).catch(err => {
  console.error('❌ 更新错误:', err.message);
  process.exit(1);
});
