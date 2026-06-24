#!/usr/bin/env node

/**
 * Skills CLI 主入口
 * 支持 Claude Code 和 Codex 平台的一键安装和更新
 */

const { execSync } = require('child_process');
const path = require('path');

// 获取命令
const args = process.argv.slice(2);
const command = args[0];

// 显示帮助
function showHelp() {
  console.log(`
Skills - AI 编码助手技能系统

用法:
  skills <command> [options]

命令:
  install     安装技能到当前项目
  update      更新技能到最新版本
  check       检查是否有可用更新
  help        显示帮助信息

选项:
  -p, --platform <platform>  指定平台 (claude/codex)
  -d, --dir <directory>      指定项目目录
  -f, --force                强制覆盖/更新
  -v, --verbose              显示详细信息
  -h, --help                 显示帮助信息

示例:
  skills install                         # 自动检测平台并安装
  skills install -p codex                # 安装 Codex 格式
  skills update                          # 更新到最新版本
  skills update -c                       # 仅检查更新

支持的平台:
  - Claude Code (默认)
  - Codex
  `);
}

// 主函数
function main() {
  if (!command || command === 'help' || command === '-h' || command === '--help') {
    showHelp();
    return;
  }
  
  switch (command) {
    case 'install':
      // 执行安装命令
      require('./install.js');
      break;
    case 'update':
      // 执行更新命令
      require('./update.js');
      break;
    case 'check':
      // 检查更新
      const checkArgs = ['update', '-c', ...args.slice(1)];
      process.argv = [process.argv[0], process.argv[1], ...checkArgs];
      require('./update.js');
      break;
    default:
      console.error(`❌ 未知命令: ${command}`);
      console.log('');
      showHelp();
      process.exit(1);
  }
}

main();
