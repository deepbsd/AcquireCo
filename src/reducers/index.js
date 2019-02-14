import * as actions from '../actions';

const initialState = {
     companies: [
            {
                id: 1001,
                name: "Foo Company",
                contact: "Joe Foo",
                financials: "Really Good!",
                status: "still researching"
            },
            {
                id: 1002,
                name: "Bar Company",
                contact: "Joe Bar",
                financials: "Pretty Good!",
                status: "still researching"
            },
            {
                id: 1003,
                name: "Baz Company",
                contact: "Joe Baz",
                financials: "Not too bad, really",
                status: "still researching"
            }
    ]
}


export const acquireCoReducer = (state=initialState, action) => {
    if(action.type === actions.ADD_COMPANY){
        return Object.assign({}, state, {
            companies: [...state.companies, action.company]
        });
    }
    else if (action.type === actions.UPDATE_COMPANY){
        return Object.assign({}, state, {
            companies: state.companies.map(company => 
               company.id === action.company.id ? action.company : company
            )
        });
    }
    else if (action.type === actions.DELETE_COMPANY){
        return Object.assign({}, state, {
            companies: state.companies.filter(company => company.id !== action.company.id)
        });
    }

    return state;
}



