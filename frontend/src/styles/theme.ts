import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

export const screenSizes = {
	phone: '27rem', // 432px
	phoneXL: '37.5rem', // 600px
	tablet: '48rem', // 768px
	tabletXL: '64rem', // 1024px
	desktop: '80rem', // 1280px
	wide_screen: '105rem', // 1680px
};
// const eeFontFamily =
// 'Segoe UI,Candara,Bitstream Vera Sans,DejaVu Sans,Bitstream Vera Sans,Trebuchet MS,Verdana,Verdana Ref,sans-serif';
const eeFontFamily = `'DejaVu Sans','Bitstream Vera Sans','Trebuchet MS','Verdana','Verdana Ref',sans-serif`;

const theme = extendTheme({
	breakpoints: screenSizes,
	colors: {
		transparent: 'transparent',
		black: '#000',
		white: '#fff',
		red: {
			'50': '#FBEAEE',
			'100': '#F3C3CF',
			'200': '#EC9DAF',
			'300': '#E47790',
			'400': '#DC5071',
			'500': '#D52A52',
			'600': '#AA2242',
			'700': '#801931',
			'800': '#551121',
			'900': '#2B0810',
		},
		orange: {
			'50': '#FFF0E6',
			'100': '#FED5B9',
			'200': '#FDBB8C',
			'300': '#FCA05E',
			'400': '#FC8531',
			'500': '#FB6B04',
			'600': '#C95503',
			'700': '#974002',
			'800': '#642B02',
			'900': '#321501',
		},
		yellow: {
			'50': '#FEFCE6',
			'100': '#FDF6B9',
			'200': '#FCF08C',
			'300': '#FBEB5F',
			'400': '#FAE533',
			'500': '#F9DF06',
			'600': '#C7B205',
			'700': '#968603',
			'800': '#645902',
			'900': '#322D01',
		},
		green: {
			'50': '#ECF8EF',
			'100': '#CAEDD2',
			'200': '#A8E1B4',
			'300': '#86D597',
			'400': '#64C97A',
			'500': '#42BD5D',
			'600': '#35974A',
			'700': '#287138',
			'800': '#1A4C25',
			'900': '#0D2613',
		},
		teal: {
			'50': '#EBF9FA',
			'100': '#C6EDF1',
			'200': '#A1E2E8',
			'300': '#7CD6DF',
			'400': '#57CBD6',
			'500': '#32C0CD',
			'600': '#2899A4',
			'700': '#1E737B',
			'800': '#144D52',
			'900': '#0A2629',
		},
		cyan: {
			'50': '#E5F7FF',
			'100': '#B8E8FF',
			'200': '#8ADAFF',
			'300': '#5CCBFF',
			'400': '#2EBDFF',
			'500': '#00AEFF',
			'600': '#008BCC',
			'700': '#006899',
			'800': '#004666',
			'900': '#002333',
		},
		blue: {
			'50': '#E5E9FF',
			'100': '#B8C3FF',
			'200': '#8A9CFF',
			'300': '#5C75FF',
			'400': '#2E4FFF',
			'500': '#0028FF',
			'600': '#0020CC',
			'700': '#001899',
			'800': '#001066',
			'900': '#000833',
		},
		purple: {
			'50': '#EEF0F6',
			'100': '#D0D4E6',
			'200': '#B2B8D6',
			'300': '#949DC6',
			'400': '#7681B6',
			'500': '#5865A7',
			'600': '#475185',
			'700': '#353D64',
			'800': '#232943',
			'900': '#121421',
		},
		pink: {
			'50': '#FDE7F1',
			'100': '#FABDD8',
			'200': '#F692BF',
			'300': '#F368A5',
			'400': '#EF3D8C',
			'500': '#EC1373',
			'600': '#BD0F5C',
			'700': '#8E0B45',
			'800': '#5E082E',
			'900': '#2F0417',
		},
		gray: {
			'50': '#F1F3F4',
			'100': '#D7DDDF',
			'200': '#BEC7CB',
			'300': '#A4B1B7',
			'400': '#8B9BA2',
			'500': '#71858E',
			'600': '#5A6A72',
			'700': '#445055',
			'800': '#2D3539',
			'900': '#171B1C',
		},
	},
	// components: {
	// 	Container: containerTheme,
	// },
	config: {
		initialColorMode: 'system',
		useSystemColorMode: true,
	},
	sizes: {
		container: screenSizes,
	},
	styles: {
		global: (props: StyleFunctionProps) => ({
			a: {
				alignItems: 'center',
				color: 'blue.500',
				display: 'inline-flex',
				_hover: {
					textDecoration: 'underline',
				},
			},
			fonts: {
				heading: 'serif',
				body: 'serif',
			},
			body: {
				// fontFamily: 'system-ui, sans-serif',
				// fonts: 'system-ui, sans-serif',
				// fonts: eeFontFamily,
				fontSize: { base: '14', tablet: '16', wide_screen: '18' },
				color: mode('gray.600', 'gray.200')(props),
				bg: mode('white', 'gray.900')(props),
			},
			h1: {
				color: mode('gray.700', 'gray.300')(props),
				// fonts: eeFontFamily,
				fontSize: '7xl',
				fontWeight: 900,
				// mt: 18,
				// mb: 2,
			},
			h2: {
				color: mode('gray.700', 'gray.300')(props),
				// fonts: eeFontFamily,
				fontSize: '5xl',
				fontWeight: 900,
				// mt: 16,
				// mb: 2,
			},
			h3: {
				color: mode('gray.700', 'gray.300')(props),
				// fonts: eeFontFamily,
				fontSize: '3xl',
				fontWeight: 900,
				// mt: 14,
				// mb: 2,
			},
			h4: {
				color: mode('gray.700', 'gray.300')(props),
				// fonts: eeFontFamily,
				fontSize: 'xl',
				fontWeight: 800,
				// mt: 12,
				// mb: 2,
			},
			h5: {
				color: mode('gray.700', 'gray.300')(props),
				// fonts: eeFontFamily,
				fontSize: 'lg',
				fontWeight: 700,
				// mt: 10,
				// mb: 2,
			},
			h6: {
				color: mode('gray.700', 'gray.300')(props),
				// fonts: eeFontFamily,
				fontSize: 'md',
				fontWeight: 600,
				// mt: 8,
				// mb: 2,
			},
			p: {
				mt: 2,
				mb: 4,
			},
		}),
	},
});

export default theme;
