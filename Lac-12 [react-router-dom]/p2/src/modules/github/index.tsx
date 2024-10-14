import { useLoaderData } from "react-router-dom";
import { typeUserData, useUserData } from "./hooks/useUserData";

const Github = () => {
  const userData = useLoaderData() as typeUserData;
  // const [userData, isLoading] = useUserData();
  // if (isLoading) {
  //   return <p>User is Loading</p>;
  // }
  return (
    <>
      <h1>This is Github Page</h1>
      <div>
        <p>Name : {userData?.name}</p>
        <p>Followers : {userData?.followers}</p>
      </div>
    </>
  );
};

export default Github;
