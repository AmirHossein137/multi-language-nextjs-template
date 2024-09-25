"use client";

import { redirect, useRouter } from "@/navigation";
import { setCredentials } from "@/redux/features/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { user, token } = useAppSelector((state) => state.auth);
  const dispach = useAppDispatch();

  console.log(user, token);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      dispach(setCredentials({ user: username, token: "ASKJDASNJDKNSA" }));
      router.push("/dashboard");
    }
  };

  if (token) {
    redirect("/");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 items-center justify-center mt-4 max-w-sm mx-auto"
    >
      <Input
        type="text"
        label="UserName"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        type="text"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        className="w-full"
        variant="shadow"
        color="primary"
        size="lg"
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
