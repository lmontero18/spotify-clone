const ReCaptchaDisclaimer: React.FC = () => {
  return (
    <footer className="w-full py-6 bg-grayDark text-gray-400 text-xs text-center fixed bottom-0 left-0">
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
