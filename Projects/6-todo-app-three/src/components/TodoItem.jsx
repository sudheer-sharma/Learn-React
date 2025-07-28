import { MdDeleteForever } from "react-icons/md";

function TodoItem1({ todoName, totdoDate, onDeleteClick }) {
  // let todoName = "Buy Milk";
  // let totdoDate = "4/10/2025";

  return (
    <>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{totdoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger kg-button"
              onClick={() => onDeleteClick(todoName)}
            >
              <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem1;
