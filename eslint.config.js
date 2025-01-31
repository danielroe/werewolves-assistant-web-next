import path from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

import { ESLINT_BASE_CONFIG } from "./config/eslint/config/eslint.base-config.mjs";
import { ESLINT_TYPESCRIPT_CONFIG } from "./config/eslint/config/eslint.typescript-config.mjs";
import { ESLINT_TESTS_CONFIG } from "./config/eslint/config/eslint.tests-config.mjs";
import { ESLINT_STYLISTIC_CONFIG } from "./config/eslint/config/eslint.stylistic-config.mjs";
import { ESLINT_IMPORT_CONFIG } from "./config/eslint/config/eslint.import-config.mjs";
import { ESLINT_CONFIG_FILES_CONFIG } from "./config/eslint/config/eslint.config-files-config.mjs";
import { ESLINT_VUE_CONFIG } from "./config/eslint/config/eslint.vue-config.mjs";
import { ESLINT_CUCUMBER_CONFIG } from "./config/eslint/config/eslint.cucumber-config.mjs";
import { ESLINT_STORES_CONFIG } from "./config/eslint/config/eslint.stores-config.mjs";
import { ESLINT_TESTS_FACTORIES_CONFIG } from "./config/eslint/config/eslint.tests-factories-config.mjs";

const baseDirectory = path.dirname(fileURLToPath(import.meta.url));
const flatCompat = new FlatCompat({ baseDirectory });

export default [
  {
    ignores: [
      ".output/",
      ".nuxt/",
      "node_modules/",
      "public/",
    ],
  },
  ...flatCompat.plugins("import", "vue"),
  ...flatCompat.extends("plugin:vue/vue3-recommended"),
  ESLINT_BASE_CONFIG,
  ESLINT_TYPESCRIPT_CONFIG,
  ESLINT_IMPORT_CONFIG,
  ESLINT_VUE_CONFIG,
  ESLINT_TESTS_CONFIG,
  ESLINT_TESTS_FACTORIES_CONFIG,
  ESLINT_CUCUMBER_CONFIG,
  ESLINT_STYLISTIC_CONFIG,
  ESLINT_CONFIG_FILES_CONFIG,
  ESLINT_STORES_CONFIG,
];