import Input from "@/components/atoms/Input";

const LoginPage: React.FC = () => {
  return (
    <div className="bg-black">
      <h1 className="text-white">LoginPage</h1>
      <Input variant="auth" />
    </div>
  );
};

export default LoginPage;
