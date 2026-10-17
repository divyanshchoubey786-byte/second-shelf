import React, { useState } from 'react';
import { Book } from '../types';

interface Props {
  book: Book;
  onClose: () => void;
  onTradeInSubmitted: (creditAmount: number) => void;
}

export const TradeInModal: React.FC<Props> = ({ book, onClose, onTradeInSubmitted }) => {
  const [hasDustJacket, setHasDustJacket] = useState<boolean>(true);
  const [spineCondition, setSpineCondition] = useState<'firm' | 'flexible' | 'cracked'>('firm');
  const [pagesCondition, setPagesCondition] = useState<'clean' | 'minor' | 'marked'>('clean');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Compute estimate dynamically based on selections
  let multiplier = 1.0;
  if (!hasDustJacket) multiplier -= 0.25;
  if (spineCondition === 'flexible') multiplier -= 0.15;
  if (spineCondition === 'cracked') multiplier -= 0.35;
  if (pagesCondition === 'minor') multiplier -= 0.1;
  if (pagesCondition === 'marked') multiplier -= 0.25;

  const estimatedCredit = +(book.tradeInValue * Math.max(0.4, multiplier)).toFixed(2);
  const estimatedCash = +(estimatedCredit * 0.8).toFixed(2);

  const handleConfirmTradeIn = () => {
    setSubmitted(true);
    setTimeout(() => {
      onTradeInSubmitted(estimatedCredit);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/75 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-surface-container bg-surface">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-lg">published_with_changes</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-lg text-primary">Trade-In Valuation</h3>
              <p className="font-body-sm text-xs text-on-surface-variant">Instant Circular Exchange for {book.title}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close trade-in tool"
            className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-primary-fixed text-primary rounded-full flex items-center justify-center mx-auto animate-bounce">
              <span className="material-symbols-outlined text-3xl">mark_email_read</span>
            </div>
            <h4 className="font-headline-md text-primary text-xl">Prepaid Mailer Requested!</h4>
            <p className="font-body-md text-sm text-on-surface-variant max-w-sm mx-auto">
              We have generated a prepaid shipping label and credited <strong className="text-primary font-bold">${estimatedCredit.toFixed(2)}</strong> provisional trade-in value to your ReBound account.
            </p>
            <div className="p-3 bg-surface-container-low rounded-xl text-xs text-on-surface-variant">
              Tracking: <strong>USPS-RB-9400-1299-409</strong> • Padded mailer arriving in 2 business days.
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-primary text-on-primary font-label-md text-xs rounded-lg hover:bg-primary-container transition-colors"
            >
              Done & Return to Book
            </button>
          </div>
        ) : (
          <div className="p-5 overflow-y-auto space-y-5">
            {/* Target Book Info Card */}
            <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl">
              <img src={book.coverImage} alt={book.title} className="w-12 h-16 object-cover rounded shadow-sm" />
              <div>
                <h4 className="font-title-md text-primary text-sm line-clamp-1">{book.title}</h4>
                <p className="font-body-sm text-xs text-on-surface-variant">by {book.author} ({book.year})</p>
                <p className="font-label-sm text-[11px] text-secondary mt-0.5">ISBN: {book.isbn}</p>
              </div>
            </div>

            {/* Questions Form */}
            <div className="space-y-4 text-xs">
              <div>
                <label className="font-semibold text-primary block mb-1.5">Original Dust Jacket Included?</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setHasDustJacket(true)}
                    className={`py-2 px-3 rounded-lg border font-medium transition-colors ${
                      hasDustJacket 
                        ? 'border-primary bg-primary text-on-primary' 
                        : 'border-surface-container-highest bg-surface-container-lowest text-on-surface'
                    }`}
                  >
                    Yes, intact jacket
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasDustJacket(false)}
                    className={`py-2 px-3 rounded-lg border font-medium transition-colors ${
                      !hasDustJacket 
                        ? 'border-primary bg-primary text-on-primary' 
                        : 'border-surface-container-highest bg-surface-container-lowest text-on-surface'
                    }`}
                  >
                    No jacket / Paperback
                  </button>
                </div>
              </div>

              <div>
                <label className="font-semibold text-primary block mb-1.5">Spine & Binding Condition</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSpineCondition('firm')}
                    className={`py-2 px-2 rounded-lg border text-center font-medium transition-colors ${
                      spineCondition === 'firm' 
                        ? 'border-primary bg-primary text-on-primary' 
                        : 'border-surface-container-highest bg-surface-container-lowest text-on-surface'
                    }`}
                  >
                    Tight & Firm
                  </button>
                  <button
                    type="button"
                    onClick={() => setSpineCondition('flexible')}
                    className={`py-2 px-2 rounded-lg border text-center font-medium transition-colors ${
                      spineCondition === 'flexible' 
                        ? 'border-primary bg-primary text-on-primary' 
                        : 'border-surface-container-highest bg-surface-container-lowest text-on-surface'
                    }`}
                  >
                    Normal Flex
                  </button>
                  <button
                    type="button"
                    onClick={() => setSpineCondition('cracked')}
                    className={`py-2 px-2 rounded-lg border text-center font-medium transition-colors ${
                      spineCondition === 'cracked' 
                        ? 'border-primary bg-primary text-on-primary' 
                        : 'border-surface-container-highest bg-surface-container-lowest text-on-surface'
                    }`}
                  >
                    Cracked / Loose
                  </button>
                </div>
              </div>

              <div>
                <label className="font-semibold text-primary block mb-1.5">Interior Pages</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPagesCondition('clean')}
                    className={`py-2 px-2 rounded-lg border text-center font-medium transition-colors ${
                      pagesCondition === 'clean' 
                        ? 'border-primary bg-primary text-on-primary' 
                        : 'border-surface-container-highest bg-surface-container-lowest text-on-surface'
                    }`}
                  >
                    Spotless
                  </button>
                  <button
                    type="button"
                    onClick={() => setPagesCondition('minor')}
                    className={`py-2 px-2 rounded-lg border text-center font-medium transition-colors ${
                      pagesCondition === 'minor' 
                        ? 'border-primary bg-primary text-on-primary' 
                        : 'border-surface-container-highest bg-surface-container-lowest text-on-surface'
                    }`}
                  >
                    Minor Notes
                  </button>
                  <button
                    type="button"
                    onClick={() => setPagesCondition('marked')}
                    className={`py-2 px-2 rounded-lg border text-center font-medium transition-colors ${
                      pagesCondition === 'marked' 
                        ? 'border-primary bg-primary text-on-primary' 
                        : 'border-surface-container-highest bg-surface-container-lowest text-on-surface'
                    }`}
                  >
                    Highlighted
                  </button>
                </div>
              </div>
            </div>

            {/* Instant Valuation Output */}
            <div className="p-4 bg-secondary-fixed/40 rounded-xl border border-secondary-fixed">
              <span className="text-[10px] font-bold text-secondary uppercase tracking-wider block">Estimated Payout</span>
              <div className="flex items-baseline justify-between mt-1">
                <div>
                  <span className="text-2xl font-bold text-on-secondary-fixed">${estimatedCredit.toFixed(2)}</span>
                  <span className="text-xs text-on-secondary-fixed ml-1 font-semibold">Store Credit</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-primary">${estimatedCash.toFixed(2)}</span>
                  <span className="text-xs text-on-surface-variant ml-1">Cash Deposit</span>
                </div>
              </div>
              <p className="font-body-sm text-[11px] text-on-secondary-fixed-variant mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">eco</span>
                Keeps 0.8 lbs of book materials in circular literary circulation.
              </p>
            </div>
          </div>
        )}

        {/* Footer actions */}
        {!submitted && (
          <div className="p-4 bg-surface-container-low border-t border-surface-container flex items-center justify-between">
            <span className="text-xs text-on-surface-variant">Includes free prepaid return label</span>
            <button
              onClick={handleConfirmTradeIn}
              className="px-4 py-2.5 bg-primary text-on-primary font-label-md text-xs rounded-lg hover:bg-primary-container transition-colors shadow-sm flex items-center gap-1.5"
            >
              <span>Accept &amp; Get Mailer</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
