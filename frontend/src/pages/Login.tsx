const Login = () => {
  return (
    <div className="flex  justify-center h-screen items-center">
      <div className="bg-blue-400 p-2 rounded-md">
        Login
        <div className="">
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Username or Email"
            className="m-5 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="m-5 rounded-md"
          />
        </div>
        <div className="flex items-center space-x-10">
          <button>Login</button>
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
