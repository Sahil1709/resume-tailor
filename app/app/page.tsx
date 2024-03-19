"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeButton } from "@/components/ui/theme-button";
import { getChatCompletion } from "@/lib/groqApi";
import { Textarea } from "@/components/ui/textarea";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const [response, setResponse] = useState("");
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");

  const handleClick = async () => {
    try {
      const r = await getChatCompletion(resume, job);
      setResponse(r);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="px-20 py-10">
      <ThemeButton />
      <UserButton />
      <div className="grid w-full gap-2">
        <Textarea
          placeholder="Paste your Resume here"
          onChange={(e) => setResume(e.target.value)}
        />
        <Textarea
          placeholder="Paste Job Description here"
          onChange={(e) => setJob(e.target.value)}
        />
        <Button onClick={handleClick}>Send message</Button>
      </div>

      {response}
    </div>
  );
}
