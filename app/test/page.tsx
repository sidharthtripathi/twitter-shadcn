"use client";

import { useEffect } from "react";

async function page() {
  useEffect(() => {
    fetch("http://localhost:3000/api/tweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ msg: "hello from client" }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return <div>hello</div>;
}

export default page;
