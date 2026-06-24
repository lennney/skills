#!/bin/bash
# 统一转换脚本 - 转换所有平台格式

echo "🚀 Converting SKILL.md to all platform formats..."
echo ""

# 运行所有转换器
echo "=== Codex ==="
./scripts/convert-to-codex.sh
echo ""

echo "=== Cursor ==="
./scripts/convert-to-cursor.sh
echo ""

echo "=== Windsurf ==="
./scripts/convert-to-windsurf.sh
echo ""

echo "=== GitHub Copilot ==="
./scripts/convert-to-copilot.sh
echo ""

echo "✅ All conversions complete!"
echo ""
echo "📁 Generated files:"
echo "  - platforms/codex/AGENTS.md"
echo "  - platforms/cursor/.cursorrules"
echo "  - platforms/windsurf/.windsurfrules"
echo "  - platforms/copilot/copilot-instructions.md"
echo ""
echo "📖 Usage:"
echo "  - Codex: Copy platforms/codex/AGENTS.md to your project root"
echo "  - Cursor: Copy platforms/cursor/.cursorrules to your project root"
echo "  - Windsurf: Copy platforms/windsurf/.windsurfrules to your project root"
echo "  - Copilot: Copy platforms/copilot/copilot-instructions.md to .github/"
