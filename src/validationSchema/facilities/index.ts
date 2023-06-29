import * as yup from 'yup';

export const facilityValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  client_id: yup.string().nullable(),
});
