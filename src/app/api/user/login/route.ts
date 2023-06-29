import AddUserToDB from '@/db/AddUserToDB';
import checkifUserRegistered from '@/db/checkifUserRegistered';
import createDBConnection from '@/db/createDBConnection';
import hashPassword from '@/lib/hashPassword/hashPassword';
import { NextResponse } from 'next/server';

type isRegisteredT = [UserT[]];

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);

  const connection = await createDBConnection();

  const email = searchParams.get('email');
  const password = searchParams.get('password');

  const passwordHash = hashPassword(password);

  if (!email || !passwordHash) {
    return NextResponse.json({ error: 'Incorrect params' }, { status: 400 });
  }

  try {
    const [users]: any = await checkifUserRegistered(connection, email);
    connection.end();
    // if could not find user throw error
    if (users.length === 0) {
      return NextResponse.json(
        { error: 'incorrect email or password' },
        { status: 400 }
      );
    }

    //  if password not matching throw error
    if (users[0].passwordHash !== passwordHash) {
      return NextResponse.json(
        { error: 'incorrect email or password' },
        { status: 400 }
      );
    }

    // if everything is ok than return data
    return NextResponse.json({ user: users[0] });
  } catch (e) {
    //  if any other error throw error
    return NextResponse.json(
      { error: 'user already registered' },
      { status: 400 }
    );
  }
}
