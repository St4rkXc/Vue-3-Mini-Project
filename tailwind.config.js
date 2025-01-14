/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {},
        },
        fontSize: {
            xs: '14px',
            base: '16px',
            lg: '20px',
            xl: '24px',
            '2xl': '32px',
            '3xl': '64px',
            '4xl': '96px',
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    'base-100': '#FFFFFF' /* background image */,
                },
            },
            
        ],
    },
    plugins: [require('daisyui')],
}
