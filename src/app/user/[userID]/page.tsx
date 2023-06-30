import axios from 'axios';
import React from 'react';

export default async function userID({
  params,
}: {
  params: { userID: string };
}) {
  const user: UserT = await axios.post(
    `http://localhost:3000/api/user/?id=${params.userID}`
  );

  return <div>Hello {user.email}</div>;
}
