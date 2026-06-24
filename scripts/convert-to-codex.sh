#!/bin/bash
# Codex 转换器 - 将 SKILL.md 转换为 AGENTS.md 格式

echo "🔄 Converting SKILL.md to Codex format..."

# 创建输出目录
mkdir -p platforms/codex

# 生成 AGENTS.md 头部
cat > platforms/codex/AGENTS.md << 'HEADER'
# Project Instructions

## Skills System

This project uses a skill-based system for AI assistance. Each skill provides specific capabilities.

### Available Skills

HEADER

# 递归查找所有 SKILL.md 文件
count=0
find skills -name "SKILL.md" -type f | while read skill_file; do
    # 获取技能名称（目录名）
    skill_name=$(basename $(dirname "$skill_file"))
    
    echo "  Processing: $skill_name"
    
    # 提取 frontmatter 字段
    description=$(grep -A1 "^description:" "$skill_file" | head -1 | sed 's/^description: //' | sed 's/^"//' | sed 's/"$//')
    trigger=$(grep "^trigger:" "$skill_file" | sed 's/^trigger: //')
    input=$(grep "^input:" "$skill_file" | sed 's/^input: //')
    output=$(grep "^output:" "$skill_file" | sed 's/^output: //')
    next=$(grep "^next:" "$skill_file" | sed 's/^next: //')
    
    # 追加到 AGENTS.md
    cat >> platforms/codex/AGENTS.md << EOF

#### $skill_name
- **Purpose**: $description
- **When to use**: $trigger
- **Input**: $input
- **Output**: $output
- **Next**: $next
EOF
    count=$((count + 1))
done

# 添加使用说明
cat >> platforms/codex/AGENTS.md << 'FOOTER'

### How to Use

1. **Start with Gate**: Use `/gate` to route to the appropriate skill
2. **Follow the Flow**: Each skill recommends the next skill to use
3. **Customize**: Modify skills in the `skills/` directory

### Skill Format

Each skill follows this structure:
- **Name**: Unique identifier
- **Description**: What the skill does
- **Trigger**: When to use this skill
- **Input**: What the skill needs
- **Output**: What the skill produces
- **Next**: Recommended next skill
FOOTER

echo "✅ Conversion complete! Output: platforms/codex/AGENTS.md"
echo "📊 Total skills processed: $(find skills -name "SKILL.md" -type f | wc -l)"
