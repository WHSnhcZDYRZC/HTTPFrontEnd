import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { compression } from 'vite-plugin-compression2'
import { visualizer } from "rollup-plugin-visualizer";
import { Plugin as importToCDN } from "vite-plugin-cdn-import"

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {

  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      vue(),
      compression({
        deleteOriginalAssets: true
      }),
      // visualizer({
      //   gzipSize: true, // 收集 gzip 压缩包大小到图表
      //   brotliSize: true, // 收集 brotli 压缩包大小到图标
      //   emitFile: false, // 文件是否生成在 文件夹/目录 下 
      //   filename: "visualizer.html", //分析图生成的文件名
      //   open: true //如果存在本地服务端口，将在打包后自动展示
      // }),
      importToCDN({
        modules: [
          {
            name: 'vue',
            var: 'Vue',
            path: 'https://unpkg.com/vue@3.4.19/dist/vue.global.js',

          },
          // {
          //   name: 'vue-demi',
          //   var: 'VueDemi',
          //   path: `https://unpkg.com/vue-demi@0.13.11`,
          // },
          // {
          //   name: 'vue-router',
          //   var: 'VueRouter',
          //   path: `https://unpkg.com/vue-router@4.1.6`,
          // },
          {
            name: 'element-plus',
            var: 'ElementPlus',
            path: 'https://unpkg.com/element-plus@2.5.6/dist/index.full.js',
          },
        ],
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    server: {
      host: '0.0.0.0',
      proxy: {
        // '/api/test/http2': {
        //   target: env.VITE_HTTP2_BASE_API,
        //   // secure: false,
        //   rewrite: (path) => path.replace(/^\/api\/test\/http2/, '/http2'),
        //   changeOrigin: true,
        // },

        '/api': {
          target: env.VITE_BASE_API,
          changeOrigin: true,
        },
      }
    }
  }
})
