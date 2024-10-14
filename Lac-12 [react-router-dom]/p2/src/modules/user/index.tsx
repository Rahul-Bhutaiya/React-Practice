import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <>
      <h1>This is User Page</h1>
      <h2>User id : {id}</h2>
    </>
  );
};

export default User;
