import axios from 'axios';
import React, { use } from 'react';

export default async function userID({
  params,
}: {
  params: { userID: string };
}) {
  // create const user which will be equal data from axios
  const { data: user, status } = await axios.post<UserT>(
    `http://localhost:3000/api/user/?id=${params.userID}`
  );

  return (
    <div>
      Hello {user.email} {status}
    </div>
  );
}
