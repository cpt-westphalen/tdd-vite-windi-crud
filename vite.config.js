import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [WindiCSS()],
	esbuild: {
		// This is to not import React (similar to create react app)
		jsxInject: `
import React from 'react';
`,
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/test/setup.js',
		reporter: 'verbose',
	},
});
