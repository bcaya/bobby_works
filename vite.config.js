import { defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({ plugins: [react()],
  define: {
    'process.env': {

      API_KEY: process.env.API_KEY,
      API_TOKEN: process.env.API_TOKEN,
      OAUTH_SIGNATURE: process.env.OAUTH_SIGNATURE
    }}
});
