export default function(id) {
  return dispatch => {
    fetch(`http://localhost:3001/posts/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  };
}
