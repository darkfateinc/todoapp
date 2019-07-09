import React from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      completed: this.props.data.completed,
      disabled: true,
      text: this.props.data.text,
      editName: 'edit',
      important: (this.props.data.rating===1?'важная':'обычная'),
      date: this.props.data.date,
      old: this.props.data.old
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      completed: nextProps.data.completed,
    });
  }

  onRemTodo = ()=>{
    this.props.onRemTodo(this.props.index)
  }

  onComplete = ()=>{
    this.props.completeTodo(this.props.index)
  }

  onActiveEdit = ()=>{
    if(this.state.disabled===true){
      this.setState({
        disabled: false,
        editName: 'save'
      });
    }else{
      this.setState({
        disabled: true,
        editName: 'edit'
      });
      this.props.onChangeTodo({
        text: this.state.text,
        id: this.props.index,
        completed: this.state.completed,
        rating: this.props.data.rating
      })
    }
  }

  onSaveEdit = (e)=>{
    if(e.key === 'Enter'){
      this.setState({
        disabled: true,
        editName: 'edit'
      });
      this.props.onChangeTodo({
        text: this.state.text,
        id: this.props.index,
        completed: this.state.completed,
        rating: this.props.data.rating
      })
    }
  }

  onChangeText = (e) =>{
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div style={this.props.data.old?{backgroundColor:'red'}:{backgroundColor: 'none'}}>
        <input type='text'
          onKeyPress={this.onSaveEdit}
          disabled={this.state.disabled}
          value={this.state.text}
          onChange={this.onChangeText}
          style={this.state.completed?{textDecoration: 'line-through'}:{textDecoration: 'none'}}/>
          <button onClick={this.onActiveEdit}>{this.state.editName}</button>
          <button onClick={this.onRemTodo}>remove</button>
          <button onClick={this.onComplete}>complete</button>
        <br/>
          <div>
            <span>Дата:</span>
            <span>{(!this.state.date||this.state.date==='Invalid date')?' бессрочная':this.state.date}</span><br/>
          </div>
        <span>Важность: </span>
        <span>{this.state.important}</span><br/>
      </div>);
  }
}

TodoItem.propTypes = {
  data: PropTypes.object
};
