import React, { useState } from 'react';
import { Book, ConditionGradeKey } from '../types';

interface Props {
  book: Book;
  onOpenGradingGuide: () => void;
  onOpenInspectionPhoto: (photoId: string) => void;
  onOpenTradeIn: () => void;
  onNavigateToCatalog: (category?: string) => void;
  onAddToBag: (book: Book, gradeKey: ConditionGradeKey, qty: number) => void;
}

export const BookDetailScreen: React.FC<Props> = ({
  book,
  onOpenGradingGuide,
  onOpenInspectionPhoto,
  onOpenTradeIn,
  onNavigateToCatalog,
  onAddToBag
}) => {
  const [selectedGradeKey, setSelectedGradeKey] = useState<ConditionGradeKey>(book.defaultGrade);
  const [quantity, setQuantity] = useState<number>(1);
  const [addedToast, setAddedToast] = useState<boolean>(false);

  const selectedGrade = book.grades[selectedGradeKey] || book.grades[book.defaultGrade];

  const handleGradeChange = (gradeKey: ConditionGradeKey) => {
    setSelectedGradeKey(gradeKey);
    setQuantity(1); // reset quantity when grade changes
  };

  const handleQuantityDelta = (delta: number) => {
    const next = quantity + delta;
    if (next >= 1 && next <= selectedGrade.stock) {
      setQuantity(next);
    }
  };

  const handleAdd = () => {
    onAddToBag(book, selectedGradeKey, quantity);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
    }, 1800);
  };

  const totalPrice = (selectedGrade.price * quantity).toFixed(2);

  return (
    <div className="flex flex-col w-full pb-28 pt-2 px-margin bg-surface">
      {/* Breadcrumb & Archival Series Tag */}
      <div className="flex items-center justify-between py-2 text-on-surface-variant font-body-sm text-body-sm">
        <div className="flex items-center gap-1.5 min-w-0">
          <button 
            onClick={() => onNavigateToCatalog()}
            className="hover:text-primary transition-colors truncate"
          >
            Catalog
          </button>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <button 
            onClick={() => onNavigateToCatalog(book.category)}
            className="hover:text-primary transition-colors truncate"
          >
            {book.category}
          </button>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-primary font-label-md text-label-md truncate">
            {book.subcategory}
          </span>
        </div>
        <div 
          onClick={() => onNavigateToCatalog()}
          className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full shrink-0 cursor-pointer hover:bg-surface-container-highest transition-colors"
        >
          <span className="material-symbols-outlined text-xs text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
            verified
          </span>
          <span className="text-[11px] font-label-sm text-secondary tracking-wide uppercase">
            {book.archivalBatch}
          </span>
        </div>
      </div>

      {/* Hero Book Presentation Section */}
      <div className="relative mt-2 p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center">
        {/* Tactile Book Render Container */}
        <div className="relative w-40 h-56 rounded-lg overflow-hidden shadow-md group">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={book.coverImage}
            alt={book.coverAlt}
          />
          {/* Spine Tactile Fold Gradient */}
          <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 via-black/10 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none"></div>
          {/* Inspected Stamp Ribbon */}
          <div className="absolute top-2.5 right-2.5 bg-surface-container-lowest/95 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-xs text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              task_alt
            </span>
            <span className="font-label-sm text-label-sm text-primary uppercase">
              Audited
            </span>
          </div>
        </div>

        {/* Book Meta */}
        <div className="text-center mt-4 w-full">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wide">
            <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
              eco
            </span>
            Circular Restoration Certified
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mt-2">
            {book.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
            by {book.author} ({book.year})
          </p>
          <div className="flex items-center justify-center gap-3 mt-3 text-on-surface-variant font-label-md text-label-md flex-wrap">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <strong className="text-on-surface">{book.rating}</strong> ({book.reviewsCount} reviews)
            </span>
            <span className="text-surface-variant">•</span>
            <span>{book.binding} • {book.pages} pages</span>
            <span className="text-surface-variant">•</span>
            <span>ISBN {book.isbn}</span>
          </div>
        </div>
      </div>

      {/* Multi-Grade Selector Switcher */}
      <div className="mt-space-lg">
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="font-title-md text-title-md text-primary">Select Graded Condition</h3>
          <button 
            type="button"
            onClick={onOpenGradingGuide}
            className="font-label-sm text-label-sm text-on-surface-variant underline hover:text-primary transition-colors cursor-pointer"
          >
            Grading Standard Guide
          </button>
        </div>

        {/* Segmented Grade Radio Pill Cards */}
        <div className="grid grid-cols-3 gap-2" id="grade-selector">
          {(['likenew', 'verygood', 'good'] as ConditionGradeKey[]).map((gradeKey) => {
            const grade = book.grades[gradeKey];
            if (!grade) return null;
            const isSelected = selectedGradeKey === gradeKey;

            return (
              <div
                key={gradeKey}
                onClick={() => handleGradeChange(gradeKey)}
                className={`grade-card cursor-pointer p-space-sm rounded-xl transition-all relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-primary text-on-primary shadow-sm ring-2 ring-primary'
                    : 'bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container-low'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-label-sm text-label-sm px-1.5 py-0.5 rounded-full ${
                    isSelected 
                      ? 'bg-primary-fixed text-on-primary-fixed' 
                      : gradeKey === 'good' 
                        ? 'bg-secondary-fixed text-on-secondary-fixed' 
                        : 'bg-surface-container text-on-surface-variant'
                  }`}>
                    {grade.badge}
                  </span>
                  <span className={`material-symbols-outlined text-base ${
                    isSelected ? 'text-primary-fixed' : 'text-transparent'
                  }`}>
                    check_circle
                  </span>
                </div>
                <div className="mt-3">
                  <p className="font-label-lg text-label-lg">{grade.name}</p>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className={`font-title-md text-title-md ${
                      isSelected ? 'text-primary-fixed' : 'text-primary'
                    }`}>
                      ${grade.price.toFixed(2)}
                    </span>
                  </div>
                  <p className={`font-body-sm text-body-sm mt-1 ${
                    isSelected ? 'text-surface-container-highest opacity-90' : 'text-on-surface-variant'
                  }`}>
                    {grade.stock} copies left
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Transparent Savings & Eco Impact Banner */}
      <div className="mt-space-md p-space-md bg-secondary-fixed/50 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-xl">savings</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-title-md text-title-md text-on-secondary-fixed">
                ${selectedGrade.price.toFixed(2)}
              </span>
              <span className="line-through text-on-surface-variant font-body-sm text-body-sm">
                ${selectedGrade.listPrice.toFixed(2)} List
              </span>
              <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-secondary text-on-secondary">
                {selectedGrade.savings}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-secondary-fixed-variant mt-0.5 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">forest</span>
              Saved {selectedGrade.co2Saved} CO₂ &amp; {selectedGrade.waterSaved} water
            </p>
          </div>
        </div>
      </div>

      {/* Physical Condition Report Card (5-Point Audit) */}
      <div className="mt-space-lg p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">fact_check</span>
            <h3 className="font-title-md text-title-md text-primary">Forensic Condition Audit</h3>
          </div>
          <div className="flex items-center gap-1.5 bg-surface-container px-2.5 py-0.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-primary uppercase">
              Grade: {selectedGrade.name}
            </span>
          </div>
        </div>

        {/* 5 Criteria item rows */}
        <div className="space-y-3 pt-2">
          {/* Item 1: Dust Jacket / Cover */}
          <div className="flex items-start justify-between gap-3 bg-surface-container-low p-2.5 rounded-lg">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-primary text-lg mt-0.5">menu_book</span>
              <div>
                <p className="font-label-lg text-label-lg text-on-surface">Cover &amp; Dust Jacket</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {selectedGrade.cover.text}
                </p>
              </div>
            </div>
            <span className="font-label-md text-label-md text-primary bg-primary-fixed px-2 py-0.5 rounded shrink-0">
              {selectedGrade.cover.score}
            </span>
          </div>

          {/* Item 2: Spine Integrity */}
          <div className="flex items-start justify-between gap-3 bg-surface-container-low p-2.5 rounded-lg">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-primary text-lg mt-0.5">align_justify_space_between</span>
              <div>
                <p className="font-label-lg text-label-lg text-on-surface">Spine &amp; Binding</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {selectedGrade.spine.text}
                </p>
              </div>
            </div>
            <span className="font-label-md text-label-md text-primary bg-primary-fixed px-2 py-0.5 rounded shrink-0">
              {selectedGrade.spine.score}
            </span>
          </div>

          {/* Item 3: Pages & Markings */}
          <div className="flex items-start justify-between gap-3 bg-surface-container-low p-2.5 rounded-lg">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-primary text-lg mt-0.5">auto_stories</span>
              <div>
                <p className="font-label-lg text-label-lg text-on-surface">Page Interior</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {selectedGrade.pages.text}
                </p>
              </div>
            </div>
            <span className="font-label-md text-label-md text-primary bg-primary-fixed px-2 py-0.5 rounded shrink-0">
              {selectedGrade.pages.score}
            </span>
          </div>

          {/* Item 4: Remainder Marks */}
          <div className="flex items-start justify-between gap-3 bg-surface-container-low p-2.5 rounded-lg">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-primary text-lg mt-0.5">ink_marker</span>
              <div>
                <p className="font-label-lg text-label-lg text-on-surface">Remainder Markings</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {selectedGrade.remainder.text}
                </p>
              </div>
            </div>
            <span className="font-label-md text-label-md text-primary bg-primary-fixed px-2 py-0.5 rounded shrink-0">
              {selectedGrade.remainder.score}
            </span>
          </div>

          {/* Item 5: Sanitation */}
          <div className="flex items-start justify-between gap-3 bg-surface-container-low p-2.5 rounded-lg">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-primary text-lg mt-0.5">cleaning_services</span>
              <div>
                <p className="font-label-lg text-label-lg text-on-surface">Sanitation &amp; Hygiene</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {selectedGrade.sanitation.text}
                </p>
              </div>
            </div>
            <span className="font-label-md text-label-md text-primary bg-primary-fixed px-2 py-0.5 rounded shrink-0">
              {selectedGrade.sanitation.score}
            </span>
          </div>
        </div>
      </div>

      {/* Actual Refurbishment Inspection Photo Carousel */}
      <div className="mt-space-lg">
        <div className="flex items-center justify-between mb-2.5">
          <div>
            <h3 className="font-title-md text-title-md text-primary">Item Inspection Photos</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Actual book images from inspection bench #2
            </p>
          </div>
          <span className="font-label-sm text-label-sm bg-surface-container-high px-2 py-1 rounded-full text-on-surface">
            {book.inspectionPhotos.length} Scans
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {book.inspectionPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onOpenInspectionPhoto(photo.id)}
              className="relative rounded-lg overflow-hidden h-28 bg-surface-container cursor-pointer group hover:ring-2 hover:ring-primary transition-all"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src={photo.url}
                alt={photo.alt}
              />
              <div className="absolute bottom-1 left-1 bg-surface-container-lowest/90 px-1.5 py-0.5 rounded text-[10px] font-label-sm text-primary shadow-xs">
                {photo.label}
              </div>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="material-symbols-outlined text-white text-base bg-black/60 rounded-full p-1">
                  zoom_in
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ReBound Guarantee Card */}
      <div className="mt-space-md p-space-md bg-surface-container-low rounded-xl flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-on-primary-fixed text-lg">
            workspace_premium
          </span>
        </div>
        <div>
          <h4 className="font-label-lg text-label-lg text-primary">
            The ReBound 30-Day Literary Guarantee
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            If the physical condition does not match our verified report card exactly, return it free with prepaid tracking for an instant replacement or refund.
          </p>
        </div>
      </div>

      {/* Sticky Bottom Purchase & Trade Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md px-margin py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-safe">
        <div className="max-w-md mx-auto flex flex-col gap-2">
          <div className="flex items-center gap-2">
            {/* Quantity Selector */}
            <div className="flex items-center bg-surface-container-high rounded-lg p-1 shrink-0">
              <button
                aria-label="Decrease quantity"
                className="w-8 h-8 flex items-center justify-center text-primary font-bold hover:bg-surface-container rounded transition-colors disabled:opacity-40"
                onClick={() => handleQuantityDelta(-1)}
                disabled={quantity <= 1}
              >
                <span className="material-symbols-outlined text-sm">remove</span>
              </button>
              <span className="w-7 text-center font-label-lg text-label-lg text-primary">
                {quantity}
              </span>
              <button
                aria-label="Increase quantity"
                className="w-8 h-8 flex items-center justify-center text-primary font-bold hover:bg-surface-container rounded transition-colors disabled:opacity-40"
                onClick={() => handleQuantityDelta(1)}
                disabled={quantity >= selectedGrade.stock}
              >
                <span className="material-symbols-outlined text-sm">add</span>
              </button>
            </div>

            {/* Add to Bag CTA Button */}
            <button
              onClick={handleAdd}
              className={`flex-1 h-12 font-label-lg text-label-lg rounded-lg flex items-center justify-between px-4 shadow-sm transition-all ${
                addedToast 
                  ? 'bg-tertiary-container text-on-tertiary ring-2 ring-primary-fixed' 
                  : 'bg-primary text-on-primary active:bg-primary-container'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  {addedToast ? 'check' : 'shopping_bag'}
                </span>
                <span>
                  {addedToast ? 'Added to Bag ✓' : `Add "${selectedGrade.name}" to Bag`}
                </span>
              </span>
              <span className="font-title-md text-title-md text-primary-fixed">
                ${totalPrice}
              </span>
            </button>
          </div>

          {/* Secondary Trade-In Action */}
          <div className="flex items-center justify-between px-1 text-on-surface-variant">
            <button
              onClick={onOpenTradeIn}
              className="flex items-center gap-1.5 font-label-sm text-label-sm text-secondary hover:text-on-secondary-fixed transition-colors"
            >
              <span className="material-symbols-outlined text-sm">published_with_changes</span>
              <span>Have a copy? Trade in for up to ${book.tradeInValue.toFixed(2)} credit</span>
            </button>
            <span className="text-[11px] font-body-sm text-on-surface-variant flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[12px] text-primary">local_shipping</span>
              Ships tomorrow
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
