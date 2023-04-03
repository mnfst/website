import { ScullyConfig } from '@scullyio/scully'

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'website',
  distFolder: './dist/website', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  puppeteerLaunchOptions: {
    executablePath: 'CHROMIUM_PATH',
    args: ['--no-sandbox']
  },
  routes: {}
}
