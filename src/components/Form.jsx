import { useState } from 'react'

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault() //para o processo padrão para que o código a seguir seja executado
        console.log(name)
        console.log(`Usuário ${name} cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <>
        <h1> MEU CADASTRO: {name} </h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    onChange={(e) => setName(e.target.value)} 
                    id="name" 
                    name="name" 
                    type="text" 
                    placeholder="Digite o seu nome" 
                />
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    id="password" 
                    name="password" 
                    type="password" 
                    placeholder="Digite sua senha" 
                />
            </div>
            <div>
                <input type="submit" value="Cadastrar" />
            </div>            
        </form>
        </>
    )
}

export default Form