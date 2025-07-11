import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/theme-button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex items-center gap-2 px-5 py-1 border-b">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className=" data-[orientation=vertical]:h-4"
          />
          <ModeToggle />
        </div>
        <div className="container mx-auto flex flex-col h-screen gap-5 items-center w-[95%]  py-5">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
