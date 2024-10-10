export const getUserGithubData = async () => {
  const response = await fetch("https://api.github.com/users/Rahul-Bhutaiya");
  const data = await response.json();
  return data;
};
