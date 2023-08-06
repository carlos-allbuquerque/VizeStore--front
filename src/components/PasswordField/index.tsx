import { useState } from "react";
import * as S from "./styles";
import { PasswordFieldProps } from "../../types/PropsTypes";

export default function PasswordField({
  placeholder,
  fieldName,
  newUser,
  setNewUser
}: PasswordFieldProps) {
  const [isShown, setIsShown] = useState(false);

  return (
    <S.Container>
      <S.Input
        placeholder={placeholder}
        type={isShown ? "text" : "password"}
        onChange={e => setNewUser({ ...newUser, [fieldName]: e.target.value })}
      />
      <S.Icon
        placeholder={placeholder}
        className={isShown ? "bi bi-eye" : "bi bi-eye-slash"}
        onClick={() => {
          isShown ? setIsShown(false) : setIsShown(true)
        }}
      />
    </S.Container>
  )
}
