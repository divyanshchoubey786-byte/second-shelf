import React from 'react';
import { REBOUND_LOGO_URL, USER_AVATAR_URL } from '../data/books';

interface Props {
  title: string;
  showBack: boolean;
  onBack: () => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenProfile: () => void;
  isMobileFrame: boolean;
  onToggleFrame: () => void;
}

export const TopHeader: React.FC<Props> = ({
  title,
  showBack,
  onBack,
  cartCount,
  onOpenCart,
  onOpenProfile,
  isMobileFrame,
  onToggleFrame
}) => {
  return (
    <header className="sticky top-0 w-full z-40 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe border-b border-surface-container-high/60">
      <div className="h-16 px-margin flex items-center justify-between gap-space-sm max-w-4xl mx-auto">
        {/* Left branding & back affordance */}
        <div className="flex items-center gap-space-xs min-w-0">
          {showBack ? (
            <button
              aria-label="Go back"
              onClick={onBack}
              className="w-11 h-11 flex items-center justify-center -ml-2 rounded-full text-on-surface hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">arrow_back</span>
            </button>
          ) : (
            <div className="w-2" />
          )}

          <img
            alt="ReBound Books Emblem"
            className="h-7 w-auto object-contain shrink-0"
            src={REBOUND_LOGO_URL}
          />

          <h1 className="font-headline-sm text-headline-sm text-primary tracking-tight truncate pl-1">
            {title}
          </h1>
        </div>

        {/* Right Action Icons: Frame Toggle, Bag, Profile */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Mobile Shell Switcher (Visible on desktop viewports) */}
          <button
            onClick={onToggleFrame}
            title={isMobileFrame ? 'Expand to Full Width' : 'Switch to Mobile Preview Frame'}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container-low hover:bg-surface-container text-xs font-label-md text-on-surface-variant transition-colors border border-surface-container-high"
          >
            <span className="material-symbols-outlined text-sm">
              {isMobileFrame ? 'fullscreen' : 'smartphone'}
            </span>
            <span>{isMobileFrame ? 'Wide' : 'Mobile'}</span>
          </button>

          {/* Bag button */}
          <button
            onClick={onOpenCart}
            aria-label="Open shopping bag"
            className="relative w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-xl">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-secondary text-on-secondary w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center ring-2 ring-surface">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile Avatar */}
          <button
            onClick={onOpenProfile}
            aria-label="View user profile"
            className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden ring-1 ring-surface-variant hover:ring-primary transition-all"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
              src={USER_AVATAR_URL}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
