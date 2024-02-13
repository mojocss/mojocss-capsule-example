import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: "production",
  entry: "./index.js",
  output: {
    filename: `cdn.js`,
    path: path.resolve(__dirname, "dist"),
    library: 'capsuleExample',
    libraryExport: 'default',
    libraryTarget: 'var',
    environment: {
      arrowFunction: false,
    }
  },
  optimization: {
    mangleWasmImports: true,
    concatenateModules: false,
  },
};
