import { useSelector } from 'react-redux'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import * as S from './styles'
import { RootState } from '../../store'

const Header = () => {
  const itens = useSelector((state: RootState) => state.produto.itens)
  const favoritos = useSelector((state: RootState) => state.produto.favoritos)

  const valorTotal = itens.reduce(
    (acumulador: number, valorItemAtual: { preco: number }) => {
      return acumulador + valorItemAtual.preco
    },
    0
  )

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
