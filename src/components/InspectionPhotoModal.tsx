import React, { useState } from 'react';
import { InspectionPhoto } from '../types';

interface Props {
  photos: InspectionPhoto[];
  initialPhotoId?: string;
  onClose: () => void;
}

export const InspectionPhotoModal: React.FC<Props> = ({ photos, initialPhotoId, onClose }) => {
  const [activeIdx, setActiveIdx] = useState(() => {
    const found = photos.findIndex(p => p.id === initialPhotoId);
    return found !== -1 ? found : 0;
  });
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const activePhoto = photos[activeIdx];

  const toggleZoom = () => {
    setZoomLevel(prev => (prev === 1 ? 2.2 : 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-md transition-opacity">
      <div 
        className="relative w-full max-w-xl bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-surface-container bg-surface/95">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">biotech</span>
            <div>
              <h3 className="font-title-md text-primary leading-tight">Archival Bench #2 Scan</h3>
              <p className="font-body-sm text-[11px] text-on-surface-variant">Calibrated 48-bit optical macro capture</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close photo inspector"
            className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Viewport & Image Canvas */}
        <div className="relative bg-[#111614] h-72 sm:h-84 flex items-center justify-center overflow-hidden cursor-zoom-in" onClick={toggleZoom}>
          <img 
            src={activePhoto.url} 
            alt={activePhoto.alt}
            className={`max-h-full max-w-full object-contain transition-transform duration-300 ease-out select-none ${
              zoomLevel > 1 ? 'scale-[2.2] cursor-zoom-out' : 'scale-100'
            }`}
          />
          {/* Zoom Overlay Pill */}
          <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded-full font-label-sm text-[11px] flex items-center gap-1.5 pointer-events-none">
            <span className="material-symbols-outlined text-xs">
              {zoomLevel > 1 ? 'zoom_out' : 'zoom_in'}
            </span>
            <span>{zoomLevel > 1 ? 'Tap to Zoom Out (220%)' : 'Tap to Zoom (100%)'}</span>
          </div>

          {/* Calibrated Target Overlay */}
          <div className="absolute top-3 left-3 bg-primary/80 backdrop-blur-sm text-primary-fixed px-2 py-0.5 rounded font-label-sm text-[10px] tracking-wider uppercase border border-primary-fixed/30">
            {activePhoto.defectScore}
          </div>
        </div>

        {/* Thumbnails Strip */}
        <div className="p-3 bg-surface-container-low border-b border-surface-container flex items-center gap-2 overflow-x-auto">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => {
                setActiveIdx(index);
                setZoomLevel(1);
              }}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-all shrink-0 ${
                activeIdx === index 
                  ? 'bg-primary text-on-primary ring-2 ring-primary-fixed shadow-sm' 
                  : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container'
              }`}
            >
              <img src={photo.url} alt={photo.label} className="w-8 h-8 rounded object-cover" />
              <div>
                <p className="font-label-sm text-[11px] font-semibold leading-tight">{photo.label}</p>
                <p className={`text-[10px] ${activeIdx === index ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
                  Scan #{index + 1}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Forensic Audit Remarks */}
        <div className="p-4 bg-surface space-y-2.5 overflow-y-auto">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Angle Specification</span>
              <h4 className="font-title-md text-primary mt-0.5">{activePhoto.label} Verification</h4>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-label-sm bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded-full">
              <span className="material-symbols-outlined text-xs">verified</span>
              Restoration Verified
            </span>
          </div>

          <p className="font-body-md text-on-surface text-sm leading-relaxed">
            {activePhoto.description}
          </p>

          <div className="bg-surface-container-lowest p-3 rounded-xl border border-surface-container-high">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mb-1">
              <span className="material-symbols-outlined text-sm">assignment_turned_in</span>
              <span>Lead Conservator Log (Bench #2)</span>
            </div>
            <p className="font-body-sm text-[13px] text-on-surface-variant italic">
              "{activePhoto.inspectorNote}"
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-surface-container-low border-t border-surface-container flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary text-on-primary font-label-md text-xs rounded-lg hover:bg-primary-container transition-colors"
          >
            Close Inspection Log
          </button>
        </div>
      </div>
    </div>
  );
};
