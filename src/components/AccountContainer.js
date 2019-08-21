import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props)

   
    this.state = {
      transactions: [],
      searchTerm: ""
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  handleChange = (event) => {
    // your code here
    this.setState({
      searchTerm: event.target.value
    })
  }

  
  componentDidMount () {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(response => response.json())
    .then(data => {
      this.setState({
        transactions: data
      })
    })
  }


  



  render() {
    //this will filter by category if I then pass filteredTransactionList as props, but nothing else will render...
    //const filteredTransactionList = this.state.transactions.filter(transaction => (this.state.searchTerm === transaction.category))
    
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm}/>
      </div>
    )
  }
}

export default AccountContainer
