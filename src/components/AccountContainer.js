import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactions: [],
    copiedTransactions: [],
    search: ""
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res => res.json())
      .then(data => {
        const transactions = data.map(trans => {
          const {id, posted_at, description, category, amount} = trans
          return {
            id: id,
            postedAt: posted_at,
            description: description,
            category: category,
            amount: amount
          }
        })

        this.setState({
          transactions: transactions,
          copiedTransactions: transactions
        })

      })
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  filterTransactions = () => {
  return this.state.copiedTransactions.filter(trans => trans.description.includes(this.state.search))
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}
                value={this.state.search}/>
        <TransactionsList trans={this.filterTransactions()} />
      </div>
    )
  }
}

export default AccountContainer
