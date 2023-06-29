import * as yup from 'yup';

export const visitorValidationSchema = yup.object().shape({
  name: yup.string().required(),
  facility_id: yup.string().nullable(),
});
