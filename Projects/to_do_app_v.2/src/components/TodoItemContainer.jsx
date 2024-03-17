/* eslint-disable react/prop-types */
import TodoItems from "./TodoItems";

const ToItemContainer = ({ items }) => {
  console.log(items);
  return (
    <>
      {items.map((item) => (
        <TodoItems key={item.name} value={item} />
      ))}
    </>
  );
};

export default ToItemContainer;
