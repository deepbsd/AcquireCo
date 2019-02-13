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
            companies: [...state.companies]
        })
    }
    else if (action.type === actions.DELETE_COMPANY){
        let companyArr = [...state.companies];
        let index = array.indexOf(action.company);
        companyArr.splice(index, 1);
        return Object.assign({}, state, {
            companies: companyArr
        })
    }
    else if (action.type === actions.UPDATE_COMPANY){
        let companyArr = [...state.companies];
        let index = array.indexOf(action.company);
        companyArr[index] = action.company;
        return Object.assign({}, state, {
            companies: companyArr
        })
    }

    return state;
}



