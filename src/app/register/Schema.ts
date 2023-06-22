import { object, string, ref } from 'yup';

const required = 'this field is required';

let registerSchema = object({
  email: string().email().required(required),
  password: string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .required(required),

  passwordConfirm: string().oneOf([ref('password')], 'Passwords must match'),
});

export default registerSchema;
