import React , { Component } from 'react'
import {add_reminder , remove_reminder , clear_reminders} from '../actions/index'
import {connect} from 'react-redux'
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from './reminders.png'



class App extends Component {
    state = {
        text:'',
        date:new Date()
    }

    render_Reminders = () => {
        const {reminder} = this.props ;
        return (
            <ul className="list-group">
                {
                    reminder.map(reminder => { 
                        return (
                            <li key={reminder.id} className='list-group-item'>
                            <div>{reminder.text}</div>
                            <div>{moment(new Date(reminder.date)).fromNow()}</div>
                            <div className = "closeIcon btn btn-danger" onClick = {() => this.props.remove_reminder(reminder.id)} >x</div>
                            </li>
                        )
                    })
                }

            </ul>
        )
    }
    render() {
        return (
            <div className="app">
                <img src={logo} />
                    <div className="reminder-title">
                        <h2>What to do</h2>
                    </div>
                    <input className="form-control" type="text"
                     placeholder="What to do"
                     value = {this.state.text}
                     onChange = {(e) => this.setState({text:e.target.value})}
                      />

                    <DatePicker
                        placeholderText="Date"
                        className="form-control"
                        value = {this.state.date}
                        selected={this.state.date}
                        onChange={(date) => this.setState({date : date})}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        />
                
                    <button onClick={() => {
                        this.props.add_reminder(this.state.text, this.state.date) 
                        this.setState({ text:'' , date:''})
                    }}
                     
                     className="btn btn-primary btn-block"> Add Reminder</button>
                      {this.render_Reminders()}
                    <button onClick = {() =>this.props.clear_reminders()} className="clearReminder btn btn-danger btn-block"> Remove Reminder</button>
                
            </div>
        )
    }
}
// function mapDispatchToProps(dispatch){
//     return {
//         add_reminder :() => dispatch(add_reminder())
//     }
// }
// function mapStateToProps(state) {
//     return {
//         reminder:state
//     }
// } 
export default connect(state => {
    return {
        reminder : state
    }
} , {
    add_reminder,
    remove_reminder,
    clear_reminders
})(App) ;