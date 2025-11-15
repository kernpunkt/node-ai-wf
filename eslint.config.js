import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  prettier, // Disable ESLint rules that conflict with Prettier
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        // Browser environment
        window: 'readonly',
        document: 'readonly',
        // Node.js environment
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescript
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...typescript.configs['recommended-requiring-type-checking'].rules,
      
      // Function Quality (Clean Code: Single Responsibility, Small Size)
      'max-lines-per-function': ['error', { 'max': 100, 'skipBlankLines': true, 'skipComments': true }],
      'max-params': ['error', 3],
      'complexity': ['error', 10],
      
      // Code Structure (Clean Code: Logical Organization)
      'max-depth': ['error', 4],
      'max-lines': ['error', 300],
      
      // Modern JavaScript
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': 'warn',
      
      // LLM-Optimized: Prevent mutations (immutability)
      'no-param-reassign': ['error', { 'props': true }],
      'no-array-constructor': 'error',
      
      // LLM-Optimized: Prevent implicit returns
      'consistent-return': 'error',
      
      // TypeScript Best Practices (ktcode: TypeScript-First Architecture)
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      
      // LLM-Optimized: Explicit types reduce LLM errors
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      
      // LLM-Optimized: No any type (use unknown instead)
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      
      // LLM-Optimized: Immutability patterns
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/prefer-readonly-parameter-types': [
        'warn',
        {
          'checkParameterProperties': true,
          'ignoreInferredTypes': false
        }
      ],
      
      // Type inference and consistency
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { 'prefer': 'type-imports' }],
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      
      // LLM-Optimized: Prevent type assertions (use type guards instead)
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          'assertionStyle': 'never'
        }
      ],
      
      // LLM-Optimized: No non-null assertions (forces explicit null checks)
      '@typescript-eslint/no-non-null-assertion': 'error',
      
      // CLI Application Specific
      'no-process-exit': 'error',
      'no-sync': 'warn'
    }
  },
  {
    files: ['tests/**/*.ts', 'tests/**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        // Jest environment for tests
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        vi: 'readonly',
        // Node.js environment
        console: 'readonly',
        process: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescript
    },
    rules: {
      ...typescript.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      'max-lines-per-function': 'off',
      'complexity': 'off',
      'no-console': 'off',
      'max-lines': 'off',
      'max-depth': 'off',
      'max-params': 'off'
    }
  }
]
