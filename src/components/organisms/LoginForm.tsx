import Icon from "@/components/atoms/Icon";
import SocialButton from "@/components/molecules/SocialButton";
import Input from "@/components/atoms/Input";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Button from "@/components/atoms/Button";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { login } = authContext;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isSuccess = login(username, password);

    if (!isSuccess) {
      setError("Incorrect Username or Password");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="text-white bg-grayDark rounded-md p-14 flex flex-col gap-5 mx-auto mb-11 pb-12">
      <div className="flex flex-col items-center justify-center gap-2">
        <Icon name="spotify-logo" size={36} color="white" />
        <h1 className="text-3xl font-bold text-white">Sign in to Spotify</h1>
      </div>

      {/* molecule? ask tony */}
      {error && (
        <div className="bg-redDark px-5 py-3">
          <p className="text-white font-medium text-sm flex items-center gap-2">
            <Icon name="alert" size={24} color="white" />
            {error}
          </p>
        </div>
      )}

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

      <form
        onSubmit={handleLoginSubmit}
        className="flex flex-col gap-4 w-[300px] mx-auto"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white font-semibold text-sm">
            Email or Username
          </label>
          <Input
            variant="auth"
            placeholder="Email or Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-white font-semibold text-sm"
          >
            Password
          </label>
          <Input
            type="password"
            variant="auth"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button text="Log In" type="submit" />

        <a
          href="/recover-password"
          className="text-white text-sm text-center underline hover:text-spotifyGreen"
        >
          Forgot your password?
        </a>
      </form>

      <div className="text-center text-sm text-grayLight mt-6">
        <span>Don't have an account? </span>
        <a
          href="/signup"
          className="text-white font-semibold underline hover:text-spotifyGreen"
        >
          Sign up for Spotify
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
