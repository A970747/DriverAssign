const infoMessage = (...params: any) => {
  console.log(...params);
};

const errorMessage = (...params: any) => {
  console.error(...params);
};

export default {
  infoMessage,
  errorMessage,
};
