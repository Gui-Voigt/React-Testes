import Item from './Item'

function List(){
    return(
        <>
            <h1> Minha lista</h1>
            <ul>
                <Item marca = "Toyota" lancamento = {2018}/>
                <Item marca = "BMW" lancamento = {2020} />
                <Item />
            </ul>
        </>


    )
}

export default List