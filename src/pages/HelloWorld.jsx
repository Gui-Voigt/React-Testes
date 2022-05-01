import Frase from '../components/Frase'
import SayMyName from '../components/SayMyName'
import Ficha from '../components/Ficha'


function HelloWorld (){
    return(
        <>
            <h1> <Frase> Hello World </Frase> </h1>
            <h2> <Frase> Primeiro component </Frase> </h2>
            <h3> <Frase> <SayMyName name="Guilherme"/> </Frase></h3>
            <Frase>teste</Frase>
            <div>
            <Ficha nome="Salazar" origem="Trindade" classe="Caçador"></Ficha>
            </div>
        </>
    )
}

export default HelloWorld