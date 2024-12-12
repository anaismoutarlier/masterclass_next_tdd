import { Button } from "../Button/Button";
import { useState } from "react";

export default function Form() {
  const [value, setValue] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setFormSubmitted(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      {formSubmitted && <p>Thank you for your feedback</p>}
      <input onChange={e => setValue(e.target.value)} value={value} />
      <Button>Submit</Button>
    </form>
  );
}
