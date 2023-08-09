import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      titleColorThick: string;
      titleColorSoft: string;
    };
  }
}
