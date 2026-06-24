# Windsurf 安装提示词

复制以下内容到 Windsurf 中：

---

请帮我安装 Skills 技能系统。执行以下步骤：

1. 克隆 Skills 仓库：
```bash
git clone https://github.com/lennney/skills.git /tmp/skills
```

2. 运行转换脚本生成 .windsurfrules：
```bash
cd /tmp/skills
./scripts/convert-to-windsurf.sh
cp platforms/windsurf/.windsurfrules .
cd -
```

3. 复制 .windsurfrules 到当前项目：
```bash
cp /tmp/skills/.windsurfrules .
```

4. 清理临时文件：
```bash
rm -rf /tmp/skills
```

5. 验证安装：
```bash
head -50 .windsurfrules
```

安装完成后，告诉我如何使用 Skills 系统。

---

