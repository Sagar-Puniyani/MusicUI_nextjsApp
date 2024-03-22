import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] " >
        <h1 className="text-2xl text-center mt-52" >Home Page</h1>
        <HeroSection />
    </main>
  );
}
