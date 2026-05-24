import { Metadata } from "next";
import NotFoundClient from "./not-found-client";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Hacktivate 2.0",
  description: "This page doesn't exist. Head back to the hackathon.",
};

export default function NotFound() {
  return <NotFoundClient />;
}
