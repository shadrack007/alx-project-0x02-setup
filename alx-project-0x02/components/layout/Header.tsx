import ActiveLink from "../common/ActiveLink";

const Header: React.FC = () => {
  return (
    <header className="bg-black w-full text-white py-4 px-3 text-lg">
      <nav>
        <ul className="flex gap-4 ">
          <li>
            <ActiveLink href="/home">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/about">About</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/posts">Posts</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/users">Users</ActiveLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
