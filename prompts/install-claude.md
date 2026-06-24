# Claude Code 安装提示词

复制以下内容到 Claude Code 中：

---

请帮我安装 Skills 技能系统。执行以下步骤：

1. 克隆 Skills 仓库：
```bash
git clone https://github.com/lennney/skills.git /tmp/skills
```

2. 创建技能目录并复制文件：
```bash
mkdir -p .claude/skills
cp -r /tmp/skills/skills/* .claude/skills/
```

3. 清理临时文件：
```bash
rm -rf /tmp/skills
```

4. 验证安装：
```bash
ls -la .claude/skills/
```

安装完成后，告诉我如何使用 `/gate` 开始。

---

