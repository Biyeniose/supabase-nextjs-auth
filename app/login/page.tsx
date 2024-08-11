import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <>
      <div className="flex items-center my-7  flex-col justify-between">
        <h1 className=" text-2xl">Login Page</h1>
      </div>

      <form className="login-form">
        <div className="mt-1">
          <label htmlFor="email" className="login-label">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input"
          />
        </div>
        <div className="mt-1">
          <label htmlFor="password" className="login-label">
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="input"
          />
        </div>
        <div className="login-buttonContainer">
          <button formAction={login} className="login-button">
            Log in
          </button>
          <button formAction={signup} className="login-button">
            Sign up
          </button>
        </div>
      </form>

      <div className="flex items-center justify-center mt-5">
        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Back to HomePage{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </>
  );
}
