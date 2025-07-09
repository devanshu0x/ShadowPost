import { Background } from "@/components/ui/background";
import Hero from "@/components/ui/hero";

export default function () {
  return (
    <div>
      <Background />
      <div className="mt-20 md:mt-25">
        <Hero />
      </div>
      <div id="how-it-works" className="my-16 px-8">
        <div className="text-center text-xl font-bold">How it Works?</div>
        <div className="text-justify max-w-2xl mx-auto mt-4 text-gray-200 bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm px-12 py-8 rounded-xl">
              <p>
                ShadowPost revolutionizes feedback collection by removing barriers between creators and their audience. 
                You sign up once, create posts about anything you want feedback on, and share a simple link.
                Anyone with your link can comment immediately without creating accounts, signing up, or providing personal information. 
                This creates a frictionless experience that encourages honest, anonymous feedback.
              </p>
        </div>
      </div>
    </div>
  );
}
