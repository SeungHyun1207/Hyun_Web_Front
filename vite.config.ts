import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  plugins: [react()], // React를 사용하기 위함
  server: {
    port: 3000, // 개발 서버 포트
    open: true, // 서버 시작 시 브라우저 자동 실행
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // API 프록시 대상
        changeOrigin: true, // CORS 우회
        rewrite: (path) => path.replace(/^\/api/, '') // 경로 재작성
      }
    },
  },
  resolve: {
    alias: {
      '@': '/src', // `@`를 `/src` 디렉토리로 설정 (경로 별칭)
    },
  },
  build: {
    outDir: 'dist', // 빌드 출력 폴더
    sourcemap: true, // 디버깅을 위한 sourcemap 생성
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // 코드 스플리팅
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`, // SCSS 변수 전역 사용
      },
    },
  },
})
