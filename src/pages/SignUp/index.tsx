import * as S from "./styles";
import SignUpForm from "../../components/SignUpForm";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <S.Page>
      <S.Content>
        <S.Title>Cadastro</S.Title>
        <SignUpForm />
        <S.Text >Já possui uma conta? <S.NavigateText onClick={() => navigate("/")}>Faça login</S.NavigateText> </S.Text>
      </S.Content>
    </S.Page>
  )
}
