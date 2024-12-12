"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const fields = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  },
  {
    name: "confirmPassword",
    placeholder: "Confirm your password",
  },
];
export default function Signup() {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleChange = e =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // faire requête pour créer compte + vérifier résultat
    if (
      fields.every(f => Boolean(formData[f.name])) &&
      formData.password === formData.confirmPassword
    )
      router.push("/signup/success");
    else router.push("/signup/failure");
  };
  return (
    <div>
      <form id="signup" onSubmit={handleSubmit}>
        {fields.map(field => (
          <input
            {...field}
            key={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
          />
        ))}
        <button
          type="submit"
          disabled={!fields.every(f => Boolean(formData[f.name]))}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
