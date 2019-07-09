import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from './redux/actions/Todo/todoActions';
import Todo from './containers/Todo'
class App extends Component {
  render(){
    return (
      <div className="App">
        <Todo list={this.props.data.todos} actions={this.props.actions.todoActions}/>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    data:{
      todos: store.todos
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      todoActions: bindActionCreators(todoActions, dispatch),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
