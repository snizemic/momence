import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			'/api': {
				target:
					'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt',
				changeOrigin: true,
				secure: false,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		},
	},
	plugins: [react()],
});
