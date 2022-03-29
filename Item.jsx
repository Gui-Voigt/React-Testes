import PropTypes from 'prop-types'

function Item ({marca, lancamento}){
    return(
        <>
            <li> {marca} - {lancamento} </li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string, //informa que a prop marca deve ser string
    lancamento : PropTypes.number.isRequired //informa que lancamento deve ser number e é obrigatória
}

Item.defaultProps = {
    marca: "Faltou a marca",
    lancamento: 2010
} //Define valores padrões

export default Item