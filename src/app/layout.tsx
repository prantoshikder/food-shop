import type { Metadata } from "next";
import "../sass/main.scss";
import PageRender from "./PageRender";

export const metadata: Metadata = {
  title: "Food || Shop",
  description: "Food shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PageRender>{children}</PageRender>
      </body>
    </html>
  );
}
