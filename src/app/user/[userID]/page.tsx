import React from 'react';

export default function userID({ params }: { params: { userID: string } }) {
  return <div>hello {params.userID}</div>;
}
