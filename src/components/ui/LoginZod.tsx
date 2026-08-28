import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import z from 'zod';

// -=== {'CARA FORM VALIDATION MENGGUNAKAN ZOD + RHF'} ===-

const userSchema = z.object({
  username: z.string().min(3, { error: 'Username minimal 3 karakter' }),
  password: z
    .string()
    .min(8, { error: 'Password minimal 8 karakter' })
    .refine((data) => /[A-Z]/.test(data), {
      error: 'Password wajib memiliki huruf kapital',
    }),
});

type User = z.infer<typeof userSchema>;

const LoginZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    mode: 'onSubmit',
    resolver: zodResolver(userSchema),
  });
  const handleLogin: SubmitHandler<User> = (data) => {
    console.log(data);
    console.log(data.username);
    console.log(data.password);
  };

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center gap-4">
      <div className="rounded-2xl border border-gray-200 p-8">
        <div className="mb-4 flex flex-col items-center justify-center">
          <h2 className="text-center text-2xl font-bold text-zinc-900">
            Sign In To Your Account (Zod)
          </h2>
        </div>
        <div className="w-sm max-w-sm">
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            <div className="space-y-1">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-600"
              >
                Username
              </label>
              <input
                {...register('username')}
                type="text"
                id="username"
                placeholder="Insert Your Username"
                autoComplete="new-password"
                className={`w-full rounded-lg bg-gray-100 px-4 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-zinc-900 ${errors.username && 'border-2 border-red-500 outline-none'}`}
              />
              {errors.username?.message !== '' && (
                <small className="text-red-500">
                  {errors.username?.message}
                </small>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                {...register('password')}
                type="password"
                id="password"
                placeholder="Insert Your Password"
                autoComplete="new-password"
                className={`w-full rounded-lg bg-gray-100 px-4 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-zinc-900 ${errors.password && 'border-2 border-red-500 outline-none'}`}
              />
              {errors.password?.message !== '' && (
                <small className="text-red-500">
                  {errors.password?.message}
                </small>
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

export default LoginZod;
