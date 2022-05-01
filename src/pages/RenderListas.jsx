import OutraLista from '../components/OutraLista'

function RenderListas () {

    const meusItens = ['React', 'Vue', 'Angular']  
    
    return(
        <>
          <h2> Renderização de Listas </h2>
          <OutraLista itens={meusItens}> Lista de frameworks/biblotecas:</OutraLista>
          <OutraLista itens={[]}> Lista vazia:</OutraLista>
        </>
    )
}

export default RenderListas