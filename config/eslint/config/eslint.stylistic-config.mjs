import StylisticPlugin from "@stylistic/eslint-plugin";

import { ALWAYS, ERROR, INDENT_SPACE_COUNT, MAX_LENGTH_DEFAULT_CONFIG, NEVER, OFF } from "../eslint.constants.mjs";

const ESLINT_STYLISTIC_CONFIG = {
  plugins: { "@stylistic": StylisticPlugin },
  rules: {
    "@stylistic/array-bracket-newline": [ERROR, { multiline: true }],
    "@stylistic/array-bracket-spacing": [ERROR, NEVER],
    "@stylistic/array-element-newline": [ERROR, "consistent"],
    "@stylistic/arrow-parens": [ERROR, "as-needed"],
    "@stylistic/arrow-spacing": ERROR,
    "@stylistic/block-spacing": ERROR,
    "@stylistic/brace-style": ERROR,
    "@stylistic/comma-dangle": [ERROR, "always-multiline"],
    "@stylistic/comma-spacing": [
      ERROR, {
        before: false,
        after: true,
      },
    ],
    "@stylistic/comma-style": ERROR,
    "@stylistic/computed-property-spacing": ERROR,
    "@stylistic/dot-location": [ERROR, "property"],
    "@stylistic/eol-last": [ERROR, NEVER],
    "@stylistic/function-call-argument-newline": [ERROR, "consistent"],
    "@stylistic/function-call-spacing": ERROR,
    "@stylistic/function-paren-newline": [ERROR, "multiline"],
    "@stylistic/generator-star-spacing": [
      ERROR, {
        before: false,
        after: true,
      },
    ],
    "@stylistic/implicit-arrow-linebreak": ERROR,
    "@stylistic/indent": [
      ERROR,
      INDENT_SPACE_COUNT,
      { FunctionExpression: { parameters: "first" } },
    ],
    "@stylistic/indent-binary-ops": [
      ERROR,
      INDENT_SPACE_COUNT,
    ],
    "@stylistic/jsx-child-element-spacing": ERROR,
    "@stylistic/jsx-closing-bracket-location": ERROR,
    "@stylistic/jsx-closing-tag-location": ERROR,
    "@stylistic/jsx-curly-brace-presence": ERROR,
    "@stylistic/jsx-curly-newline": ERROR,
    "@stylistic/jsx-curly-spacing": ERROR,
    "@stylistic/jsx-equals-spacing": ERROR,
    "@stylistic/jsx-first-prop-new-line": ERROR,
    "@stylistic/jsx-indent": ERROR,
    "@stylistic/jsx-indent-props": ERROR,
    "@stylistic/jsx-max-props-per-line": ERROR,
    "@stylistic/jsx-newline": ERROR,
    "@stylistic/jsx-one-expression-per-line": ERROR,
    "@stylistic/jsx-props-no-multi-spaces": ERROR,
    "@stylistic/jsx-quotes": ERROR,
    "@stylistic/jsx-self-closing-comp": ERROR,
    "@stylistic/jsx-sort-props": ERROR,
    "@stylistic/jsx-tag-spacing": ERROR,
    "@stylistic/jsx-wrap-multilines": ERROR,
    "@stylistic/key-spacing": [ERROR, { mode: "strict" }],
    "@stylistic/keyword-spacing": ERROR,
    "@stylistic/linebreak-style": ERROR,
    "@stylistic/lines-around-comment": OFF,
    "@stylistic/max-len": [
      ERROR, {
        ...MAX_LENGTH_DEFAULT_CONFIG,
        ignoreComments: true,
      },
    ],
    "@stylistic/max-statements-per-line": [ERROR, { max: 1 }],
    "@stylistic/multiline-ternary": [ERROR, NEVER],
    "@stylistic/new-parens": ERROR,
    "@stylistic/newline-per-chained-call": OFF,
    "@stylistic/no-confusing-arrow": ERROR,
    "@stylistic/no-extra-parens": [
      ERROR,
      "all",
      {
        returnAssign: false,
        enforceForArrowConditionals: false,
      },
    ],
    "@stylistic/no-extra-semi": ERROR,
    "@stylistic/no-floating-decimal": ERROR,
    "@stylistic/no-mixed-operators": OFF,
    "@stylistic/no-mixed-spaces-and-tabs": [ERROR, "smart-tabs"],
    "@stylistic/no-multi-spaces": ERROR,
    "@stylistic/no-multiple-empty-lines": [
      ERROR,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    "@stylistic/no-tabs": OFF,
    "@stylistic/no-trailing-spaces": [ERROR, { skipBlankLines: true }],
    "@stylistic/no-whitespace-before-property": ERROR,
    "@stylistic/nonblock-statement-body-position": [ERROR, "below"],
    "@stylistic/object-curly-newline": [ERROR, { multiline: true }],
    "@stylistic/object-curly-spacing": [ERROR, ALWAYS],
    "@stylistic/object-property-newline": [ERROR, { allowAllPropertiesOnSameLine: true }],
    "@stylistic/one-var-declaration-per-line": [ERROR, ALWAYS],
    "@stylistic/operator-linebreak": [ERROR, "after"],
    "@stylistic/padded-blocks": [ERROR, NEVER],
    "@stylistic/padding-line-between-statements": [
      ERROR, {
        blankLine: ALWAYS,
        prev: ["interface", "type", "class", "export"],
        next: "*",
      }, {
        blankLine: ALWAYS,
        prev: "*",
        next: ["interface", "type", "class", "export", "function"],
      }, {
        blankLine: NEVER,
        prev: "*",
        next: ["return"],
      },
    ],
    "@stylistic/quote-props": [ERROR, "consistent-as-needed"],
    "@stylistic/quotes": [ERROR, "double", { allowTemplateLiterals: true }],
    "@stylistic/rest-spread-spacing": ERROR,
    "@stylistic/semi": [ERROR, ALWAYS],
    "@stylistic/semi-spacing": ERROR,
    "@stylistic/semi-style": [ERROR, "last"],
    "@stylistic/space-before-blocks": [
      ERROR, {
        functions: ALWAYS,
        keywords: ALWAYS,
        classes: ALWAYS,
      },
    ],
    "@stylistic/space-before-function-paren": [ERROR, NEVER],
    "@stylistic/space-in-parens": [ERROR, NEVER],
    "@stylistic/space-infix-ops": ERROR,
    "@stylistic/space-unary-ops": [
      ERROR, {
        words: true,
        nonwords: false,
      },
    ],
    "@stylistic/spaced-comment": ERROR,
    "@stylistic/switch-colon-spacing": ERROR,
    "@stylistic/template-curly-spacing": ERROR,
    "@stylistic/template-tag-spacing": ERROR,
    "@stylistic/type-annotation-spacing": ERROR,
    "@stylistic/type-generic-spacing": ERROR,
    "@stylistic/type-named-tuple-spacing": ERROR,
    "@stylistic/wrap-iife": ERROR,
    "@stylistic/wrap-regex": ERROR,
    "@stylistic/yield-star-spacing": ERROR,
  },
};

export { ESLINT_STYLISTIC_CONFIG };