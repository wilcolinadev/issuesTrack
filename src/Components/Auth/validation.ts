export const validateEmail = (email) => {
  const reg = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return reg.test(email);
};

export const validateName = (name) => {
  const regex = new RegExp(/^[a-zA-Z ]{2,30}$/);
  return regex.test(name);
};

export const inputValidation = (firstName:string, lastName:string, email:string): boolean | void => {
  if (
    validateName(firstName) &&
    validateName(lastName) &&
    validateEmail(email)
  ) {
    return true;
  }
};

export const passwordVerification = (
  password:string,
  passwordValidation:string
): boolean | void => {
  if (password.length > 6 && password === passwordValidation) {
    return true;
  }
};
