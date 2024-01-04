import { NextPage } from 'next';
import { db } from '@/utils/kysely';


// let database = db; 

const Page: NextPage = async () => {
  // const Users = await database.selectFrom(Users).selectAll().execute();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the user page!</p>
      {/* {JSON.stringify(users, null, 2)} */}
    </div>
  );
};

export default Page;
