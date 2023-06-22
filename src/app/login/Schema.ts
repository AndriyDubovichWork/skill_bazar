import { object, string } from 'yup';

const required = 'this field is required';

let loginSchema = object({
  email: string().email().required(required),
  password: string().required(required),
});

export default loginSchema;
