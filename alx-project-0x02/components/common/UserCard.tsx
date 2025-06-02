import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="space-y-5 hover:shadow-2xl">
      <h1 className="font-semibold">{name}</h1>
      <p className="font-semibold">E-mail: {email}</p>
      <p>
        Address: <span>{address.city}</span> <span>{address.street}</span>{" "}
        <span>{address.suite}</span>
      </p>
    </div>
  );
};

export default UserCard;
