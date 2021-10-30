const infoMessage = (...params: any) => {
  if (!(process.env.NODE_ENV === 'test')) console.log(...params);
};

const errorMessage = (...params: any) => {
  //todo disable this if mode is test.
  if (!(process.env.NODE_ENV === 'test')) console.error(...params);
};

export default {
  infoMessage,
  errorMessage,
};
