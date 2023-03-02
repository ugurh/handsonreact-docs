import FancyBorder from "./FancyBorder";

const WelcomeDialog = () => {
  return (
    <FancyBorder color="blue">
      <h1 className="dialog-title">Welcome</h1>
      <p className="dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
};

export default WelcomeDialog;
