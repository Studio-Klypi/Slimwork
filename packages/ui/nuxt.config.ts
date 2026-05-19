import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  css: [join(currentDir, './assets/css/tailwind.css')],
  alias: {
    '@': currentDir,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@pinia/nuxt'
  ],
  shadcn: {
    prefix: 'Ui',
    componentDir: join(currentDir, './components/ui')
  },
  googleFonts: {
    families: {
      Outfit: '100..900',
    },
  },
  colorMode: {
    classPrefix: '',
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    storageKey: 'slimwork-color-mode',
  }
};
