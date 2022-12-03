/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'homepage': '2000px',
        'navbar':'50px',
        'dpPhone':'174.38px',
        '120':'120px',
        '96':'96px',
        '47':'47px',
        '647':'647px',
        '60':'60px',
        '266':'266px',
        '117':'117px',
        '445':'445px',
        '230':'230px',
        '182':'182px',
        '1261':'1261px',
        '500':'500px',
        '248':'248px',
        '450':'450px',
        '80':'80px'
      },
      width:{
        'dpPhone':'174.38px',
        '328':'328px',
        '312':'312px',
        '208':'208px',
        '375':'375px',
        '105':'105px',
        '354':'354px',
        '327':'327px',
        '314':'314px',
        '124':'124px',
        '344':'344px',
        '339':'339px',
        '344':'344px',
        '248':'248px',
        '500':'500px',
        '450':'450px',
        '682':'682px'
      },
      boxShadow: {
        'picShadow': '-2px 12px 3px #E2EBF2',
      }
    },
  },
  plugins: [require("daisyui")],
}