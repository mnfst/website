import * as emailValidator from 'email-validator'

export interface ValidatorResult {
	[validatorName: string]: {
		error: boolean
		message?: string
	}
}

export type ValidatorFn = (value: any) => ValidatorResult

function required(value: any): ValidatorResult {
	if (value === '' || value === null) {
		return { required: { error: true, message: 'Field is required' } }
	}
	return null
}

function email(value: string): ValidatorResult {
	if (!emailValidator.validate(value)) {
		return { email: { error: true, message: 'Adresse e-mail invalide.' } }
	}
	return null
}

export const Validators = {
	required,
	email
}
