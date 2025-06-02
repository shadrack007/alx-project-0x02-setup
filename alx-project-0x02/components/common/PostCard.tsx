import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className=" p-4 rounded-2xl hover:shadow-2xl space-y-4">
      <h1 className="font-semibold">Tit;e: {title}</h1>
      <p>Content: {content}</p>
      <p className="font-semibold">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
