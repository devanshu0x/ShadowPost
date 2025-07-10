import Appbar from "@/components/ui/appbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Appbar />
      {children}
    </div>
  );
}
