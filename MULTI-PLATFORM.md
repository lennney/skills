# Skills 多平台适配方案

> 支持 Claude Code、Codex、Cursor、Windsurf、GitHub Copilot 等平台

---

## 📋 当前状态

### 已支持平台
- ✅ **Claude Code** - 使用 SKILL.md + YAML frontmatter

### 待支持平台
- ⏳ **Codex** - GUI 交互，使用 AGENTS.md
- ⏳ **Cursor** - 使用 .cursor/rules/ 或 .cursorrules
- ⏳ **Windsurf** - 使用 .windsurfrules
- ⏳ **GitHub Copilot** - 使用 .github/copilot-instructions.md

---

## 🎯 多平台适配策略

### 策略 1：统一源 + 平台转换器（推荐）

**原理**：保持 SKILL.md 作为唯一源，通过转换器生成各平台格式

```
SKILL.md (源)
    ↓ (转换器)
├── .claude/skills/          # Claude Code
├── AGENTS.md                # Codex
├── .cursor/rules/           # Cursor
├── .windsurfrules           # Windsurf
└── .github/copilot-instructions.md  # Copilot
```

**优点**：
- 单一源文件，易于维护
- 自动同步，无需手动更新
- 保持一致性

**缺点**：
- 需要开发转换器
- 某些平台特性可能无法完全映射

### 策略 2：平台特定目录

**原理**：为每个平台创建特定目录

```
skills/
├── claude/                  # Claude Code 格式
│   └── SKILL.md
├── codex/                   # Codex 格式
│   └── AGENTS.md
├── cursor/                  # Cursor 格式
│   └── rules/
├── windsurf/                # Windsurf 格式
│   └── .windsurfrules
└── copilot/                 # Copilot 格式
    └── copilot-instructions.md
```

**优点**：
- 每个平台完全独立
- 可以针对平台特性优化

**缺点**：
- 维护成本高
- 容易不同步

### 策略 3：混合方案

**原理**：核心内容共享，平台特定内容分离

```
skills/
├── core/                    # 核心内容（平台无关）
│   ├── gate/
│   ├── ui-ux-pro-max/
│   └── ...
├── claude/                  # Claude 特定配置
│   └── skills/
├── codex/                   # Codex 特定配置
│   └── AGENTS.md
└── ...
```

**优点**：
- 核心内容共享
- 平台特定内容灵活

**缺点**：
- 结构复杂
- 需要同步机制

---

## 🔧 平台格式分析

### 1. Claude Code

**格式**：SKILL.md + YAML frontmatter

```yaml
---
name: gate
description: 技能路由入口
trigger: 用户不确定使用哪个技能
input: 用户需求
output: 路由到对应技能
next: 所有技能
dependencies: 无
---

# 技能内容
...
```

**目录结构**：
```
.claude/
└── skills/
    ├── gate/
    │   └── SKILL.md
    ├── ui-ux-pro-max/
    │   └── SKILL.md
    └── ...
```

### 2. Codex (OpenAI)

**格式**：AGENTS.md 或指令文件

```markdown
# Project Instructions

## Skills System

### Gate Skill
- **Purpose**: Route users to appropriate skills
- **Trigger**: User is unsure which skill to use
- **Input**: User requirements
- **Output**: Routed skill

### UI/UX Pro Max
- **Purpose**: Complete UI/UX design
- **Trigger**: Need comprehensive design
- **Input**: Design requirements
- **Output**: Design artifacts
```

**目录结构**：
```
project/
├── AGENTS.md               # 主指令文件
├── .codex/
│   └── skills/             # 技能目录（可选）
│       ├── gate.md
│       └── ...
└── ...
```

### 3. Cursor

**格式**：.cursor/rules/ 或 .cursorrules

```markdown
# Cursor Rules

## Skills System

When user asks for help, follow this routing:

1. If unsure about requirements → Use gate skill
2. If need UI/UX design → Use ui-ux-pro-max skill
3. If need code review → Use code-review skill
...
```

**目录结构**：
```
project/
├── .cursor/
│   └── rules/
│       ├── gate.mdc
│       ├── ui-ux-pro-max.mdc
│       └── ...
└── .cursorrules            # 或者单文件格式
```

### 4. Windsurf

**格式**：.windsurfrules 或 Cascade memory

```markdown
# Windsurf Rules

## Skills System

### Available Skills

#### Gate
- **When to use**: User needs routing
- **What it does**: Routes to appropriate skill

#### UI/UX Pro Max
- **When to use**: Need design help
- **What it does**: Provides design assistance
```

