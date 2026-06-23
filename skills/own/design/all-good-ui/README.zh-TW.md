<h1 align="center">All-Good-UI</h1>

<p align="center">
  <strong>Miranda（米蘭達）— 一位毒舌 UI 專家技能，專為 Claude Code 打造。</strong><br>
  她看得見每個瑕疵，自己動手修好，確保你的 UI 能直接上線。
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-v2.0-D4A5A5?style=flat-square" alt="Version 2.0">
  <img src="https://img.shields.io/badge/license-MIT-D4A5A5?style=flat-square" alt="MIT License">
  <img src="https://img.shields.io/badge/claude_code-skill-B8A9C9?style=flat-square" alt="Claude Code Skill">
  <img src="https://img.shields.io/badge/dependencies-zero-A8B5A0?style=flat-square" alt="Zero Dependencies">
  <img src="https://img.shields.io/badge/discovery-structured-E8B4B8?style=flat-square" alt="Structured Discovery">
</p>

<p align="center">
  <sub>v2.0 — 結構化訪談卡、三層 DS 偵測、五維度品味評審、整合 open-design 方法論。</sub>
</p>

<p align="center">
  <a href="README.md">English</a> &nbsp;|&nbsp; <b>繁體中文</b> &nbsp;|&nbsp; <a href="README.ja.md">日本語</a>
</p>

---

## 問題在哪

- AI 做的 UI 一看就知道是 AI 做的——完美對稱、通用卡片、安全色系、毫無個性
- 設計規範活在你的腦袋裡，不是一套系統——每做一頁就像擲銅板
- 無障礙、SEO、響應式、動畫效能——每次都要手動檢查太多東西
- 你推上線了，才發現手機上對比度壞了、按鈕沒有 focus ring

---

## :mega: 怎麼叫米蘭達

三種方式，挑你順手的。

### 1. 直接叫她名字

```text
Miranda, build me a landing page.
米蘭達，幫我做一個首頁。
```

### 2. 直接講 UI 相關的事——她會自動出現

```text
這個設計好醜，幫我改。
Help me fix this page layout.
幫我檢查一下無障礙。
Check my site's accessibility.
```

只要是 UI 相關的請求，米蘭達就會自動啟動。你不需要特別叫她的名字——她隨時都在聽。

### 3. 斜線指令

```text
/all-good-ui
```

### 完整觸發詞清單

| English | 中文 |
| :------ | :--- |
| "Miranda" | 「米蘭達」 |
| "build a page" / "make a page" / "landing page" | 「做一個頁面」「做網頁」「幫我做」 |
| "fix this" / "fix the design" | 「修這個」「這很醜」 |
| "check this" / "audit" | 「檢查一下」「幫我看看」 |
| "redesign" / "design system" | 「幫我建設計規範」 |
| "show me options" / "show me versions" | 「給我看幾個版本」 |
| "be the boss" / "just advise" | 「你當老大」「你當顧問」 |
| "deploy check" | 「部署前檢查」 |
| "too much AI" / "looks like AI" | 「AI 味太重」 |
| "quick start" / "full interview" | 「快速開始」「完整訪談」 |

---

## :movie_camera: 米蘭達實際運作（v2.0 流程）

安裝完成後，直接開始對話就好。米蘭達會立刻接手，跑一套結構化的九階段流程——不再閒聊：

