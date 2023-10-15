import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' 

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
})


// May be this is solution for this 

// // vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import swc from 'vite-plugin-swc'

// export default defineConfig({
//   plugins: [react(), swc()],
// })