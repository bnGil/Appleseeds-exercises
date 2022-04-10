const isPasswordValid1 = (password) => {
  if (password.length > 7) {
    console.log("Strong");
  } else {
    console.log("Weak");
  }
};

const isPasswordValid2 = (password) => {
  password.length > 7 ? console.log("Strong") : console.log("Weak");
};

const isPasswordValid3 = (password) => {
  console.log(
    (password.length > 7 && "Strong") || (password.length <= 7 && "Weak")
  );
};

const isPasswordValid4 = (password) => {
  /[A-Z]/.test(password) && password.length > 7
    ? console.log("Very Strong")
    : password.length > 7
    ? console.log("Strong")
    : console.log("Weak");
};

isPasswordValid1("aacd");
isPasswordValid2("aacdaaaa");
isPasswordValid3("aacdaaaa");
isPasswordValid4("aaaAAAAAAA");
