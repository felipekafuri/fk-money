import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'

import { Container } from './styles'

export function Dashboard(): JSX.Element {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}
