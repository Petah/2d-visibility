import typescript2 from "rollup-plugin-typescript2";

export default {
  input: "src/main.ts",
  output: {
    format: "umd",
    file: "bundle.js",
    name: "test"
  },
  plugins: [typescript2()]
};
