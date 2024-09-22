import { object, string } from 'yup';

const signupSchema = object({
  username: string()
    .min(5, 'O nome deve ter pelo menos 5 caracteres')
    .max(50, 'O nome deve ter no máximo 50 caracteres')
    .required('O nome é um campo obrigatório'),
  
  email: string()
    .email('Deve ser um e-mail válido')
    .required('O e-mail é um campo obrigatório'),

  password: string()
    .min(5, 'A senha deve ter pelo menos 5 caracteres')
    .max(25, 'A senha deve ter no máximo 25 caracteres')
    .required('A senha é um campo obrigatório'),
});

export default signupSchema;
