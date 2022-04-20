import Frase from './Frase'
import SayMyName from './SayMyName'
import Ficha from './Ficha'

function HelloWorld () {

    return (
        <div>
            <h1> <Frase> Hello World </Frase> </h1>
            <h2> <Frase> Primeiro component </Frase> </h2>
            <h3> <Frase> <SayMyName name="Mariana"/> </Frase></h3>
            <Frase>teste</Frase>
            <div>
            <Ficha nome="Salazar" origem="Trindade" classe="Caçador"></Ficha>
            </div>
        </div>
    )

}

export default HelloWorld