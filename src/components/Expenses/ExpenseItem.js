/** @format */

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import React, {useState} from 'react';

const  ExpenseItem=(props)=> {

  const [title, setTitle]=useState(props.title)

  const clickHandler =()=>{
    setTitle('Updated!!')
    console.log(title);
  }
  return (
    <div className='expense-item'>
     <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </div>
   );
}

export default ExpenseItem;
