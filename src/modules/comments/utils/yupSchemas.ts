import * as yup from 'yup'

export const validationSchema = yup.object().shape({
	body: yup.string().required()
})
