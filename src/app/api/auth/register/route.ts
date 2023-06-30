import AddUserToDB from '@/lib/db/AddUserToDB';
import createDBConnection from '@/lib/db/createDBConnection';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);

  const connection = await createDBConnection();

  const email = searchParams.get('email');
  const password = searchParams.get('password');
  if (!email || !password) {
    return NextResponse.json({ error: 'Incorrect params' }, { status: 400 });
  }
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    await AddUserToDB(connection, email, passwordHash);

    connection.end();
    return NextResponse.json({ email, passwordHash });
  } catch {
    connection.end();

    return NextResponse.json(
      { error: 'user already registered' },
      { status: 400 }
    );
  }
}