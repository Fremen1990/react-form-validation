export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email adress is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be at least 6 characters";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password !== values.password2) {
    errors.password2 = "Passwords not matching";
  }

  return errors;
}
