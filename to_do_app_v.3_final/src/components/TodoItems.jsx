import PropTypes from "prop-types";
function TodoItems({ value, deleteHandler }) {
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">{value.name}</div>
        <div className="col-4">{value.date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger my-button"
            onClick={() => deleteHandler(value.name)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
TodoItems.propTypes = {
  value: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteHandler: PropTypes.func.isRequired,
};
export default TodoItems;
