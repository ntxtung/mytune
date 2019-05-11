export default (state = [], action) => {
    switch (action.type){
        case 'SONG_SELECTED':
            const song = action.payload
            console.log("PlayList Reducer: ", song)
            let i = 0
            for (i = 0; i < state.length; i++){
                if (state[i] === song) {
                    return state
                } 
            }
            return [...state, action.payload];
        default:
            return state
    }
}