const nodes = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NODE':
            if(state.find(x => x.id === action.node.id) == null){
                return [
                    ...state,
                    action.node
                ]
            }else{
                return state;
            }
            
        default:
            return state
    }
}

export default nodes