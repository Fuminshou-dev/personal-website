"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [success, setSuccess] = useState(false);

  const handleButtonClick = async () => {
    try {
      await fetch("https://api.tracker.yandex.net/v2/issues/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "X-Cloud-Org-ID": "bpf4so6pdorpcp1lke3v",
          Authorization:
            "OAuth y0_AgAAAAAMh0ccAAz8bQAAAAEc4BObAADQYl_YNNZBq5SW6biMXYzNKgchRA",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          summary: "прикольная задача c сайта",
          queue: "TESTPOSTMAN",
        }),
      });
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
