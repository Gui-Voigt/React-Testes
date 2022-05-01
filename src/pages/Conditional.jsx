
import {useState} from 'react'


function Conditional (){
    
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail()
    }

    return(
        <>
            
            <h1> Renderização condicional </h1>
            <h2> Cadastre o seu e-mail </h2>
            <form>
                <label name='email'>E-mail: </label>
                <input onChange={(e) => setEmail(e.target.value)}
                       type='email' 
                       name='email'    
                       id='email'
                       placeholder="exemplo@dominio.com">
                </input>
                {userEmail ?
                    <>
                        <button onClick={limparEmail}>Limpar e-mail</button> 
                        <p> o e-mail do usuário é: {userEmail}</p>
                    </>:
                        <button type="submit" onClick={enviarEmail}> Enviar e-mail</button>
                }

                {(userEmail == email) && (
                    <p>E-mail digitado já foi enviado</p>
                )} {/** Forma lógica de validar a primeira condição retornando a segunda, na pratica o exemplo é infuncional, só estou deixando para consulta*/}
                
            </form>
        </>
    )
}

export default Conditional