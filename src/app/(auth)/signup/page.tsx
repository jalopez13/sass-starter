import { SignUp } from '@/actions';

export default function LoginPage() {
  return (
    <form className="flex flex-col items-center justify-center min-h-screen">
      <label htmlFor="username">username:</label>
      <input
        id="username"
        name="username"
        type="text"
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        required
      />
      <button formAction={SignUp}>Log in</button>
    </form>
  );
}
