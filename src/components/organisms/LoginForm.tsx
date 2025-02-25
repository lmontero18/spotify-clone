import Icon from "@/components/atoms/Icon";
import SocialButton from "@/components/molecules/SocialButton";
import Input from "@/components/atoms/Input";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Button from "@/components/atoms/Button";

const LoginForm: React.FC = () => {
  return (
    <div className="text-white bg-grayDark rounded-md p-14 flex flex-col gap-5 mx-auto mb-11 pb-12">
      <div className="flex flex-col items-center justify-center gap-2">
        <Icon name="spotify-logo" size={36} color="white" />
        <h1 className="text-3xl font-bold text-white">Sign in to Spotify</h1>
      </div>

      <ul className="flex flex-col gap-2 mx-auto">
        <li>
          <SocialButton text="Sign in with Google" icon={<FcGoogle />} />
        </li>
        <li>
          <SocialButton text="Sign in with Facebook" icon={<FaFacebook />} />
        </li>
        <li>
          <SocialButton text="Sign in with Apple" icon={<FaApple />} />
        </li>
      </ul>

      <hr className="border-grayMedium my-6 w-[600px] mx-auto" />

      <form className="flex flex-col gap-4 w-[300px] mx-auto">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white font-semibold text-sm">
            Email or Username
          </label>
          <Input variant="auth" placeholder="Email or Username" />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-white font-semibold text-sm"
          >
            Password
          </label>
          <Input type="password" variant="auth" placeholder="Password" />
        </div>

        <Button text="Log In" type="submit" />

        <a
          href="#"
          className="text-white text-sm text-center underline hover:text-spotifyGreen"
        >
          Forgot your password?
        </a>
      </form>

      <div className="text-center text-sm text-grayLight mt-6">
        <span>Don't have an account? </span>
        <a
          href="#"
          className="text-white font-semibold underline hover:text-spotifyGreen"
        >
          Sign up for Spotify
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
