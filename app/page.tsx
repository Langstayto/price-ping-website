import Image from 'next/image';
import { DiscordButton } from './_components/discord-button';
import { Search, TrendingDown, CheckCircle, Bell, Zap } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Search,
      title: 'Multi-Retailer Discovery',
      description: 'Track deals across Amazon, Walmart, Best Buy & more',
    },
    {
      icon: TrendingDown,
      title: 'Real-Time Price Tracking',
      description: 'Monitor prices across stores 24/7',
    },
    {
      icon: CheckCircle,
      title: 'Verified Discounts Only',
      description: 'No fake deals - only genuine price drops',
    },
    {
      icon: Bell,
      title: 'Instant Discord Alerts',
      description: 'Get notified the moment deals go live',
    },
    {
      icon: Zap,
      title: 'Fully Automated',
      description: 'Daily scans without any manual effort',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full bg-gray-900">
            <Image
              src="https://cdn.abacus.ai/images/dcdc83ef-6883-49dd-9bce-a7f444c369fd.png"
              alt="Price Ping Background"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-900/30 to-gray-900/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Price Ping
            </h1>
            <p className="text-3xl md:text-4xl font-semibold text-blue-300">
              Never Miss a Deal
            </p>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Automated deal discovery across top retailers. Real price drops, real savings, delivered instantly.
            </p>
            <div className="pt-8">
              <DiscordButton />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful automation that does the heavy lifting for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features?.map((feature, index) => {
              const Icon = feature?.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {Icon && <Icon className="w-6 h-6 text-white" />}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature?.title ?? ''}
                      </h3>
                      <p className="text-gray-400">
                        {feature?.description ?? ''}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Currently Tracking
            </h2>
            <div className="inline-flex items-center space-x-3 bg-blue-500/20 px-6 py-3 rounded-full mb-6">
              <span className="text-2xl">🛒</span>
              <span className="text-xl font-semibold text-blue-300">Amazon</span>
            </div>
            <p className="text-lg text-gray-300 mb-8">
              Expanding to more retailers soon including Walmart, Best Buy, Target, and more!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <span className="px-4 py-2 bg-gray-800/50 rounded-lg">Walmart (Coming Soon)</span>
              <span className="px-4 py-2 bg-gray-800/50 rounded-lg">Best Buy (Coming Soon)</span>
              <span className="px-4 py-2 bg-gray-800/50 rounded-lg">Target (Coming Soon)</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Save Money?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join our Discord community and start receiving instant deal alerts today. No credit card required, no hidden fees - completely free!
          </p>
          <DiscordButton variant="large" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Price Ping</span>
            </div>
            <p className="text-gray-400">
              Automated deal discovery and price tracking across top retailers
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date()?.getFullYear() ?? 2024} Price Ping. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
