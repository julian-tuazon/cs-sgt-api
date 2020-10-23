import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name && this.state.course && this.state.grade) {
      if (this.props.isEditing) this.props.updateGrade(this.state.name, this.state.course, Number(this.state.grade), this.props.isEditing.id);
      else this.props.addGrade(this.state.name, this.state.course, Number(this.state.grade));
      this.setState({ name: '', course: '', grade: '' });
    }
  }

  handleReset() {
    this.setState({ name: '', course: '', grade: '' });
    this.props.changeUpdateMode(false);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isEditing !== this.props.isEditing && this.props.isEditing) this.setState({ name: this.props.isEditing.name, course: this.props.isEditing.course, grade: this.props.isEditing.currentGrade });
  }

  render() {
    let action = 'Add';
    if (this.props.isEditing) action = 'Update';

    return (
      <form onSubmit={this.handleSubmit} className="col-lg-3 col-11 px-0">
        <fieldset>
          <div className="form-group">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="name-symbol"><i className="fas fa-user"></i></span>
              </div>
              <input type="text" id="name" onChange={this.handleChange} value={this.state.name} className="form-control" name="name" placeholder="Student Name" aria-label="Name" aria-describedby="name-symbol" />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="list-symbol"><i className="far fa-list-alt"></i></span>
              </div>
              <input type="text" id="course" onChange={this.handleChange} value={this.state.course} className="form-control" name="course" placeholder="Student Course" aria-label="Course" aria-describedby="list-symbol" />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="grad-symbol"><i className="fas fa-graduation-cap"></i></span>
              </div>
              <input type="text" id="grade" onChange={this.handleChange} value={this.state.grade} className="form-control" name="grade" placeholder="Student Grade" aria-label="Grade" aria-describedby="grad-symbol" />
            </div>
            <div>
              <button type="submit" className="btn btn-success">{action}</button>
              <button type="reset" onClick={this.handleReset} className="btn btn-outline-secondary ml-1">Cancel</button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}
