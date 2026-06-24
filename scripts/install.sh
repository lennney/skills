#!/bin/bash
# Skills 多平台安装脚本
# 自动检测平台并安装对应格式

set -e

echo "🚀 Skills 多平台安装脚本"
echo "========================"
echo ""

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 检测当前目录
PROJECT_DIR=$(pwd)
echo "📁 项目目录: $PROJECT_DIR"
echo ""

# 检测平台
detect_platform() {
    if [ -f ".cursorrules" ] || [ -d ".cursor" ]; then
        echo "cursor"
    elif [ -f "AGENTS.md" ] || [ -d ".codex" ]; then
        echo "codex"
    elif [ -f ".windsurfrules" ] || [ -d ".windsurf" ]; then
        echo "windsurf"
    elif [ -d ".github" ] && [ -f ".github/copilot-instructions.md" ]; then
        echo "copilot"
    elif [ -d ".claude" ]; then
        echo "claude"
    else
        # 检查 package.json 中的依赖
        if [ -f "package.json" ]; then
            if grep -q "claude" package.json 2>/dev/null; then
                echo "claude"
            elif grep -q "cursor" package.json 2>/dev/null; then
                echo "cursor"
            elif grep -q "codex" package.json 2>/dev/null; then
                echo "codex"
            elif grep -q "windsurf" package.json 2>/dev/null; then
                echo "windsurf"
            else
                echo "unknown"
            fi
        else
            echo "unknown"
        fi
    fi
}

