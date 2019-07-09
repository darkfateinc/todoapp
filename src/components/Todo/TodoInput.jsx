import React from 'react';
import PropTypes from 'prop-types';
import DateInput from './DateInput';
import moment from 'moment'

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      addTextInput: '',
      rating: 0,
      important: false,
      date: '',
      old: false
    }
  }

  onChangeText = (e) =>{
    this.setState({
      addTextInput: e.target.value
    });
  }

  onAddTodo = (e)=>{
    this.props.onAddTodo(
      {
        text: this.state.addTextInput,
        rating: this.state.rating,
        date: this.state.date,
        old: this.state.old
      })
    this.setState({
      addTextInput: ''
    })
  }

  onImportantCheck = ()=>{
    if(this.state.rating===0){
      this.setState({
        important: true,
        rating: 1
      })
    }else{
      this.setState({
        important: false,
        rating: 0
      })
    }
  }

  onSelectedDate = (e)=>{
    let date = e;

    this.setState({
      date: moment(e).format("DD.MM.YYYY"),
      old: moment(moment().format('DD.MM.YYYY')).isAfter(moment(e).format("DD.MM.YYYY"))
    });
  }

  render() {
    return (
    <div>
      <span>Имя задачи:</span>
      <br/>
      <input value={this.state.addTextInput} onChange={this.onChangeText}/>
      <label htmlFor="check" style={{paddingBottom: '3px', cursor: 'pointer'}}>Важно</label>
      <input onChange={this.onImportantCheck} style={{cursor: 'pointer'}} checked={this.state.important} id="check" type="checkbox"/>
      <br/>
      <span>Дата выполнения:</span>
      <br/>
      <DateInput onSelect={this.onSelectedDate}
        />
      <br/>
      <button onClick={this.onAddTodo}>Добавить задачу</button>
    </div>);
  }
}

TodoInput.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
