#!/bin/bash
# Cursor 转换器 - 将 SKILL.md 转换为 .cursorrules 格式

echo "🔄 Converting SKILL.md to Cursor format..."

# 创建输出目录
mkdir -p platforms/cursor

# 生成 .cursorrules 头部
cat > platforms/cursor/.cursorrules << 'HEADER'
# Cursor Rules

## Skills System

When user asks for help, follow this routing system:

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
    
    # 追加到 .cursorrules
    cat >> platforms/cursor/.cursorrules << EOF

#### $skill_name
- **Purpose**: $description
- **When to use**: $trigger
- **Input**: $input
- **Output**: $output
EOF
done

# 添加使用说明
cat >> platforms/cursor/.cursorrules << 'FOOTER'

### Routing Rules

1. **Start with Gate**: When user is unsure, use `/gate` to route
2. **Follow the Flow**: Each skill recommends the next skill
3. **Be Helpful**: Use plain language to explain what you're doing

### Example Interactions

**User**: "I want to build a website"
**AI**: "I'll use the gate skill to help you get started."

**User**: "My website is slow"
**AI**: "I'll use the performance skill to help optimize your website."
FOOTER

echo "✅ Conversion complete! Output: platforms/cursor/.cursorrules"
echo "📊 Total skills processed: $(find skills -name "SKILL.md" -type f | wc -l)"
