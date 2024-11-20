import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import dotenv from "dotenv";
import { resolve } from "path";
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on the mode
  const env = loadEnv(mode, process.cwd());
  dotenv.config({ path: resolve(process.cwd(), `.env.${mode}`) });

  return {
    plugins: [
      react(),
      checker({ typescript: true }),
      svgr({
        // svgr options: https://react-svgr.com/docs/options/
        svgrOptions: {
          exportType: "default",
          ref: true,
          svgo: false,
          titleProp: true,
        },
        include: "**/*.svg",
      }),
    ],

    define: {
      "process.env": env,
    },

    resolve: {
      alias: {
        "@api": "/src/api",
        "@assets": "/src/assets",
        "@components": "/src/components",
        "@constants": "/src/constants",
        "@contexts": "/src/contexts",
        "@hooks": "/src/hooks",
        "@pages": "/src/pages",
        "@router": "/src/router",
        "@styles": "/src/styles",
        "@utils": "/src/utils",
      },
    },
  };
});
