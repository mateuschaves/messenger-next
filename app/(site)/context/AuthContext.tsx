"use client";

import { SessionProvider } from "next-auth/react";

interface AuthContexttProps {
  children: React.ReactNode;
}

export default function AuthContext({ children }: AuthContexttProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
