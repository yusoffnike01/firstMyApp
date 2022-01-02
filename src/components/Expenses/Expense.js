import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from "../ExpenseFilter/ExpensesFIlter";
import { useState } from "react/cjs/react.development";
import ExpensesList from "./ExpensesList";

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
   <ExpensesList items={filterExpenses}/>
    
    </Card>
    </li>
  )

}
export default Expenses;