import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("prettier", "next/core-web-vitals", "next/typescript"),
  {
    plugins: { prettier },
    rules: {
      "prettier/prettier": "warn",
      "import/order": 0,
      "import/namespace": 0,
      "no-duplicate-imports": "error",
      "no-restricted-imports": [
        "error",
        {
          patterns: [".*"],
        },
      ],
    },
  },
];

export default eslintConfig;
