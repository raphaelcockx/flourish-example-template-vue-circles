import nodeResolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import  replace from '@rollup/plugin-replace';
import alias from '@rollup/plugin-alias';

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
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    alias({
      entries: [
        { find: 'vue', replacement: 'vue/dist/vue.esm.js'}
      ]
    }),
    nodeResolve(),
    terser()
  ],
  /* Cyclic dependencies are allowed in ES6, and such imports occur
     in many d3 components, so suppress those rollup warnings. */
  onwarn: function (warning, warn) {
    if (warning.code === "CIRCULAR_DEPENDENCY") return;
    warn(warning);
  }
};
