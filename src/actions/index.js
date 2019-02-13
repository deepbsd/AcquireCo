
export const ADD_COMPANY = 'ADD_COMPANY';
export addCompany = company => ({
    type: ADD_COMPANY,
    company
});

export const DELETE_COMPANY = 'DELETE_COMPANY';
export const deleteCompany = company => ({
    type: DELETE_COMPANY,
    company
});

export const UPDATE_COMPANY = 'UPDATE_COMPANY';
export const updateCompany = company => ({
    type: UPDATE_COMPANY,
    company
})
