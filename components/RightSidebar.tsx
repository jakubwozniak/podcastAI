"use client";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const RightSidebar = () => {
  const { user } = useUser();
  return (
    <section className="right-sidebar text-white-1">
      <SignedIn>
        <Link href={`/profile/${user?.id}`}>
          <UserButton />
        </Link>
        <h1>{user?.firstName}</h1>
      </SignedIn>
    </section>
  );
};

export default RightSidebar;
