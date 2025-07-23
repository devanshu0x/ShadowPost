import { Background } from "@/components/ui/background"
import Hero from "@/components/ui/hero";

export default function Page() {
  return (
    <div className="relative">
      <Background />

      {/* Hero Section */}
      <div className="mt-24 md:mt-32">
        <Hero />
      </div>

      {/* How It Works Section */}
      <section id="how-it-works" className="my-24 px-6 sm:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-white mb-6 text-balance">
          How it Works?
        </h2>

        <div className="max-w-2xl mx-auto text-gray-400 bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm px-6 sm:px-12 py-8 rounded-2xl leading-relaxed text-justify animate-fadeIn">
          <p>
            <span className="block mb-4">
              ShadowPost revolutionizes feedback collection by removing
              barriers between creators and their audience.
            </span>
            <span className="block mb-4">
              You sign up once, create posts about anything you want feedback
              on, and share a simple link. Anyone with your link can comment
              immediately without creating accounts, signing up, or providing
              personal information.
            </span>
            <span className="block">
              This creates a frictionless experience that encourages honest,
              anonymous feedback.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
