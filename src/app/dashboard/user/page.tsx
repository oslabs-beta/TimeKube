import { NextPage } from 'next';
import { db } from '@/utils/kysely';

const Page: NextPage = async () => {
  const users = await db.selectFrom('User').selectAll().execute();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the user page!</p>
      {JSON.stringify(users, null, 2)}
    </div>
  );
};

export default Page;
