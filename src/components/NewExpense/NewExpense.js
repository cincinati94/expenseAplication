import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
const saveExpenseDataHandler= (enteredExpenseData) =>{
  const expenseData = {
  ...enteredExpenseData,
  id:Math.random().toString()
};
//props.addExpenseItem(expenseData);
props.addExpenseItem((prevState)=>{return [...prevState,expenseData]});
console.log(expenseData);
}

    return (
      <div className="new-expense">
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div> 
    );

}

export default NewExpense;