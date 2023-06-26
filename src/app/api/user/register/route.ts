import AddUserToDB from '@/db/AddUserToDB';
import createDBConnection from '@/db/createDBConnection';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);

  const connection = await createDBConnection();

  const email = searchParams.get('email') || '';
  const passwordHash = searchParams.get('password') || '';

  const data = await AddUserToDB(connection, email, passwordHash);

  connection.end();
  return NextResponse.json({ email, passwordHash, data });
}
