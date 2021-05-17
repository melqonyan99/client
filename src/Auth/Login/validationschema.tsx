import * as yup from 'yup'

export const validationSchema = yup.object().shape({
    useremail: yup.string()
        .email()
        .label('email')
        .required(),
    userpassword: yup
        .string()
        .label('Password')
        .required()
        .min(4, 'Seems a bit short...')
});