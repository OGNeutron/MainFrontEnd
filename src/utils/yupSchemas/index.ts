import * as Yup from 'yup'

export const ProfileDetailValidationSchema = Yup.object().shape({
	username: Yup.string(),
	oldPassword: Yup.string(),
	newPassword: Yup.string()
})
