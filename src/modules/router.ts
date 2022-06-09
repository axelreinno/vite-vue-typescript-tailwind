import { SetupModule } from '../@types/settings';
import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';

export const install: SetupModule = app => {
	const routes = setupLayouts(generatedRoutes);
	const router = createRouter({ routes, history: createWebHistory() });
	app.use(router);
};
