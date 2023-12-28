"use client";
import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
export const DataContext = createContext();

export function Providers({ children }) {
  const [data, setData] = useState("");
  const [UIstate, setUIstate] = useState("");

  // fetch data
  useEffect(() => {
    const fetchOptions = { method: "GET" };
    fetch("/api/data", fetchOptions)
      .then((res_) => res_.json())
      .then((json_) => {
        if (json_.success) {
          console.log(
            `SUCCESS: fetched -/data: ${Object.keys(
              json_.success
            )}\n.............`
          );
          setData(json_.success);
        } else if (json_.error) {
          console.error(
            "FAILED: fetch -/data\n > " +
              JSON.stringify(json_.error) +
              "\n.............."
          );
          setError(json_.error);
        } else {
          console.error(
            "ERROR: no response -/data\n > " +
              JSON.stringify(json_) +
              "\n.............."
          );
          setError("ERROR: Check network and reload");
        }
      })
      .catch((err) => {
        setUIstate("failed");
        console.error("ERROR: caught error 01.A\n > " + err.error || err);
      });
  }, []);
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </ThemeProvider>
  );
}
