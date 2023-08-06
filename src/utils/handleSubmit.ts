import axios, { AxiosError } from "axios";
import { SignUpSchema } from "../schemas/AuthSchema";
import toast from "react-hot-toast";
import { ZodError } from "zod";
import { newUser } from "../types/UserTypes";

export default async function handleSignUp(
  e: React.FormEvent<HTMLFormElement>,
  newUserData: newUser
) {
  e.preventDefault();
  const url = `${import.meta.env.VITE_BASE_URL}signup`;

  try {
    SignUpSchema.parse(newUserData);

    if (newUserData.password !== newUserData.confirmPassword) {
      throw new Error("As senhas devem ser iguais.");
    }

    await axios.post(url, newUserData);

    toast.success("Cadastro realizado com sucesso.");
  } catch (error: any) {
    if (error instanceof ZodError) {
      return error.errors.forEach((e) => toast.error(e.message));
    }

      if (error.message === "As senhas devem ser iguais.") {
      return toast.error("As senhas devem ser iguais.");
    }

    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case 401:
          toast.error("Credenciais inválidas! Por favor cheque os dados inseridos.");
          break;
        case 409:
          toast.error("Esse email já está em uso.");
          break;
        default:
          toast.error("Algo deu errado. Por favor tente novamente.");
      }
      return;
    }

    toast.error("Algo deu errado. Por favor tente novamente.");
  }
}
