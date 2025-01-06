import React from 'react'
import { AppSidebar } from 'apps/roro-nextjs/src/components/app-sidebar'
import { SidebarInset, SidebarProvider } from 'apps/roro-nextjs/src/components/ui/sidebar'


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