**目录结构**：
```
project/
├── .windsurfrules          # 主规则文件
├── .windsurf/
│   └── skills/             # 技能目录（可选）
│       ├── gate.md
│       └── ...
└── ...
```

### 5. GitHub Copilot

**格式**：.github/copilot-instructions.md

```markdown
# GitHub Copilot Instructions

## Skills System

When working with this project, use the following skills:

### Gate Skill
- **Purpose**: Route to appropriate skills
- **Trigger**: User needs guidance
- **Input**: User request
- **Output**: Skill recommendation

### UI/UX Pro Max
- **Purpose**: Design assistance
- **Trigger**: Design tasks
- **Input**: Design requirements
- **Output**: Design solutions
```

**目录结构**：
```
project/
├── .github/
│   └── copilot-instructions.md
└── ...
```

---

## 🚀 实现方案

### 方案 1：转换器脚本（推荐）

创建一个转换器，从 SKILL.md 生成各平台格式。

#### 目录结构
```
skills/
├── skills/                  # 源技能文件
│   ├── gate/
│   │   └── SKILL.md
│   └── ...
├── scripts/
│   ├── convert-to-codex.sh
│   ├── convert-to-cursor.sh
│   ├── convert-to-windsurf.sh
│   ├── convert-to-copilot.sh
│   └── convert-all.sh
├── platforms/               # 生成的平台文件
│   ├── codex/
│   │   └── AGENTS.md
│   ├── cursor/
│   │   └── .cursorrules
│   ├── windsurf/
│   │   └── .windsurfrules
│   └── copilot/
│       └── copilot-instructions.md
└── ...
```

#### 转换器实现

```bash
#!/bin/bash
# convert-to-codex.sh

echo "Converting SKILL.md to Codex format..."

# 创建输出目录
mkdir -p platforms/codex

# 生成 AGENTS.md
cat > platforms/codex/AGENTS.md << 'EOF'
# Project Instructions

## Skills System

EOF

# 遍历所有技能
for skill_dir in skills/*/; do
    skill_name=$(basename "$skill_dir")
    skill_file="$skill_dir/SKILL.md"
    
    if [ -f "$skill_file" ]; then
        echo "Processing: $skill_name"
        
        # 提取 frontmatter
        description=$(grep -A1 "^description:" "$skill_file" | head -1 | sed 's/^description: //')
        trigger=$(grep "^trigger:" "$skill_file" | sed 's/^trigger: //')
        input=$(grep "^input:" "$skill_file" | sed 's/^input: //')
        output=$(grep "^output:" "$skill_file" | sed 's/^output: //')
        
        # 追加到 AGENTS.md
        cat >> platforms/codex/AGENTS.md << EOF

### $skill_name
- **Purpose**: $description
- **Trigger**: $trigger
- **Input**: $input
- **Output**: $output
EOF
    fi
done

echo "Conversion complete! Output: platforms/codex/AGENTS.md"
```

### 方案 2：安装脚本

创建安装脚本，根据用户平台自动安装对应格式。

```bash
#!/bin/bash
# install-skills.sh

echo "Installing Skills..."

# 检测平台
if [ -f ".cursorrules" ] || [ -d ".cursor" ]; then
    PLATFORM="cursor"
elif [ -f "AGENTS.md" ] || [ -d ".codex" ]; then
    PLATFORM="codex"
elif [ -f ".windsurfrules" ]; then
    PLATFORM="windsurf"
elif [ -d ".github" ]; then
    PLATFORM="copilot"
else
    PLATFORM="claude"
fi

echo "Detected platform: $PLATFORM"

# 安装对应格式
case $PLATFORM in
    "claude")
        echo "Installing for Claude Code..."
        mkdir -p .claude/skills
        cp -r skills/* .claude/skills/
        ;;
    "codex")
        echo "Installing for Codex..."
        ./scripts/convert-to-codex.sh
        cp platforms/codex/AGENTS.md .
        ;;
    "cursor")
        echo "Installing for Cursor..."
        ./scripts/convert-to-cursor.sh
        cp platforms/cursor/.cursorrules .
        ;;
    "windsurf")
        echo "Installing for Windsurf..."
        ./scripts/convert-to-windsurf.sh
        cp platforms/windsurf/.windsurfrules .
        ;;
    "copilot")
        echo "Installing for GitHub Copilot..."
        ./scripts/convert-to-copilot.sh
        mkdir -p .github
        cp platforms/copilot/copilot-instructions.md .github/
        ;;
esac

echo "Installation complete!"
```

