import { useState } from "react";

const ContactUsForm = () => {
  const [department, setDepartment] = useState();
  const [message, setMessage] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const sendForm = (event) => {
    event.preventDefault();
    console.log("submitting", stateToString());
  };

  const stateToString = () => {
    return JSON.stringify(
      {
        department,
        message,
        agreedToTerms,
      },
      null,
      " "
    );
  };

  return (
    <form onSubmit={sendForm}>
      <select
        value={department}
        onChange={(event) => setDepartment(event.target.value)}
      >
        <option value="">Select...</option>
        <option value="hr">Human Resources</option>
        <option value="pr">Public Relations</option>
        <option value="support">Support</option>
      </select>
      <br />
      <br />
      <textarea
        name="message"
        cols={40}
        rows={5}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <br />
      <input
        type="checkbox"
        name="agreedToTerms"
        value={agreedToTerms}
        onChange={(event) => setAgreedToTerms(event.target.checked)}
      />{" "}
      I agree to the terms and conditions.
      <br />
      <button>Send</button>
    </form>
  );
};

export default ContactUsForm;
