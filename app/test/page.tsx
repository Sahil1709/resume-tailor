"use client";
import { auth, currentUser, useAuth, useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
  //   const { userId } = auth();
  const { userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <main>
      <h1>
        Hello, {user.firstName} welcome to Clerk, last sign in at{" "}
        {user.lastSignInAt?.toLocaleTimeString()}
      </h1>
      <button onClick={() => console.log(user)}>User details</button>
    </main>
  );
}
