import '../App.css';
import Form from '../componens/Form';
import useForm from '../hooks/useForm';
import Field from '../componens/Field';
import Submit from '../componens/Submit';
import TextArea from '../componens/Textarea';
import Select from '../componens/Select';
import { useEffect, useRef, useState } from 'react';

const EditUser = (props) => {
  const form = useRef()
  const [user, setUser] = useState({})
    // Use react router to modify the user dinamically
  const userNumber = props.userNumber

  useEffect(() => {
    fetch(`http://localhost:3050/leads/${userNumber}`)
    .then(resp => resp.json())
    .then(data => setUser(data))
  }, [])
  const fcurrent = form.current;

  const submit = e => {
    e.preventDefault()
    console.log(fcurrent.country)
    const data = {
      fullname: fcurrent.fullname.value,
      email: fcurrent.email.value,
      age: fcurrent.age.value,
      ranking: fcurrent.ranking.value,
      county: fcurrent.country.value,
      obs: fcurrent.obs.value,
      active: fcurrent.active.checked,
    }
    fetch(`http://localhost:3050/leads/${userNumber}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
      console.log(response)
      fcurrent.reset()
      alert("Se editó los datos del usuario")
    })
    .catch(err => console.log(err))
  }

  const deleteUser = () => {
    fetch(`http://localhost:3050/leads/${userNumber}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(response => {
      console.log(response)
      fcurrent.reset()
      alert("Se borró al usuario")
    })
    .catch(err => console.log(err))
  }

  return (
    <>
         <Form submit={submit} formRef={form}>
            <Field type="text" name="fullname" label="Nombres" value={user.fullname} />
            <Field type="email" name="email" label="Correo Electrónico"  value={user.email} />
            <Field type="number" name="age" label="Edad"  value={user.age} />
            <Field type="range" name="ranking" label="Calificación" value={user.ranking} />
            <TextArea name="obs"/>
            <Select name="country" label="País"  value={user.country} options={
                [
                {val: "bo", content: "Bolivia"}, 
                {val: "co", content: "Colombia"},
                {val: "pe", content: "Perú"}
                ]
            } />
            <Field type="checkbox" name="active" checked label="Activo?" value={user.active} />
            <Submit value="Guardar"/>
        </Form>
        <button onClick={deleteUser}>Delete user</button>
    </>
  );
}

export default EditUser;