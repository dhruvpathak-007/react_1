function TodoItems() {
  let todo = "Buy Milk";
  let date = "4/10/2024";
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">{todo}</div>
        <div className="col-4">{date}</div>
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
