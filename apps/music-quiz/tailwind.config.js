const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        join('{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
        ...createGlobPatternsForDependencies(__dirname),
        './src/**/*.{js,ts,jsx,tsx,html,css}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
