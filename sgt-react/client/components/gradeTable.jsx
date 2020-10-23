import React from 'react';
import Grade from './grade';

export default function GradeTable(props) {
  let gradeRow = <tr><td>No grades recorded</td></tr>;
  if (props.grades.length !== 0) gradeRow = props.grades.map(grade => <Grade currentGrade={grade} key={grade.id} deleteGrade={props.deleteGrade} changeUpdateMode={props.changeUpdateMode} />);

  return (
    <table className="table table-striped w-auto px-0 col-lg-7">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
          <th scope="col">Operations</th>
        </tr>
      </thead>
      <tbody>
        {gradeRow}
      </tbody>
    </table>
  );
}
