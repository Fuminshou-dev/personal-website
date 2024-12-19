"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [success, setSuccess] = useState(false);

  const handleButtonClick = async () => {
    try {
      const response = await fetch("/api/issues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          summary: "прикольная задача c сайта",
          queue: "TESTPOSTMAN",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setSuccess(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center container mx-auto">
      {success && <p>Задача успешно отправлена!</p>}
      <Button onClick={handleButtonClick}>Post</Button>
    </div>
  );
}
