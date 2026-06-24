/**
 * 平台检测模块
 * 自动检测用户使用的 AI 编码助手平台
 */

const fs = require('fs');
const path = require('path');

/**
 * 检测项目使用的平台
 * @param {string} projectDir - 项目目录
 * @returns {string} - 平台名称 (claude/codex)
 */
function detectPlatform(projectDir) {
  // 检查 Claude Code
  if (fs.existsSync(path.join(projectDir, '.claude')) ||
      fs.existsSync(path.join(projectDir, 'CLAUDE.md')) ||
      fs.existsSync(path.join(projectDir, '.claude.md'))) {
    return 'claude';
  }
  
  // 检查 Codex
  if (fs.existsSync(path.join(projectDir, 'AGENTS.md')) ||
      fs.existsSync(path.join(projectDir, '.codex')) ||
      fs.existsSync(path.join(projectDir, 'CODEX.md'))) {
    return 'codex';
  }
  
  // 检查 package.json 中的依赖
  const packageJsonPath = path.join(projectDir, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies
      };
      
      if (dependencies['@anthropic-ai/claude-code'] || dependencies['claude-code']) {
        return 'claude';
      }
      if (dependencies['openai-codex'] || dependencies['codex']) {
        return 'codex';
      }
    } catch (e) {
      // 忽略解析错误
    }
  }
  
  // 检查配置文件
  if (fs.existsSync(path.join(projectDir, '.claude.json')) ||
      fs.existsSync(path.join(projectDir, 'claude.config.json'))) {
    return 'claude';
  }
  
  if (fs.existsSync(path.join(projectDir, '.codex.json')) ||
      fs.existsSync(path.join(projectDir, 'codex.config.json'))) {
    return 'codex';
  }
  
  // 默认返回 claude
  return 'claude';
}

/**
 * 获取平台配置
 * @param {string} platform - 平台名称
 * @returns {object} - 平台配置
 */
function getPlatformConfig(platform) {
  const configs = {
    claude: {
      name: 'Claude Code',
      skillsDir: '.claude/skills',
      format: 'SKILL.md',
      description: 'Claude Code Skills 格式'
    },
    codex: {
      name: 'Codex',
      skillsDir: '.',
      format: 'AGENTS.md',
      description: 'Codex Agents 格式'
    }
  };
  
  return configs[platform] || configs.claude;
}

module.exports = { detectPlatform, getPlatformConfig };
