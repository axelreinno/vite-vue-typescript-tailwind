import { createApp } from 'vue';
import App from './App.vue';

import '@styles/tailwind.scss';

const app = createApp(App);
Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(app));
app.mount('#app');

export default app;
