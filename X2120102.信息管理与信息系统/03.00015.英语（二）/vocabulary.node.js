// node vocabulary.node.js

const fs = require('fs')

const words = fs.readFileSync('./词汇表.md', 'utf-8')
 .split(/\r?\n/)
 .map(line =>  {
    if (line.startsWith('#') || line.startsWith('`') || !line) return null
    const [word, explanation] = line.split(' | ')
    return { word, explanations: explanation && explanation.split(' ')}
  })
  .filter(Boolean)

const data = `
  const words = ${JSON.stringify(words)};
`

fs.writeFileSync('./vocabulary.data.js', data)
