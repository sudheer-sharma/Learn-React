function TodoItem1() {
  let todoName = "Buy Milk";
  let totdoDate = "4/10/2025";

  return (
    <>
      <div class="container">
        <div class="row kg-row">
          <div class="col-6">{todoName}</div>
          <div class="col-4">{totdoDate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem1;
