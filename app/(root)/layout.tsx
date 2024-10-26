import React from "react";

import { Navbar } from "./_components/navbar";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
