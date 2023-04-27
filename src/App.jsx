import { useEffect } from 'react';
import './App.css'
import { encode, decode } from 'base-64'
import { Tabla } from './components/Tabla';
import { useSelector, useDispatch } from 'react-redux'
import { deletteToken } from './context/authSlice/AuthSlice';
import axios from 'axios';
import { RequestAxios } from './Request/FetchRequest';
function App() {
  const token = useSelector((state) => state.auth)

  useEffect(() => {
    if (token.token) {
      getData();
    }
  }, [token])

  const getData = async () => {

    const url = '/producto/1'
    RequestAxios(
      {
        url,
        authToken: token.token,
        method: 'GET',
      }
    )
  }


  const dispatch = useDispatch()
  return (
    <h1 className="text-4xl font-bold underline">
      Hello world!

      <button onClick={() => dispatch(deletteToken())}>Logout</button>
      <Tabla />
    </h1>
  )
}

export default App
