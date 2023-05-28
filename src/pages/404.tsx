import React from "react";
import Link from "next/link";
import type { NextPage } from "next";

const Page404: NextPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link href={"/"}>Back Home Page</Link>
    </div>
  );
};
export default Page404;
