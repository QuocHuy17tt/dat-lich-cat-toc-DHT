import * as Yup from 'yup';
export const serviceValidate = Yup.object().shape({
    name: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    price: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    description: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    cate_id: Yup.string()
    .min(1, 'Too Short!')
    .required('Required'),
});