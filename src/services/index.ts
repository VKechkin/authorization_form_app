const getUsers = () => {
  const resolve = fetch("/src/const/users.json");
  const response = resolve.then((response) => response.json());
  const post = response.then((post) => console.log(post));
};

export { getUsers };
