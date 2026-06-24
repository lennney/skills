# 通用安装提示词（自动检测平台）

复制以下内容到任何 AI 编码助手中：

---

请帮我安装 Skills 技能系统。执行以下步骤：

1. 首先检查当前使用的 AI 编码助手平台：

```bash
# 检测平台
if [ -f ".cursorrules" ] || [ -d ".cursor" ]; then
    echo "cursor"
elif [ -f "AGENTS.md" ] || [ -d ".codex" ]; then
    echo "codex"
elif [ -f ".windsurfrules" ] || [ -d ".windsurf" ]; then
    echo "windsurf"
elif [ -d ".github" ]; then
    echo "copilot"
elif [ -d ".claude" ]; then
    echo "claude"
else
    echo "unknown"
fi
```

2. 根据检测到的平台，安装对应的格式：

```bash
# 克隆 Skills 仓库
git clone https://github.com/lennney/skills.git /tmp/skills

# 根据平台安装
PLATFORM=$(检测到的平台)

case $PLATFORM in
    "claude")
        mkdir -p .claude/skills
        cp -r /tmp/skills/skills/* .claude/skills/
        ;;
    "codex")
        cd /tmp/skills
        ./scripts/convert-to-codex.sh
        cp platforms/codex/AGENTS.md ..
        cd ..
        ;;
    "cursor")
        cd /tmp/skills
        ./scripts/convert-to-cursor.sh
        cp platforms/cursor/.cursorrules ..
        cd ..
        ;;
    "windsurf")
        cd /tmp/sills
        ./scripts/convert-to-windsurf.sh
        cp platforms/windsurf/.windsurfrules ..
        cd ..
        ;;
    "copilot")
        cd /tmp/skills
        ./scripts/convert-to-copilot.sh
        mkdir -p ../.github
        cp platforms/copilot/copilot-instructions.md ../.github/
        cd ..
        ;;
esac

# 清理临时文件
rm -rf /tmp/skills
```

3. 验证安装结果。

安装完成后，告诉我如何使用 Skills 系统。

---

