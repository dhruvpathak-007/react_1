/* eslint-disable react/prop-types */
function TodoItems({ value }) {
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">{value.name}</div>
        <div className="col-4">{value.date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger my-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
