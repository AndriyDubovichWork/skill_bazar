import AddUserToDB from '@/lib/db/AddUserToDB';
import createDBConnection from '@/lib/db/createDBConnection';
import { NextResponse } from 'next/server';
import getUserById from '@/lib/db/getUserById';

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);

  const connection = await createDBConnection();

  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'Incorrect params' }, { status: 400 });
  }

  try {
    const [users]: any = await getUserById(connection, id);
    const user = users[0];

    connection.end();
    return NextResponse.json({ email: user.email });
  } catch {
    connection.end();

    return NextResponse.json({ error: 'no such user' }, { status: 400 });
  }
}
