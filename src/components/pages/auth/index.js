import * as React from 'react';
import {useForm} from 'react-hook-form';

export default function Auth(props) {
  const {register, handleSubmit} = useForm();
  const onSubmit = () => props.setAuth();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({required: true})} placeholder="First name" />

      <input name="lastName" ref={register({required: true})} placeholder="Last name" />

      <input type="submit" />
    </form>
  );
}
