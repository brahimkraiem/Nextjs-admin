const Login = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form className="flex flex-col justify-center p-50 bg-light-bg w-500 h-500 rounded-lg gap-30">
        <h1 className="text-center text-2xl font-bold ">Login</h1>
        <input
          className="p-30 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg "
          type="text"
          placeholder="username"
        />
        <input
          className="p-30 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg "
          type="password"
          placeholder="password"
        />
        <button className="p-30 border-none cursor-pointer bg-teal-600 rounded-md ">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
