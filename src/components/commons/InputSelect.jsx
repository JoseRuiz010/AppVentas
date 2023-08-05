import React from 'react'
import { Field } from 'react-final-form'

export const InputSelect = ({ label, placeholder = '', name, validation, options }) => {
  return (
    <div className='mb-5'>
      <Field name={name} validate={validation}>
        {({ input, meta }) => (
          <div className='flex flex-col'>
            <label className='text-lg'>{label}</label>
            <select {...input} className='select select-bordered' name={name} placeholder={placeholder}>
              <option value={null}>Seleccionar...</option>
              {
                options && options.map(op => <option value={op.value}>{op.name}</option>)
              }
            </select>
            {meta.error && meta.touched && <span className='text-red-500 text-left'>*{meta.error}</span>}
          </div>
        )}
      </Field>
    </div>
  )
}
