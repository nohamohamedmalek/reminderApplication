import { ADD_REMINDER , REMOVE_REMINDER, CLEAR_REMINDERS } from "../reducers/types"


export const add_reminder = (text,date) => {
    const action = {
        type : ADD_REMINDER,
        text,
        date
    }
   
    return action
}

export const remove_reminder = (id) => {
    const action = {
        type : REMOVE_REMINDER,
        id
    }
    return action
}

export const clear_reminders = () => {
    const action = {
        type : CLEAR_REMINDERS
    }
    return action
}