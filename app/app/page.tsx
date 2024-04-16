"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeButton } from "@/components/ui/theme-button";
import { getChatCompletion } from "@/lib/groqApi";
import { Textarea } from "@/components/ui/textarea";
import { UserButton } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [response, setResponse] = useState("");
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");
  const [file, setFile] = useState(null);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    setFile(file);
    try {
      const formData = new FormData();
      formData.append("pdf", file);
      const response = await fetch("/api", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log(result);
      if(result.status == 200) setResume(result.body.text)
    } catch (error) {
      console.error("Error parsing PDF:", error);
    }
  };

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
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Resume</Label>
          <Input onChange={handleChange} id="picture" type="file" />
        </div>
        <Textarea
          placeholder="Paste your Resume here"
          onChange={(e) => setResume(e.target.value)}
          value={resume}
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
