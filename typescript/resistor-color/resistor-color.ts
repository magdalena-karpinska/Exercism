 const colors: {[key: string]: number} = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  };

export const colorCode = (color: string): number => {
  const lowerCaseColor = color.toLowerCase();
  return colors[color];
}

export const COLORS: string[] = Object.keys(colors);
