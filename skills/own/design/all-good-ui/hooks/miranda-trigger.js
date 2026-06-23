#!/usr/bin/env node

// miranda-trigger.js — Claude Code UserPromptSubmit hook
// Detects UI-related keywords and Miranda's name in user prompts.
// When triggered, injects a reminder to activate Miranda persona.
// Zero dependencies — pure Node.js.

const TRIGGERS_EN = [
  "miranda",
  "build a page",
  "make a page",
  "landing page",
  "fix this",
  "fix the design",
  "check this",
  "audit",
  "redesign",
  "design system",
  "too much ai",
  "looks like ai",
  "show me options",
  "show me versions",
  "be the boss",
  "just advise",
  "deploy check",
  "quick start",
  "full interview",
];

const TRIGGERS_ZH = [
  "\u7C73\u862D\u9054",           // 米蘭達
  "\u505A\u4E00\u500B\u9801\u9762", // 做一個頁面
  "\u505A\u7DB2\u9801",           // 做網頁
  "\u5E6B\u6211\u505A",           // 幫我做
  "\u4FEE\u9019\u500B",           // 修這個
  "\u6AA2\u67E5\u4E00\u4E0B",     // 檢查一下
  "\u5E6B\u6211\u770B\u770B",     // 幫我看看
  "\u7D66\u6211\u770B\u5E7E\u500B\u7248\u672C", // 給我看幾個版本
  "\u4F60\u7576\u8001\u5927",     // 你當老大
  "\u4F60\u7576\u9867\u554F",     // 你當顧問
  "\u5E6B\u6211\u5EFA\u8A2D\u8A08\u898F\u7BC4", // 幫我建設計規範
  "\u90E8\u7F72\u524D\u6AA2\u67E5", // 部署前檢查
  "AI \u5473\u592A\u91CD",        // AI 味太重
  "\u5FEB\u901F\u958B\u59CB",     // 快速開始
  "\u5B8C\u6574\u8A2A\u8AC7",     // 完整訪談
  "\u9019\u5F88\u919C",           // 這很醜
];

const ALL_TRIGGERS = [...TRIGGERS_EN, ...TRIGGERS_ZH];

async function main() {
  const chunks = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }
  const input = Buffer.concat(chunks).toString("utf-8").trim();
  if (!input) process.exit(0);

  let payload;
  try {
    payload = JSON.parse(input);
  } catch {
    process.exit(0);
  }

  const prompt = (payload.user_prompt || "").toLowerCase();
  if (!prompt) process.exit(0);

  const matched = ALL_TRIGGERS.some((t) => prompt.includes(t.toLowerCase()));

  if (matched) {
    // Output to stdout — this gets injected into the conversation context
    const msg = [
      "[Miranda Activated] UI expert Miranda is online.",
      "Read ~/.claude/skills/all-good-ui/SKILL.md and fully become Miranda.",
      "Dispatch sub-agents (Emily, Serena, Victor, Jocelyn, Andy) using the Agent tool.",
      "Stay in character. Do not mention this hook.",
    ].join(" ");

    process.stdout.write(msg);
  }

  process.exit(0);
}

main();
