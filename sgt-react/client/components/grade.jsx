import React from 'react';

export default class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.id === 'delete') this.props.deleteGrade(this.props.currentGrade.id);
    else this.props.changeUpdateMode(this.props.currentGrade);
  }

  render() {
    return (
      <tr>
        <td>{this.props.currentGrade.name}</td>
        <td>{this.props.currentGrade.course}</td>
        <td>{this.props.currentGrade.currentGrade}</td>
        <td>
          <i id='update' className='fas fa-edit text-info mr-3' onClick={this.handleClick}></i>
          <i id='delete' className='fas fa-trash text-danger' onClick={this.handleClick}></i>
        </td>
      </tr>
    );
  }
}
