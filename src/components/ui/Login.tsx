import React, { useEffect, useState } from 'react';

// -=== {'CARA TRADISIONAL FORM VALIDATION'} ===-

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorPasword, setErrorPassword] = useState('');

  const handleLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length < 8) {
      setErrorPassword('Password must be at least 8 characters');
      return;
    }

    console.log(username, password);
  };

  // validasi akan tetap berjalan secara otomatis setiap kali state 'password' berubah
  // tanpa harus menunggu user melakukan action submit
  useEffect(() => {
    if (password.length >= 8) {
      setErrorPassword('');
    }
  }, [password]);

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center gap-4">
      <div className="rounded-2xl border border-gray-200 p-8">
        <div className="mb-4 flex flex-col items-center justify-center">
          <h2 className="text-center text-2xl font-bold text-zinc-900">
            Sign In To Your Account
          </h2>
        </div>
        <div className="w-sm max-w-sm">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Insert Your Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                autoComplete="off"
                className="w-full rounded-lg bg-gray-100 px-4 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-zinc-900"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Insert Your Password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full rounded-lg bg-gray-100 px-4 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-zinc-900"
              />
              {errorPasword !== '' && (
                <small className="text-red-500">{errorPasword}</small>
              )}
            </div>
            <button
              type="submit"
              className="mt-4 w-full cursor-pointer rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
