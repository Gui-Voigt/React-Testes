function Form(){

    function cadastrarUsuario(e){
        e.preventDefault() //para o processo padrão para que o código a seguir seja executado
        console.log("Usuário cadastrado")
    }
    return(
        <>
        <h1> MEU CADASTRO:</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <input type="text" placeholder="Digite o seu nome" />
            </div>
            <div>
                <input type="submit" value="Cadastrar" />
            </div>            
        </form>
        </>
    )
}

export default Form