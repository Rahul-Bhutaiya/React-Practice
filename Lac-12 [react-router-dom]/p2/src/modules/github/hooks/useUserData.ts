import { useEffect, useState } from "react";
import { githubData } from "../../../services/github";

export interface typeUserData {
  followers: number;
  name: string;
}

export const useUserData = (): [
  userData: typeUserData | undefined,
  isLoading: boolean
] => {
  const [userData, setUserData] = useState<typeUserData | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getGithubData = async () => {
      setIsLoading(true);
      const data = await githubData();
      setUserData(data);
      setIsLoading(false);
    };
    getGithubData();
  }, []);
  return [userData, isLoading];
};
