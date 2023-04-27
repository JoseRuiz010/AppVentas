import { useEffect } from 'react';
import './App.css'
import { encode, decode } from 'base-64'
import { Tabla } from './components/Tabla';
import { useSelector, useDispatch } from 'react-redux'
import { deletteToken } from './context/authSlice/AuthSlice';
function App() {
  const token = useSelector((state) => state.auth)

  useEffect(() => {
    if (token.token) {
      getData();
    }
  }, [token])

  const getData = async () => {
    const res = await fetch('http://localhost:8090/producto/'
      , { headers: { "Authorization": token.token } })
    const data = await res.json()
    console.log(data)
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
