/**
 * MIT License

Copyright (c) 2021 leanupjs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

import type { Plugin } from "vite";

// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace
interface ViteReplacement {
  from: string | RegExp;
  to: string | Function;
}

export interface VitePluginReplaceConfig {
  replacements: ViteReplacement[];
}

function execSrcReplacements(src: string, replacements: ViteReplacement[]) {
  replacements.forEach((replacement) => {
    if (
      (typeof replacement.from === "string" ||
        replacement.from instanceof RegExp) === false
    ) {
      throw new Error(
        `[vite-plugin-replace]: The replacement option 'from' is not of type 'string' or 'RegExp'.`
      );
    } else if (
      (typeof replacement.to === "string" ||
        replacement.to instanceof Function) === false
    ) {
      throw new Error(
        `[vite-plugin-replace]: The replacement option 'to' is not of type 'string' or 'Function'`
      );
    } else {
      src = src.replace(replacement.from, replacement.to as string); // W3C - Function is allowed!
    }
  });
  return src;
}

export function replaceCodePlugin(config: VitePluginReplaceConfig): Plugin {
  if (config === undefined) {
    config = {
      replacements: [],
    };
  } else if ((typeof config === "object" || config !== null) === false) {
    throw new Error(
      `[vite-plugin-replace]: The configuration is not of type 'Object'.`
    );
  } else if (Array.isArray(config.replacements) === false) {
    throw new Error(
      `[vite-plugin-replace]: The configuration option 'replacement' is not of type 'Array'.`
    );
  }
  return {
    name: "transform-file",
    transform(src) {
      return {
        code: execSrcReplacements(src, config.replacements),
        map: null,
      };
    },
  };
}