<h1 align="center">All-Good-UI</h1>

<p align="center">
  <strong>Miranda（ミランダ）— 毒舌な UI エキスパートスキル、Claude Code 専用。</strong><br>
  あらゆる欠陥を見抜き、自ら修正し、本番対応の UI に仕上げます。
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-v2.0-D4A5A5?style=flat-square" alt="Version 2.0">
  <img src="https://img.shields.io/badge/license-MIT-D4A5A5?style=flat-square" alt="MIT License">
  <img src="https://img.shields.io/badge/claude_code-skill-B8A9C9?style=flat-square" alt="Claude Code Skill">
  <img src="https://img.shields.io/badge/dependencies-zero-A8B5A0?style=flat-square" alt="Zero Dependencies">
  <img src="https://img.shields.io/badge/discovery-structured-E8B4B8?style=flat-square" alt="Structured Discovery">
</p>

<p align="center">
  <sub>v2.0 — 構造化ディスカバリーカード、3 階層 DS 検出、5 次元テイスト評価、open-design メソドロジー統合。</sub>
</p>

<p align="center">
  <a href="README.md">English</a> &nbsp;|&nbsp; <a href="README.zh-TW.md">繁體中文</a> &nbsp;|&nbsp; <b>日本語</b>
</p>

---

## 課題

- AI が作った UI は AI が作ったように見える——完璧な対称性、汎用カード、無難な配色、個性ゼロ
- デザインルールが頭の中にしかない——ページを作るたびに結果がバラバラ
- アクセシビリティ、SEO、レスポンシブ、アニメーション性能——毎回手動チェックするには多すぎる
- リリースした後で、モバイルでコントラストが崩れていて、ボタンにフォーカスリングがないことに気づく

---

## :mega: ミランダの呼び方

3 つの方法があります。やりやすい方法を選んでください。

### 1. 名前で呼ぶ

```text
Miranda, build me a landing page.
ミランダ、ランディングページを作って。
```

### 2. UI 関連の作業を頼む——自動的に登場します

```text
Help me fix this page layout.
このレイアウトを直して。
Check my site's accessibility.
アクセシビリティをチェックして。
```

UI に関するリクエストであればミランダが自動的に起動します。名前を呼ぶ必要はありません——彼女は常にデザイン作業を待ち構えています。

### 3. スラッシュコマンド

```text
/all-good-ui
```

### トリガー一覧

| English | 日本語 |
| :------ | :----- |
| "Miranda" | 「ミランダ」 |
| "build a page" / "make a page" / "landing page" | 「ページを作って」「LP を作って」 |
| "fix this" / "fix the design" | 「これを直して」「デザインがダサい」 |
| "check this" / "audit" | 「チェックして」「監査して」 |
| "redesign" / "design system" | 「デザインシステムを作って」 |
| "show me options" / "show me versions" | 「いくつかバリエーションを見せて」 |
| "be the boss" / "just advise" | 「ボスモードで」「アドバイザーモードで」 |
| "deploy check" | 「デプロイ前チェック」 |
| "too much AI" / "looks like AI" | 「AI っぽすぎる」 |
| "quick start" / "full interview" | 「クイックスタート」「フルインタビュー」 |

---

## :movie_camera: ミランダの動作例（v2.0 フロー）

インストール後、会話を始めるだけです。ミランダがすぐに主導権を握り、構造化された 9 フェーズのフローを実行します——余計な雑談なし：

