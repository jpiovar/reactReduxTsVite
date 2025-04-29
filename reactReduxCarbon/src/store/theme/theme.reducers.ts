import { THEME_SET } from "./theme.actions";
import { ThemeType } from "./theme.types";


export const initialStateTheme: ThemeType = { data: 'light' };
const themeReducer = (state = initialStateTheme, action: any): ThemeType | any => {
  switch (action.type) {
    case THEME_SET: {
      return {
        ...state,
        data: action.theme
      };
    }
    default:
      return state;
  }    
};
export default themeReducer;