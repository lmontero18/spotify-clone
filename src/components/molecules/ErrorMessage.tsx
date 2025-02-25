import Icon from "@/components/atoms/Icon";

interface ErrorMessageProps {
  errorMessage: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => {
  return (
    <div className="bg-redDark px-5 py-3 rounded-md flex items-center gap-2">
      <Icon name="alert" size={24} color="white" />
      <p className="text-white font-medium text-sm">{errorMessage}</p>
    </div>
  );
};

export default ErrorMessage;
