import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoItem = ({ text, id, todoitems, setTodoItems }) => {
  let [check, setCheckValue] = useState(false);
  let [inputStyle, setInputStyle] = useState(true);
  let [newText, setNewTextValue] = useState(text);
  function TaskChecker(e) {
    setCheckValue(e.target.checked);

    let updatedTodoItems;

    for (let todoitem of todoitems) {
      if (id === todoitem.id) {
        let newTodoitems = [...todoitems];
        newTodoitems[id] = {
          text: todoitem.text,
          id: todoitem.id,
          checked: !check,
        };
        updatedTodoItems = newTodoitems;
      }
    }

    let DuplicateUpdatedTodoItems = updatedTodoItems;

    setTodoItems([...DuplicateUpdatedTodoItems]);
  }

  function Delete() {
    let newTodoitems = todoitems.filter((todoitem) => {
      return id !== todoitem.id;
    });

    console.log(newTodoitems);
    setTodoItems(newTodoitems);
  }

  function Edit() {
    setInputStyle(!inputStyle);
    let textChanger;
    for (let todoitem of todoitems) {
      if (id === todoitem.id) {
        let upgradedTodoItems = [...todoitems];
        upgradedTodoItems[id] = {
          text: newText,
          id: todoitem.id,
          checked: todoitem.checked,
        };
        textChanger = upgradedTodoItems;
      }
    }
    let duplicatedTextChanger = textChanger;
    console.log(duplicatedTextChanger);
    setTodoItems(duplicatedTextChanger);
  }

  function EditTask(e) {
    setNewTextValue(e.target.value);
  }

  function drug() {
    console.log("it drug")
  }
  return (
    <div className="w-full h-[60px] border-black border-2 rounded-md p-2 text-2xl my-3 bg-white flex justify-between items-center" draggable = "true" onDrag={drug}>
      <div>
        <input className="mr-3" type="checkbox" onChange={TaskChecker} />
        <input
          type="text"
          value={newText}
          onChange={EditTask}
          className={`${
            check === true && "line-through"
          } border-none outline-none`}
          readOnly={inputStyle}
        />
      </div>
      <div className="flex justify-between w-[7%]">
        <div onClick={Edit}>
          <FaRegEdit />
        </div>
        <div onClick={Delete}>
          <RiDeleteBin6Line />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
