import { useUserData } from "./hooks/useUserData";

const Github = () => {
  const [userData, isLoading] = useUserData();
  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <h2>Github Followers : {userData && userData?.followers}</h2>
      )}
    </div>
  );
};

export default Github;
