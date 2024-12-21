import Conditional from "./components/Conditional";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";

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
      {<Conditional/>}
    </>
  )
}

export default App
