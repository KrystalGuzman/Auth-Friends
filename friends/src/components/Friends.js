import React, { useState, useEffect } from 'react';
import FriendsForm from './FriendsForm';

import { AxiosWithAuth } from '../utils/AxiosWithAuth';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  
  useEffect(() => {
    AxiosWithAuth()
    .get('/api/friends')
    .then(res => {
      console.log(res.data);
      setFriends(res.data);
    })
    .catch(err => {
      console.log('ERROR', err);
    });
  }, []);

  return (
    <div>
        <FriendsForm friends={friends} />
      {friends.map(friend => (
        <div key={friend.id}>
          <h2>{friend.name}</h2>
          <h4>{friend.age}</h4>
          <h4>{friend.email}</h4>
        </div>
      ))}
      
    </div>
  )
};

export default Friends;