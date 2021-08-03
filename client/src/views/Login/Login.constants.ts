import { object, string } from 'yup';

import { getRequiredError } from 'src/utils';

export const loginSchema = object({
  username: string().required(getRequiredError()),
  password: string().required(getRequiredError()),
});
