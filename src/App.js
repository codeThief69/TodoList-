import { useEffect, useState } from "react";
import Button from "./components/Button";
import TodoItem from "./components/TodoItem";

function App() {
  let [inputValue, setInputValue] = useState("");
  let [todoItems, setTodoItems] = useState(
    localStorage.getItem("TodoItems") === null
      ? []
      : JSON.parse(localStorage.getItem("TodoItems"))
  );
  useEffect(() => {
    localStorage.setItem("TodoItems", JSON.stringify(todoItems ?? []));
  }, [todoItems]);
  function AddTodoItem() {
    if (inputValue !== "") {
      setTodoItems([
        ...todoItems,
        { text: inputValue, id: todoItems.length, checked: false },
      ]);
      setInputValue("");
    }
  }

  function GetValue(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <div className="w-full flex h-[100vh] flex-col items-center bg-[#028090] ">
        <div className="flex w-full justify-center mt-2.5 ">
          <input
            type="text"
            className="w-[50%] max-md:w-[80%] border-b-black border-b-2 outline-none text-xl rounded-xl m-1 p-3 h-[61.6px]"
            value={inputValue}
            placeholder="Type your task"
            onChange={GetValue}
          />
          <Button text="ADD" click={AddTodoItem}></Button>
        </div>
        <div className="w-[65%] max-md:w-[95%] p-3 border-l-zinc-700 border-r-zinc-700 border-l-2 border-r-2 h-[100%] mt-4 bg-[#F0F3BD]">
          {todoItems.map(({ text, id }) => {
            return (
              <TodoItem
                key={id}
                text={text}
                id={id}
                setTodoItems={setTodoItems}
                todoitems={todoItems}
              ></TodoItem>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