```text
あなた：  コーヒーショップのランディングページが欲しいんだけど。

ミランダ：  呼んだ？私は Miranda。まず 30 秒もらうわよ。

            ┌──────────────────────────────────────────────────────────┐
            │  ディスカバリーカード — 各行 1 つ選んで返して。              │
            ├──────────────────────────────────────────────────────────┤
            │  言語：       [ ] English  [ ] 中文  [ ] 日本語             │
            │  1. 表面：    [ ] LP  [ ] dashboard  [ ] mobile  [ ] deck   │
            │               [ ] e-guide  [ ] blog  [x] その他：           │
            │               コーヒーショップ LP  ← プロンプトから推定        │
            │  2. オーディエンス：[ ] B2B  [ ] B2C  [ ] 社内  [ ] 個人      │
            │  3. トーン：  [ ] エディトリアル  [ ] ミニマル                │
            │               [ ] テックユーティリティ  [ ] ソフトウォーム      │
            │               [ ] ブルータリスト                              │
            │  4. ブランド：[ ] 完全 DS あり  [ ] ロゴ+色のみ  [ ] ゼロから │
            │  5. 規模：    [ ] 単一ページ  [ ] 5-10 ページ  [ ] サイト全体 │
            └──────────────────────────────────────────────────────────┘

あなた：  日本語。B2C。エディトリアル。ゼロから。単一ページ。

ミランダ：  ブランド = ゼロ → ディレクションピッカーへ。1 文字選んで。

            A. Editorial      — Iowan Old Style セリフ、墨色 #111111、
                                単一アクセント #B8472A
            B. Modern Minimal — Inter サンセリフ、ニュートラル、
                                アクセント #2563EB
            C. Tech Utility   — JetBrains Mono、ターミナルパレット
            D. Soft Warm      — GenSenRounded、ブラッシュ + セージ
            E. Brutalist      — モノスペースのみ、硬いボーダー、生 HTML 感

あなた：  A。

ミランダ：  ロック完了。Pre-flight 実行中...
            ┌─ ステップ 1：3 階層 DS 検証 → プロジェクトファイルなし、新規スタート
            ├─ ステップ 2：grep + hex 正規化 → まだなし（白紙）
            ├─ ステップ 3：brand-spec.md を書き込み → ディレクション A から token ロック
            └─ ステップ 4：契約の読み上げ →「セリフ見出し + サンセリフ本文、
                                            墨対紙パレット、単一アクセント #B8472A、
                                            ベース角丸 4px」

            まずワイヤーフレーム — グレーブロック、30 秒、リダイレクト安く。

            [emits グレーブロック wireframe HTML]

あなた：  OK、進めて。

ミランダ：  チーム派遣。各エージェント = 1 つの TodoWrite 項目。

            ┌─ Emily（エミリー／ビジュアルリード）：token・タイポ・パレット
            ├─ Serena（セレーナ／アートディレクター）：アイコン + マイクロインタラクション
            ├─ Jocelyn（ジョスリン／レイアウト）：レスポンシブグリッド + a11y
            └─ Andy（アンディ／SEO & デプロイ）：meta、OG、JSON-LD

ミランダ：  ビルド完了。Victor がデュアル監査を実行中（18 項目技術 + 5 次元テイスト）...

            ┌─ 技術監査：17/18 合格。1 件のコントラスト修正をサイレント適用。
            └─ テイスト評価：
                哲学一貫性    8/10  Strong  — エディトリアル方向が全体で保持
                視覚階層      9/10  Strong  — 表示タイポが勝ち、mono キャプションが
                                              キャプションとして読める
                細部実行      7/10  Strong  — token 一貫、はぐれ hex なし
                機能性        9/10  Strong  — a11y フルパス、フォーム検証あり
                革新性        5/10  Functional — 非対称エディトリアルは OK だが
                                                  表示タイポをもっと攻めてもよい

            KEEP   — エディトリアルタイポグラフィシステム
            FIX    — （なし、サイレント適用済み）
            QUICK  — mono キャプション + kicker eyebrow ペアリングで革新性 +2

            デプロイ準備完了。brand-spec.md を .miranda/ に保存、次セッションで継承。
```

---

## ソリューション

All-Good-UI がインストールするのは **Miranda（ミランダ）**、完璧な審美眼と凡庸さへの容赦ないシニア UI エキスパートです。5 名の専門サブエージェントを率い、並行で作業します。

### :busts_in_silhouette: チーム

