import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';
import GradeForm from './gradeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [], isEditing: false };
    this.getGrades = this.getGrades.bind(this);
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addGrade = this.addGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.updateGrade = this.updateGrade.bind(this);
    this.changeUpdateMode = this.changeUpdateMode.bind(this);
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data }))
      .catch(err => console.error(err));
  }

  addGrade(name, course, grade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        course: course,
        currentGrade: grade
      })
    })
      .then(res => res.json())
      .then(data => this.setState({ grades: [...this.state.grades, data] }))
      .catch(err => console.error(err));
  }

  deleteGrade(id) {
    fetch(`/api/grades/${id}`, { method: 'DELETE' })
      .then(() => {
        const index = this.state.grades.findIndex(grade => grade.id === id);
        const newArr = Array.from(this.state.grades);
        newArr.splice(index, 1);
        this.setState({ grades: newArr });
      })
      .catch(err => console.error(err));
  }

  updateGrade(name, course, grade, id) {
    fetch(`/api/grades/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id,
        name: name,
        course: course,
        currentGrade: grade
      })
    })
      .then(res => res.json())
      .then(data => {
        const index = this.state.grades.findIndex(grade => grade.id === id);
        const newArr = Array.from(this.state.grades);
        newArr[index] = data;
        this.setState({ grades: newArr, isEditing: false });
      })
      .catch(err => console.error(err));
  }

  changeUpdateMode(grade) {
    this.setState({ isEditing: grade });
  }

  getAverageGrade() {
    if (this.state.grades.length === 0) return 'N/A';
    return Math.round((this.state.grades.reduce((acc, currVal) => acc + currVal.currentGrade, 0)) / this.state.grades.length);
  }

  render() {
    return (
      <div className="row w-100 mx-auto d-flex flex-column justify-content-center">
        <Header averageGrade={this.getAverageGrade()} />
        <main className=
          'mx-auto mt-2 px-0 row d-flex flex-column justify-content-center align-items-center
          flex-lg-row justify-content-lg-between align-items-lg-start col-lg-11'>
          <GradeTable grades={this.state.grades} deleteGrade={this.deleteGrade} changeUpdateMode={this.changeUpdateMode} />
          <GradeForm addGrade={this.addGrade} isEditing={this.state.isEditing} changeUpdateMode={this.changeUpdateMode} updateGrade={this.updateGrade} />
        </main>
      </div>
    );
  }
}

export default App;
