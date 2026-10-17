import React from 'react';
import { USER_AVATAR_URL } from '../data/books';

interface Props {
  onClose: () => void;
  tradeInBalance: number;
}

export const ProfileModal: React.FC<Props> = ({ onClose, tradeInBalance }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/70 backdrop-blur-sm">
      <div 
        className="w-full max-w-sm bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl p-5 space-y-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-surface-container pb-3">
          <div className="flex items-center gap-3">
            <img 
              src={USER_AVATAR_URL} 
              alt="Profile" 
              className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-fixed"
            />
            <div>
              <h3 className="font-title-md text-primary text-sm font-bold">Elena Rostova</h3>
              <p className="font-body-sm text-[11px] text-on-surface-variant">Archival Patron • Member since 2023</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close profile"
            className="w-7 h-7 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Circular Member Impact Dashboard */}
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="p-3 bg-primary-fixed/40 rounded-xl">
            <span className="material-symbols-outlined text-primary text-xl">eco</span>
            <p className="font-title-md text-primary text-base font-bold mt-0.5">14 Books</p>
            <p className="font-body-sm text-[10px] text-on-primary-fixed-variant">Circularly Rehomed</p>
          </div>
          <div className="p-3 bg-secondary-fixed/50 rounded-xl">
            <span className="material-symbols-outlined text-secondary text-xl">savings</span>
            <p className="font-title-md text-on-secondary-fixed text-base font-bold mt-0.5">
              ${tradeInBalance.toFixed(2)}
            </p>
            <p className="font-body-sm text-[10px] text-on-secondary-fixed-variant">Trade-In Credit</p>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl">
            <span className="text-on-surface font-medium flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-primary">forest</span>
              Lifetime CO₂ Abatement
            </span>
            <span className="font-bold text-primary">16.4 lbs CO₂</span>
          </div>
          <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl">
            <span className="text-on-surface font-medium flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-secondary">water_drop</span>
              Conserved Paper Mill Water
            </span>
            <span className="font-bold text-secondary">210 Gallons</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2 bg-primary text-on-primary font-label-md text-xs rounded-xl hover:bg-primary-container transition-colors"
        >
          Close Member Profile
        </button>
      </div>
    </div>
  );
};
