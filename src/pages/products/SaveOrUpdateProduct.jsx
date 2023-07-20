import React, { useEffect, useState } from 'react'
import { LayautWhitNavBar } from '../../components/layaut/LayautWhitNavBar'
import { Field, Form } from 'react-final-form'
import { Card } from '../../components/commons/Card'
import { Titulo } from '../../components/commons/Titulo'
import { BiSave, BiArrowBack } from 'react-icons/bi'
import { useMatches, useNavigate, useNavigation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { formValidation } from '../../utils/Validations/FormValidation'
import { actionProduct } from '../../context/productSlice/ActionProducts'
import { STRING_ROUTES } from '../../../config/Routes'

export const SaveOrUpdateProduct = () => {

  const [title, settitle] = useState('Nuevo Producto');
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useMatches()
  const id = params[0].params.id;

  const { item, error, loading } = useSelector(state => state.products.current)

  useEffect(() => {
    if (id) {
      settitle("Editar Producto")
    }
  }, [])


  const onSubmit = async (values) => {
    console.log(values);
    actionProduct.saveOrUpdate(dispatch, values)
    if (!error && item) {
      navigate(STRING_ROUTES.PRODUCTS);
    }
  }

  return (
    <LayautWhitNavBar>
      <div className='w-96 mx-auto'>

        <Card>
          <Titulo text={title}></Titulo>
          <Form onSubmit={onSubmit} initialValues={item}>
            {
              props => (
                <form onSubmit={props.handleSubmit}>
                  <CustomField name={"descripcion"} textLabel={"Descripcion"} validate={formValidation.required} />
                  <CustomField name={"capacidad"} textLabel={"Capacidad"} validate={formValidation.required} />
                  <CustomField name={"urlImagen"} textLabel={"Imagen URL"} validate={formValidation.required} />
                  <CustomField name={"precio"} textLabel={"Precio"} validate={formValidation.required} type='number' />
                  <div className='grid grid-cols-2 gap-2'>
                    <button className='btn w-full' type="submit">
                      <BiSave size={20} /> <p className='mx-3'>Guardar</p>
                    </button>
                    <button className='btn gap-2'
                      onClick={() => {
                        if (id) {
                          navigate(STRING_ROUTES.PRODUCT.replace(':id', id))
                        } else {
                          navigate(STRING_ROUTES.PRODUCTS)
                        }
                      }}>
                      <BiArrowBack size={20} /> <p className='mx-3'>Cancelar</p>
                    </button>
                  </div>
                </form>
              )}
          </Form>
        </Card>
      </div>
    </LayautWhitNavBar>
  )
}

export const CustomField = ({ name, textLabel, type = "text", placeholder, validate, ...rest }) => {

  return (
    <Field name={name} validate={validate}>
      {({ input, meta }) => (
        <div className='w-full  my-3'>
          <div className='flex justify-between'>
            <label className='my-auto font-bold' >{textLabel}</label>
            <input className={`input  input-bordered ${meta.error && meta.touched ? 'input-error' : ''}`} {...input} type={type} placeholder={placeholder ? placeholder : textLabel} {...rest} />
          </div>
          <div className='text-center'>
            {meta.error && meta.touched && <span className='text-error  text-center'>*{meta.error}</span>}
          </div>
        </div>
      )}
    </Field>
  )
}
