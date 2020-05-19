const reducer = (state = 1, action) => {
    switch (action.type){
        case 'RESET' :{
            return 1
        }
        case 'INCREMENT_PAGE' :{
            return state +=1
        }
    }
}

export default reducer