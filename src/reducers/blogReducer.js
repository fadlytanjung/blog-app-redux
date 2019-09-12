import Alldata from '../dummydb/data.json';
const initialState = {
    posts: Alldata,
    post:{},
    url:'/'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_POST':
            state.posts = []
            return {
                ...state,
                posts: [...state.posts, ...action.payload]
            };
        case 'GET_ONE_POST':
            
            let post  = state.posts.filter(e=>e.id === action.payload);
         
            return {
                ...state,
                post: post[0]
            };
        case 'ADD_POST':
            if(state.posts.length>0){
                var max_id = state.posts.reduce(function (prev, current) {
                    if (+current.id > +prev.id) {
                        return current;
                    } else {
                        return prev;
                    }
                });

                action.payload.id = max_id.id+1
            }else{
                action.payload.id = 1
            }
           
            let new_data = [...state.posts,action.payload]
            
            return {
                ...state,
                posts: new_data
            };
        case 'URL':
            return {
                ...state,
                url:action.payload
            }
        case 'EDIT_POST':
            var idx = state.posts.findIndex(e=>e.id===action.payload.id)
            
            state.posts[Number(idx)] = action.payload
            return {
                ...state,
                posts: state.posts
            };
        case 'DELETE_POST':
            let data_after_delete = state.posts.filter(e=>e.id !== action.payload);
            return {
                ...state,
                posts: data_after_delete
            };
        default:
            return state;
    }
}