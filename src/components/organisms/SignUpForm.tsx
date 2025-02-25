import Icon from "@/components/atoms/Icon";

const SignUpForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-8">
      <Icon name="spotify-logo" size={40} color="white" />
      <div className="w-[300px] mx-auto">
        <h1 className="text-5xl text-white font-bold text-center">
          Sign up to start listening to content
        </h1>
      </div>
    </div>
  );
};

export default SignUpForm;
