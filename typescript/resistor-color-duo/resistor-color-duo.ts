export function decodedValue(colors: string[]): number {
  const colorsOfBands: {[key: string]: number} = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  const firstColor = colors[0];
  const secondColor = colors[1];

  const firstValue = colorsOfBands[firstColor];
  const secondValue = colorsOfBands[secondColor];

  return (firstValue * 10) + secondValue;

}
