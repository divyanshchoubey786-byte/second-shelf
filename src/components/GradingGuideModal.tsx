import React, { useState } from 'react';
import { ConditionGradeKey } from '../types';

interface Props {
  onClose: () => void;
  onSelectGrade?: (grade: ConditionGradeKey) => void;
}

export const GradingGuideModal: React.FC<Props> = ({ onClose, onSelectGrade }) => {
  const [selectedTab, setSelectedTab] = useState<'tiers' | 'process'>('tiers');

  const gradeTiers = [
    {
      key: 'likenew' as ConditionGradeKey,
      badge: 'Top Tier',
      name: 'Like New (Fine / Archival)',
      summary: 'Appears virtually unread or brand-new off shelf.',
      criteria: [
        'Dust Jacket: Crisp, original high gloss, zero corner curling or sun-bleach',
        'Spine & Binding: Tight factory block, unopened past 60° reading angle',
        'Interior: 100% white/cream acid-free leaves, zero annotations or dogears',
        'Remainder Markings: None whatsoever; clean publisher barcode',
        'Hygiene: 400nm UV germicidal sanitization certified'
      ],
      idealFor: 'Collectors, book gifts, shelf centerpieces'
    },
    {
      key: 'verygood' as ConditionGradeKey,
      badge: 'Best Value',
      name: 'Very Good (Near Mint)',
      summary: 'Gently read once or stored with care; minimal cosmetic shelf wear.',
      criteria: [
        'Dust Jacket: Intact, micro-rubbing on bottom lip, no edge tears',
        'Spine & Binding: Solid square spine with gentle natural reading flex',
        'Interior: Clean pages, faint pencil erased if present, no heavy marks',
        'Remainder Markings: Faint archival dot or clean edge',
        'Hygiene: Ozone aerated and UV-C sanitized'
      ],
      idealFor: 'Avid readers wanting pristine condition at 60%+ discount'
    },
    {
      key: 'good' as ConditionGradeKey,
      badge: 'Budget',
      name: 'Good (Sound Reading Copy)',
      summary: 'Solid copy read multiple times with normal exterior handling wear.',
      criteria: [
        'Dust Jacket: Softening at spine ends, minor rubbing or creasing',
        'Spine & Binding: Structurally sound, flat-opening for ergonomic reading',
        'Interior: Complete text, minor vintage paper tanning or faint marginalia',
        'Remainder Markings: May contain standard remainder stroke',
        'Hygiene: Full sanitization pass completed'
      ],
      idealFor: 'Daily book lovers, commuters, book club reading'
    },
    {
      key: 'acceptable' as ConditionGradeKey,
      badge: 'Reader Copy',
      name: 'Acceptable (Authentic Patina)',
      summary: 'Well-loved volume; all pages present, completely readable.',
      criteria: [
        'Dust Jacket: May be scuffed or fitted with protective archival Mylar',
        'Spine: Creased spine with intact structural binding block',
        'Interior: May contain reader notes or prior owner inscription',
        'Remainder Markings: Remainder marks or institutional library stamps',
        'Hygiene: Deep ozone decontamination applied'
      ],
      idealFor: 'Maximum budget savings and circular literary reuse'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/75 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-xl bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-surface-container bg-surface">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-lg">verified</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-lg text-primary">ReBound Grading Standard</h3>
              <p className="font-body-sm text-xs text-on-surface-variant">The 5-Point Forensic Restoration Protocol</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close grading guide"
            className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-low border-b border-surface-container">
          <button
            onClick={() => setSelectedTab('tiers')}
            className={`px-3 py-1.5 rounded-lg font-label-md text-xs transition-colors ${
              selectedTab === 'tiers' 
                ? 'bg-primary text-on-primary' 
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Grade Tier Definitions
          </button>
          <button
            onClick={() => setSelectedTab('process')}
            className={`px-3 py-1.5 rounded-lg font-label-md text-xs transition-colors ${
              selectedTab === 'process' 
                ? 'bg-primary text-on-primary' 
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            5-Point Inspection Protocol
          </button>
        </div>

        {/* Content body */}
        <div className="p-5 overflow-y-auto space-y-4">
          {selectedTab === 'tiers' ? (
            <div className="space-y-4">
              {gradeTiers.map((tier) => (
                <div 
                  key={tier.key}
                  className="p-4 rounded-xl border border-surface-container-high bg-surface-container-low hover:border-primary-fixed transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-[10px] bg-primary text-on-primary px-2 py-0.5 rounded-full uppercase">
                        {tier.badge}
                      </span>
                      <h4 className="font-title-md text-primary text-sm">{tier.name}</h4>
                    </div>
                    {onSelectGrade && (
                      <button
                        onClick={() => {
                          onSelectGrade(tier.key);
                          onClose();
                        }}
                        className="text-xs font-semibold text-secondary hover:underline"
                      >
                        Choose this grade
                      </button>
                    )}
                  </div>
                  <p className="font-body-sm text-xs text-on-surface mb-2.5">
                    {tier.summary}
                  </p>
                  <ul className="space-y-1.5 text-[11px] text-on-surface-variant">
                    {tier.criteria.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="material-symbols-outlined text-xs text-primary mt-0.5">check</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2.5 pt-2 border-t border-surface-container text-[11px] text-on-surface-variant flex items-center gap-1">
                    <span className="font-semibold text-primary">Best suited for:</span>
                    <span>{tier.idealFor}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container-high">
                <div className="flex items-center gap-2 text-primary font-title-md text-sm mb-1">
                  <span className="material-symbols-outlined text-base">menu_book</span>
                  <span>1. Cover & Dust Jacket Preservation</span>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  We verify lamination integrity under high-CRI 5000K light. Edges, spine tips, and inner flaps are inspected for tears, tape repairs, or liquid contact.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container-high">
                <div className="flex items-center gap-2 text-primary font-title-md text-sm mb-1">
                  <span className="material-symbols-outlined text-base">align_justify_space_between</span>
                  <span>2. Spine & Structural Binding Block</span>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  Spines are tested with a tensile reading gauge to ensure sewing stays intact, glue has not crystallized, and headband reinforcement is sturdy.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container-high">
                <div className="flex items-center gap-2 text-primary font-title-md text-sm mb-1">
                  <span className="material-symbols-outlined text-base">auto_stories</span>
                  <span>3. Interior Page Integrity & Annotations</span>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  Every volume is thumb-fanned on an optical scanning surface. Margin pencil notes, highlighter, dog-eared corners, and moisture waves are logged.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container-high">
                <div className="flex items-center gap-2 text-primary font-title-md text-sm mb-1">
                  <span className="material-symbols-outlined text-base">ink_marker</span>
                  <span>4. Remainder Markings & Trim Polish</span>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  Warehouse dots, liquidation stamps, or remainder cuts on the bottom edge are cataloged transparently so no surprise markings arrive.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container-high">
                <div className="flex items-center gap-2 text-primary font-title-md text-sm mb-1">
                  <span className="material-symbols-outlined text-base">cleaning_services</span>
                  <span>5. Medical UV Germicidal & Ozone Sterilization</span>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  Every book enters a dual-chamber 254nm UV-C decontamination tunnel and active ozone aeration vault to eradicate bacteria, allergens, and odors.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-surface-container-low border-t border-surface-container flex items-center justify-between">
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-secondary">workspace_premium</span>
            Backed by ReBound 30-Day Guarantee
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary text-on-primary font-label-md text-xs rounded-lg hover:bg-primary-container transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
