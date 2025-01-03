import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "~/components/ui/toaster";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/components/providers/theme-provider"

export const metadata: Metadata = {
  title: "Roro",
  description: "A platform to practice communication skills",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html 
      suppressHydrationWarning
      lang="en" 
      className={`${GeistSans.variable}`
      }>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <TRPCReactProvider>
          <Toaster />
          {children}
        </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
