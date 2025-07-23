import ThreadShell from "@/components/ui/threadShell";

export default function Page({ params }: { params: Promise<{ thread: string[] }> }) {
  return <ThreadShell params={params} />;
}
