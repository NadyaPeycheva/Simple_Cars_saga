export const registerApi = async (userData) => {
  return await fetch("http://161.35.202.170:8080/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

};
