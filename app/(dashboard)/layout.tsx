import Appbar from "@/components/ui/appbar";
import '@milkdown/crepe/theme/common/style.css';
import '@milkdown/crepe/theme/frame.css';
import "@/components/markdownEditor/theme.css"

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
