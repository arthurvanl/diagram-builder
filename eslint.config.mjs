import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    {
        ignores: ["**/node_modules/**/*.js", "**/eslint.config.mjs"],
    },
    ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"),
    {
        plugins: { "@typescript-eslint": typescriptEslint, prettier },
        languageOptions: {
            globals: { ...globals.browser },
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                project: "./tsconfig.json"
            },
        },
        rules: {
            curly: "error",
            "no-implicit-globals": "error",
            "prefer-const": "warn",
            "no-unused-vars": "off",
            "no-extra-semi": "error",
            "no-constant-condition": ["error", { checkLoops: false }],
            "no-dupe-else-if": "error",
            "no-array-constructor": "error",
            "lines-between-class-members": ["error", { enforce: [{ blankLine: "always", prev: "method", next: "method" }] }],
            "@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
            "prettier/prettier": "off",
            "@typescript-eslint/no-restricted-types": "error",
            "@typescript-eslint/no-unused-vars": "error",
            "@typescript-eslint/naming-convention": ["error",
                { selector: "variable", format: ["camelCase", "UPPER_CASE"] },
                { selector: "function", format: ["camelCase", "PascalCase"] },
                { selector: "parameter", format: ["camelCase"], leadingUnderscore: "allow" }, 
                { selector: "property", format: ["camelCase", "UPPER_CASE"] },
                { selector: "classProperty", format: ["camelCase", "UPPER_CASE"], leadingUnderscore: "require" },
                { selector: "enumMember", format: ["PascalCase", "UPPER_CASE"] }, 
                { selector: "typeLike", format: ["PascalCase"] }, 
                { selector: "objectLiteralProperty", format: null, filter: { regex: "^(content-type)$", match: true } }
            ],
            "@typescript-eslint/no-mixed-enums": "error",
            "@typescript-eslint/no-duplicate-enum-values": "error",
            "@/no-extra-semi": "error",
            "@typescript-eslint/no-unnecessary-condition": ["error", { allowConstantLoopConditions: true }],
            "@typescript-eslint/no-inferrable-types": "error",
            "@typescript-eslint/explicit-member-accessibility": [
                "error", { overrides: { "constructors": "explicit", "properties": "explicit" }
                }
              ]
        },
    },
]; 