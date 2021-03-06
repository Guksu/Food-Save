import { useRouter } from "next/router";
import { useState } from "react";

function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSignInClick = () => {};
  const onSignOutClick = () => {
    router.push("/siginup");
  };

  return (
    <div>
      {/* 전체 DIV */}
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Input DIV */}
        <div>
          <label>Email</label>
          <input
            required
            type={"email"}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            required
            type={"text"}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
        </div>
        <div>
          {/* Btn DIV */}
          <button onClick={onSignInClick}>Sign in</button>
          <button onClick={onSignOutClick}>Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
