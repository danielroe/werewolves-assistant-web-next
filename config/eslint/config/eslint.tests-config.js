import Vitest from "eslint-plugin-vitest";

import { ERROR, OFF } from "../eslint.constants.js";

const ESLINT_TESTS_CONFIG = {
  files: ["tests/**/*.spec.ts"],
  plugins: { vitest: Vitest },
  languageOptions: { globals: { ...Vitest.environments.env.globals } },
  rules: {
    "import/no-relative-parent-imports": OFF,
    "vitest/consistent-test-filename": [ERROR, { pattern: "^(.+\\.spec)\\.ts$" }],
    "vitest/consistent-test-it": [ERROR, { fn: "it" }],
    "vitest/expect-expect": ERROR,
    "vitest/max-expects": ERROR,
    "vitest/max-nested-describe": ERROR,
    "vitest/no-alias-methods": ERROR,
    "vitest/no-commented-out-tests": ERROR,
    "vitest/no-conditional-expect": ERROR,
    "vitest/no-conditional-in-test": ERROR,
    "vitest/no-conditional-tests": ERROR,
    "vitest/no-disabled-tests": ERROR,
    "vitest/no-done-callback": ERROR,
    "vitest/no-duplicate-hooks": ERROR,
    "vitest/no-focused-tests": ERROR,
    "vitest/no-hooks": OFF,
    "vitest/no-identical-title": ERROR,
    "vitest/no-import-node-test": ERROR,
    "vitest/no-interpolation-in-snapshots": ERROR,
    "vitest/no-large-snapshots": ERROR,
    "vitest/no-mocks-import": ERROR,
    "vitest/no-restricted-matchers": OFF,
    "vitest/no-restricted-vi-methods": OFF,
    "vitest/no-standalone-expect": ERROR,
    "vitest/no-test-prefixes": ERROR,
    "vitest/no-test-return-statement": ERROR,
    "vitest/prefer-called-with": ERROR,
    "vitest/prefer-comparison-matcher": ERROR,
    "vitest/prefer-each": ERROR,
    "vitest/prefer-equality-matcher": ERROR,
    "vitest/prefer-expect-assertions": OFF,
    "vitest/prefer-expect-resolves": ERROR,
    "vitest/prefer-hooks-in-order": ERROR,
    "vitest/prefer-hooks-on-top": ERROR,
    "vitest/prefer-lowercase-title": OFF,
    "vitest/prefer-mock-promise-shorthand": ERROR,
    "vitest/prefer-snapshot-hint": ERROR,
    "vitest/prefer-spy-on": ERROR,
    "vitest/prefer-strict-equal": ERROR,
    "vitest/prefer-to-be": ERROR,
    "vitest/prefer-to-be-falsy": ERROR,
    "vitest/prefer-to-be-object": ERROR,
    "vitest/prefer-to-be-truthy": ERROR,
    "vitest/prefer-to-contain": ERROR,
    "vitest/prefer-to-have-length": ERROR,
    "vitest/prefer-todo": ERROR,
    "vitest/require-hook": ERROR,
    "vitest/require-local-test-context-for-concurrent-snapshots": ERROR,
    "vitest/require-to-throw-message": ERROR,
    "vitest/require-top-level-describe": ERROR,
    "vitest/valid-describe-callback": ERROR,
    "vitest/valid-expect": ERROR,
    "vitest/valid-title": [
      ERROR, {
        ignoreTypeOfDescribeName: true,
        mustMatch: { it: new RegExp(/^should .+ when .+\S\.$|^\$test$/u, "u").source },
      },
    ],
  },
};

export { ESLINT_TESTS_CONFIG };