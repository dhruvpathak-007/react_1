import TodoItems from "./TodoItems";
import PropTypes from "prop-types";

const TodoItemContainer = ({ items, deleteHandler }) => {
  return (
    <>
      {items.map((item) => (
        <TodoItems key={item.name} value={item} deleteHandler={deleteHandler} />
      ))}
    </>
  );
};
TodoItemContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteHandler: PropTypes.func.isRequired,
};
export default TodoItemContainer;
