
import './App.css';

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
    </div>
  );
}
function Info(){
  const title = "This is a title variable."
  let showTime = false
  return (
   <div>
      {showTime ? title : "Show time was false."}
     <h1>This is the info page</h1>
     <p> Mange your stuff.</p>
   </div>
  )
}

function AddItem(){
  return (
    <form>
      <label for="text-form"> Type Something: </label>
      <input type="text" id="text-form" />
    </form>
  )
}

export default App;
