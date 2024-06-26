import CustomButton from '../components/Button/CustomButton';

const buttons = ['Login', 'SignUp'];

const Login = () => {
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative min-h-56 min-w-56 rounded-md bg-gradient-to-r from-indigo-400 to-cyan-400 p-2">
        <form onSubmit={handleOnSubmit}>
          <h1 className="gap-x-1 text-3xl text-white">Login</h1>
          <h2 className="text-xl text-white">Please enter your email and password</h2>
          <div className="flex">
            <input
              type="email"
              name="email"
              autoComplete="on"
              placeholder="Username or Email"
              className="m-5 h-9 rounded-2xl px-3 text-white"
            />
            <input
              type="password"
              name="password"
              autoComplete="on"
              placeholder="Password"
              className="m-5 h-9 rounded-2xl px-3 text-white"
            />
          </div>
          <div className="flex space-x-16">
            {buttons.map((button) => (
              <CustomButton>{button}</CustomButton>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
