export default (state = [], action) => {
    console.log("SongReducer: ", action.payload)
    switch (action.type){
        case 'FETCH_SONGS':
            return [...state, action.payload];
        default:
            return state
    }
}