import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: ""
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(resp => resp.json())
    .then(transactionData => this.setState({
      transactions: transactionData
    }))
  }

  handleChange(term) {
    this.setState({
      search: "can't get this F'N STATE TO CHANGE"
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Search 
          handleChange={this.handleChange} 
          searchTerm={this.state.searchTerm}/>
        <TransactionsList 
          transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
