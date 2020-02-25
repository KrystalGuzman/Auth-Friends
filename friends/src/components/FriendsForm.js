import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';

const FriendsForm = props => {
  const { handleSubmit, register, errors } = useForm();

  const [friendInfo, setFriendInfo] = useState({ name: '', age: '', email: '' });
  
  const onSubmit = e => {
    AxiosWithAuth()
      .post('/api/friends', friendInfo)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    setFriendInfo('');
    setTimeout(() => {
      
    })
  };

  const handleChanges = e => {
    setFriendInfo({ ...friendInfo, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='name'></label>
      <input
        placeholder='Name'
        id='name'
        name='name'
        onChange={handleChanges}
        ref={register({
          required: 'Name required.'
        })}
      />
      {errors.name && errors.name.message}

      <label htmlFor='age'></label>
      <input
        placeholder='Age'
        id='age'
        name='age'
        onChange={handleChanges}
        ref={register({
          required: 'Age required.'
        })}
      />
      {errors.age && errors.age.message}

      <label htmlFor='email'></label>
      <input
        placeholder='Email'
        id='email'
        name='email'
        onChange={handleChanges}
        ref={register({
          required: 'Email required.'
        })}
      />
      {errors.email && errors.email.message}
      
      <button type='submit' onClick={() => window.location.reload(false)}>Add Friend</button>
    </form>
  )
}

export default FriendsForm;