import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((expenseItem) => (<ExpenseItem
      //cuando se mapean listas es aconsejable poner una key con el valor que decidamos para evitar errores en consola
        key={expenseItem.id}
        title={expenseItem.title}
        amount={expenseItem.amount}
        date={expenseItem.date}
      />))}
    </Card>
  );
}

export default Expenses;
