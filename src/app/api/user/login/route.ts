import AddUserToDB from '@/db/AddUserToDB';
import checkifUserRegistered from '@/db/checkifUserRegistered';
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

  const [isRegistered]: any = await checkifUserRegistered(connection, email);

  connection.end();
  return NextResponse.json({ email, passwordHash, isRegistered });
}
