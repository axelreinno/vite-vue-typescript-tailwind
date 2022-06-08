import { SetupModule } from '../@types/settings';
import { createPinia } from 'pinia';
export const install: SetupModule = app => {
	const pinia = createPinia();
	app.use(pinia);
};
