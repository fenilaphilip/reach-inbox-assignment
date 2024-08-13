import config from "../config";
import classes from "./login.module.css";
import googleIcon from "../assests/googleIcon.svg";

export default function Login() {
  return (
    <section className={classes.login}>
      <div className="w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 gap-12">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
            Create new account
          </h1>
          <div className="text-xs leading-tight tracking-tight text-white md:text-xl text-center bg-slate-950 border-r-white px-3 py-4  border-2">
            <a href={config.googleLogin}>
              <button>
                <img
                  src={googleIcon}
                  alt="googleIcon"
                  className="inline-block px-2"
                />
                Sign Up with Google
              </button>
            </a>
          </div>
          <div className="text-xs font-bold leading-tight tracking-tight text-white md:text-xl text-center bg-blue-900 mx-16 py-4">
            <button>Create an Account</button>
          </div>
          <p className="text-white text-center text-xl">
            Already have an account? <span className="text-bold">Sign In</span>
          </p>
        </div>
      </div>
    </section>
  );
}
