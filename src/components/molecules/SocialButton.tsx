import Button from "@/components/atoms/Button";

interface SocialButtonProps {
  text: string;
  icon?: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ text, icon }) => {
  return <Button variant="social" text={text} icon={icon} className="w-full" />;
};

export default SocialButton;
