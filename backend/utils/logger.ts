const infoMessage = (...params: any) => {
  // tslint-disable-next-line no-console
  console.log(...params);
};

const errorMessage = (...params: any) => {
  // tslint-disable-next-line no-console
  console.error(...params);
};

export default {
  infoMessage,
  errorMessage,
};
