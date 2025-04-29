export const THEME_SET = '[Theme] Set theme';

export const ThemeSet = (theme: string): any => {
  return {
    type: THEME_SET,
    theme
  };
};
