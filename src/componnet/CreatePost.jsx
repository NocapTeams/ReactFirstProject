import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIDElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postReactionElement = useRef();
  const postTagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userID = userIDElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postReaction = postReactionElement.current.value;
    const postTags = postTagsElement.current.value.split(" ");

    userIDElement.current.value ="";
    postTitleElement.current.value ="";
    postBodyElement.current.value="";
    postReactionElement.current.value ="";
    postTagsElement.current.value ="";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({       
        title: postTitle,
        body: postBody,
        reactions: postReaction,
        userId: userID,
        tags: postTags,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then(resObj =>{
       
        addPost(resObj)});

  };

  return (
    <div className="form-page">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">User ID</label>
          <div className="col-sm-10">
            <input
              type="text"
              ref={userIDElement}
              className="form-control"
              id="userID"
              placeholder="Enter User ID "
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Post Title</label>
          <div className="col-sm-10">
            <input
              type="text"
              ref={postTitleElement}
              className="form-control"
              id="postTitle"
              placeholder="Enter Post Title "
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Post Contant</label>
          <div className="col-sm-10">
            <textarea
              type="text"
              ref={postBodyElement}
              className="form-control"
              id="postBody"
              placeholder="Enter Post Contant "
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Reaction</label>
          <div className="col-sm-10">
            <input
              type="text"
              ref={postReactionElement}
              className="form-control"
              id="postReaction"
              placeholder="Enter Post Reaction "
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Hash Tags</label>
          <div className="col-sm-10">
            <input
              type="text"
              ref={postTagsElement}
              className="form-control"
              id="postTags"
              placeholder="Enter Post Tag people "
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
