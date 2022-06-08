import { SetupModule } from '../@types/settings';
import { createI18n } from 'vue-i18n';
const messages = Object.fromEntries(
	Object.entries(import.meta.globEager('../locales/*.{y(a)?ml,json}')).map(([key, value]) => {
		const isYamlOrJson = key.endsWith('.yaml') || key.endsWith('.json');
		return [key.slice(11, isYamlOrJson ? -5 : -4), value.default];
	})
);
export const install: SetupModule = app => {
	const i18n = createI18n({ legacy: false, locale: 'id', messages });
	app.use(i18n);
};
