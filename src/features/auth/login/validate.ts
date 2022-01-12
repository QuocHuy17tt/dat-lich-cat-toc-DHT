import * as Yup from 'yup';
export const adminLoginValidate = Yup.object().shape({
    username: Yup.string()
    .min(6, 'Quá ngắn!')
    .max(50, 'Quá dài!')
    .required('Vui lòng nhập thông tin'),
    password: Yup.string()
    .min(6, 'Quá ngắn!')
    .max(50, 'Quá dài!')
    .required('Vui lòng nhập thông tin'),
});