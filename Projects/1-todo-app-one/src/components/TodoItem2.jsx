function TodoItem2() {
  let TodoName = "Go to Vollege";
  let TodoDate = "5/11/2025";

  return (
    <>
      <div class="container">
        <div class="row kg-row">
          <div class="col-6">{TodoName}</div>
          <div class="col-4">{TodoDate}</div>
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

export default TodoItem2;
