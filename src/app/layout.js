// src/app/layout.js
"use client";

// adjust path if needed
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
          {children}
      
      </body>
    </html>
  );
}
