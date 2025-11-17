import { useForm } from 'react-hook-form';
import './Login.css';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const users = [{ email: 'sd@ex.com', password: '123' }];

  const SuccessLogin = () => (
    <div>
      <h2>Login Successful</h2>
      <p>Welcome back!</p>
    </div>
  );

  const FailedLogin = () => (
    <div>
      <h2>Login Failed</h2>
      <p>Please try again!</p>
    </div>
  );

  const onSubmit = (data) => {
    const user = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (user) {
      alert('Login Successful');
      return <SuccessLogin />;
    } else {
      alert('Login Failed');
      return <FailedLogin />;
    }
  };

  return (
    <div className='container'>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='email'
          {...register('email', { required: true })}
          placeholder='Email'
        />
        {errors.email && <span>*Email* is mandatory</span>}

        <input
          type='password'
          {...register('password', { required: true })}
          placeholder='Password'
        />
        {errors.password && <span>*Password* is mandatory</span>}

        <input type='submit' value='Log In' />
      </form>
    </div>
  );
}

export default Login;
