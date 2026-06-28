import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thantrajnana | Scratch Coding, IoT & Robotics Learning",
  description:
    "Thantrajnana helps students learn app development, web development, IoT, Arduino and robotics using Scratch-style visual coding platforms.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
