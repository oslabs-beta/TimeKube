import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";
import Navbar from "./navbar";
import { startChronJobs } from "@/services/autobackup";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimeKube: Kubernetes Snapshot Backup",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    //upon mountin of the page, call the chronjobs mod
    // startChronJobs();

  return (
    <html lang="en" >
      <body className={inter.className} style={{height: "100vh", width: "100vw"}}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
