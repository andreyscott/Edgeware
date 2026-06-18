import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="font-display font-bold text-8xl text-brand-gold mb-4">404</div>
        <h1 className="font-display font-bold text-3xl text-white mb-4">Page Not Found</h1>
        <p className="text-white/60 mb-10">
          The page you are looking for does not exist or has been moved. Let&apos;s get you back on
          track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:border-brand-gold">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
