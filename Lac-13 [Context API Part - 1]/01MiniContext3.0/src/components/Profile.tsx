import { useUserContext } from "../context/userContext";

const Profile = () => {
  const { userData } = useUserContext();
  if (!userData) return <h2>Login Please!</h2>;
  return <h2>Welcome {userData.name}</h2>;
};

export default Profile;
