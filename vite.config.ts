import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import stylelint from 'vite-plugin-stylelint';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),

		// Reference: https://github.com/gxmari007/vite-plugin-eslint
		eslint({
			cache: false,
		}),

		// Reference: https://github.com/ModyQyW/vite-plugin-stylelint
		stylelint(),

		// Reference: https://github.com/antfu/unplugin-vue-components
		Components({
			dts: 'src/@types/dts/components.d.ts',
			dirs: ['src/components'],
			extensions: ['vue'],
			deep: true,
			resolvers: [
				IconsResolver({
					prefix: 'icon',
					customCollections: ['custom'],
				}),
			],
		}),

		// Reference: https://github.com/antfu/unplugin-icons
		Icons({
			autoInstall: true,
			compiler: 'vue3',
			customCollections: {
				custom: FileSystemIconLoader('./src/assets/icons'),
			},
		}),

		// Reference: https://github.com/JohnCampionJr/vite-plugin-vue-layouts
		Layouts({
			layoutsDirs: 'src/layouts',
		}),

		// Reference: https://github.com/hannoeru/vite-plugin-pages
		Pages({
			dirs: 'src/pages',
			exclude: ['**/components/*.vue'],
		}),

		// Reference: https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
		VueI18n({
			runtimeOnly: true,
			compositionOnly: true,
			include: [resolve(__dirname, 'locales/**')],
		}),
	],
	envDir: resolve(__dirname, './environments'),
	resolve: {
		alias: {
			'@assets': resolve(__dirname, 'src/assets'),
			'@components': resolve(__dirname, 'src/components'),
			'@composables': resolve(__dirname, 'src/composables'),
			'@domains': resolve(__dirname, 'src/domains'),
			'@pages': resolve(__dirname, 'src/pages'),
			'@repositories': resolve(__dirname, 'src/repositories'),
			'@services': resolve(__dirname, 'src/services'),
			'@stores': resolve(__dirname, 'src/stores'),
			'@styles': resolve(__dirname, 'src/styles'),
			'@utils': resolve(__dirname, 'src/utils'),
		},
	},
});
