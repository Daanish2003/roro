import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "apps/roro-nextjs/src/components/ui/toaster";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "apps/roro-nextjs/src/components/providers/theme-provider"
import MainSidebar from "~/components/main-sidebar";
import MainNavbar from "apps/roro-nextjs/src/components/main-navbar";

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
