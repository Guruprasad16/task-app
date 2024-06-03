const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative min-h-56 min-w-56 rounded-md bg-gradient-to-r from-indigo-400 to-cyan-400 p-2">
        <h1 className="absolute items-center gap-x-1 text-white">Login</h1>
        <h2 className="text-white">Please enter your email and password</h2>
        <div className="">
          <input type="email" name="email" placeholder="Username or Email" className="m-5 rounded-md text-white" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" className="m-5 rounded-md text-white" />
        </div>
        <div className="flex items-center space-x-10">
          <button className="text-white">Login</button>
          <button className="text-white">Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
