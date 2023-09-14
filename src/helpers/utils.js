export const formatNumber = (number) => {
  const numberString = number.toString();

  const [integerPart, decimalPart] = numberString.split(".");

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  if (decimalPart) {
    return `${formattedInteger}.${decimalPart}`;
  } else {
    return formattedInteger;
  }
};
