import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC = ({ posts }) => {
  const users = posts;
  return (
    <section>
      <Header />

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {users.map((userItem: UserProps, index: number) => (
            <UserCard
              key={index}
              address={userItem.address}
              name={userItem.name}
              email={userItem.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Users;
