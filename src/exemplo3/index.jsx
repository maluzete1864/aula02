import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario,setUsuario] = useState([]);

  useEffect(() => { 

    const resultadosUsuario = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUsuario(dados)
    }
    resultadosUsuario();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {
            usuario.map(resultado => (
              <p>{resultado.gender}</p>

            ))}
      </ul>
    </>
  );
}
