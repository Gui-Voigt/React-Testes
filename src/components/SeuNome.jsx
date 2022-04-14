function SeuNome( {setNome} ){
    return(
        <>
            <p> Insira seu nome a baixo:</p>
            <input
                type = "text"
                placeholder = "Qual seu nome?"
                onChange = { (e) => setNome(e.target.value) }
            />
        </>
    )
}

export default SeuNome