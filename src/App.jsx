import Conditional from "./components/Conditional";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  const person = {
    name:"Rob",
    message: "Hi there",
    emoji: "👋",
    seatNumbers: [1,4,7]
  }
  return (
    <>
      {/* <Hello person={person}/> */}
      {/* <Fruits/> */}
      {/* {<Conditional/>} */}
      {/* <Message/> */}
      {/* <Counter/> */}
      <Form/>
    </>
  )
}

export default App
