"use client"

import GuestLayout from '@/components/layouts/guestlayout';
import AuthCard from '@/components/mintpad/form/authCard';
import Button from '@/components/mintpad/form/button';
import HyperLink from '@/components/mintpad/form/hyperlink';
import Input from '@/components/mintpad/form/input';
import Label from '@/components/mintpad/form/label';
import ValidationMessage from '@/components/mintpad/form/validationMessage';
import ShowPassword from '@/components/mintpad/showPassword';
import { useForm } from '@inertiajs/inertia-react';
import Head from 'next/head';
import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');

  const { data, setData, post, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = () => {
    // post('/login'), {
    //   onFinish: () => setData('password', ''),
    // };
    console.log('hi')
  };

  return (
    <GuestLayout>
      <AuthCard>
        <h1 className=' text-[30px] pb-4'>Sign In</h1>
        <form onSubmit={submit}>
          <div className="relative">
            <Label htmlFor="email" value="Email" />
            <Input
              id="email"
              type="email"
              modelValue={email}
              onUpdateModelValue={(value) => setEmail(value)}
              required
              autoFocus
              autoComplete="username"
            />
            <ValidationMessage validation={errors.email} />
          </div>

          <div className="relative">
            <Label htmlFor="password" value="Password" />
            <ShowPassword>
                {({ type }) => (
                <Input
                  id="password"
                  type={type}
                  modelValue={data.password}
                  onUpdateModelValue={(value) => setData('password', value)}
                  required
                  autoComplete="current-password"
              
              />
                )}
            </ShowPassword>
            <ValidationMessage validation={errors.password} />
            </div>


          <div className="my-5 flex text-xs">
            <HyperLink href={'/password/request'}>
              Forgot your password?
            </HyperLink>
          </div>

          <div className='border border-mintpad-700'>
          <Button loading={''} className="w-full ">Sign in</Button>

          </div>

          <div className='flex items-center text-xs font-graphikRegular mt-4 gap-2 justify-center'>
            <p className=" text-mintpad-400 text-center">
              Don’t have an account?{' '}
            </p>
              <HyperLink href={'/register'} >Sign up</HyperLink>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  );
};

export default Login;