| 名前 | 役割 | 担当 |
| :--- | :--- | :--- |
| **Miranda（ミランダ）** | クリエイティブディレクター | チーム統括、ユーザーインタビュー、デザイン判断、成果統合 |
| **Emily（エミリー）** | ビジュアルリード | タイポグラフィ、カラーシステム、スペーシング、視覚的階層、ダークモード |
| **Serena（セレーナ）** | アートディレクター | アイコン、アニメーション、トランジション、マイクロインタラクション、装飾要素 |
| **Victor（ヴィクター）** | シニアオーディター | 品質監査、AI っぽさ検出、アンチパターンスキャン、最終調整 |
| **Jocelyn（ジョスリン）** | レイアウトエンジニア | レスポンシブデザイン、グリッドシステム、アクセシビリティ、キーボードナビゲーション |
| **Andy（アンディ）** | SEO & デプロイ | SEO / AIO / GEO / SGE メタデータ、構造化データ、Core Web Vitals、デプロイ前チェック |

### :sparkles: ミランダにできること（v2.0）

| 機能 | 説明 |
| :--- | :--- |
| **ディスカバリーカード** | 30 秒の構造化ラジオフォームが 30 分のリダイレクトを置き換える。オープンエンドなインタビューはなし。 |
| **ディレクションピッカー** | ブランドがない場合、5 つの固定スタイル方向を提示——1 文字選べば token がロック。フリースタイルなパレット生成なし。 |
| **Pre-flight プロトコル** | サブエージェント派遣前に必須：DS ファイルを 3 階層で検証、hex 使用状況を grep + 正規化、`brand-spec.md` を書き出し、契約を読み上げて確認。 |
| **ワイヤーフレームファースト** | 完全ビルド前にグレーブロックレイアウトを提示——破棄安く、リダイレクト安く。部分モジュール／修正タスク／30 行未満の表面では自動スキップ。 |
| **複数バリアント比較** | 3〜5 つのデザイン方向を生成、ミックス＆マッチ可能（「A のレイアウト + C のスペーシング」）。 |
| **18 項目技術監査** | アクセシビリティ、AI っぽさ、パフォーマンス、レスポンシブ、SEO——ビルドごとに自動実行。 |
| **5 次元テイスト評価** | 哲学／階層／細部／機能／革新性、各 0-10 点で証拠付き、Keep / Fix / Quick-win 3 段階のアクションリスト。 |
| **重大度に応じた自動修正** | 致命的な問題は自動修正、好みの問題と革新性の判断はあなたに報告。 |
| **`brand-spec.md` アーティファクト** | ロック済みのデザイン契約をプロジェクトに保存、次セッションで再質問せず継承可能。 |
| **本番対応の成果物** | そのままデプロイ可能。SEO、a11y、パフォーマンス対応済み。 |

---

## :package: インストール

**ステップ 1** -- Claude Code のスキルディレクトリにクローン：

```bash
git clone https://github.com/HelloRuru/ALL-GOOD-UI.git ~/.claude/skills/all-good-ui
```

**ステップ 2** -- 自動トリガーフックを登録。ミランダの名前や UI 関連キーワードで自動起動するようにします：

<details>
<summary><strong>クリックしてフック設定を表示</strong></summary>

`~/.claude/settings.json` の `"hooks"` セクションに追加：

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

必要に応じて `~` を実際のホームディレクトリパスに置き換えてください。

</details>

**ステップ 3** -- 完了。「ミランダ」と言うか、UI に関する質問をすれば、彼女が対応します。

