import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
// importante va dentro de la funcion del componente no dentro de las funciones anidadas.
//Se pude hacer una desestructuracion de matrices const [title, setTitle] para almacenar ambos valores
// title mostrara el valor anterior y setTitle el nuevo valor.
  const [title, setTitle] = useState(props.title);
 
  const clickHandler = () => {
    //llamamos a set title y le asignamos el nuevo valor.
   setTitle('Updated!');
   console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
}

export default ExpenseItem;
