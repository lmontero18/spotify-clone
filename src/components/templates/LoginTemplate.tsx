import LoginFrom from "@/components/organisms/LoginForm";
import ReCaptchaDisclaimer from "@/components/molecules/RecaptchaDisclaimer";
const LoginTemplate: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <LoginFrom />
      <ReCaptchaDisclaimer />
    </div>
  );
};

export default LoginTemplate;
