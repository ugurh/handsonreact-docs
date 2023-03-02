import Dialog from "./Dialog";

const SignUpDialog = () => {
  return (
    <Dialog
      title="Mars Exploration Program"
      message="How should we refer to you?"
    >
      <input type="text" />
      <button>Sign Me Up!</button>
    </Dialog>
  );
};

export default SignUpDialog;
