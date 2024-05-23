import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import MessagePost from "./MessagePost";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList ,fatchingSpinner} = useContext(PostListData);


 
  return (
    <>
    {fatchingSpinner &&  <LoadingSpinner></LoadingSpinner>}
      {!fatchingSpinner && postList.length === 0 && (<MessagePost/>)}
      {!fatchingSpinner && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
