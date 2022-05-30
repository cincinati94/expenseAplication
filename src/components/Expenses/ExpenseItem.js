import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
// importante va dentro de la funcion del componente no dentro de las funciones anidadas.
//Se pude hacer una desestructuracion de matrices const [title, setTitle] para almacenar ambos valores
// title mostrara el valor anterior y setTitle el nuevo valor.
  // const [title, setTitle] = useState(props.title);
 


  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
   
    </Card>
  );
}

export default ExpenseItem;
