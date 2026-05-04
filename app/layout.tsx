import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoiceSummary — AI Summaries of Discord Voice Channels",
  description: "Records and transcribes Discord voice channels, generating AI summaries of key decisions, action items, and discussions for team members who missed calls."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d96e8d38-60d9-4b24-b63a-1725beb30ab9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
