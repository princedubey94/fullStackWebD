import Person from "./Person";
import Button from "./Button";
import Header from "./Header";
import List from "./List";
function App() {
  return (
      <>
        <Person name="Prince" age="21"/>
        <Button text="click me" fun={()=>alert("clicked")}/>
        <Header heading="REACT"/>
        <List items={["a","b","c","d"]}/>
      </>
  );
}

export default App;
