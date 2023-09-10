
import './App.css'
import Counter from './Counter'
import Friends from './Friends'

function App() {
  function handleClick(num) {
    console.log(num+4)
  }

  return (
    <>
      <h3> explore-react-core-concepts-parts2</h3>
      <button onClick={() => handleClick(6)}>Click Me</button>
      <Counter></Counter> <br />
      <Friends></Friends>
    </>
  )
}

export default App
