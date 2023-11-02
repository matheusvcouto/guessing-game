import viteLogo from '../public/vite.svg'
import typescriptLogo from './svg/typescript.svg'
import githubLogo from './svg/github.svg'

document.querySelector<HTMLDivElement>('#logos')!.innerHTML = `
  <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
  </a>
  <a href="https://github.com/matheusvcouto/guessing-game" target="_blank">
    <img class="w-8 h-8" src="${githubLogo}" class="logo vanilla" alt="TypeScript logo" />
  </a>
`