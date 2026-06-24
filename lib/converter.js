/**
 * 格式转换器
 * 将 SKILL.md 转换为其他平台格式
 */

const fs = require('fs');
const path = require('path');

/**
 * 读取所有 SKILL.md 文件
 * @param {string} dir - 目录路径
 * @returns {Array} - 技能列表
 */
function readAllSkills(dir) {
  const skills = [];
  
  function readDir(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        readDir(filePath);
      } else if (file === 'SKILL.md') {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          const skillName = path.basename(path.dirname(filePath));
          const relativePath = path.relative(dir, path.dirname(filePath));
          
          skills.push({
            name: skillName,
            path: relativePath,
            content: content
          });
        } catch (e) {
          console.error(`Error reading ${filePath}:`, e.message);
        }
      }
    }
  }
  
  readDir(dir);
  return skills;
}

/**
 * 解析 SKILL.md frontmatter
 * @param {string} content - 文件内容
 * @returns {object} - 解析后的 frontmatter
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  
  const frontmatter = {};
  const lines = match[1].split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      frontmatter[key] = value;
    }
  }
  
  return frontmatter;
}

/**
 * 转换为 Codex 格式 (AGENTS.md)
 * @param {string} skillsDir - 技能目录
 * @param {string} outputDir - 输出目录
 * @returns {object} - 转换结果
 */
function convertToCodex(skillsDir, outputDir) {
  console.log('Converting to Codex format...');
  
  const skills = readAllSkills(skillsDir);
  
  let agentsMd = `# Project Instructions

## Skills System

This project uses a skill-based system for AI assistance. Each skill provides specific capabilities.

### Available Skills

`;
  
  for (const skill of skills) {
    const frontmatter = parseFrontmatter(skill.content);
    
    agentsMd += `#### ${skill.name}
- **Purpose**: ${frontmatter.description || 'No description'}
- **When to use**: ${frontmatter.trigger || 'No trigger specified'}
- **Input**: ${frontmatter.input || 'No input specified'}
- **Output**: ${frontmatter.output || 'No output specified'}
- **Next**: ${frontmatter.next || 'No next skill'}

`;
  }
  
  agentsMd += `### How to Use

1. **Start with Gate**: Use \`/gate\` to route to the appropriate skill
2. **Follow the Flow**: Each skill recommends the next skill to use
3. **Be Helpful**: Use plain language to explain what you're doing
`;
  
  // 写入文件
  const outputPath = path.join(outputDir, 'AGENTS.md');
  fs.writeFileSync(outputPath, agentsMd, 'utf8');
  
  console.log(`✅ Converted ${skills.length} skills to Codex format`);
  console.log(`📄 Output: ${outputPath}`);
  
  return {
    success: true,
    skillsCount: skills.length,
    outputPath: outputPath
  };
}

/**
 * 转换为 Claude Code 格式
 * @param {string} skillsDir - 技能目录
 * @param {string} outputDir - 输出目录
 * @returns {object} - 转换结果
 */
function convertToClaude(skillsDir, outputDir) {
  console.log('Converting to Claude Code format...');
  
  const claudeDir = path.join(outputDir, '.claude', 'skills');
  
  // 创建目录
  fs.mkdirSync(claudeDir, { recursive: true });
  
  // 复制技能文件
  function copyDir(src, dest) {
    const files = fs.readdirSync(src);
    
    for (const file of files) {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      const stat = fs.statSync(srcPath);
      
      if (stat.isDirectory()) {
        fs.mkdirSync(destPath, { recursive: true });
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
  
  copyDir(skillsDir, claudeDir);
  
  const skills = readAllSkills(skillsDir);
  console.log(`✅ Copied ${skills.length} skills to Claude Code format`);
  console.log(`📁 Output: ${claudeDir}`);
  
  return {
    success: true,
    skillsCount: skills.length,
    outputPath: claudeDir
  };
}

module.exports = { convertToCodex, convertToClaude, readAllSkills, parseFrontmatter };
