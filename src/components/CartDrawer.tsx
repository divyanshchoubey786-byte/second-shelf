import React, { useState } from 'react';
import { CartItem } from '../types';

interface Props {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQty: (bookId: string, gradeKey: string, delta: number) => void;
  onRemoveItem: (bookId: string, gradeKey: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<Props> = ({
  isOpen,
  items,
  onClose,
  onUpdateQty,
  onRemoveItem,
  onClearCart
}) => {
  const [orderComplete, setOrderComplete] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => {
    const grade = item.book.grades[item.gradeKey];
    return acc + (grade ? grade.price * item.quantity : 0);
  }, 0);

  const totalCO2 = items.reduce((acc, item) => {
    const grade = item.book.grades[item.gradeKey];
    const val = grade ? parseFloat(grade.co2Saved) : 0.8;
    return acc + val * item.quantity;
  }, 0);

  const totalWater = items.reduce((acc, item) => {
    const grade = item.book.grades[item.gradeKey];
    const val = grade ? parseFloat(grade.waterSaved) : 12;
    return acc + val * item.quantity;
  }, 0);

  const handleCheckout = () => {
    const genId = 'RB-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(genId);
    setOrderComplete(true);
  };

  const handleFinish = () => {
    setOrderComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      <div 
        className="w-full max-w-md bg-surface h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-surface-container bg-surface-container-lowest">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">shopping_bag</span>
            <h3 className="font-headline-sm text-lg text-primary">Your Archival Bag</h3>
            <span className="text-xs bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded-full font-bold">
              {items.reduce((sum, i) => sum + i.quantity, 0)}
            </span>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close bag"
            className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {orderComplete ? (
          /* Order Confirmation & Certificate of Circular Restoration */
          <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">task_alt</span>
            </div>
            <div>
              <span className="font-label-sm text-secondary uppercase tracking-widest text-[11px]">
                Order Confirmed • Ships Tomorrow
              </span>
              <h4 className="font-headline-md text-primary text-2xl mt-1">Archival Order #{orderId}</h4>
              <p className="font-body-sm text-on-surface-variant text-xs mt-1">
                Your restored literary volume has been allocated from Archival Bench #2.
              </p>
            </div>

            {/* Certificate Card */}
            <div className="w-full bg-surface-container-lowest border-2 border-primary-fixed rounded-2xl p-5 text-left shadow-sm space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none"></div>
              <div className="flex items-center justify-between border-b border-surface-container pb-2.5">
                <div>
                  <p className="font-label-sm text-[10px] text-secondary uppercase tracking-wider">Official Document</p>
                  <p className="font-title-md text-primary text-xs font-bold">Certificate of Circular Restoration</p>
                </div>
                <span className="material-symbols-outlined text-primary text-2xl">verified</span>
              </div>

              <div className="space-y-1.5 text-xs text-on-surface">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Batch Certificate:</span>
                  <span className="font-mono font-semibold">{orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">UV-C Sanitation:</span>
                  <span className="text-primary font-semibold">400nm Certified Passed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Environmental Savings:</span>
                  <span className="text-secondary font-bold">{totalCO2.toFixed(1)} lbs CO₂ / {totalWater.toFixed(0)} gal water</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Warranty:</span>
                  <span className="text-on-surface font-semibold">30-Day Literary Guarantee</span>
                </div>
              </div>

              <div className="pt-2 border-t border-surface-container flex items-center justify-between text-[11px] text-on-surface-variant">
                <span>Inspected by: Conservator Bench #2</span>
                <span className="font-mono text-[10px] bg-surface-container px-1.5 py-0.5 rounded">PASSED A+</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3 bg-primary text-on-primary font-label-lg text-sm rounded-xl hover:bg-primary-container transition-colors shadow-sm"
            >
              Continue Browsing Archival Collection
            </button>
          </div>
        ) : (
          /* Normal Cart List */
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant mb-3">
                  <span className="material-symbols-outlined text-3xl">shopping_bag</span>
                </div>
                <h4 className="font-headline-sm text-primary text-base">Your Bag is Empty</h4>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1 max-w-xs">
                  Explore certified restored titles with comprehensive 5-point condition audits.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 bg-primary text-on-primary font-label-md text-xs rounded-lg hover:bg-primary-container transition-colors"
                >
                  Browse Archival Titles
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {/* Eco Impact Live Pill */}
                  <div className="p-3 bg-secondary-fixed/50 rounded-xl flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-xl">forest</span>
                    <div>
                      <p className="font-label-sm text-xs text-on-secondary-fixed font-bold">Circular Impact of this Bag</p>
                      <p className="font-body-sm text-[11px] text-on-secondary-fixed-variant">
                        Saving {totalCO2.toFixed(1)} lbs CO₂ &amp; {totalWater.toFixed(0)} gallons of water vs. new print run.
                      </p>
                    </div>
                  </div>

                  {items.map((item) => {
                    const grade = item.book.grades[item.gradeKey];
                    const price = grade ? grade.price : 11.50;
                    return (
                      <div 
                        key={`${item.book.id}-${item.gradeKey}`}
                        className="p-3 bg-surface-container-lowest rounded-xl border border-surface-container-high flex gap-3 shadow-xs"
                      >
                        <img 
                          src={item.book.coverImage} 
                          alt={item.book.title} 
                          className="w-14 h-20 object-cover rounded shadow-xs shrink-0" 
                        />
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <div className="flex items-start justify-between gap-1">
                              <h4 className="font-title-md text-primary text-xs truncate">{item.book.title}</h4>
                              <button
                                onClick={() => onRemoveItem(item.book.id, item.gradeKey)}
                                className="text-on-surface-variant hover:text-error transition-colors"
                                aria-label="Remove item"
                              >
                                <span className="material-symbols-outlined text-sm">delete</span>
                              </button>
                            </div>
                            <p className="font-body-sm text-[11px] text-on-surface-variant">by {item.book.author}</p>
                            <span className="inline-block mt-1 font-label-sm text-[10px] bg-primary text-on-primary px-1.5 py-0.5 rounded">
                              Grade: {grade ? grade.name : item.gradeKey}
                            </span>
                          </div>

                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-surface-container">
                            {/* Quantity Controls */}
                            <div className="flex items-center bg-surface-container-high rounded p-0.5">
                              <button
                                onClick={() => onUpdateQty(item.book.id, item.gradeKey, -1)}
                                className="w-5 h-5 flex items-center justify-center text-primary hover:bg-surface-container rounded"
                              >
                                <span className="material-symbols-outlined text-[10px]">remove</span>
                              </button>
                              <span className="w-5 text-center font-label-sm text-xs text-primary">{item.quantity}</span>
                              <button
                                onClick={() => onUpdateQty(item.book.id, item.gradeKey, 1)}
                                className="w-5 h-5 flex items-center justify-center text-primary hover:bg-surface-container rounded"
                              >
                                <span className="material-symbols-outlined text-[10px]">add</span>
                              </button>
                            </div>
                            <span className="font-title-md text-xs text-primary font-bold">
                              ${(price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Subtotal & Checkout Section */}
                <div className="p-4 bg-surface-container-lowest border-t border-surface-container space-y-3">
                  <div className="space-y-1.5 text-xs text-on-surface-variant">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-on-surface">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Restoration Certification &amp; Packaging</span>
                      <span className="text-primary font-semibold">Free (Included)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>USPS Carbon-Neutral Shipping</span>
                      <span className="text-primary font-semibold">Free ($0.00)</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-primary pt-1.5 border-t border-surface-container">
                      <span>Total</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full h-12 bg-primary text-on-primary font-label-lg text-sm rounded-xl flex items-center justify-between px-4 shadow-sm hover:bg-primary-container active:scale-[0.99] transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">lock</span>
                      <span>Complete Circular Order</span>
                    </span>
                    <span className="font-title-md text-primary-fixed">${subtotal.toFixed(2)}</span>
                  </button>

                  <p className="text-center font-body-sm text-[11px] text-on-surface-variant flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-xs text-primary">local_shipping</span>
                    Ships tomorrow in 100% recycled unbleached padded mailer.
                  </p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
