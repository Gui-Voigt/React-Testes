import Button from './Button'
function Evento(){

    var ativacoes = 0
    function meuEvento(){
        ativacoes += 1
        console.log("Opa, fui ativado"+ativacoes+"x!")
    }

    return(
        <>
            <p> Clique para dispara um evento: </p>
            <Button text="Ativar" event={meuEvento} />    
        </>
    )
}

export default Evento;