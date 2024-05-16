export function decodedResistorValue(colors: string[]): string {
  const colorOfBand: {[key: string]: number} = {
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
  const thirdColor = colors[2];

  const firstValue = colorOfBand[firstColor];
  const secondValue = colorOfBand[secondColor];
  const thirdValue = colorOfBand[thirdColor];

  let mainValue = firstValue * 10 + secondValue;
  let zeros = 10 ** thirdValue;

  let result = mainValue * zeros;
  let suffix = ''
  
  if (result >= 1_000_000_000) {
    result /= 1_000_000_000;
    suffix = ' gigaohms';
  }  else if ( result >= 1_000_000) {
    result /= 1_000_000;
    suffix = ' megaohms';
  } else if (result >= 1_000) {
    result /= 1_000;
    suffix = ' kiloohms';
  } else {
    suffix = ' ohms';
  }
  
  return `${result}${suffix}`;
};
