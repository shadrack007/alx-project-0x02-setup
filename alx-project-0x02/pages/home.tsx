import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { Post } from "@/interfaces";
import { useState } from "react";

const Home: React.FC = () => {
  const [isModalShown, setModalShown] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "card 1",
      content: "Card 1 content",
    },
    {
      title: "card 2",
      content: "Card 2 content",
    },
    { title: "card 2", content: "Card 2 content" },
  ]);

  const handleAddPost = (newPost: Post) => {
    setPosts((prev) => [...prev, newPost]);
  };

  const handleNewPostModal = () => {
    setModalShown((prev) => !prev);
  };

  return (
    <section>
      <Header />

      <div className="flex justify-end my-4">
        <button
          onClick={handleNewPostModal}
          className="bg-orange-700 font-semibold py-2 px-4 rounded-full text-white"
        >
          Add post
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {posts.map(({ title, content }: Post, index: number) => (
          <Card title={title} content={content} key={index} />
        ))}
      </div>

      <div className="absolute top-0 z-1 w-screen h-screen overflow-auto bg-black opacity-50">
        <div className="flex items-center justify-center">
          {isModalShown && <PostModal handlePostAdd={handleAddPost} />}
        </div>
      </div>
    </section>
  );
};

export default Home;
