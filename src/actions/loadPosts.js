export default function() {
  return dispatch => {
    fetch("http://localhost:3001/posts", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(res=>res.json())
    .then(posts=>{
        dispatch({
            type:'LOAD-POSTS',
            payload:posts
        })
    })
  };
}
