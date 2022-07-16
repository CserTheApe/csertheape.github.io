module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: {
				lighter: '#496A80',
				light: '#3A5769',
				DEFAULT: '#2C4454',
				dark: '#1B2F3D'
			},
			secondary: {
				light: '#F8F4F3',
				DEFAULT: '#EEE4E1',
				dark: '#CEBDB9',
				darker: '#A9918E'
			},
			alternate: {
				1: '#25BCEB',
				2: '#E7D8C9',
				3: '#E6BEAE'
			}
		}
	},
	plugins: []
};
