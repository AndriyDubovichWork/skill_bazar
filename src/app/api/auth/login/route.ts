import AddUserToDB from '@/lib/db/AddUserToDB';
import checkifUserRegistered from '@/lib/db/checkifUserRegistered';
import createDBConnection from '@/lib/db/createDBConnection';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

type isRegisteredT = [UserT[]];

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
    const [users]: any = await checkifUserRegistered(connection, email);
    connection.end();
    // if could not find user throw error
    if (users.length === 0) {
      return NextResponse.json(
        { error: 'incorrect email or password' },
        { status: 400 }
      );
    }

    //  if password hashes not matching throw error
    if (await bcrypt.compare(users[0].passwordHash, passwordHash)) {
      return NextResponse.json(
        { error: 'incorrect email or password' },
        { status: 400 }
      );
    }

    // if everything is ok than return data
    return NextResponse.json({ isAllCorect: true });
  } catch (e) {
    //  if any other error throw error
    return NextResponse.json(
      { error: 'user already registered' },
      { status: 400 }
    );
  }
}
