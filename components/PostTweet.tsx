"use client";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

function PostTweet() {
  const { toast } = useToast();
  const [val, setVal] = useState("");
  async function handleSubmit() {
    fetch("http://localhost:3000/api/tweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: val }),
    }).then(() => {
      toast({
        description: "Your Tweet has been posted",
        title: "Success",
      });
    });
    setVal("");
  }
  return (
    <div className="grid w-full gap-2">
      <Textarea
        placeholder="Whats on your mind..."
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <Button onClick={handleSubmit}>POST</Button>
    </div>
  );
}

export default PostTweet;
