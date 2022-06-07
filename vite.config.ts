import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@assets": resolve(__dirname, "src/assets"),
            "@components": resolve(__dirname, "src/components"),
            "@composables": resolve(__dirname, "src/composables"),
            "@domains": resolve(__dirname, "src/domains"),
            "@pages": resolve(__dirname, "src/pages"),
            "@repositories": resolve(__dirname, "src/repositories"),
            "@services": resolve(__dirname, "src/services"),
            "@stores": resolve(__dirname, "src/stores"),
            "@styles": resolve(__dirname, "src/styles"),
            "@utils": resolve(__dirname, "src/utils"),
        },
    },
});
