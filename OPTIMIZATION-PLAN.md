# 项目优化计划

> 基于行业最佳实践的优化方案

---

## 📋 优化目标

1. 符合 agentskills.io 标准
2. 支持 skills.sh 生态系统
3. 自动检测平台
4. 简化安装流程
5. 提升用户体验

---

## 🎯 优化内容

### 1. 确保 SKILL.md 格式符合标准

**当前状态**：✅ 已符合 agentskills.io 标准
- YAML frontmatter 包含 name, description, trigger, input, output, next, dependencies
- Markdown 内容包含详细说明

### 2. 支持 skills.sh 生态系统

**目标**：让用户可以用 `npx skills add lennney/skills` 安装

**需要做的**：
- 确保仓库结构符合 skills.sh 要求
- 添加必要的元数据文件
- 测试安装流程

### 3. 自动检测平台

**目标**：安装时自动检测用户使用的平台

**实现方式**：
- 检查 `.claude/` 目录 → Claude Code
- 检查 `AGENTS.md` → Codex
- 检查 `.cursorrules` → Cursor
- 检查 `.windsurfrules` → Windsurf
- 检查 `.github/copilot-instructions.md` → GitHub Copilot

### 4. 简化安装流程

**目标**：一键安装，无需复杂配置

**安装方式**：
```bash
# 方式 1：使用 skills.sh（推荐）
npx skills add lennney/skills

# 方式 2：使用你的 CLI
npx gate-all-skills install

# 方式 3：提示词安装
# 复制 prompts/install-auto.md 中的提示词
```

### 5. 更新文档

**目标**：清晰的安装和使用说明

**更新内容**：
- README 添加 skills.sh 安装方式
- 添加多平台支持说明
- 添加使用示例

---

## 📁 优化后的目录结构

```
skills/
├── skills/                    # 源技能文件（SKILL.md 格式）
│   ├── gate/
│   │   └── SKILL.md
│   ├── ui-ux-pro-max/
│   │   └── SKILL.md
│   └── ...
├── scripts/
│   ├── convert.sh            # 转换脚本
│   └── install.sh            # 安装脚本
├── prompts/
│   └── install-auto.md       # 提示词安装
├── bin/
│   ├── skills.js             # CLI 主入口
│   ├── install.js            # 安装命令
│   └── update.js             # 更新命令
├── lib/
│   ├── platform-detector.js  # 平台检测
│   └── converter.js          # 格式转换
├── package.json
├── README.md
└── CHANGELOG.md
```

---

## 🔧 实施步骤

1. ✅ 确保 SKILL.md 格式符合标准
2. ⏳ 测试 skills.sh 安装
3. ⏳ 优化自动检测逻辑
4. ⏳ 更新 README 文档
5. ⏳ 发布新版本

---

