import React from 'react';

function TodoList(props) {
  return (
    <>
      <div className="row text-center mt-5">
          <div className="col-3">
            <p className="mt-3">{props.date}</p>
          </div>
          <div className="col-3">
            <p className="mt-3">{props.type}</p>
          </div>
          <div className="col-3">
            <p className="mt-3">{props.category}</p>
          </div>
          <div className="col-3">
            <p className="mt-3">{props.amount}</p>
          </div>
          <div className="row">
            <div className="col-9">
              <p className="fw-bold mt-4">Note</p>
              {props.note}
            </div>
            <div className="col-3 mt-5">
              <button>delete</button>
            </div>
            <div className="mt-2">
              <hr />
            </div>
          </div>
      </div>
    </>
  )
}

export default TodoList