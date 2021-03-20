import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal'
import { useState } from 'react'

Modal.setAppElement('#root')

export function App(): JSX.Element {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  )

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
    </>
  )
}
