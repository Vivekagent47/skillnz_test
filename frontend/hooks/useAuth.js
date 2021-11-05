import axios from "axios";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log("working...");
    setUser({
      name: "densec",
      email: "densec@gmail.com",
    });
    // call user api
    // store user in redux
    // else
    // logout user
  }, []);
  return user;
}
