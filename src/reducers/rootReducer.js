const initState = {
  posts: [
      {id: '1', title: 'A.P.J Abdul Kalam', body: 'Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.'},
      {id: '2', title: 'Jim Rohn', body: ' Happiness is not something you postpone for the future; it is something you design for the present.'},
      {id: '3', title: 'Walt Whitman ', body: 'Keep your face always toward the sunshine—and shadows will fall behind you.'}
    ]
}



const rootReducer = (state = initState, action) => {
  console.log(action);
  if(action.type === 'DELETE_POST'){
   let newPosts = state.posts.filter(post => {
     return post.id !== action.id     //if the action we clicked has same id that of post than return false
   });
   return {
     ...state,    //..state, also shows those state which are not updated
     posts: newPosts
   }
  }
  return state;
}

export default rootReducer
