export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  nome: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function validateLogin({ email, password }: LoginData) {
  const errors: string[] = [];

  if (!email.trim()) errors.push("Por favor, preencha o e-mail.");
  if (!password.trim()) errors.push("Por favor, preencha a senha.");

  return errors;
}

export function validateRegister({
  nome,
  email,
  password,
  confirmPassword,
}: RegisterData) {
  const errors: string[] = [];

  if (!nome.trim()) errors.push("Por favor, preencha o nome.");
  if (!email.trim()) errors.push("Por favor, preencha o e-mail.");
  if (!password.trim()) errors.push("Por favor, preencha a senha.");
  if (password && password.length < 8)
    errors.push("A senha deve ter pelo menos 8 caracteres.");
  if (password !== confirmPassword) errors.push("As senhas devem ser iguais.");

  return errors;
}
