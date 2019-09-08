import { FETCH_POSTS, NEW_POSTS } from "./types";

export const fetchPost = () => {
  return async dispatch => {
    try {
      const posts = await fetch(
        "/api/v1/posts"
      ).then(res => res.json());
      dispatch({
        type: FETCH_POSTS,
        posts: posts.data,
        error: posts.error
      });
    } catch (error) {
      dispatch({
        type: FETCH_POSTS,
        error: 'There is somthing error please try again'
      })
    }
  };
};

// export const fetchPost = () => {
//   return dispatch => {
//     fetch("/api/v1/posts")
//       .then(res => res.json())
//       .then(posts =>
//         dispatch({
//           type: FETCH_POSTS,
//           posts: posts.data,
//           error: posts.error
//         })
//       )
//       .catch(error =>
//         dispatch({
//           type: FETCH_POSTS,
//           error: "There is somthing error please try again"
//         })
//       );
//   };
// };
export const newPost = postData => {
  return async dispatch => {
    try {
      const post = await fetch("/api/v1/posts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ data: postData })
      }).then(res => res.json());
      dispatch({
        type: NEW_POSTS,
        post: post.data,
        error: post.error
      });
    } catch (error) {
      dispatch({
        type: NEW_POSTS,
        error: "Please Try Again"
      });
    }
  };
};
