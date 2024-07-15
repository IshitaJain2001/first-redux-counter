import { useDispatch, useSelector } from "react-redux";


function App() {
 const global = useSelector(state=>state)
 console.log(global)
 const dis1= useDispatch()
  return (
    <div className="App">
    <p>{global.count}</p>
    <button onClick={()=>dis1({
type:"incre"
    })}>
      inc
    </button>
    <button onClick={()=>dis1({
type:"decre"
    })}>
      dec
    </button>
    </div>
  );
}

export default App;
