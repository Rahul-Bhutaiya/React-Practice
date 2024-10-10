import { useEffect, useState } from "react";
import { getUserGithubData } from "../../../services/github";

interface IUserData {
  followers?: number;
}

export const useUserData = (): [IUserData, boolean] => {
  const [userData, setUserData] = useState<IUserData>({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      const response = await getUserGithubData();
      setIsLoading(false);
      setUserData(response);
    };
    fetchUserData();
  }, []);
  return [userData, isLoading];
};
