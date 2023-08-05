import { useEffect } from 'react';
import { encode, decode } from 'base-64'
import { Tabla } from './components/Tabla';
import { useSelector, useDispatch } from 'react-redux'
import { deletteToken } from './context/authSlice/AuthSlice';
import { RequestAxios } from './Request/FetchRequest';
import { logout } from './context/authSlice/ServiceAuth';
import { LayautWhitNavBar } from './components/layaut/LayautWhitNavBar';
import { Home } from './pages/Home';

function App() {
  return (
    <LayautWhitNavBar>
      <Home />
    </LayautWhitNavBar>
  )
}

export default App
