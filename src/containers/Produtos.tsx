import { RootState } from '../store'
import { useSelector } from 'react-redux'
import { ProdutoType } from '../App'
import { useGetSportsQuery } from '../services/api'
import Produto from '../components/Produto'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: sports } = useGetSportsQuery()
  const { itens } = useSelector((state: RootState) => state.produto)
  const { favoritos } = useSelector((state: RootState) => state.produto)

  const estaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((item: ProdutoType) => item.id)
    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {sports?.map((item) => (
          <Produto
            estaNosFavoritos={estaNosFavoritos(item)}
            key={item.id}
            produto={item}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
