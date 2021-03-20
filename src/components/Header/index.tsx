import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({
  onOpenNewTransactionModal
}: HeaderProps): JSX.Element {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="fk money" />

        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
