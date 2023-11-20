import { defineConfig } from 'vite'
import modify from 'rollup-plugin-modify'
import { minify } from 'html-minifier'
import sass from 'node-sass'

function scssFnPlugin () {
  return {
    name: 'scssFn',
    transform (code, id) {
      if (id.endsWith('.js')) {
        const matches = code.match(/scss\(`([\s\S]*?)`\)/g)
        if (matches) {
          matches.forEach(str => {
            const result = sass.renderSync({ data: str.match(/scss\(`([\s\S]*?)`\)/)[1] })
            code = code.replace(str, `scss(\`${result.css.toString()}\`)`)
          })
        }
        return {
          code,
          map: null
        }
      }
    }
  }
}

export default defineConfig({
  plugins: [
    scssFnPlugin()
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        exhibition: 'exhibition.html',
        nft: 'nft.html'
      },
      output: {
        inlineDynamicImports: false,
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'component') {
            const path = chunkInfo.facadeModuleId.split('/')
            return `components/${path[path.length - 2]}-[hash].js`
          }
          return 'assets/[name]-[hash].js'
        }
      },
      plugins: [
        modify({
          find: /s?css\(`[\s\S]*?`\)/,
          replace: (content) => {
            let data = content.match(/css\(`([\s\S]*?)`\)/)[1]
            let isSCSS = false
            if (content[0] === 's') {
              isSCSS = true
              data = sass.renderSync({
                data
              }).css.toString()
            }
            const css = minify(data, {
              collapseWhitespace: true,
              minifyCSS: true
            })
            return `${isSCSS ? 's' : ''}css(\`${css}\`)`
          }
        }),
        modify({
          find: /html\(`[\s\S]*?`\)/,
          replace: (content) => {
            const html = minify(content.match(/html\(`([\s\S]*?)`\)/)[1], {
              collapseWhitespace: true,
              minifyCSS: true,
              minifyJS: true
            })
            return `html(\`${html}\`)`
          }
        }),
        modify({
          find: /htmlString\(`[\s\S]*?`\)/,
          replace: (content) => {
            const html = minify(content.match(/htmlString\(`([\s\S]*?)`\)/)[1], {
              collapseWhitespace: true,
              minifyCSS: true,
              minifyJS: true
            })
            return `htmlString(\`${html}\`)`
          }
        })
      ]
    }
  }
})
