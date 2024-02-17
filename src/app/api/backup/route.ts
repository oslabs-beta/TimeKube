import { db } from "@/utils/appdb-kysely";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const clusterId = searchParams.get('clusterId')
  if (clusterId) {
    const res = await db.selectFrom('backups').selectAll().where('clusterId', '=', clusterId).execute();
    return Response.json(res);
  }
  const res = await db.selectFrom('backups').selectAll().execute();
  return Response.json(res);
}