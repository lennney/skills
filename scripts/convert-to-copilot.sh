#!/bin/bash
# Copilot 转换器 - 将 SKILL.md 转换为 copilot-instructions.md 格式

echo "🔄 Converting SKILL.md to GitHub Copilot format..."

# 创建输出目录
mkdir -p platforms/copilot

# 生成 copilot-instructions.md 头部
cat > platforms/copilot/copilot-instructions.md << 'HEADER'
# GitHub Copilot Instructions

## Skills System

This project uses a skill-based system for AI assistance. Each skill provides specific capabilities.

### Available Skills

HEADER

# 递归查找所有 SKILL.md 文件
find skills -name "SKILL.md" -type f | while read skill_file; do
    skill_name=$(basename $(dirname "$skill_file"))
    
    echo "  Processing: $skill_name"
    
    # 提取 frontmatter 字段
    description=$(grep -A1 "^description:" "$skill_file" | head -1 | sed 's/^description: //' | sed 's/^"//' | sed 's/"$//')
    trigger=$(grep "^trigger:" "$skill_file" | sed 's/^trigger: //')
    input=$(grep "^input:" "$skill_file" | sed 's/^input: //')
    output=$(grep "^output:" "$skill_file" | sed 's/^output: //')
    
    # 追加到 copilot-instructions.md
    cat >> platforms/copilot/copilot-instructions.md << EOF

#### $skill_name
- **Purpose**: $description
- **When to use**: $trigger
- **Input**: $input
- **Output**: $output
EOF
done

# 添加使用说明
cat >> platforms/copilot/copilot-instructions.md << 'FOOTER'

### How to Use

1. **Start with Gate**: Use `/gate` to route to the appropriate skill
2. **Follow the Flow**: Each skill recommends the next skill to use
3. **Be Helpful**: Use plain language to explain what you're doing

### Example

**User**: "I want to build a website"
**AI**: "I'll use the gate skill to help you get started."
FOOTER

echo "✅ Conversion complete! Output: platforms/copilot/copilot-instructions.md"
echo "📊 Total skills processed: $(find skills -name "SKILL.md" -type f | wc -l)"
