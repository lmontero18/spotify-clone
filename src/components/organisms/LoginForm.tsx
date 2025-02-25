import Icon from "@/components/atoms/Icon";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import SocialLoginOptions from "@/components/molecules/SocialAuthOptions";
import ErrorMessage from "@/components/molecules/ErrorMessage";
import { ROUTES } from "@/constants/routes";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext) ?? {};
  const navigate = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login) return;

    const isSuccess = login(username, password);

    if (!isSuccess) {
      setError("Incorrect Username or Password");
    } else {
      navigate("/");
    }
  };

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setter(e.target.value);

  return (
    <div className="text-white bg-grayDark rounded-md p-14 flex flex-col gap-5 mx-auto mb-11 pb-12">
      <div className="flex flex-col items-center justify-center gap-2">
        <Icon name="spotify-logo" size={36} color="white" />
        <h1 className="text-3xl font-bold text-white">Sign in to Spotify</h1>
      </div>

      {error && <ErrorMessage errorMessage={error} />}
      <SocialLoginOptions />
      <hr className="border-grayMedium my-6 w-[600px] mx-auto" />

      <form
        onSubmit={handleLoginSubmit}
        className="flex flex-col gap-4 w-[300px] mx-auto"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="username"
            className="text-white font-semibold text-sm"
          >
            Email or Username
          </label>
          <Input
            variant="auth"
            placeholder="Email or Username"
            value={username}
            onChange={handleChange(setUsername)}
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
            onChange={handleChange(setPassword)}
          />
        </div>

        <Button text="Log In" type="submit" />

        <a
          href={ROUTES.RECOVER_PASSWORD}
          className="text-white text-sm text-center underline hover:text-spotifyGreen"
        >
          Forgot your password?
        </a>
      </form>

      <div className="text-center text-sm text-grayLight mt-6">
        <span>Don't have an account? </span>
        <a
          href={ROUTES.SIGN_UP}
          className="text-white font-semibold underline hover:text-spotifyGreen"
        >
          Sign up for Spotify
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
