'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface DiscordButtonProps {
  variant?: 'default' | 'large';
}

export function DiscordButton({ variant = 'default' }: DiscordButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const discordUrl = 'https://discord.gg/fWCKRzPU';

  const handleClick = () => {
    window?.open(discordUrl, '_blank', 'noopener,noreferrer');
  };

  const isLarge = variant === 'large';

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        inline-flex items-center justify-center space-x-3
        bg-[#5865F2] hover:bg-[#4752C4] 
        text-white font-semibold
        rounded-lg 
        transition-all duration-300
        shadow-lg hover:shadow-2xl hover:shadow-[#5865F2]/50
        hover:-translate-y-1
        focus:outline-none focus:ring-4 focus:ring-[#5865F2]/50
        ${isLarge ? 'px-10 py-5 text-xl' : 'px-8 py-4 text-lg'}
      `}
      aria-label="Join our Discord server"
    >
      {/* Discord Icon */}
      <div className="relative">
        <MessageCircle 
          className={`${isLarge ? 'w-8 h-8' : 'w-6 h-6'} ${isHovered ? 'animate-pulse' : ''}`}
        />
      </div>
      
      {/* Button Text */}
      <span>Join Our Discord</span>
      
      {/* Arrow Indicator */}
      <svg
        className={`${isLarge ? 'w-6 h-6' : 'w-5 h-5'} transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </button>
  );
}