**ステップ 4（任意）** -- [Claude Teams Go](https://github.com/HelloRuru/claude-teams-go) と組み合わせて、構造化されたマルチエージェントオーケストレーションを実現：

<details>
<summary><strong>クリックして展開</strong></summary>

Teams Go は Claude Code 向けのブループリントベースのワークフローエンジンです。ミランダの 5 名のサブエージェントを、品質ゲートとリトライロジックを備えた協調チームとして派遣できます。

```bash
git clone https://github.com/HelloRuru/claude-teams-go.git ~/claude-teams-go
```

付属のブループリントをコピー：

```bash
cp ~/.claude/skills/all-good-ui/hooks/miranda-blueprint.md ~/claude-teams-go/blueprints/
```

セットアップの詳細は [Claude Teams Go README](https://github.com/HelloRuru/claude-teams-go) を参照してください。

</details>

**ステップ 5（任意）** -- Better Icons MCP をインストールして 200,000 以上のアイコン検索を利用：

<details>
<summary><strong>クリックして展開</strong></summary>

`~/.claude/settings.json` に追加：

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

## :brain: ミランダの仕組み

ミランダは自動的に起動し、構造化された 9 フェーズのワークフローに従います：

**フェーズ 0：検出** -- プロジェクトをスキャンし、フレームワーク、パッケージマネージャー、スタイリングシステム、既存のデザイントークンを特定します。

**フェーズ 1：ディスカバリーカード** -- 5 行のラジオカード（表面／オーディエンス／トーン／ブランド／規模）。Pre-fill ルールは厳格（あなたの現在のメッセージから引用するのみ；CLAUDE.md や記憶には触れない）。User-dismiss 逃避口：「任せる」と言えばミランダは追及をやめ、推測部分を `[unconfirmed]` タグ付きで進めます。

**フェーズ 1.5：ディレクションピッカー** -- ブランド = 「ゼロから」または「ロゴ+色のみ」のときに発動。5 つの固定方向（Editorial / Modern Minimal / Tech Utility / Soft Warm / Brutalist）。1 文字選べば token ロック。フリースタイルなし。

**フェーズ 1.8：Pre-flight プロトコル** -- 順序通り 4 ステップ：(1) 3 階層 DS 検証——専用トークンファイル／CSS variables／markdown ドキュメント；(2) hex 値を `tr` + `awk` で正規化、上位 20 件を重複排除しグループ化（brand / neutral / dark / state）；(3) ロック済み token と出典を `brand-spec.md` に書き込み；(4) 契約を 3〜5 行で読み上げ。

**フェーズ 1.9：ワイヤーフレームパス** -- 完全ビルド前にグレーブロックレイアウトを提示。表面が部分モジュール、既存ページのリデザイン、または 30 行未満の HTML の場合は自動スキップ。

**フェーズ 2：ビルド** -- 実際の Agent ツール呼び出しで並行派遣。各サブエージェント = 1 つの TodoWrite 項目、`in_progress` → `completed` をリアルタイムでストリーミングし、途中でリダイレクト可能。

**フェーズ 3a：18 項目技術監査** -- Victor がアクセシビリティ、AI っぽさ、パフォーマンス、レスポンシブ、SEO、視覚的一貫性などをチェック。項目 1-6 の失敗は自動修正（ルール 37）。

**フェーズ 3b：5 次元テイスト評価** -- 同一の Victor パスで哲学／階層／細部／機能／革新性を各 0-10 点で評価、Keep / Fix / Quick-win リストを出力。

**フェーズ 4-5：重大度対応 + 納品** -- 致命的な問題はサイレント修正、好みレベルと革新性の問題は報告。`brand-spec.md` はビルドと共にプロジェクトに残り、次セッションへ継承。

---

## :shield: 2 つのモード

| モード | 使い分け | 動作 |
| :----- | :------- | :--- |
| **ボスモード** | 既存のデザインシステムがない、またはミランダに主導させたい場合 | ミランダが全デザイン判断を行う。意見が食い違えば、彼女の基準が優先される。 |
| **アドバイザーモード** | 自分のブランド／デザインシステムがある場合 | ミランダはあなたの制約を尊重しつつ、客観的に問題のある箇所（コントラスト、a11y、パフォーマンス）は指摘する。 |

---

## :open_file_folder: ファイル構成

```text
all-good-ui/
  SKILL.md                        # メインエントリ——ペルソナ、9 フェーズワークフロー、チーム、ルール
  hooks/
    miranda-trigger.js             # UserPromptSubmit 自動トリガー hook
    miranda-blueprint.md           # Claude Teams Go ブループリント（オプション）
  reference/
    typography.md                  # フォントスタック、サイズ、行間、読み込み
    color.md                       # カラーシステム、コントラスト、ダークモード、配色理論
    spacing.md                     # 4pt グリッド、スペーシングスケール、視覚的リズム
    motion.md                      # アニメーションタイミング、イージング、パフォーマンス、スプリング
    interaction.md                 # 8 つの状態、フォーム、フォーカス、ローディング、エラー
    responsive.md                  # モバイルファースト、ブレークポイント、コンテナクエリ
    accessibility.md               # WCAG AA、ARIA、キーボード、フォーカス管理
    metadata-seo.md                # SEO / AIO / GEO / SGE、構造化データ、OG
    anti-patterns.md               # AI っぽさチェックリスト、デザインアンチパターン
    css-structure.md               # デザイン token、ファイル順序、セレクタールール
  workflow/
    audit.md                       # 18 項目技術監査 + 5 次元テイスト評価
    design-lab.md                  # 複数バリアント生成と比較
    icons.md                       # アイコン選定 + Better Icons MCP 連携

# プロジェクトごとに自動生成（この repo には含まれない）：
{your-project}/
  .miranda/
    brand-spec.md                  # Pre-flight フェーズ 1.8 でロックされた DS 契約
```

---

## :speech_balloon: コマンド

| English | 日本語 | 機能 |
| :------ | :----- | :--- |
| "Check this" | 「チェックして」 | Victor がフル監査を実行（18 項目技術 + 5 次元テイスト） |
| "Build a page" | 「ページを作って」 | フェーズ 1 からフルビルド |
| "Fix this" | 「これを直して」 | ミランダが診断して修正 |
| "Show me options" | 「バリエーションを見せて」 | 3〜5 つのバリアントを生成して比較 |
| "Be the boss" | 「ボスモードで」 | ボスモードに切り替え |
| "Just advise" | 「アドバイザーモードで」 | アドバイザーモードに切り替え |
| "Set up my design system" | 「デザインシステムを作って」 | フェーズ 1.5 ディレクションピッカー + 1.8 brand-spec |
| "Wireframe first" | 「ワイヤーフレームから」 | フェーズ 1.9 グレーブロックパスへスキップ |
| "Just do it" / "you decide" | 「任せる」「これ以上聞かないで」 | User-dismiss 逃避口——ミランダは推測を `[unconfirmed]` タグで進める |
| "Deploy check" | 「デプロイ前チェック」 | Andy がデプロイ前監査を実行 |
| "Too much AI" | 「AI っぽすぎる」 | Victor が AI っぽさパターン + テイスト評価をスキャン |

---

## :wrench: カスタマイズ

| 変更したいもの | 場所 |
| :------------- | :--- |
| ミランダの性格 | `SKILL.md` > Persona セクション |
| チームメンバー | `SKILL.md` > The Team セクション |
| タイポグラフィルール | `reference/typography.md` |
| カラーシステム | `reference/color.md` |
| 「致命的」の基準 | `SKILL.md` > Phase 4: Severity-Based Action |
| 監査チェックリスト | `workflow/audit.md` |
| アイコンの好み | `workflow/icons.md` |

---

## :bulb: デザイン哲学

**なぜルールだけでなくペルソナを使うのか？**
ドキュメントに書かれたルールは読み飛ばされる。意見を持ったキャラクターなら実際に守られる。ミランダは問題を列挙するだけでなく、態度を込めて修正する。だからアウトプットに印象が残り、一貫性が保たれる。

**なぜ構造化ディスカバリーカード（v2.0）か？**
オープンエンドのインタビューは 30 分のリダイレクトコストを生む。5 行のラジオカードなら 30 秒。間違った方向のコストは「会話 1 ラウンド」であるべきで、「完成したビルド」ではない。open-design の「RULE 1 — form before code」から借用。

**なぜフリースタイルパレットではなくディレクションピッカーか？**
ユーザーにブランドがないとき、自由にパレットを発明するのは AI スロップの最大の源。5 つの固定方向（Editorial / Minimal / Tech Utility / Soft Warm / Brutalist）は、推測ではなく確定的な答えをミランダに与える。

**なぜ 3 階層 DS 検出か？**
デザインシステムは 3 種類の形で存在する：専用 token ファイル、スタイルシート全体に散らばる CSS variables、CLAUDE.md やプロジェクトドキュメントの散文。最初の 1 種類だけ確認していると、実際の DS コミットメントを見逃して不必要にフリースタイルへフォールバックする。

**なぜビルド前にワイヤーフレームか？**
破棄したワイヤーフレームのコストは 1 ターン。破棄した 1000 行のビルドのコストはあなたの一晩。グレーブロックはレイアウトの欠陥を露わにする——色とタイポは目をそらしてしまう。既存レイアウトがすでにワイヤーフレームとして機能する場合は自動スキップ。

**なぜサブエージェントを使うのか？**
デザインは多くの領域に同時に関わる——色、レイアウト、アクセシビリティ、SEO。専門のエージェントを並行で走らせる方が、1 回のパスですべてをこなすより速く、徹底的になる。各派遣は TodoWrite 項目に対応するので、途中でリダイレクト可能。

**なぜ技術監査に加えて 5 次元テイスト評価か？**
技術的な合否はコードが動くかどうかを教えてくれる。良いかどうかは教えてくれない。哲学／階層／細部／機能／革新性を各 0-10 点で評価することで、ビルドが「忘れられる」のか「記憶される」のかを証拠付きで判定できる。

**なぜ「AI っぽさ検出」が必要なのか？**
AI が作った UI の最大の特徴は、AI が作ったように見えること。完璧な対称性、汎用的な 3 カラムカード、無難なブルーグレーのパレット。ミランダのチームはこれらのパターンを特定し、意図的に壊す。

---

## :warning: 既知の監査の盲点

ミランダの監査は鋭いが万能ではない。「P0 修正」を自動適用させる前に、これらの罠を確認すること：

| 症状 | 真相 | 検証方法 |
| :--- | :--- | :------- |
| ほぼ同じ hex 値が「色のドリフト」と判定される | 意図的なダークモード明色化（例：`#D4A0A4` は `#D4A5A5` のダークモード明色化版） | 該当 hex を `grep` — `dark-mode.css` / `*-dark.css` のみに存在すればドリフトではなく意図的 |
| Tier A パターンで DS token が見つからない | プロジェクトが DS を `dark-mode.css`、`theme-*.css`、`*-tokens.css`（非標準名）に保存している可能性 | フェーズ 1.5 ディレクションピッカーに戻る前に、それらのパターンを手動で Glob |
| top 20 に `#fff` と `#ffffff` の両方が現れる | 旧バージョンの正規化バグ — v2.0 で `tr 'a-f' 'A-F'` ステップにより修正済 | v2.0 パイプラインを再実行；1 つの `#FFFFFF` エントリにマージされるはず |

**鉄則**：フェーズ 4 でミランダがサイレント修正を行う前に Fix リストを一瞥すること。色 token に触れるものは 5 秒の `grep` チェックに値する。

---

## :pray: インスピレーション & クレジット

> **すべてのコンテンツはゼロから書き下ろしました。** ソースコードのコピーはありません。ミランダのデザイン知識は、以下のプロジェクトが教える原則から合成されたものです。

| プロジェクト | 着想を得たコンセプト | リンク |
| :----------- | :------------------- | :----- |
| Impeccable | デザインサイエンス、アンチパターン、7 ドメイン参照システム | [Website](https://impeccable.style/) |
| Taste Skill | 審美基準、AI っぽさ検出、スタイルプリセット | [GitHub](https://github.com/Leonxlnx/taste-skill) |
| Superdesign | 自動検出、バリアント生成、デザインシステムスキャフォールディング | [Website](https://app.superdesign.dev/) |
| UI Skills | ベースライン UI、アクセシビリティ、メタデータ、モーションパフォーマンス | [Website](https://www.ui-skills.com/) |
| Better Icons | MCP 経由で 200k 以上のアイコン検索 | [GitHub](https://github.com/better-auth/better-icons) |
| Design Plugin | 複数バリアント比較、フィードバック収集ワークフロー | [GitHub](https://github.com/0xdesign/design-plugin) |
| **open-design**（v2.0） | ディスカバリーカード + ディレクションピッカー + Pre-flight プロトコル + 5 次元評価メソドロジー——ミランダ v2.0 を形作る 6 つの中核アイデア | [GitHub](https://github.com/fishtvlvoe/open-design) |

---

## 要件

- [Claude Code](https://claude.ai/claude-code)（CLI または VS Code 拡張機能）
- Node.js 18+（Better Icons MCP を使用する場合のみ）

## ライセンス

MIT -- 詳細は [LICENSE](LICENSE) を参照。

---

<p align="center">
  Made by <a href="https://ohruru.com">HelloRuru</a> -- 良い UI に説明は要らない。
</p>
