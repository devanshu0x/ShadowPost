import EditShell from "@/components/ui/editShell";


export default function Page({params}:{params:Promise<{edit: string[]}>}) {
  return <EditShell params={params} />;
}
