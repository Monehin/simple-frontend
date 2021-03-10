import React from 'react';
import Field from '../../components/Field';
import SignupBg from '../../assets/images/signup-bg.jpeg';
import Button from '../../components/Button';
import { Link, Redirect } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { Formik, Form } from 'formik';
import { useSharedState } from '../../store';
import { api, SignupSchema, storeAuthToken } from '../../utils';

const Login = () => {
  const [sharedState, setSharedState] = useSharedState();
  const alert = useAlert();
  if (sharedState.isAuthenticated) return <Redirect to='/user' />;

  return (
    <div className='relative min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex justify-center items-center p-5 shadow-lg'>
      <div className={`relative h-110 w-120 bg-white overflow-hidden`}>
        <div className={`absolute h-full w-full top-0 left-0 flex `}>
          <div
            className={`formbox relative md:w-1/2 w-full h-full bg-white flex justify-center items-center p-10`}
          >
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={async ({ firstName, lastName, email, password }) => {
                try {
                  const res = await api.post('auth/register', {
                    firstName,
                    lastName,
                    email,
                    password,
                  });
                  const { data } = res;
                  storeAuthToken(data.token);
                  setSharedState((prev) => ({
                    ...prev,
                    user: data.user,
                    isAuthenticated: true,
                  }));
                } catch (err) {
                  if (err.response) {
                    const error = err.response.data.error;
                    alert.show(error.message, { type: 'error' });
                  } else {
                    alert.show('Server Error', { type: 'error' });
                  }
                }
              }}
            >
              {({ errors, touched, dirty, isValid, isSubmitting }) => {
                console.log(dirty);
                return (
                  <Form className='w-full'>
                    <h2 className='text-lg font-bold tracking-wide text-center w-full uppercase mb-2'>
                      Signup
                    </h2>
                    <Field
                      name='firstName'
                      type='text'
                      label='First Name'
                      touched={touched.firstName}
                      error={errors.firstName}
                    />

                    <Field
                      name='lastName'
                      type='text'
                      label='Last Name'
                      touched={touched.lastName}
                      error={errors.lastName}
                    />
                    <Field
                      name='email'
                      type='email'
                      label='Email'
                      touched={touched.email}
                      error={errors.email}
                    />
                    <Field
                      name='password'
                      type='password'
                      label='Password'
                      touched={touched.password}
                      error={errors.password}
                    />
                    <Field
                      name='confirmPassword'
                      type='password'
                      label='Confirm Password'
                      touched={touched.confirmPassword}
                      error={errors.confirmPassword}
                    />
                    <div></div>
                    <Button
                      className='w-24 mt-3 focus:outline-none'
                      type='submit'
                      disabled={!(isValid && dirty)}
                    >
                      {' '}
                      Sign Up
                    </Button>
                    <p className='signup relative mt-3 text-sm text-gray-500'>
                      You have an account already?{' '}
                      <Link
                        to='/login'
                        className='text-blue-400 font-semibold uppercase cursor-pointer'
                      >
                        Sign In
                      </Link>
                    </p>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className={`imgbox relative h-full w-1/2 md:block hidden `}>
            <img
              className='absolute top-0 left-0 w-full h-full object-cover '
              src={SignupBg}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
