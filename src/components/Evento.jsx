function Evento(){

    var ativacoes = 0
    function meuEvento(){
        ativacoes += 1
        console.log("Opa, fui ativado"+ativacoes+"x!")
    }

    return(
        <>
            <p> Clique para dispara um evento: </p>
            <button onClick={meuEvento}>Ativar!</button>        
        </>
    )
}

export default Evento;