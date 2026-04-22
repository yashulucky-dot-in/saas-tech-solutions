import { fileURLToPath } from "url";
import { dirname, resolve, join } from "path";
import { copyFileSync, readdirSync, mkdirSync, statSync, existsSync } from "fs";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function copyDirRecursive(srcDir, destDir) {
  if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
  for (const entry of readdirSync(srcDir)) {
    const srcPath = join(srcDir, entry);
    const destPath = join(destDir, entry);
    if (statSync(srcPath).isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

// Plugin: copy everything from public/ into dist/ after build
function copyPublicStaticPlugin() {
  return {
    name: "copy-public-static",
    closeBundle() {
      const src = resolve(__dirname, "public");
      const dest = resolve(__dirname, "dist");
      copyDirRecursive(src, dest);
    },
  };
}

export default defineConfig({
  logLevel: "error",
  // Use public/ as the root so Vite serves static HTML files directly
  root: resolve(__dirname, "public"),
  publicDir: false,
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, "public/index.html"),
    },
    sourcemap: false,
    minify: false,
  },
  plugins: [copyPublicStaticPlugin()],
});
