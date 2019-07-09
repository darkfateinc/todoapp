import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/Todo/TodoList';
export default class Todo extends React.Component {
  render() {
    return (<TodoList list={this.props.list} actions={this.props.actions}/>);
  }
}

Todo.propTypes = {
  list: PropTypes.array,
};
