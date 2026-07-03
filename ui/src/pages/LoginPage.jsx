import { useState } from "react";
import { toast } from "react-toastify";

const correctUsername = "daniel254";
const correctPassword = "123";

const BagIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6 8h12l-1 12H7L6 8Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M9 8V6a3 3 0 0 1 6 0v2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const EyeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const EyeOffIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 4l16 16M9.9 5.2A9.4 9.4 0 0 1 12 5c6 0 9.5 7 9.5 7a15.6 15.6 0 0 1-2.8 3.6M6.3 7.8A15.6 15.6 0 0 0 2.5 12S6 19 12 19a9 9 0 0 0 3.4-.65"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.9 10a3 3 0 0 0 4.2 4.2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const CheckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 12l4 4 10-10"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LoginPage = ({ onSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      toast.error("required fields: username & password");
      return;
    }
    if (username !== correctUsername) {
      toast.error("invalid username");
      return;
    }
    if (password !== correctPassword) {
      toast.error("invalid password");
      return;
    }

    setLoading(true);
    // brief delay so the loading state is visible; auth logic is unchanged
    setTimeout(() => {
      setLoading(false);
      toast.success("login success");
      onSuccess(true);
    }, 600);
  };

  return (
    <div className="min-h-screen w-full bg-secondary-soft flex items-center justify-center p-4">
      <div className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-300/60 md:grid-cols-2">
        {/* Brand panel */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-linear-to-br from-primary via-primary-hover to-secondary p-10 text-white md:flex">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-xl" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-xl" />

          <div className="relative flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 backdrop-blur">
              <BagIcon className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold tracking-tight">
              AM Training
            </span>
          </div>

          <div className="relative space-y-5">
            <h2 className="text-3xl font-bold leading-tight">
              Welcome back to
              <br />
              your marketplace.
            </h2>
            <ul className="space-y-3 text-sm text-white/90">
              {[
                "Browse the full product catalog",
                "Clear pricing on every item",
                "Simple, secure sign-in",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="relative text-xs text-white/60">
            © {new Date().getFullYear()} AM Training. All rights reserved.
          </p>
        </div>

        {/* Form panel */}
        <div className="flex flex-col justify-center p-8 sm:p-10">
          {/* mobile brand mark */}
          <div className="mb-6 flex items-center gap-2 md:hidden">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
              <BagIcon className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold tracking-tight text-secondary">
              AM Training
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-bold text-secondary">Welcome back</h1>
            <p className="mt-1 text-sm text-slate-500">
              Sign in to continue shopping.
            </p>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div>
              <label
                htmlFor="username"
                className="mb-1.5 block text-sm font-medium text-secondary"
              >
                Username
              </label>
              <input
                id="username"
                autoComplete="username"
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-secondary outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-secondary"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 pr-10 text-sm text-secondary outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition hover:text-secondary"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover focus:ring-2 focus:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading && (
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z"
                  />
                </svg>
              )}
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
