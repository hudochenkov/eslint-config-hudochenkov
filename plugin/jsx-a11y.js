import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import { defineConfig } from 'eslint/config';

/* @ts-ignore -- some kind of issue with shared config types */
export const jsxA11y = defineConfig([jsxA11yPlugin.flatConfigs.recommended]);
