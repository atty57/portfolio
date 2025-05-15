import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <main className="bg-background">
        {children}
      </main>
    </div>
  );
} 