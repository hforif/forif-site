import Typography from "typography"
import moragaTheme from 'typography-theme-moraga'

moragaTheme.baseFontSize = '17px';
const typography = new Typography({
  ...moragaTheme,
});

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
