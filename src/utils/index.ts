export const generateRandomNumber = function(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateRandomIntArray = function(
  min: number,
  max: number,
  length = 100
): number[] {
  const outputArr = [];

  for (let i = 0; i < length; i++) {
    outputArr.push(generateRandomNumber(min, max) as never);
  }

  return outputArr;
};
