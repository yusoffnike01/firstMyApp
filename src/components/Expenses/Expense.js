import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from "../ExpenseFilter/ExpensesFIlter";
import { useState } from "react/cjs/react.development";

const  Expenses=(props)=> {
  const [filteredYear, setFilteredYear]= useState('2020');
  const filterCHangeHandler = selectedYear=>{
    setFilteredYear(selectedYear);
  }

  const filterExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

  return (
    
    <Card className='expenses'>

      <ExpensesFilter selected={filteredYear} onChangeFilter={filterCHangeHandler}/>
      {filterExpenses.length===0? <p>No Expenses Found </p>: filterExpenses.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
      )) }
     
    
    </Card>
  )

}
export default Expenses;