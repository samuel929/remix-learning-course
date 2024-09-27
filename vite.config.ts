import { vitePlugin as remix } from "@remix-run/dev";
import { createRoutesFromFolders } from "@remix-run/v1-route-convention";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*"],
      routes(defineRoutes) {
        return createRoutesFromFolders(defineRoutes)
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    port: 3000
  }
});
