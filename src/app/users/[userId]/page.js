import getUsers from "../../../../services/getUsers";

export default async function Page(props) {
  // await params before accessing its properties
  const { userId } = await props.params;
  const getUsersList = getUsers();
  const users = await getUsersList;
  const currentId = userId;
  const userData = users[currentId - 1];
  console.log(users[currentId - 1]);

  return (
    <div>
      <h2>User Detail Page</h2>
      <h4>Id: {userData.id}</h4>
      <h4>Name: {userData.name}</h4>
      <h4>Website: {userData.website}</h4>
    </div>
  );
}

export async function generateStaticParams() {
  const getUsersList = getUsers();
  const users = await getUsersList;
  return users.map((user, id) => ({
    userId: user.id.toString(),
  }));
}
