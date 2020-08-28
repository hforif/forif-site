import Typography from "typography"
import moragaTheme from 'typography-theme-moraga'


moragaTheme.baseFontSize = '15px';
moragaTheme.googleFonts = [
  {
    name: 'Noto Sans KR',
    styles: ['300'],
  }
]
moragaTheme.headerFontFamily = ['Source Sans Pro','Noto Sans KR','serif'];
moragaTheme.bodyFontFamily = ['Source Sans Pro','Noto Sans KR','serif'];
moragaTheme.overrideThemeStyles = ()=>({
  h1:{
    fontSize: '3.6rem'
  },
  h2:{
    fontSize: '2.4rem'
  },
  h3:{
    fontSize: '1.2rem'
  },
  a:{
    textDecoration: 'none'
  }
});
const typography = new Typography(moragaTheme);

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
