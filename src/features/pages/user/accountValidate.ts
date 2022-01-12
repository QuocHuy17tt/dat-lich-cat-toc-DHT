import * as Yup from 'yup';
export const accountValidate = Yup.object().shape({
    username: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    fullname: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string()
    .email()
    .required('Required'),
    phone: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    address: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    role: Yup.number()
    .required('Required'),
});