---

## 📊 平台对比

| 平台 | 格式 | 目录 | 优点 | 缺点 |
|------|------|------|------|------|
| Claude Code | SKILL.md | .claude/skills/ | 结构化、功能丰富 | 仅限 Claude |
| Codex | AGENTS.md | .codex/ | 简单、通用 | 功能有限 |
| Cursor | .cursorrules | .cursor/rules/ | 灵活、可扩展 | 需要 MDC 格式 |
| Windsurf | .windsurfrules | .windsurf/ | 简单、易用 | 功能有限 |
| Copilot | copilot-instructions.md | .github/ | 官方支持 | 功能有限 |

---

## 🎯 推荐方案

### 短期（1-2 周）

1. **创建转换器脚本**
   - 实现 SKILL.md → AGENTS.md 转换
   - 实现 SKILL.md → .cursorrules 转换
   - 实现 SKILL.md → .windsurfrules 转换
   - 实现 SKILL.md → copilot-instructions.md 转换

2. **创建安装脚本**
   - 自动检测平台
   - 自动安装对应格式

3. **更新文档**
   - 添加多平台安装说明
   - 添加平台特定配置说明

### 中期（1-2 月）

1. **优化转换器**
   - 支持更多平台特性
   - 优化输出格式

2. **创建 CI/CD**
   - 自动转换和发布
   - 自动测试各平台格式

3. **收集反馈**
   - 收集各平台用户反馈
   - 优化适配方案

### 长期（3+ 月）

1. **标准化**
   - 推动平台格式标准化
   - 参与开放标准制定

2. **生态建设**
   - 创建平台插件
   - 建设社区生态

---

## 🔧 实现步骤

### 第一步：创建转换器脚本

```bash
# 创建脚本目录
mkdir -p scripts

# 创建 Codex 转换器
cat > scripts/convert-to-codex.sh << 'EOF'
#!/bin/bash
# Codex 转换器实现
...
EOF

# 创建 Cursor 转换器
cat > scripts/convert-to-cursor.sh << 'EOF'
#!/bin/bash
# Cursor 转换器实现
...
EOF

# 创建 Windsurf 转换器
cat > scripts/convert-to-windsurf.sh << 'EOF'
#!/bin/bash
# Windsurf 转换器实现
...
EOF

# 创建 Copilot 转换器
cat > scripts/convert-to-copilot.sh << 'EOF'
#!/bin/bash
# Copilot 转换器实现
...
EOF

# 创建统一转换脚本
cat > scripts/convert-all.sh << 'EOF'
#!/bin/bash
# 转换所有平台
./scripts/convert-to-codex.sh
./scripts/convert-to-cursor.sh
./scripts/convert-to-windsurf.sh
./scripts/convert-to-copilot.sh
EOF

chmod +x scripts/*.sh
```

### 第二步：创建安装脚本

```bash
cat > scripts/install.sh << 'EOF'
#!/bin/bash
# 安装脚本实现
...
EOF

chmod +x scripts/install.sh
```

### 第三步：更新 README

```markdown
## 🚀 多平台安装

### Claude Code
```bash
npx skills@latest add lennney/skills
```

### Codex
```bash
# 自动安装
curl -fsSL https://raw.githubusercontent.com/lennney/skills/main/scripts/install.sh | bash
```

### Cursor
```bash
# 手动安装
cp platforms/cursor/.cursorrules .
```

### Windsurf
```bash
# 手动安装
cp platforms/windsurf/.windsurfrules .
```

### GitHub Copilot
```bash
# 手动安装
mkdir -p .github
cp platforms/copilot/copilot-instructions.md .github/
```
```

---

## 📝 总结

### 推荐路径

1. **立即实现**：转换器脚本 + 安装脚本
2. **短期优化**：完善各平台格式支持
3. **中期规划**：CI/CD 自动化
4. **长期愿景**：推动标准化

### 预期效果

- **平台覆盖**：从 1 个平台 → 5+ 个平台
- **用户体验**：从手动转换 → 自动安装
- **维护成本**：从多源文件 → 单一源文件
- **一致性**：从可能不一致 → 完全一致

这个多平台适配方案将显著扩大 Skills 系统的使用范围，让更多用户受益。
