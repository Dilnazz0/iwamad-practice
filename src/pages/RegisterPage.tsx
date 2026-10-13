import { useState, type ChangeEvent, type SubmitEvent } from 'react'
import Button from '../components/ui/Button'
import { validateRegistration, type RegistrationValues } from '../lib/validateRegistration'

const initialValues: RegistrationValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
}

function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>(initialValues)
  const [registered, setRegistered] = useState(false)

  const errors = validateRegistration(values)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    if (Object.keys(errors).length === 0) {
      setRegistered(true)
    }
  }

  if (registered) {
    return (
      <main className="main">
        <p role="status">Thanks, {values.fullName}. You are registered.</p>
      </main>
    )
  }

  return (
    <main className="main">
      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={values.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="field-error">{errors.fullName}</p>}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="field-error">{errors.email}</p>}
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="field-error">{errors.password}</p>}
        </div>

        <div className="field">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="field-error">{errors.confirmPassword}</p>}
        </div>

        <div className="check">
          <input
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            checked={values.acceptTerms}
            onChange={handleChange}
          />
          <label htmlFor="acceptTerms">Accept the terms</label>
        </div>
        {errors.acceptTerms && <p className="field-error">{errors.acceptTerms}</p>}

        <Button type="submit">Create account</Button>
      </form>
    </main>
  )
}

export default RegisterPage