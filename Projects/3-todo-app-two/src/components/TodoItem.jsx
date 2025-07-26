function TodoItem1({ todoName, totdoDate }) {
  // let todoName = "Buy Milk";
  // let totdoDate = "4/10/2025";

  return (
    <>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{totdoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem1;
