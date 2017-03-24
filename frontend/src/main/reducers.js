import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Read book',
        list: [{
            _id: 1,
            description: 'Pay bills',
            done: true
        }, {
            _id: 2,
            description: 'Meeting',
            done: false
        }, {
            _id: 3,
            description: 'Medic',
            done: false
        }]
    })
})

export default rootReducer