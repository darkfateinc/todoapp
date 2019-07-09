import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'
export default class TodoList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list: this.props.list,
    }
  }

  componentWillReceiveProps(props){
    this.setState({
      list: props.list
    });
  }

  completeFilter = ()=> {
    this.setState({
      list: this.props.list.filter(todo => todo.completed === true)
    });
  }

  unCompleteFilter = ()=> {
    this.setState({
      list: this.props.list.filter(todo => todo.completed === false)
    });
  }

  ratingFilter = ()=> {
    this.setState({
      list: this.props.list.filter(todo => todo.rating === 1)
    });
  }

  completeFilterAll = ()=> {
    this.setState({
      list: this.props.list
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.completeFilter}>неактивные</button>
        <button onClick={this.unCompleteFilter}>активные</button>
        <button onClick={this.ratingFilter}>важные</button>
        <button onClick={this.completeFilterAll}>все</button>

        <TodoInput onAddTodo={this.props.actions.addItem}/>
        <h3>Список задач</h3>
        {this.state.list.map((data, index) => (
           <TodoItem key={data.id} data={data} index={data.id}
             onRemTodo={this.props.actions.remItem}
             completeTodo={this.props.actions.completeTodo}
             onAddTodo={this.props.actions.addItem}
             onChangeTodo={this.props.actions.changeItem}
            />
       ))}
      </div>);
  }
}

TodoList.propTypes = {
  list: PropTypes.array,
};
