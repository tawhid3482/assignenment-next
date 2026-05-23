"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Frontend Running by tawh🚀</h1>

      <ul className="mt-5">
        {data.map((item: any, index) => (
          <li key={index} className="p-2 border">
            {item.time}
          </li>
        ))}
      </ul>
    </div>
  );
}