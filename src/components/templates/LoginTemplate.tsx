import LoginForm from "@/components/organisms/LoginForm";
import ReCaptchaDisclaimer from "@/components/molecules/RecaptchaDisclaimer";

const LoginTemplate: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center flex-grow mb-8">
        <LoginForm />
      </div>

      <ReCaptchaDisclaimer />
    </div>
  );
};

export default LoginTemplate;
