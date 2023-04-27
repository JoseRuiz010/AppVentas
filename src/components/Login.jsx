import { Form } from "react-final-form"
import { useDispatch, useSelector } from "react-redux"
import { deleteError, setError, setToken } from "../context/authSlice/AuthSlice"
import { Card } from "./commons/Card"
import { Titulo } from "./commons/Titulo"
import { InputGroup } from "./commons/InputGroup"

export const Login = () => {
  const { token, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const submit = (values) => getData(values)

  const getData = async (values) => {
    const data = await fetch(
      'http://localhost:8090/auth/login/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      }).then(res => {
        return res.json()
      })
      .then(res => {
        dispatch(setToken(res.data.token))
        dispatch(deleteError())
      })
      .catch((err) => dispatch(setError("Error al iniciar Session: " + err)))

  }

  return (
    <div>
      <Card >
        <Titulo text={'Login'} />
        <br />
        <Form onSubmit={submit}>
          {
            props => (
              <form className="flex flex-col mx-auto  gap-3 w-10/12" onSubmit={props.handleSubmit}>
                <InputGroup label={"Username"} name={"username"} placeholder="Username" />
                <InputGroup label={"Password"} name={"password"} placeholder="Password" />
                <button className="btn mt-3 w-11/12 mx-auto" type="submit">Inicias Session</button>
              </form>
            )
          }
        </Form>
        <h1>{JSON.stringify(token, error)}</h1>
        {error && <span className="text-red-400 font-bold text-center text-xl my-3">{error}</span>}
      </Card>
    </div>
  )
}
