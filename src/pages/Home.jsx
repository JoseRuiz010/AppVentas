import React, { useEffect } from 'react'
import { Card } from '../components/commons/Card'
import { useDispatch, useSelector } from 'react-redux'
import { actionCuenta } from '../context/cuentaSlice/ActionCuenta'
import { actionProduct } from '../context/productSlice/ActionProducts'
import { Form } from 'react-final-form'
import { InputGroup } from '../components/commons/InputGroup'
import { InputSelect } from '../components/commons/InputSelect'

export const Home = () => {
  const dispatch = useDispatch()
  const { cuentas, products } = useSelector(state => state)

  const { items: itemsCuentas, error: errorCuentas, loading: loadingCuentas } = cuentas.list
  const { items: itemsProducts, error: errorProducts, loading: loadingProducts } = products.list

  useEffect(() => {
    getCuentas();
    getProductos();
  }, [])

  const getCuentas = async () => actionCuenta.GetAll(dispatch)
  const getProductos = async () => actionProduct.GetAll(dispatch)

  const onSubmit = (values) => console.log(values);
  return (
    <div className='max-w-xl mx-auto'>
      <Card >
        <h1 className='font-bold text-xl text-center'>Registrar</h1>
        <Form onSubmit={onSubmit}
          component={FormRegistrar}
          cuentas={itemsCuentas?.map(c => ({ name: c?.cliente?.name + " " + c?.cliente?.lastName, value: c.id }))}
          productos={itemsProducts?.map(c => ({ name: c?.descripcion, value: c.id }))}
          cantidad={Array.from({ length: 10 }, (_, index) => ({ name: index + 1, value: index + 1 }))} />
      </Card>
    </div>
  )
}

const FormRegistrar = ({ handleSubmit, cuentas, productos, cantidad }) => {

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-96 mx-auto mt-5 p-4'>
      {/* <InputGroup label={"Nombre"} name={"nombre"} placeholder='ingrese el nombre' /> */}
      <InputSelect label={"Cuenta"} name={"cuenta"} options={cuentas} />
      <InputSelect label={"Productos"} name={"prroducto"} options={productos} />
      <InputSelect label={"Cantidad"} name={"cantidad"} options={cantidad} />
      <button className='btn' type='submit'>Agregar</button>
    </form>
  )
}
