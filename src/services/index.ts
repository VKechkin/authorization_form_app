import users from "@const/users.json";

const getUsers = (log: string, pass: string) => {
  setTimeout(() => {
    const user = users.find((el) => el.login === log);

    if (user) {
      return true;
    } else {
      return false;
    }
  }, 2000);
};

export { getUsers };
