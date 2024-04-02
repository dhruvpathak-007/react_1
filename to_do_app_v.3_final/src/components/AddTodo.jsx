import { useState } from "react";
import PropTypes from "prop-types";
import { MdAddCard } from "react-icons/md";

function AddTodo({ handler }) {
  const [newToDoItem, setNewToDoItem] = useState({ name: "", date: "" });
  const onChangeNameHandler = (e) => {
    setNewToDoItem({ ...newToDoItem, name: e.target.value });
  };
  const onChangeDateHandler = (e) => {
    setNewToDoItem({ ...newToDoItem, date: e.target.value });
  };
  const newHandler = () => {
    handler(newToDoItem);
    setNewToDoItem({ name: "", date: "" });
  };
  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter to do"
            onChange={onChangeNameHandler}
            value={newToDoItem.name}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={onChangeDateHandler}
            value={newToDoItem.date}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={newHandler}
          >
            <MdAddCard />
          </button>
        </div>
      </div>
    </div>
  );
}
AddTodo.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default AddTodo;
