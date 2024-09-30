import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario, setUsuario] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
        const resposta   = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dados      = await  resposta.json              ;
        setUsuario(dados);
    }
    buscarUsuario();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {
          usuario.map(usuario => (
            <li key={usuario.userId}>
            <p>{usuario.id}</p>;
            <h1>{usuario.tittle}</h1>;
            <p>{usuario.completed}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
