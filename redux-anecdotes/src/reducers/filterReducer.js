

const reducer = (state = '', action) => {
    switch (action.type) {
        case 'FILTER':
            state = action.data
            return state
        default:
            return state
    }
}

export const filterAction = (props) => {
    return {
        type: 'FILTER',
        data: props
    }
}

export default reducer
