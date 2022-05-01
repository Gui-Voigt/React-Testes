function OutraLista( props ){
const itens = props.itens
const frase = props.children


    return(
        <>
            <h3>{frase}</h3>
            {itens.length > 0 ?(
                itens.map((item, index) => ( 
                    <p key={index}> {item} </p>
                ))) : (
                    <p>Não há itens na lista</p>
                )}
        </>
    )

}
export default OutraLista