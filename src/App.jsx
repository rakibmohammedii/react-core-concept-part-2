

import './App.css'
import Counter from './counter';
import Friends from './friends';
import Team from './team';
import Users from './users';

function App() {
 function handleClick() {
  alert('button clicked');
 }
 const handleClick2 = () => {
  alert('button2 clicked');
 }

const addToFive =(num) =>{
  alert(num + 5)
}



  return (
    <>
      
      <h2>React Core Concepts  part 02</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click Me !</button>
      <button onClick={handleClick2}> Button 2</button>
      <button onClick={() => { alert('button 3 clicked');}}> Button 3</button>
      <button onClick={ () => addToFive(3)}>Button 4</button>
    </>
  )
}

export default App
 