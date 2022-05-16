import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

 //segunda manera de hacerlo tratandolo como un objeto
// const [userInput, setUserInput] = useState({
//     //creamos las propiedades del objeto
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:'',
    
// });

//   const titleChangeHandler = (event) => {
//       //llamamos al metodo setUserInput y le pasamos la propiedad del titulo.
//       setUserInput((prevState) =>{
//         return{...prevState,enteredTitle:event.target.value};
//      });
//   }

//   const amountChangeHandler = (event) => {
//         setUserInput((prevState) =>{
//             return{...prevState,enteredAmount:event.target.value};
//          });
//    }
//    const dateChangeHandler = (event) => {
//     setUserInput((prevState) =>{
//        return{...prevState,enteredDate:event.target.value};
//     });
//    }

     
   const [enteredTitle, setEnteredTitle]= useState('');
   const [enteredAmount, setEnteredAmount]= useState('');
   const [enteredDate, setEnteredDate]= useState('');

   const amountChangeHandler = (event) => {
       setEnteredAmount(event.target.value);
   }
   const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
   }
   const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
}


const submitHandler= (event) => {
    //preventDefault evita que se envie la solicitud de forma predeterminada, tampo se recarga 
    //al recargar la pagina
    event.preventDefault();
    //creamos un objeto con los datos
    const expenseData ={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
    }; 
};
  
  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
            <label>Title</label>
            <input type='text' onChange={titleChangeHandler} />  
            </div>
            <div className="new-expense__control">
            <label>Amount</label>
            <input type='number' min="1" step="1" onChange={amountChangeHandler}/>  
            </div>
            <div className="new-expense__control">
            <label>Date</label>
            <input type='date' min="2019-01-0" onChange={dateChangeHandler} />  
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>

  );

}

export default ExpenseForm;
