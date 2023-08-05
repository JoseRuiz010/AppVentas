import React from 'react'
import { Field } from 'react-final-form'

export const InputGroup = ({ label, placeholder = '', name, validation, type = 'text' }) => {
  return (
    <div className='mb-5'>
      <Field name={name} validate={validation}>
        {({ input, meta }) => (
          <div className='w-full'>
            <label className='text-lg '>{label}</label>
            <input {...input} type={type} placeholder={placeholder} className="input input-bordered w-full" />
            {meta.error && meta.touched && <span className='text-red-500 text-left'>*{meta.error}</span>}
          </div>
        )}
      </Field>
    </div>
  )
}
