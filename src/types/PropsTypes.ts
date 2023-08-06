export type PasswordFieldProps = {
  placeholder: string;
  fieldName: string;
  newUser: {
    email: string;
    password: string;
    confirmPassword: string;
  };
  setNewUser: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      confirmPassword: string;
    }>
  >;
};
