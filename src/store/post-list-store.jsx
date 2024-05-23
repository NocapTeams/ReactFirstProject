import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  fatchingSpinner: false,
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newCurrPostList = currPostList;
  if (action.type === "Delete_Post") {
    newCurrPostList = currPostList.filter(
      (post) => post.id !== action.payload.postID
    );
  } else if (action.type === "Add_Initails_Post") {
    newCurrPostList = action.payload.posts;
  } else if (action.type === "Add_Post") {
    newCurrPostList = [action.payload, ...currPostList];
    
  }

  return newCurrPostList;
};

// eslint-disable-next-line react/prop-types
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = (posts) => {
  
    dispatchPostList({
      type: "Add_Post",
      payload: 
        posts
      
    });
  };

  const addInitailsPost = (posts) => {
    dispatchPostList({
      type: "Add_Initails_Post",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postID) => {
    dispatchPostList({
      type: "Delete_Post",
      payload: { postID },
    });
  };

  const [fatchingSpinner, setFatchingSpinner] = useState(false);

  useEffect(() => {
    // const controller = new AbortController();
    // const signal = controller.signal;

    // setFatchingSpinner(true);
    // fetch("https://dummyjson.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     addInitailsPost(data.posts);
    //     setFatchingSpinner(false);
    //   });
    addInitailsPost(DEFAULT_POST_LIST);

    // return () => {
    //   controller.abort();
    // };
  }, []);

  return (
    <PostList.Provider
      value={{ postList, addPost, fatchingSpinner, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friend, I am going to mumbai for my vacations. Hope to enjoy a lot. Please out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass ho ho gya ",
    body: "mast ke bad nhi ho gya hun pass",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
 ];

export default PostListProvider;
