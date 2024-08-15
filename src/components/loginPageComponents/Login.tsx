import googleIcon from "../../assests/googleIcon.svg";

const apiBaseURL = process.env.REACT_APP_API_BASE_URL ?? "";
const appBaseURL = process.env.REACT_APP_UI_BASE_URL ?? "";
const googleLogin: string = `${apiBaseURL}/auth/google-login?redirect_to=${appBaseURL}/onebox`;

export default function Login() {
  return (
    <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
      <div className="bg-[#111214] text-center space-y-10 px-16 rounded-2xl border border-[#343A40]">
        <div className="text-2xl font-semibold mt-6">Create a new account</div>
        <a
          href={googleLogin}
          className="mt-4 border-white/30 border px-20 py-2 text-lg  flex items-center text-[#CCCCCC] rounded-lg cursor-pointer"
        >
          <img
            src={googleIcon}
            alt="googleIcon"
            className="inline-block mr-3"
          />
          Sign Up with Google
        </a>
        <div className="bg-gradient-to-r from-[#435de0] to-[#031ea4fc] mx-16 mt-4 px-5 text-lg py-3 rounded-md cursor-pointer">
          Create an Account
        </div>
        <div className=" text-[#909296] text-center text-lg pb-8">
          Already have an account?{" "}
          <span className="text-bold text-[#c2c3c6]">Sign In</span>
        </div>
      </div>
    </div>
  );
}
