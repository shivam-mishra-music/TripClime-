// src/app/layout.js
"use client";

import { AuthProvider } from "./context/authContext"; // adjust path if needed
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
