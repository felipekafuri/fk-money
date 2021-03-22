import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { api } from '../services/api'

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  created_at: string
}
// type TransactionInput = Pick<
//   Transaction,
//   'title' | 'amount' | 'type' | 'category'
// >

type TransactionInput = Omit<Transaction, 'id' | 'created_at'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transactions: TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({
  children
}: TransactionsProviderProps): JSX.Element {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(
    transactionInput: TransactionInput
  ): Promise<void> {
    const response = await api.post('/transactions', {
      ...transactionInput,
      created_at: new Date()
    })
    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}