```text
你：  我想做一個咖啡店的首頁。

米蘭達：  叫我？我是米蘭達。先給我 30 秒。

          ┌──────────────────────────────────────────────────────────┐
          │  訪談卡 — 每行勾一個，貼回來給我。                            │
          ├──────────────────────────────────────────────────────────┤
          │  語言：       [ ] English   [ ] 中文                       │
          │  1. 介面：    [ ] landing  [ ] dashboard  [ ] mobile       │
          │               [ ] deck  [ ] e-guide  [ ] blog  [x] 其他：  │
          │               咖啡店首頁  ← 從你的訊息推斷                   │
          │  2. 受眾：    [ ] B2B  [ ] B2C  [ ] 內部工具  [ ] 個人作品   │
          │  3. 調性：    [ ] 編輯感  [ ] 極簡  [ ] 科技感               │
          │               [ ] 暖系  [ ] 粗野                            │
          │  4. 品牌：    [ ] 有完整 DS  [ ] 只有 logo+色  [ ] 從 0      │
          │  5. 規模：    [ ] 單頁  [ ] 5-10 頁  [ ] 整站                │
          └──────────────────────────────────────────────────────────┘

你：  中文。B2C。編輯感。從 0 開始。單頁。

米蘭達：  品牌從零 → 進入方向選擇器。挑一個字母給我。

          A. Editorial    — Iowan Old Style 襯線、墨黑 #111111、單一強調 #B8472A
          B. Modern Minimal — Inter 無襯線、中性色、強調 #2563EB
          C. Tech Utility  — JetBrains Mono、終端機色盤
          D. Soft Warm     — GenSenRounded、腮紅 + 鼠尾草
          E. Brutalist     — Mono 字體、硬邊框、原生 HTML 感

你：  A。

米蘭達：  鎖定。執行 Pre-flight...
          ┌─ 步驟 1：三層 DS 驗證 → 沒有專案檔，全新開始
          ├─ 步驟 2：grep + normalize hex → 還沒有（白紙一張）
          ├─ 步驟 3：寫入 brand-spec.md → 從方向 A 鎖定 token
          └─ 步驟 4：複述 → 「襯線顯示字 + 無襯線內文、墨黑色盤、
                            單一強調 #B8472A、4px 基礎圓角。」

          先給線框 — 灰塊版，30 秒看完，要改方向便宜。

          [emits 灰塊 wireframe HTML]

你：  OK，繼續。

米蘭達：  派團隊上工。每位子代理 = 一個 TodoWrite 項目。

          ┌─ Emily（艾蜜莉／視覺總管）：建立 token、字體、色彩
          ├─ Serena（瑟琳娜／美術總監）：圖示 + 微互動
          ├─ Jocelyn（喬瑟琳／排版）：響應式格線 + 無障礙
          └─ Andy（安迪／上線）：meta、OG、JSON-LD

米蘭達：  build 完成。Victor 執行雙審（18 條技術 + 5 維度品味）...

          ┌─ 技術審計：17/18 通過。1 處對比度自動修正。
          └─ 品味評審：
              哲學一致性    8/10  Strong  — 編輯感方向整體一致
              視覺層級      9/10  Strong  — 顯示字最大、mono 註解讀得出註解
              細節執行      7/10  Strong  — token 一致，沒有亂跑的 hex
              功能性        9/10  Strong  — 無障礙完整、表單有驗證
              創新性        5/10  Functional — 非對稱編輯版面 OK，
                                            但顯示字可再大膽一點

          KEEP   — 編輯感字體系統
          FIX    — （無，已自動處理）
          QUICK  — 試試 mono 註解 + kicker 眉題，創新性可加 2 分

          可以部署了。brand-spec.md 已存到 .miranda/ 給下次 session 接手。
```

---

## 解決方案

All-Good-UI 安裝的是 **Miranda（米蘭達）**，一位品味無可挑剔、對平庸零容忍的資深 UI 專家。她帶領五位專業子代理同時平行作業。

### :busts_in_silhouette: 團隊

| 名字 | 角色 | 負責什麼 |
| :--- | :--- | :------- |
| **Miranda（米蘭達）** | 創意總監 | 帶領團隊、訪談使用者、做設計決策、整合成果 |
| **Emily（艾蜜莉）** | 視覺總管 | 字體排印、色彩系統、間距、視覺層次、深色模式 |
| **Serena（瑟琳娜）** | 美術總監 | 圖示、動畫、轉場、微互動、裝飾元素 |
| **Victor（維克多）** | 品質督察 | 品質稽核、AI 味偵測、反模式掃描、最終潤飾 |
| **Jocelyn（喬瑟琳）** | 排版工程師 | 響應式設計、格線系統、無障礙、鍵盤導覽 |
| **Andy（安迪）** | 上線專員 | SEO / AIO / GEO / SGE metadata、結構化資料、Core Web Vitals、部署前檢查 |

### :sparkles: 米蘭達能做什麼（v2.0）

| 功能 | 說明 |
| :--- | :--- |
| **訪談卡** | 30 秒的結構化選擇題卡，取代 30 分鐘的來回修正。不再開放式追問。 |
| **方向選擇器** | 沒品牌時，米蘭達丟出 5 個固定方向給你挑一個字母，token 鎖定。禁止自由發揮配色。 |
| **Pre-flight 預飛** | 派子代理前必做：三層 DS 驗證、grep + normalize 用色現況、寫入 `brand-spec.md`、把契約複述給你確認。 |
| **先給線框** | 全力建構前先丟灰塊版面 — 廢稿便宜、改方向便宜。局部模組、修現有頁、線框太小都會自動跳過。 |
| **多方案比較** | 產生 3-5 個方向給你混搭組合（「A 的版面 + C 的間距」）。 |
| **18 條技術稽核** | 無障礙、AI 味、效能、響應式、SEO ——每次 build 後自動跑。 |
| **5 維度品味評審** | 哲學一致性／視覺層級／細節執行／功能性／創新性，各打 0-10 分附證據，最後給 Keep / Fix / Quick-win 三段行動清單。 |
| **依嚴重程度自動修正** | 重大問題米蘭達自己處理，偏好類問題與創新性決策回報給你。 |
| **`brand-spec.md` 產出物** | 鎖定的設計契約存進專案，下次 session 直接接手，不用重新訪談。 |
| **直接上線的成品** | 程式碼可直接部署，SEO、a11y、效能都處理好了。 |

