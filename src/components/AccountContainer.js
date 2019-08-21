import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()


      this.state = {
        transactions: transactions, 
        copiedTransactionsArr: [],
        description: ''
      }


      // get a default state working with the data imported from TransactionsData
      // use this to get the functionality working
      // then replace the default transactions with a call to the API
    }

    componentDidMount() {
      fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(resp => resp.json())
      .then(transactionObj => {
        this.setState({
          transactions: transactionObj, 
          copiedTransactionsArr: transactionObj
        })
      })
    }
    

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value 
    }, () => console.log(value, name))
  }    
  


  searchFunc = (description, e) => {
    this.state = description
    const term = this.state.copiedTransactionsArr.filter(transaction => e.id  !== transaction.id) 
    this.setState({
      copiedTransactionsArr: term
    }, () => console.log(description, e, term)
    ) 
      

      ///Separate func to set state onClick event 
      //   handleClick = () => {
      //   this.setState({
      //     copiedTransactionsArr: term
      //   })         
      // }
  }
  
  
  
  render() {

    return (
      <div>
        <Search 
        handleChange={this.handleChange}
        searchFunc={this.searchFunc}
        // handleClick={this.handleClick} 
        />

        <TransactionsList
          transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
