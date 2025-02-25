const ReCaptchaDisclaimer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 w-full py-8 bg-grayDark text-gray-400 text-xs text-center">
      This site is protected by reCAPTCHA. The{" "}
      <a
        href="https://policies.google.com/terms"
        className="text-white underline"
      >
        Terms of Service
      </a>{" "}
      and{" "}
      <a
        href="https://policies.google.com/privacy"
        className="text-white underline"
      >
        Privacy Policy
      </a>{" "}
      apply.
    </footer>
  );
};

export default ReCaptchaDisclaimer;