---

## :package: 安裝

**步驟 1** -- 複製到你的 Claude Code 技能目錄：

```bash
git clone https://github.com/HelloRuru/ALL-GOOD-UI.git ~/.claude/skills/all-good-ui
```

**步驟 2** -- 註冊自動觸發 hook，讓米蘭達在你提到她的名字或任何 UI 相關關鍵字時自動啟動：

<details>
<summary><strong>點擊展開 hook 設定</strong></summary>

加入 `~/.claude/settings.json` 的 `"hooks"` 區段：

```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": "node \"~/.claude/skills/all-good-ui/hooks/miranda-trigger.js\""
          }
        ]
      }
    ]
  }
}
```

如有需要，將 `~` 替換為你的實際家目錄路徑。

</details>

**步驟 3** -- 完成。說「米蘭達」或問任何 UI 問題，她就會接手。

**步驟 4（選用）** -- 搭配 [Claude Teams Go](https://github.com/HelloRuru/claude-teams-go) 讓米蘭達更強大，提供結構化的多代理協作：

<details>
<summary><strong>點擊展開</strong></summary>

Teams Go 為 Claude Code 提供藍圖式的工作流程引擎。米蘭達的 5 位子代理可以作為協調團隊派遣，內建品質關卡與重試邏輯。

```bash
git clone https://github.com/HelloRuru/claude-teams-go.git ~/claude-teams-go
```

然後複製內附的藍圖：

```bash
cp ~/.claude/skills/all-good-ui/hooks/miranda-blueprint.md ~/claude-teams-go/blueprints/
```

詳細設定請參考 [Claude Teams Go README](https://github.com/HelloRuru/claude-teams-go)。

</details>

**步驟 5（選用）** -- 安裝 Better Icons MCP，取得 200,000+ 圖示搜尋能力：

<details>
<summary><strong>點擊展開</strong></summary>

加入 `~/.claude/settings.json`：

```json
{
  "mcpServers": {
    "better-icons": {
      "command": "npx",
      "args": ["-y", "better-icons"]
    }
  }
}
```

</details>

---

## :brain: 米蘭達的運作方式

米蘭達自動啟動，遵循結構化的九階段流程：

**階段 0：偵測** -- 掃描你的專案，辨識框架、套件管理器、樣式系統和現有的設計 token。

**階段 1：訪談卡** -- 一張 5 列選擇題卡（介面／受眾／調性／品牌／規模），pre-fill 規則嚴格（只能引用你當下訊息的字句，不准翻 CLAUDE.md 或記憶）。User-dismiss 逃生口：你說「你看著辦」她就直接做，把猜的部分全標 `[unconfirmed]`，不再煩你。

**階段 1.5：方向選擇器** -- 品牌答「從 0」或「只有 logo+色」時觸發。五個固定方向（Editorial / Modern Minimal / Tech Utility / Soft Warm / Brutalist），挑一個字母 → token 鎖定。禁止自由發揮。

**階段 1.8：Pre-flight 預飛** -- 四步：(1) 三層 DS 驗證——獨立 token 檔／CSS variables／markdown 文件描述；(2) grep hex 用 `tr` + `awk` normalize，top 20 去重後分組（brand / neutral / dark / state）；(3) 寫入 `brand-spec.md` 鎖定 token 與來源；(4) 複述契約給你聽（3-5 行）。

**階段 1.9：線框 pass** -- 全力 build 前先丟灰塊版面。當介面是局部模組、修現有頁、線框少於 30 行 HTML 時自動跳過。

**階段 2：建構** -- 真正用 Agent 工具平行派遣。每位子代理 = 一個 TodoWrite 項目，狀態 `in_progress` → `completed` 即時串流，你可以中途改方向。

**階段 3a：18 條技術稽核** -- Victor 跑無障礙、AI 味、效能、響應式、SEO、視覺一致性等。第 1-6 條失敗自動修（規則 37）。

**階段 3b：5 維度品味評審** -- 同一輪 Victor 給哲學／層級／細節／功能／創新性各打 0-10 分，輸出 Keep / Fix / Quick-win 三段清單。

**階段 4-5：嚴重程度處理 + 交付** -- 重大問題自動修，偏好類與創新性問題回報。`brand-spec.md` 跟著 build 一起留在專案裡，給下次 session 接手。

---

## :shield: 兩種模式

| 模式 | 適用時機 | 行為 |
| :--- | :------- | :--- |
| **老大模式** | 沒有現成的設計系統，或你想讓米蘭達主導 | 米蘭達做所有設計決策。當衝突時，她的標準優先於你的。 |
| **顧問模式** | 你有自己的品牌／設計系統 | 米蘭達尊重你的限制，但仍會標出客觀上有問題的地方（對比度、無障礙、效能）。 |

---

## :open_file_folder: 檔案結構

```text
all-good-ui/
  SKILL.md                        # 主入口——角色設定、9 階段流程、團隊、規則
  hooks/
    miranda-trigger.js             # UserPromptSubmit 自動觸發 hook
    miranda-blueprint.md           # Claude Teams Go 藍圖（選用）
  reference/
    typography.md                  # 字體堆疊、尺寸、行高、載入方式
    color.md                       # 色彩系統、對比度、深色模式、調色科學
    spacing.md                     # 4pt 格線、間距比例、視覺韻律
    motion.md                      # 動畫時序、緩動函式、效能、彈簧動畫
    interaction.md                 # 8 種狀態、表單、焦點、載入、錯誤
    responsive.md                  # 行動優先、斷點、容器查詢
    accessibility.md               # WCAG AA、ARIA、鍵盤、焦點管理
    metadata-seo.md                # SEO / AIO / GEO / SGE、結構化資料、OG
    anti-patterns.md               # AI 味檢查清單、設計反模式
    css-structure.md               # 設計 token、檔案順序、選擇器規則
  workflow/
    audit.md                       # 18 條技術稽核 + 5 維度品味評審
    design-lab.md                  # 多方案產生與比較
    icons.md                       # 圖示選用 + Better Icons MCP 整合

# 每個專案會自動產出（不在這個 repo 裡）：
{你的專案}/
  .miranda/
    brand-spec.md                  # Pre-flight 階段 1.8 鎖定的 DS 契約
```

---

## :speech_balloon: 指令

| English | 中文 | 功能 |
| :------ | :--- | :--- |
| "Check this" | 「檢查一下」 | Victor 執行完整稽核（18 條技術 + 5 維度品味） |
| "Build a page" | 「做一個頁面」 | 從階段 1 開始完整建構 |
| "Fix this" | 「修這個」 | 米蘭達診斷並修正 |
| "Show me options" | 「給我看幾個版本」 | 產生 3-5 個方案比較 |
| "Be the boss" | 「你當老大」 | 切換到老大模式 |
| "Just advise" | 「你當顧問」 | 切換到顧問模式 |
| "Set up my design system" | 「幫我建設計規範」 | 階段 1.5 方向選擇器 + 1.8 brand-spec |
| "Wireframe first" | 「先給我線框」 | 直接跳到階段 1.9 灰塊線框 |
| "Just do it" / "you decide" | 「你看著辦」「不要再問」 | User-dismiss 逃生口——米蘭達把猜的部分標 `[unconfirmed]` 直接做 |
| "Deploy check" | 「部署前檢查」 | Andy 執行部署前稽核 |
| "Too much AI" | 「AI 味太重」 | Victor 掃描 AI 味模式 + 品味評審 |

---

## :wrench: 自訂

| 想改什麼 | 去哪裡改 |
| :------- | :------- |
| 米蘭達的個性 | `SKILL.md` > Persona 區段 |
| 團隊成員 | `SKILL.md` > The Team 區段 |
| 字體排印規則 | `reference/typography.md` |
| 色彩系統 | `reference/color.md` |
| 什麼算「重大」 | `SKILL.md` > Phase 4: Severity-Based Action |
| 稽核清單 | `workflow/audit.md` |
| 圖示偏好 | `workflow/icons.md` |

---

## :bulb: 設計理念

**為什麼用角色而不是只寫規則？**
文件裡的規則會被跳過。一個有主見的角色才會被遵守。米蘭達不只列出哪裡有問題——她帶著態度修好它。這讓產出有記憶點，也更一致。

**為什麼用結構化訪談卡（v2.0）？**
開放式追問會浪費 30 分鐘來回修。一張 5 列選擇題卡只要 30 秒。走錯方向的代價應該是一回合對話，而不是一整個 build 報廢。借用 open-design 的「RULE 1 — form before code」。

**為什麼用方向選擇器而不是自由發揮配色？**
使用者沒品牌時，自由發揮配色是 AI 味的最大來源。五個固定方向（Editorial / Minimal / Tech Utility / Soft Warm / Brutalist）給米蘭達一個確定答案，而不是猜測。

**為什麼三層 DS 偵測？**
設計系統有三種樣貌：獨立 token 檔、散在樣式表的 CSS variables、寫在 CLAUDE.md／專案文件裡的描述。只查第一種會錯過真實的 DS 規範，被迫退回自由發揮。

**為什麼 build 前先給線框？**
廢一張線框成本是一回合，廢 1000 行程式碼成本是一整晚。灰塊讓版面缺陷無所遁形——色彩和字體會把眼睛從結構問題上騙走。當既有版面已經充當線框時自動跳過。

**為什麼用子代理？**
設計同時觸及很多領域——色彩、版面、無障礙、SEO。透過專門的代理平行處理，比單一回合跑完所有東西更快、更徹底。每位子代理對應一個 TodoWrite 項目，你可以中途改方向。

**為什麼除了技術稽核還要 5 維度品味評審？**
技術通過／不通過只告訴你程式碼能不能跑，沒告訴你做得好不好。哲學／層級／細節／功能／創新 五維度各打 0-10 分，給你有證據支持的判決，告訴你成品是會被記住還是會被遺忘。

**為什麼要「AI 味偵測」？**
AI 做的 UI 最大的破綻就是看起來像 AI 做的。完美對稱、通用的三欄卡片、安全的藍灰色調。米蘭達的團隊會專門檢查這些模式，然後打破它們。

---

## :warning: 已知稽核盲區

米蘭達的稽核很犀利但不是萬能。讓她自動修「P0」前先檢查這些陷阱：

| 症狀 | 真相可能是 | 怎麼驗證 |
| :--- | :----------- | :------- |
| 兩個相似 hex 被判定為「色彩漂移」 | 那其實是刻意的深色模式提亮色（例如 `#D4A0A4` 是 `#D4A5A5` 在深色模式的提亮版本） | `grep` 那個被疑色 — 只出現在 `dark-mode.css` / `*-dark.css` 就是刻意的，不是漂移 |
| Tier A 找不到 DS token | 專案可能把 DS 寫在 `dark-mode.css`、`theme-*.css`、`*-tokens.css` 這類非標準檔名 | 退回 Phase 1.5 方向選擇器前，先手動 Glob 這些 pattern |
| top 20 裡 `#fff` 和 `#ffffff` 同時出現 | 舊版本 normalization bug — v2.0 已用 `tr 'a-f' 'A-F'` 修好 | 重跑 v2.0 pipeline，它們會合併成同一個 `#FFFFFF` |

**鐵則**：階段 4 讓米蘭達自動 silent-fix 前瞄一下 Fix 清單。任何動到色彩 token 的修法都值得花 5 秒 `grep` 確認。

---

## :pray: 靈感與致謝

> **所有內容皆為原創撰寫。** 沒有複製任何原始碼。米蘭達的設計知識是從這些專案所傳授的原則中提煉而成。

| 專案 | 啟發了什麼 | 連結 |
| :--- | :--------- | :--- |
| Impeccable | 設計科學、反模式、7 領域參考系統 | [Website](https://impeccable.style/) |
| Taste Skill | 美學標準、AI 味偵測、風格預設 | [GitHub](https://github.com/Leonxlnx/taste-skill) |
| Superdesign | 自動偵測、方案產生、設計系統鷹架 | [Website](https://app.superdesign.dev/) |
| UI Skills | 基礎 UI、無障礙、metadata、動畫效能 | [Website](https://www.ui-skills.com/) |
| Better Icons | 200k+ 圖示搜尋（透過 MCP） | [GitHub](https://github.com/better-auth/better-icons) |
| Design Plugin | 多方案比較、回饋收集工作流程 | [GitHub](https://github.com/0xdesign/design-plugin) |
| **open-design**（v2.0） | 訪談卡 + 方向選擇器 + Pre-flight 預飛 + 5 維度評審方法論——形塑米蘭達 v2.0 的六個核心觀念 | [GitHub](https://github.com/fishtvlvoe/open-design) |

---

## 系統需求

- [Claude Code](https://claude.ai/claude-code)（CLI 或 VS Code 擴充功能）
- Node.js 18+（僅在使用 Better Icons MCP 時需要）

## 授權

MIT -- 詳見 [LICENSE](LICENSE)。

---

<p align="center">
  Made by <a href="https://ohruru.com">HelloRuru</a> -- 好的 UI 不需要解釋。
</p>
