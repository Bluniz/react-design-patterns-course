import { SplitScreen } from "./components/SplitScreen";
import { Split } from "./components/Split";

function App() {
  return (
    <div className="App">
      <Split
        wrap="wrap"
        gap={10}
        direction="column"
        maxWidth={500}
        height={500}
        itemsWeight={[2, 1, 1, 5, 1, 5]}
      >
        <div>tela 1</div>
        <div>tela 2</div>
        <div>tela 3</div>
        <div>tela 4</div>
        <div>tela 5</div>
        <div>tela 6</div>
      </Split>
    </div>
  );
}

export default App;
