let initialState = {
    isLoginForm: false,
    data: [],
    errors: null
};

const loginReducer = (state = initialState, action) =>{
    
    switch (action.type){
        
        default: 
            return {...state};
    }
}

export default loginReducer;