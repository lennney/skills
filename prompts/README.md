# Skills 安装提示词

> 复制提示词到 AI 编码助手中，自动安装 Skills 系统

---

## 📋 使用方法

### 方法 1：通用提示词（推荐）

复制 `install-auto.md` 中的提示词到任何 AI 编码助手中，它会自动检测平台并安装。

### 方法 2：平台特定提示词

根据你使用的平台，复制对应的提示词：

| 平台 | 提示词文件 | 说明 |
|------|------------|------|
| Claude Code | `install-claude.md` | 安装到 `.claude/skills/` |
| Codex | `install-codex.md` | 生成 `AGENTS.md` |
| Cursor | `install-cursor.md` | 生成 `.cursorrules` |
| Windsurf | `install-windsurf.md` | 生成 `.windsurfrules` |
| GitHub Copilot | `install-copilot.md` | 生成 `.github/copilot-instructions.md` |

---

## 🎯 示例

### 在 Claude Code 中安装

1. 打开 Claude Code
2. 复制 `install-claude.md` 中的提示词
3. 粘贴到 Claude Code 中
4. AI 会自动执行安装步骤

### 在 Codex 中安装

1. 打开 Codex
2. 复制 `install-codex.md` 中的提示词
3. 粘贴到 Codex 中
4. AI 会自动执行安装步骤

### 在 Cursor 中安装

1. 打开 Cursor
2. 复制 `install-cursor.md` 中的提示词
3. 粘贴到 Cursor 中
4. AI 会自动执行安装步骤

---

## 📝 提示词内容示例

### Claude Code 提示词

```
请帮我安装 Skills 技能系统。执行以下步骤：

1. 克隆 Skills 仓库：
git clone https://github.com/lennney/skills.git /tmp/skills

2. 创建技能目录并复制文件：
mkdir -p .claude/skills
cp -r /tmp/skills/skills/* .claude/skills/

3. 清理临时文件：
rm -rf /tmp/skills

4. 验证安装：
ls -la .claude/skills/

安装完成后，告诉我如何使用 /gate 开始。
```

### 通用提示词

```
请帮我安装 Skills 技能系统。执行以下步骤：

1. 首先检查当前使用的 AI 编码助手平台
2. 根据检测到的平台，安装对应的格式
3. 验证安装结果

安装完成后，告诉我如何使用 Skills 系统。
```

---

## 🔧 自定义提示词

你可以根据需要自定义提示词：

1. 复制对应的提示词文件
2. 修改安装路径或命令
3. 添加额外的配置步骤
4. 保存为新的提示词文件

---

## 📚 相关文档

- [MULTI-PLATFORM.md](../MULTI-PLATFORM.md) - 多平台适配方案
- [README.md](../README.md) - 项目说明
- [ROUTING-GUIDE.md](../ROUTING-GUIDE.md) - 路由系统使用指南

---

## ❓ 常见问题

### Q: 提示词不工作怎么办？

A: 检查以下几点：
1. 确保你复制了完整的提示词
2. 确保你有网络连接（需要克隆仓库）
3. 确保你有 Git 权限

### Q: 安装后找不到技能文件？

A: 检查以下几点：
1. 确保安装到了正确的目录
2. 检查平台是否支持该格式
3. 重新运行安装提示词

### Q: 如何更新 Skills？

A: 重新运行安装提示词即可更新到最新版本。

---

