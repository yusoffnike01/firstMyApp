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

  return (
    
    <Card className='expenses'>

      <ExpensesFilter selected={filteredYear} onChangeFilter={filterCHangeHandler}/>
      {props.items.map((expense) => (
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
      ))}
    
    </Card>
  )

}
export default Expenses;