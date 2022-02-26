import { useState } from "react";

const sendRequest = async () => {
  let response = await fetch("http://localhost:8000/", {
    method: "POST",
  });
};

export default function App() {
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
  };
  return (
    <div>
      <h1>LOGIN TO YOUR ACCOUNT</h1>
      <form onSubmit={() => handleSubmit()}>
        <input onChange={(e) => updateEmail(e.target.value)} />
        <input onChange={(e) => updatePassword(e.target.value)} />
        <button>login</button>
      </form>
    </div>
  );
}
