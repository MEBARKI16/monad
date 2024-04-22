import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
       opacity: {
        '75': '.75',
        '10': '.10',
        '95': '.95',
        '50':'.25',
        '85':'.85', 
        '80':'.80',
        '65':'.65'
      },
       scale: {
        '175': '1.75',
        '200': '2',
        '300':'3',
      },
      height: {
        '128': '34rem',
        '132': '42rem',
      },
    },
     colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'blue1':'#87a2a9',
      'blue2': '#5ca2af',
      'blue3':'#28323d',
      'white1': '#e5e0d0',
      'white2':'#dfc29c',
      'red1':'#933e23',
      'orange1':'#ce8b3f',   
      'dark':'#000000',  
      'grey1':'#7f7f7f'
  	},
  	backgroundImage: {
        'hero-pattern': "url('/monadg.svg')",
        "hero-pattern-2": "url('/community_4.png')" ,
         'hero-pattern-3': "url('/com.png')",
      },
  },
  plugins: [],
};
export default config;
