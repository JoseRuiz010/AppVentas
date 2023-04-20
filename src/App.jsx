import { useEffect } from 'react';
import './App.css'
import { encode, decode } from 'base-64'
import { Tabla } from './components/Tabla';
function App() {
  const headers = new Headers();
  // headers.append("Authorization", "Basic " + encode("admin:1234"))
  // console.log("Authorization", "Basic " + encode("admin:1234"))

  // useEffect(() => {
  //   getData();
  // }, [])

  // const getData = async () => {
  //   const res = await fetch('http://localhost:8090/producto/10'
  //     , { headers: { "Authorization": "Basic " + encode("admin:1234") } })
  //   const data = await res.json()
  //   console.log(data)S
  // }

  return (
    <h1 className="text-4xl font-bold underline">
      Hello world!
      <Tabla />
    </h1>
  )
}

export default App