# 安装 Claude Code 格式
install_claude() {
    echo -e "${BLUE}📦 安装 Claude Code 格式...${NC}"
    
    mkdir -p .claude/skills
    
    # 复制技能文件
    if [ -d "skills" ]; then
        cp -r skills/* .claude/skills/
        echo -e "${GREEN}✅ 技能文件已复制到 .claude/skills/${NC}"
    else
        echo -e "${RED}❌ 未找到 skills 目录${NC}"
        return 1
    fi
}

# 安装 Codex 格式
install_codex() {
    echo -e "${BLUE}📦 安装 Codex 格式...${NC}"
    
    # 运行转换脚本
    if [ -f "scripts/convert-to-codex.sh" ]; then
        ./scripts/convert-to-codex.sh
        cp platforms/codex/AGENTS.md .
        echo -e "${GREEN}✅ AGENTS.md 已创建${NC}"
    else
        echo -e "${RED}❌ 未找到转换脚本${NC}"
        return 1
    fi
}

# 安装 Cursor 格式
install_cursor() {
    echo -e "${BLUE}📦 安装 Cursor 格式...${NC}"
    
    # 运行转换脚本
    if [ -f "scripts/convert-to-cursor.sh" ]; then
        ./scripts/convert-to-cursor.sh
        cp platforms/cursor/.cursorrules .
        echo -e "${GREEN}✅ .cursorrules 已创建${NC}"
    else
        echo -e "${RED}❌ 未找到转换脚本${NC}"
        return 1
    fi
}

# 安装 Windsurf 格式
install_windsurf() {
    echo -e "${BLUE}📦 安装 Windsurf 格式...${NC}"
    
    # 运行转换脚本
    if [ -f "scripts/convert-to-windsurf.sh" ]; then
        ./scripts/convert-to-windsurf.sh
        cp platforms/windsurf/.windsurfrules .
        echo -e "${GREEN}✅ .windsurfrules 已创建${NC}"
    else
        echo -e "${RED}❌ 未找到转换脚本${NC}"
        return 1
    fi
}

# 安装 GitHub Copilot 格式
install_copilot() {
    echo -e "${BLUE}📦 安装 GitHub Copilot 格式...${NC}"
    
    # 运行转换脚本
    if [ -f "scripts/convert-to-copilot.sh" ]; then
        ./scripts/convert-to-copilot.sh
        mkdir -p .github
        cp platforms/copilot/copilot-instructions.md .github/
        echo -e "${GREEN}✅ .github/copilot-instructions.md 已创建${NC}"
    else
        echo -e "${RED}❌ 未找到转换脚本${NC}"
        return 1
    fi
}

# 显示帮助
show_help() {
    echo "用法: $0 [选项]"
    echo ""
    echo "选项:"
    echo "  -p, --platform PLATFORM  指定平台 (claude|codex|cursor|windsurf|copilot|all)"
    echo "  -a, --all                安装所有平台"
    echo "  -h, --help               显示帮助信息"
    echo ""
    echo "示例:"
    echo "  $0                      # 自动检测平台并安装"
    echo "  $0 -p claude            # 安装 Claude Code 格式"
    echo "  $0 -p codex             # 安装 Codex 格式"
    echo "  $0 -p cursor            # 安装 Cursor 格式"
    echo "  $0 -p windsurf          # 安装 Windsurf 格式"
    echo "  $0 -p copilot           # 安装 GitHub Copilot 格式"
    echo "  $0 -a                   # 安装所有平台"
}

# 主安装流程
main() {
    # 解析命令行参数
    PLATFORM=""
    INSTALL_ALL=false
    
    while [[ $# -gt 0 ]]; do
        case $1 in
            -p|--platform)
                PLATFORM="$2"
                shift 2
                ;;
            -a|--all)
                INSTALL_ALL=true
                shift
                ;;
            -h|--help)
                show_help
                exit 0
                ;;
            *)
                echo -e "${RED}❌ 未知选项: $1${NC}"
                show_help
                exit 1
                ;;
        esac
    done
    
    # 如果没有指定平台，自动检测
    if [ -z "$PLATFORM" ] && [ "$INSTALL_ALL" = false ]; then
        echo "🔍 检测平台..."
        PLATFORM=$(detect_platform)
    fi
    
    # 安装所有平台
    if [ "$INSTALL_ALL" = true ]; then
        echo -e "${BLUE}📦 安装所有平台...${NC}"
        install_claude
        install_codex
        install_cursor
        install_windsurf
        install_copilot
    else
        # 安装指定平台
        case $PLATFORM in
            "claude")
                echo -e "${GREEN}✅ 检测到 Claude Code${NC}"
                install_claude
                ;;
            "codex")
                echo -e "${GREEN}✅ 检测到 Codex${NC}"
                install_codex
                ;;
            "cursor")
                echo -e "${GREEN}✅ 检测到 Cursor${NC}"
                install_cursor
                ;;
            "windsurf")
                echo -e "${GREEN}✅ 检测到 Windsurf${NC}"
                install_windsurf
                ;;
            "copilot")
                echo -e "${GREEN}✅ 检测到 GitHub Copilot${NC}"
                install_copilot
                ;;
            "unknown")
                echo -e "${YELLOW}⚠️  未检测到特定平台${NC}"
                echo ""
                echo "请使用 -p 参数指定平台，或使用 -a 安装所有平台"
                echo "使用 -h 查看帮助"
                exit 1
                ;;
            *)
                echo -e "${RED}❌ 未知平台: $PLATFORM${NC}"
                echo "支持的平台: claude, codex, cursor, windsurf, copilot"
                exit 1
                ;;
        esac
    fi
    
    echo ""
    echo "========================"
    echo -e "${GREEN}✅ 安装完成！${NC}"
    echo ""
    echo "📖 使用方法:"
    case $PLATFORM in
        "claude")
            echo "  在 Claude Code 中使用 /gate 开始"
            ;;
        "codex")
            echo "  在 Codex 中使用 AGENTS.md 中的技能"
            ;;
        "cursor")
            echo "  在 Cursor 中使用 .cursorrules 中的技能"
            ;;
        "windsurf")
            echo "  在 Windsurf 中使用 .windsurfrules 中的技能"
            ;;
        "copilot")
            echo "  在 GitHub Copilot 中使用 copilot-instructions.md 中的技能"
            ;;
        "unknown")
            echo "  根据你使用的平台使用对应的技能文件"
            ;;
    esac
}

# 运行主函数
main "$@"
