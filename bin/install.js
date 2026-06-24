#!/usr/bin/env node

/**
 * Skills 安装命令
 * 支持 Claude Code 和 Codex 平台
 */

const { detectPlatform, getPlatformConfig } = require('../lib/platform-detector');
const { convertToCodex, convertToClaude } = require('../lib/converter');
const fs = require('fs');
const path = require('path');

// 获取命令行参数
const args = process.argv.slice(2);
const command = args[0];
const options = args.slice(1);

// 解析选项
function parseOptions(options) {
  const parsed = {
    platform: null,
    projectDir: process.cwd(),
    force: false,
    verbose: false
  };
  
  for (let i = 0; i < options.length; i++) {
    switch (options[i]) {
      case '-p':
      case '--platform':
        parsed.platform = options[i + 1];
        i++;
        break;
      case '-d':
      case '--dir':
        parsed.projectDir = options[i + 1];
        i++;
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
Skills 安装命令

用法:
  skills install [选项]

选项:
  -p, --platform <platform>  指定平台 (claude/codex)
  -d, --dir <directory>      指定项目目录
  -f, --force                强制覆盖现有文件
  -v, --verbose              显示详细信息
  -h, --help                 显示帮助信息

示例:
  skills install                         # 自动检测平台并安装
  skills install -p claude               # 安装 Claude Code 格式
  skills install -p codex                # 安装 Codex 格式
  skills install -p codex -d ./my-project  # 安装到指定目录
  `);
}

// 主安装函数
async function install(options) {
  const { platform: specifiedPlatform, projectDir, force, verbose } = options;
  
  console.log('🚀 Skills 安装程序');
  console.log('==================');
  console.log('');
  
  // 检测平台
  const platform = specifiedPlatform || detectPlatform(projectDir);
  const config = getPlatformConfig(platform);
  
  console.log(`📁 项目目录: ${projectDir}`);
  console.log(`🔍 检测到平台: ${config.name}`);
  console.log(`📝 格式: ${config.format}`);
  console.log('');
  
  // 检查是否已安装
  const installPath = platform === 'claude' 
    ? path.join(projectDir, '.claude', 'skills')
    : path.join(projectDir, 'AGENTS.md');
  
  if (fs.existsSync(installPath) && !force) {
    console.log(`⚠️  已检测到现有安装: ${installPath}`);
    console.log('使用 -f 选项强制覆盖');
    console.log('');
    
    // 检查是否需要更新
    console.log('💡 提示: 使用 "skills update" 命令更新到最新版本');
    return;
  }
  
  // 获取技能目录
  const skillsDir = path.join(__dirname, '..', 'skills');
  
  if (!fs.existsSync(skillsDir)) {
    console.error('❌ 未找到技能目录:', skillsDir);
    process.exit(1);
  }
  
  // 执行转换
  let result;
  
  switch (platform) {
    case 'claude':
      result = convertToClaude(skillsDir, projectDir);
      break;
    case 'codex':
      result = convertToCodex(skillsDir, projectDir);
      break;
    default:
      console.error(`❌ 不支持的平台: ${platform}`);
      process.exit(1);
  }
  
  if (result.success) {
    console.log('');
    console.log('==================');
    console.log('✅ 安装完成！');
    console.log('');
    
    // 显示使用说明
    switch (platform) {
      case 'claude':
        console.log('📖 使用方法:');
        console.log('  在 Claude Code 中使用 /gate 开始');
        console.log('');
        console.log('🔄 更新方法:');
        console.log('  skills update');
        break;
      case 'codex':
        console.log('📖 使用方法:');
        console.log('  在 Codex 中使用 AGENTS.md 中的技能');
        console.log('');
        console.log('🔄 更新方法:');
        console.log('  skills update');
        break;
    }
  } else {
    console.error('❌ 安装失败');
    process.exit(1);
  }
}

// 执行安装
const parsedOptions = parseOptions(options);
install(parsedOptions).catch(err => {
  console.error('❌ 安装错误:', err.message);
  process.exit(1);
});
