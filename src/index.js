import { compile } from "svelte/compiler.js";
import { get } from './get';

export const process = (src, filename) => {
  const { code, map, js } = compile(src, {
    format: "cjs",
    filename
  });

  return {
    code: get(['code'], js) || code,
    map: get(['map'], js) || map
  };
}
