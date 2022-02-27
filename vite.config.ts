import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   process.env = {...process.env};
//   plugins: [react()],
// });

export default () => {
  process.env = { ...process.env };

  return defineConfig({
    plugins: [react()],
  });
};
