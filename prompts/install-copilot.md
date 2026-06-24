# GitHub Copilot 安装提示词

复制以下内容到 GitHub Copilot 中：

---

请帮我安装 Skills 技能系统。执行以下步骤：

1. 克隆 Skills 仓库：
```bash
git clone https://github.com/lennney/skills.git /tmp/skills
```

2. 运行转换脚本生成 copilot-instructions.md：
```bash
cd /tmp/skills
./scripts/convert-to-copilot.sh
cp platforms/copilot/copilot-instructions.md .
cd -
```

3. 创建 .github 目录并复制文件：
```bash
mkdir -p .github
cp /tmp/skills/copilot-instructions.md .github/
```

4. 清理临时文件：
```bash
rm -rf /tmp/skills
```

5. 验证安装：
```bash
head -50 .github/copilot-instructions.md
```

安装完成后，告诉我如何使用 Skills 系统。

---

