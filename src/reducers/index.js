import * as actions from '../actions';

const initialState = {
     companies: [
            {
                id: 1001,
                name: "Foo Company",
                contact: "Joe Foo",
                contactEmail: "joefoo@foocompany.com",
                contactPhone: "555 1234567",
                financials: "placeholder",
                SPValue: "A",
                DebtToCA: "1.10",
                CR: "1.67",
                fiveYrEPSGrowth: "1.89",
                PE: "12.3",
                PBV: "1.2",
                DivPS: "0.37",
                Status: "still researching",
                comment: "Good company, great management"
            },
            {
                id: 1002,
                name: "Bar Company",
                contact: "Joe Bar",
                contactEmail: "joebar@barcompany.com",
                contactPhone: "555 1234567",
                financials: "placeholder",
                SPValue: "B+",
                DebtToCA: "1.20",
                CR: "1.57",
                fiveYrEPSGrowth: "1.89",
                PE: "12.3",
                PBV: "1.2",
                DivPS: "0.37",
                Status: "still researching",
                comment: "Good company, evolving management"
            },
            {
                id: 1003,
                name: "Baz Company",
                contact: "Joe Baz",
                contactEmail: "joebaz@bazcompany.com",
                contactPhone: "555 1234567",
                financials: "placeholder",
                SPValue: "B-",
                DebtToCA: "1.10",
                CR: "1.67",
                fiveYrEPSGrowth: "1.89",
                PE: "12.3",
                PBV: "1.2",
                DivPS: "0.37",
                Status: "still researching",
                comment: "Good company, needs better management"
            }
    ]
}


export const acquireCoReducer = (state=initialState, action) => {
    if(action.type === actions.ADD_COMPANY){
        //console.log("action.company: ",action)
        return Object.assign({}, state, {
            companies: [...state.companies, action.company]
        });
    }
    else if (action.type === actions.UPDATE_COMPANY){
        console.log("reducer --> action.company.id: ",action.company)
        return Object.assign({}, state, {
            companies: state.companies.map(company => company.id === action.company.id ? action.company : company )
        });
    }
    else if (action.type === actions.DELETE_COMPANY){
        return Object.assign({}, state, {
            companies: state.companies.filter(company => company.id !== action.company.id)
        });
    }

    return state;
}



