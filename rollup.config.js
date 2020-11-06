import nodeResolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import replace from '@rollup/plugin-replace';
import vue from 'rollup-plugin-vue';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: "src/index.js",
  output: {
    format: "iife",
    name: "template",
    file: "template.js",
    sourcemap: true,
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    nodeResolve(),
    vue(),
    commonjs(),
    terser(),
  ],
  /* Cyclic dependencies are allowed in ES6, and such imports occur
     in many d3 components, so suppress those rollup warnings. */
  onwarn: function (warning, warn) {
    if (warning.code === "CIRCULAR_DEPENDENCY") return;
    warn(warning);
  }
};
