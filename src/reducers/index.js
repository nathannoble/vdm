import { combineReducers } from 'redux'
import datasources from './datasources'
import flows from './flows'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    datasources,
    flows,
    todos,
    visibilityFilter
})