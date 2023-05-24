import React, { useEffect, useState } from 'react'
import { LayautWhitNavBar } from '../../components/layaut/LayautWhitNavBar'
import { Field, Form } from 'react-final-form'
import { Card } from '../../components/commons/Card'
import { Titulo } from '../../components/commons/Titulo'
import { BiSave, BiArrowBack } from 'react-icons/bi'
import { useMatches } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const SaveOrUpdateProduct = () => {

  const [title, settitle] = useState('Nuevo Producto');

  const params = useMatches()
  const id = params[0].params.id;

  const { item, error, loading } = useSelector(state => state.products.current)

  useEffect(() => {
    if (id) {
      settitle("Editar Producto")
    }
  }, [])


  return (
    <LayautWhitNavBar>
      <Card>
        <Titulo text={title}></Titulo>
        <Form onSubmit={(values) => console.log(values)} initialValues={item}>
          {
            props => (
              <form onSubmit={props.handleSubmit}>
                <CustomField name={"descripcion"} textLabel={"Descripcion"} />
                <CustomField name={"capacidad"} textLabel={"Capacidad"} />
                <CustomField name={"urlImagen"} textLabel={"Imagen URL"} />
                <CustomField name={"precio"} textLabel={"Precio"} />
                <div className='grid grid-cols-2 gap-2'>
                  <button className='btn w-full' type="submit">
                    <BiSave size={20} /> <p className='mx-3'>Guardar</p>
                  </button>
                  <button className='btn w-full' type="submit">
                    <BiArrowBack size={20} /> <p className='mx-3'>Cancelar</p>
                  </button>
                </div>
              </form>
            )}
        </Form>
      </Card>
    </LayautWhitNavBar>
  )
}

export const CustomField = ({ name, textLabel, type = "text", placeholder, ...rest }) => {

  return (
    <Field name={name}>
      {({ input, meta }) => (
        <div className='flex  w-full justify-between my-3'>
          <label className='my-auto font-bold' >{textLabel}</label>
          <input className='input ' {...input} type={type} placeholder={placeholder ? placeholder : textLabel} {...rest} />
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      )}
    </Field>
  )
}
