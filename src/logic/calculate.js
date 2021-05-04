export default calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  if (buttonName == '+/-') {
    total *= -1;
    next *= -1;
  }
};
