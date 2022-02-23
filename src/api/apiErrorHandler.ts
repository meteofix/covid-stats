const ApiErrorHandler = (error: any) => {
  if (error.response) {
    console.log('Client received an error response (5xx, 4xx)');
  } else if (error.request) {
    console.log('Client never received a response, or request never left ');
  } else {
    console.log('Something wrong');
  }
  console.log(error);
};

export default ApiErrorHandler;
