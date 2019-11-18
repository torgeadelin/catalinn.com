export const brand = {
    white: "#FFFFFF",
    black: "#000000",
    gray500: "#E6E6E6",
    gray200: "#F0F0F0",
};

export const colors = {
    ...brand
};

export const fonts = {
    Circular_Bold: "CircularStd-Bold",
    Circular_Book: "CircularStd-Book",
    Circular_Black: "CircularStd-Black",
    Circular_Medium: "CircularStd-Medium",
};

export const space = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
export const fontSize = [13, 16, 20, 25, 32];
export const opacity = [0, .25, .5, .75, 1];

export const regular = 400;
export const bold = 1200;

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeight = { regular, bold };

// styled-system’s `borderRadius` function can hook into the `radii` object/array
export const pill = "9999px";
export const radii = ["0px", "2px", "3px", "8px", "16px", pill];
export const scaleFactor = 17 / 16;

export const maxWidths = [128, 256, 512, 1024];

export const shadows = {
    small: "0px 3px 30px rgba(0, 0, 0, 0.15)",
    tiny: "0px 3px 10px rgba(0, 0, 0, 0.10)"
};

export const breakpoints = {
    sm: 0, // zero represents the default (for mobile-first approach)
    md: "48em",
    lg: "80em"
};

export const buttons = {
    default: {
        color: brand.black,
        fontFamily: fonts.Circular_Bold
    },
};

const theme = {
    fonts,
    space,
    fontSize,
    fontWeight,
    regular,
    bold,
    colors,
    radii,
    pill,
    scaleFactor,
    breakpoints,
    shadows,
    buttons,
    maxWidths,
    opacity
};

export default theme;
