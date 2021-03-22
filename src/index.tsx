import { createServer, Model } from 'miragejs'
import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import { GlobalStyle } from './styles/global'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'AnjoAnimal App',
          amount: 69000,
          type: 'deposit',
          category: 'Dev',
          created_at: new Date()
        },
        {
          id: 2,
          title: 'Hamburger',
          amount: 70,
          type: 'withdraw',
          category: 'Comida',
          created_at: new Date()
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)
