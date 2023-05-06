import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

export default {
  input: "index.js",
  output: [
    {
      format: "es",
      dir: 'dist',
      plugins: [terser()]
    },
  ],
  plugins: [json()],
};
