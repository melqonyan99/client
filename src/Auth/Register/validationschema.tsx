import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    useremail: yup.string()
        .email()
        .label('Email')
        .required(),
    userpassword: yup
        .string() 
        .label('Password')
        .required()
        .min(2, 'Seems a bit short...')
        .max(10, 'We prefer insecure system, try a shorter password.'),
    confirm: yup 
        .string()
        .required()
        .label('Confirm password')
        .test('passwords-match', 'Passwords must be match', function (value) {
            return this.parent.userpassword === value;
        }),
    username: yup.string()
        .required() 
        .label('Name')
});