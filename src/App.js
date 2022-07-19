import Draggable from './Draggable'

function App() {

  const element = <input type="text" placeholder="hello world"/>

  return (
    <Draggable childElement={element}/>
  );
}

export default App;
