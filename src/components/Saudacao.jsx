function Saudacao ({nome}){
    
    return( <>
            {nome && <p> Bem vindo, {nome} </p> }
        </> )
}

export default Saudacao