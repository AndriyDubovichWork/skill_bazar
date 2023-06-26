import createDBConnection from '@/db/createDBConnection';
import getAllUsersFromDB from '@/db/getAllUsersFromDB';
import { NextResponse } from 'next/server';

export async function GET() {
  const connection = await createDBConnection();

  const [data] = await getAllUsersFromDB(connection);

  connection.end();
  return NextResponse.json({ data });
}
