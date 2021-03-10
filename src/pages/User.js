import React from 'react';
import { useSharedState } from '../store';

const User = () => {
  const [sharedState] = useSharedState();
  console.log(sharedState);

  return (
    <div>
      <h1>{sharedState.user ? sharedState.user.email : null}</h1>
    </div>
  );
};

export default User;
