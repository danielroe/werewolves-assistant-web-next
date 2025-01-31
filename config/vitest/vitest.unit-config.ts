import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    setupFiles: ["./tests/unit/unit-setup.ts"],
    watch: false,
    include: ["./tests/unit/**/*.spec.ts"],
    exclude: [
      "nuxt.config.ts",
      "node_modules/**",
      "config/**/*.ts",
    ],
    coverage: {
      exclude: [
        "tests/**/*",
        "node_modules/**/*",
        "config/**/*",
        "**/*.enums.ts",
        "**/*.constants.ts",
        "**/*.types.ts",
      ],
      include: [
        "app.vue",
        "pages/**/*.{vue,ts}",
        "components/**/*.{vue,ts}",
        "composables/**/*.ts",
        "stores/**/*.ts",
      ],
      reportsDirectory: "./tests/unit/coverage",
      reporter: ["clover", "json", "lcov", "text", "text-summary"],
      all: true,
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
    globals: true,
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
  },
});