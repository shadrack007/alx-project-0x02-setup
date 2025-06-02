import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

const Posts: React.FC = ({ posts }) => {
  return (
    <section>
      <Header />

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {posts.map(
            (
              postItem: { title: string; body: string; userId: number },
              index: number
            ) => (
              <PostCard
                key={index}
                title={postItem.title}
                content={postItem.body}
                userId={postItem.userId}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
