import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			transitionProperty: {
				'transform-opacity': 'transform, opacity',
			},
			transitionDuration: {
				'250': '250ms',
			},
			transitionTimingFunction: {
				ease: 'ease',
			},

			fontSize: {
				base: '14px',
				ssm: '12px',
			},
			textColor: {
				'header-red': '#e24c0c',
				'header-black': '#000000e5',
			},
			boxShadow: {
				custom:
					'0 1px 3px 0 #0000001a, 0 3px 8px 0 #0000001a, 0 0 .5px 0 #0000002e',
			},
		},
	},
	plugins: [],
};
export default config;
