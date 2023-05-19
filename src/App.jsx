import { useEffect } from 'react';
import { encode, decode } from 'base-64'
import { Tabla } from './components/Tabla';
import { useSelector, useDispatch } from 'react-redux'
import { deletteToken } from './context/authSlice/AuthSlice';
import { RequestAxios } from './Request/FetchRequest';
import { logout } from './context/authSlice/ServiceAuth';
import { LayautWhitNavBar } from './components/layaut/LayautWhitNavBar';

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
    <LayautWhitNavBar>
      <h1 className="text-4xl font-bold underline">
        Hello world!
        <button onClick={() => logout(dispatch)}>Logout</button>
      </h1>
      <h3 className='font-bold text-2xl bg-blue-500'>Products</h3>
      <div className='bg-red-200'>
        sad
      </div>
    </LayautWhitNavBar>
  )
}

export default App
