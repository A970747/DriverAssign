const infoMessage = (...params: any) => {
  //todo disable this if mode is test.
  console.log(...params);
};

const errorMessage = (...params: any) => {
  //todo disable this if mode is test.
  console.error(...params);
};

export default {
  infoMessage,
  errorMessage,
};
