import Field from '../../components/Field';
import LoginBg from '../../assets/images/login-bg.jpeg';
import Button from '../../components/Button';

import { Link, Redirect } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { Formik, Form } from 'formik';
import { useSharedState } from '../../store';
import { api, LoginSchema, storeAuthToken } from '../../utils';

const Login = () => {
  const [sharedState, setSharedState] = useSharedState();
  const alert = useAlert();
  if (sharedState.isAuthenticated) return <Redirect to='/user' />;

  return (
    <div className='relative min-h-screen bg-gradient-to-r to-yellow-300 via-pink-500 from-red-500 flex justify-center items-center p-5 shadow-lg'>
      <div className={`relative h-105 w-120 bg-white overflow-hidden`}>
        <div className='absolute h-full w-full top-0 left-0 flex '>
          <div className='imgbox relative h-full w-1/2  md:block hidden'>
            <img
              className='absolute top-0 left-0 w-full h-full object-cover '
              src={LoginBg}
              alt=''
            />
          </div>
          <div className='formbox relative md:w-1/2 w-full h-full bg-white flex justify-center items-center p-10'>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={LoginSchema}
              onSubmit={async ({ email, password }) => {
                try {
                  const res = await api.post('auth/login', {
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
                return (
                  <Form className='w-full'>
                    <h2 className='text-lg font-bold tracking-wide text-center w-full uppercase mb-3'>
                      Signup
                    </h2>
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
                    <Button
                      className='w-24 mt-3 focus:outline-none'
                      type='submit'
                      disabled={!(isValid && dirty) || isSubmitting}
                    >
                      {' '}
                      Login
                    </Button>

                    <p className='signup relative mt-3 text-sm text-gray-500'>
                      Dont have account?{' '}
                      <Link
                        to='/signup'
                        className='text-blue-400 font-semibold uppercase cursor-pointer'
                      >
                        Sign Up
                      </Link>
                    </p>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
