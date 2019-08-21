import React from 'react'

const Search = (props) => {

  // console.log(props.handleChange);
  // console.log(props.searchFunc);
  // console.log(props.handleClick);
  // onClick={() => props.handleClick()}
  


  return (
    <div className="ui huge fluid icon input">
      <input searchFunc={(e) => props.searchFunc(e)} onChange={(event)=> props.handleChange(event)}
        type="text" name= 'description' value={props.description}
        placeholder={"Search your Recent Transactions"}
      /> 
        
      <i className="circular search link icon"></i>
      </div>
      )
}

export default Search
