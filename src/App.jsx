import { useEffect, useState } from "react";
import "./styles.scss";

function Square({ id, change }) {
  const [localStatus, setLocalStatus] = useState(false);

  function updateStatus() {
    setLocalStatus(!localStatus);
    change(id);
  }

  return (
    <div
      className="square"
      style={{ background: localStatus ? "green" : "white" }}
      onClick={() => updateStatus()}
    ></div>
  );
}

export default function App() {
  const [stack, setStack] = useState([]);

  function handleState(id) {
    const indexSquare = stack.findIndex((value) => value === id);

    if (indexSquare === -1) {
      setStack((oldStack) => [...oldStack, id]);
    } else {
      setStack(stack.filter((value) => value !== id));
    }
  }

  useEffect(() => {
    if (stack.length === 7) {
      //[6,2,4,1,3,0,5]
      for (let i = stack.length - 1; i >= 0; i--) {
        setTimeout(() => {
          console.log("removi", stack[i]);
        }, 500);
      }
    }
  }, [stack]);

  return (
    <div className="App">
      <div>
        <Square id={0} change={handleState} />
        <Square id={1} change={handleState} />
        <Square id={2} change={handleState} />
      </div>
      <div>
        <Square id={3} change={handleState} />
      </div>
      <div>
        <Square id={4} change={handleState} />
        <Square id={5} change={handleState} />
        <Square id={6} change={handleState} />
      </div>
    </div>
  );
}
