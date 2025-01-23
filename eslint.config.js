// eslint.config.js
import globals from "globals";
import eslintPluginPrettier from "eslint-plugin-prettier";
import plugin from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import version from "react";
import plaginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/**@type {import('eslint').Linter.Config[]} */
export default [
    plaginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        files: ["**/*.js", "**/*.jsx"], // Укажите файлы для проверки
        languageOptions: {
            globals: {
                ...globals.browser, // Добавление браузерных глобальных переменных (например, window, document)
                ...globals.node, // Добавление Node.js глобальных переменных (например, require, module)
            },
        },
        rules: {
            "no-unused-vars": "warn", // Пример правил
            "no-console": "off",
            "prettier/prettier": "error",
        },
        plugins: {
            prettier: pluginPrettier,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
];
