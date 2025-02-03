import { useState } from "react";

export default function Login() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function checkPassword() {
    if (password === "12345") {
      setMessage("Uğurla daxil oldunuz! ✅");
    } else {
      setMessage("Yanlış şifrə, yenidən yoxlayın! ❌");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-green-300">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">LOGIN</h1>
        <div className="flex items-center gap-2">
          <input
            type="password"
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Şifrəni daxil et"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-900 transition"
            onClick={checkPassword}
          >
            Daxil ol
          </button>
        </div>
        {message && <p className="mt-3 font-semibold text-red-600">{message}</p>}
      </div>
    </div>
  );
}
