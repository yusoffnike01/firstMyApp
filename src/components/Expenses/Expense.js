import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from "../ExpenseFilter/ExpensesFIlter";
import React, {useState} from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

const  Expenses=(props)=> {
  const [filteredYear, setFilteredYear]= useState('2020');
  const filterCHangeHandler = selectedYear=>{
    setFilteredYear(selectedYear);
  }

  const filterExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

  
  return (
    <li>
    <Card className='expenses'>

      <ExpensesFilter selected={filteredYear} onChangeFilter={filterCHangeHandler}/>
      <ExpensesChart expense={filterExpenses}/>
   <ExpensesList items={filterExpenses}/>
    
    </Card>
    </li>
  )

}
export default Expenses;