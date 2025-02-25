import Icon from "@/components/atoms/Icon";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

const RecoveryForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-10 w-[400px] text-white">
      <Icon name="spotify-logo" size={38} color="white" />

      <div className="flex flex-col items-start mt-6">
        <h1 className="text-3xl font-bold text-white">Reset your password</h1>
        <p className="text-gray-300 text-base mt-2 font-semibold">
          Enter the email address or username linked to your Spotify account and
          we'll send you a message.
        </p>
      </div>

      <form className="w-full flex flex-col gap-4 mt-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white font-semibold text-sm">
            Email address or username
          </label>
          <Input variant="auth" />
        </div>

        <a
          href="#"
          className="text-white hover:text-spotifyGreen text-sm font-semibold underline"
        >
          Need help?
        </a>

        <Button
          text="Send link"
          type="submit"
          variant="login"
          className="mt-4"
        />
      </form>
    </div>
  );
};

export default RecoveryForm;
