import '../App.css';
import Form from '../componens/Form';
import useForm from '../hooks/useForm';
import Field from '../componens/Field';
import Submit from '../componens/Submit';
import TextArea from '../componens/Textarea';
import Select from '../componens/Select';
import { useRef } from 'react';

const NewUser = () => {
  // const [data, loginForm, submit] = useForm({ email: "", password: "", obs:""})
  const form = useRef()

  const submit = e => {
    e.preventDefault()
    const fcurrent = form.current;
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
    fetch("http://localhost:3050/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
      console.log(response)
      fcurrent.reset()
      alert("Los datos fueron guardados")
    })
    .catch(err => console.log(err))
  }

  return (
    <Form submit={submit} formRef={form}>
      <Field type="text" name="fullname" label="Nombre"/>
      <Field type="email" name="email" label="Correo Electrónico"  />
      <Field type="number" name="age" label="Edad"  />
      <Field type="range" name="ranking" label="Calificación" />
      <TextArea name="obs"/>
      <Select name="country" label="País"  options={
        [
          {val: "bo", content: "Bolivia"}, 
          {val: "co", content: "Colombia"},
          {val: "pe", content: "Perú"}
        ]
      } />
      <Field type="checkbox" name="active" checked label="Activo?" />
      <Submit value="Guardar"/>
    </Form>
  );
}

export default NewUser;