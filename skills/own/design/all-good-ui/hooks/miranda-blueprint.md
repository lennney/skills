# Blueprint: Miranda UI（米蘭達 UI 專家）

## Meta
name: Miranda UI
triggers: [米蘭達, Miranda, 做一個頁面, 修這個, 檢查一下, UI, 做網頁, 幫我做, landing page, 給我看幾個版本, 你當老大, 你當顧問, 幫我建設計規範, 部署前檢查, AI 味太重, build a page, fix this, check this, redesign, design system, too much AI]
description: 毒舌 UI 專家米蘭達帶隊出動，5 位小精靈平行處理視覺/動畫/排版/SEO/品質審計

## Agents

> Task Agents 由 Miranda（Conductor）依需求派遣。
> `task` 欄位在執行時根據實際需求填入 -- 不要寫死。
> `memory` 欄位指向 All-Good-UI reference 文件。

| id | role（角色） | task | memory |
|----|-------------|------|--------|
| A1 | Emily / Visual Lead（視覺總管） | {Miranda 執行時指派} | ~/.claude/skills/all-good-ui/reference/typography.md, color.md, spacing.md |
| A2 | Serena / Art Director（美術總監） | {Miranda 執行時指派} | ~/.claude/skills/all-good-ui/reference/motion.md, ~/.claude/skills/all-good-ui/workflow/icons.md |
| A3 | Jocelyn / Layout Engineer（排版工程師） | {Miranda 執行時指派} | ~/.claude/skills/all-good-ui/reference/responsive.md, accessibility.md, interaction.md |
| A4 | Andy / SEO & Deploy（上線專員） | {Miranda 執行時指派} | ~/.claude/skills/all-good-ui/reference/metadata-seo.md |
| B  | Victor / Senior Auditor（品質督察） | {Miranda 執行時指派} | ~/.claude/skills/all-good-ui/reference/anti-patterns.md, ~/.claude/skills/all-good-ui/workflow/audit.md |

## Flow

> A1-A4 平行出動，Victor 最後審計。

parallel: [A1, A2, A3, A4]
then: assembler（Miranda 整合所有小精靈的成品）
then: checker（Victor 品質審計 18 類）
then: polisher（Miranda 最終交付）

## Roles Memory

assembler-empath（組裝-感性）: --
assembler-architect（組裝-理性）: ~/.claude/skills/all-good-ui/SKILL.md
checker（審查）: ~/.claude/skills/all-good-ui/workflow/audit.md
polisher（潤稿）: --

## Checklist

> Victor 審查必須通過的品質關卡。

- [ ] 成品符合原始需求
- [ ] 無障礙通過 WCAG AA（對比度 4.5:1 文字 / 3:1 UI）
- [ ] 手機版不跑版、觸控目標 >= 44x44px
- [ ] AI 味偵測通過（不對稱、有個性、非通用卡片排列）
- [ ] SEO 標籤齊全（title / description / OG / JSON-LD）
- [ ] 動畫只用 transform + opacity、尊重 prefers-reduced-motion
- [ ] 所有互動狀態齊全（hover / focus / active / disabled / loading / error / empty）
- [ ] 程式碼可直接部署

## On Fail

> Victor 審查不通過 → 回到 assembler 由 Miranda 修正。

retry: assembler（Miranda 整合）
max_retry: 2
