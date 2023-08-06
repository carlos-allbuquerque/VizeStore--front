import * as S from "./styles";
import { useState } from "react";
import PasswordField from "../PasswordField";
import handleSignUp from "../../utils/handleSubmit";

export default function SignUpForm() {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  return (
    <S.Form onSubmit={(e) => handleSignUp(e, newUser)}>

      <S.Input
        autoFocus
        type="email"
        placeholder="Email"
        onChange={e => setNewUser({ ...newUser, email: e.target.value })}
      />
      <PasswordField
        placeholder="Senha"
        fieldName="password"
        newUser={newUser}
        setNewUser={setNewUser}
      />
      <PasswordField
        placeholder="Confirme a Senha"
        fieldName="confirmPassword"
        newUser={newUser}
        setNewUser={setNewUser}
      />

      <S.Button type="submit">Cadastrar</S.Button>
    </S.Form>
  )
}
