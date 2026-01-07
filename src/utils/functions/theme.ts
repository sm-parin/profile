export type TTheme = "default" | "light" | "dark";

type ThemeResult = {
  bg: string;
  text: string;
  color: string;
  border: string;
  code: number[];
};

/**
 * Static, Tailwind-safe theme resolver
 * (hardcoded outputs, no dynamic class generation)
 */
const THEME_MAP: Record<
  TTheme,
  {
    normal: ThemeResult;
    inverted: ThemeResult;
  }
> = {
  default: {
    normal: {
      bg: "bg-25",
      text: "text-800",
      color: "color-800",
      border: "border-800",
      code: [25, 800],
    },
    inverted: {
      bg: "bg-800",
      text: "text-25",
      color: "color-25",
      border: "border-800",
      code: [800, 25],
    },
  },

  light: {
    normal: {
      bg: "bg-200",
      text: "text-800",
      color: "color-800",
      border: "border-800",
      code: [200, 800],
    },
    inverted: {
      bg: "bg-800",
      text: "text-200",
      color: "color-200",
      border: "border-800",
      code: [800, 200],
    },
  },

  dark: {
    normal: {
      bg: "bg-900",
      text: "text-100",
      color: "color-100",
      border: "border-100",
      code: [900, 100],
    },
    inverted: {
      bg: "bg-100",
      text: "text-900",
      color: "color-900",
      border: "border-100",
      code: [100, 900],
    },
  },
};

export const applyTheme = (
  theme: TTheme = "default",
  invert = false
): ThemeResult => {
  return invert ? THEME_MAP[theme].inverted : THEME_MAP[theme].normal;
};
