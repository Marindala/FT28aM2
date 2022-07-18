import React from 'react';

export function validate(input) { //el input es el estado
  let errors = {}; // {username:'Username is required' }
  if (!input.username) {
    errors.username = 'Username is required';

  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if (!input.password) {
    errors.password = "Password is required"
  }else if (!/\S+@\S+\.\S+/.test(input.password)) {
    errors.password = 'Password is invalid';

  }
  return errors;

}



export default function  Form() {
 // const [username, setUsername] = React.useState('') //React.useState es otra forma para que pasen los test
 // const [password, setPassword] = React.useState('') //no es escalable 

  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });

  //input.username = "Javier"
  //input.password

  const [errors, setErrors] = React.useState({}); //estado donde se guardan los errores

  const handleInputChange = function(e) {
    setInput({ //el set define un nuevo estado
      ...input, //de lo que está en input
      [e.target.name]: e.target.value, //va a pisar lo que está en el input la , es un además
    });

    setErrors(
      validate({ //setea el estado de errores pasando validate devuelve un objeto vacio o con 2 propiedades: username y password
      ...input, //que llegue todo el input
      [e.target.name]: e.target.value 
    }));


  }
   
  const [showPass, setShowPass] = React.useState("password")

  return (
    <form>
    
    <div>
      <label>Username:</label> 
      <input 
      className={errors.username && 'danger'}
      type="text" 
      name="username" 
      value={input.username} 
      onChange={e => handleInputChange(e)} /> 

     {errors.username && (<p className="danger">{errors.username}</p>)}
      <br></br>

      <label>Password:</label>
      <input 
      className={errors.password && 'danger'}
      type={showPass}
      name='password' 
      value={input.password} 
      onChange={e => handleInputChange(e)} />

      <button onClick={() => setShowPass("text")}>Mostrar</button>

      {errors.password && (<p className="danger">{errors.password}</p>)}

      <input type="submit" value="Agregar" />
    </div>
    ...
    </form>
  )
}

//funciona también onChange={handleInputChange}


 // [evento.target.name]: evento.target.value, //evento.target.name es"username dentro de input
 //y evento.target.value es {username}=que es donde va el nombre
 //en password evento.target.name es = password y evento.target.value = ej 123456 (la contraseña que se ingrese)


//onChange es uno de los eventos de entrada más comunes en React
//onChange presta atencion a los cambios, cuando haya algun cambio llama a esta función.
//si yo no se que tengo dentro del evento hago un console.log
//el evento es información sobre lo que va pasando, puede contener de todo
//bindear= conectar, bloquear, generar un vínculo
// onChange={e => setUsername(e.target.value)} /> se agrega un nombre
//const [username, setUsername] = React.useState('')se guarda acá
//className={errors.username && 'danger'} si tenemos errores entonces aplica danger
//{errors.username && (<p className="danger">{errors.username}</p>)} si hay un error crea un parrafo que tenga
//una clase danger y que tenga de texto el mensaje de error
