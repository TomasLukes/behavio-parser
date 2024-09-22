import Intro from "@/app/components/Intro";
import ParserWrapper from "@/app/components/ParserWrapper";

export default function Home() {
  return (
    <main className="h-full w-full max-w-6xl mx-auto text-zinc-900 py-8 px-4 flex flex-col gap-16">
      <Intro />
      <ParserWrapper className="w-full flex items-center justify-between gap-4" />
    </main>
  );
}
