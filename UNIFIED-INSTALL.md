# 统一安装方案

> 支持 Claude Code 和 Codex 的一键安装和更新

---

## 📋 目标

1. **一键安装** - 用户执行一个命令即可安装
2. **自动更新** - 支持后续更新到最新版本
3. **平台检测** - 自动检测用户使用的平台
4. **格式适配** - 根据平台生成对应格式

---

## 🎯 方案设计

### 方案 1：增强现有 skills 包（推荐）

**原理**：修改现有的 `skills` npm 包，添加平台检测和格式转换功能

**安装命令**：
```bash
# 自动检测平台并安装
npx skills@latest add lennney/skills

# 指定平台
npx skills@latest add lennney/skills --platform codex
npx skills@latest add lennney/skills --platform claude
```

**更新命令**：
```bash
# 检查更新
npx skills@latest check-update

# 更新到最新版本
npx skills@latest update
```

**优点**：
- 统一的安装体验
- 自动平台检测
- 支持更新机制
- 向后兼容

**缺点**：
- 需要修改现有 skills 包
- 需要维护平台检测逻辑

### 方案 2：创建平台特定的入口

**原理**：为每个平台创建独立的入口，但共享核心逻辑

**安装命令**：
```bash
# Claude Code
npx skills-claude@latest add lennney/skills

# Codex
npx skills-codex@latest add lennney/skills
```

**优点**：
- 清晰的平台区分
- 独立的版本管理

**缺点**：
- 需要维护多个包
- 用户需要知道自己的平台

---

## 🔧 实现方案 1：增强现有 skills 包

### 第一步：创建平台检测模块

```javascript
// lib/platform-detector.js

const fs = require('fs');
const path = require('path');

function detectPlatform(projectDir) {
  // 检查 Claude Code
  if (fs.existsSync(path.join(projectDir, '.claude')) ||
      fs.existsSync(path.join(projectDir, 'CLAUDE.md'))) {
    return 'claude';
  }
  
  // 检查 Codex
  if (fs.existsSync(path.join(projectDir, 'AGENTS.md')) ||
      fs.existsSync(path.join(projectDir, '.codex'))) {
    return 'codex';
  }
  
  // 检查 package.json 中的依赖
  const packageJsonPath = path.join(projectDir, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const dependencies = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies
    };
    
    if (dependencies['@anthropic-ai/claude-code']) {
      return 'claude';
    }
    if (dependencies['openai-codex']) {
      return 'codex';
    }
  }
  
  // 默认返回 claude
  return 'claude';
}

module.exports = { detectPlatform };
```

### 第二步：创建格式转换器

```javascript
// lib/converter.js

const fs = require('fs');
const path = require('path');

function convertToCodex(skillsDir, outputDir) {
  // 读取所有 SKILL.md 文件
  const skills = [];
  
  function readSkills(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        readSkills(filePath);
      } else if (file === 'SKILL.md') {
        const content = fs.readFileSync(filePath, 'utf8');
        const skillName = path.basename(path.dirname(filePath));
        skills.push({ name: skillName, content });
      }
    }
  }
  
  readSkills(skillsDir);
  
  // 生成 AGENTS.md
  let agentsMd = '# Project Instructions\n\n## Skills System\n\n';
  
  for (const skill of skills) {
    // 提取 frontmatter
    const frontmatterMatch = skill.content.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const description = frontmatter.match(/description:\s*(.+)/)?.[1] || '';
      const trigger = frontmatter.match(/trigger:\s*(.+)/)?.[1] || '';
      
      agentsMd += `### ${skill.name}\n`;
      agentsMd += `- **Purpose**: ${description}\n`;
      agentsMd += `- **When to use**: ${trigger}\n\n`;
    }
  }
  
  // 写入文件
  fs.writeFileSync(path.join(outputDir, 'AGENTS.md'), agentsMd);
  
  return { success: true, skillsCount: skills.length };
}

module.exports = { convertToCodex };
```

### 第三步：修改安装命令

```javascript
// bin/install.js

const { detectPlatform } = require('../lib/platform-detector');
const { convertToCodex } = require('../lib/converter');
const fs = require('fs');
const path = require('path');

async function install(options) {
  const { platform: specifiedPlatform, projectDir = process.cwd() } = options;
  
  // 检测平台
  const platform = specifiedPlatform || detectPlatform(projectDir);
  console.log(` detected platform: ${platform}`);
  
  // 根据平台安装
  switch (platform) {
    case 'claude':
      await installClaude(projectDir);
      break;
    case 'codex':
      await installCodex(projectDir);
      break;
    default:
      throw new Error(`Unsupported platform: ${platform}`);
  }
  
  console.log('Installation complete!');
}

async function installClaude(projectDir) {
  const claudeDir = path.join(projectDir, '.claude', 'skills');
  fs.mkdirSync(claudeDir, { recursive: true });
  
  // 复制技能文件
  // ...
}

async function installCodex(projectDir) {
  const skillsDir = path.join(__dirname, '..', 'skills');
  convertToCodex(skillsDir, projectDir);
}

module.exports = { install };
```

### 第四步：添加更新命令

```javascript
// bin/update.js

const { detectPlatform } = require('../lib/platform-detector');
const { execSync } = require('child_process');

async function update(options) {
  const { projectDir = process.cwd() } = options;
  
  // 检测平台
  const platform = detectPlatform(projectDir);
  console.log(`Detected platform: ${platform}`);
  
  // 检查更新
  console.log('Checking for updates...');
  
  // 拉取最新版本
  execSync('git pull origin main', { 
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
  });
  
  // 重新安装
  await install({ platform, projectDir });
  
  console.log('Update complete!');
}

module.exports = { update };
```

---

## 📊 使用流程

### 首次安装

```bash
# 用户执行
npx skills@latest add lennney/skills

# 系统自动
1. 检测平台 (claude/codex)
2. 下载技能文件
3. 转换为对应格式
4. 安装到正确目录
5. 显示使用说明
```

### 后续更新

```bash
# 用户执行
npx skills@latest update

# 系统自动
1. 检查是否有新版本
2. 拉取最新代码
3. 重新安装技能
4. 显示更新内容
```

---

## 🎯 优势

1. **一键安装** - 用户只需执行一个命令
2. **自动检测** - 无需手动指定平台
3. **格式适配** - 自动生成对应格式
4. **更新支持** - 支持后续更新
5. **向后兼容** - 保持现有 Claude Code 安装方式

---

## 📝 实现步骤

1. 创建平台检测模块
2. 创建格式转换器
3. 修改安装命令
4. 添加更新命令
5. 测试各平台
6. 发布新版本

---

