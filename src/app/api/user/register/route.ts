import AddUserToDB from '@/db/AddUserToDB';
import createDBConnection from '@/db/createDBConnection';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);

  const connection = await createDBConnection();

  const email = searchParams.get('email');
  const passwordHash = searchParams.get('password');
  if (!email || !passwordHash) {
    return NextResponse.json({ error: 'Incorrect params' }, { status: 400 });
  }
  const data = await AddUserToDB(connection, email, passwordHash);

  connection.end();
  return NextResponse.json({ email, passwordHash, data });

  return NextResponse.json(
    { error: 'user already registered' },
    { status: 400 }
  );
}
