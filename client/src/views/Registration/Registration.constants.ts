import { object, string } from 'yup';

import { getRequiredError, getMinPasswordError } from 'src/utils';

export const registrationSchema = object({
  username: string().required(getRequiredError()),
  firstname: string().required(getRequiredError()),
  lastname: string().required(getRequiredError()),
  password: string().required(getRequiredError()).min(8, getMinPasswordError(8)),
});
