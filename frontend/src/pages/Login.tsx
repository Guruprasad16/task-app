const Login = () => {
  return (
    <div>
      <div className="bg-blue-400">
        Login
        <div className="">
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Username or Email"
            className="m-2"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="m-2"
          />
        </div>
        <div className="items-center">
          <button>Login</button>
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
