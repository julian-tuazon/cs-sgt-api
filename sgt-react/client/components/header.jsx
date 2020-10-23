import React from 'react';

export default function Header(props) {
  return (
    <React.Fragment>
      <header className=
        "my-4 text-center mx-auto px-0
        d-flex flex-column justify-content-center align-items-center
        justify-content-lg-between flex-lg-row col-lg-11">
        <h2>Student Grade Table</h2>
        <div className="d-flex align-items-center">
          <h3>Average Grade<span className="badge badge-secondary ml-3">{props.averageGrade}</span></h3>
        </div>
      </header>
    </React.Fragment>
  );
}
