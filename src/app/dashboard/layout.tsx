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
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className=" data-[orientation=vertical]:h-4"
          />
          <ModeToggle />
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
