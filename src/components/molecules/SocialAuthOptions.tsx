import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Button from "@/components/atoms/Button";

const SocialLoginOptions: React.FC = () => {
  return (
    <ul className="flex flex-col gap-2 mx-auto">
      <li>
        <Button
          variant="social"
          text="Sign in with Google"
          icon={<FcGoogle />}
        />
      </li>
      <li>
        <Button
          variant="social"
          text="Sign in with Facebook"
          icon={<FaFacebook />}
        />
      </li>
      <li>
        <Button variant="social" text="Sign in with Apple" icon={<FaApple />} />
      </li>
    </ul>
  );
};

export default SocialLoginOptions;
