import React, { useState } from 'react';
import { Book, ConditionGradeKey } from '../types';
import { BOOKS_DATA } from '../data/books';

interface Props {
  onSelectBook: (book: Book) => void;
  activeBookId: string;
}

export const CatalogScreen: React.FC<Props> = ({ onSelectBook, activeBookId }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [gradeFilter, setGradeFilter] = useState<string>('all');

  const categories = ['All', 'Contemporary', 'Classics', 'Literary'];

  const filteredBooks = BOOKS_DATA.filter(book => {
    const matchCat = selectedCategory === 'All' || book.subcategory === selectedCategory;
    const matchSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        book.isbn.includes(searchQuery);
    return matchCat && matchSearch;
  });

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface px-margin pb-24">
      {/* Catalog Banner */}
      <div className="pt-4 pb-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-secondary font-label-sm text-[11px] uppercase tracking-wider">
              <span className="material-symbols-outlined text-xs">inventory_2</span>
              <span>Archival Bench #2 Restorations</span>
            </div>
            <h2 className="font-headline-lg text-primary text-2xl mt-0.5">Archival Book Catalog</h2>
          </div>
          <span className="bg-primary-fixed text-on-primary-fixed text-xs font-semibold px-2.5 py-1 rounded-full">
            {BOOKS_DATA.length} Verified Titles
          </span>
        </div>
        <p className="font-body-sm text-xs text-on-surface-variant mt-1">
          Every copy is hand-inspected, graded across 5 forensic pillars, UV sterilized, and sealed with our 30-day literary guarantee.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-2.5 my-2">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-base">
            search
          </span>
          <input
            type="text"
            placeholder="Search by title, author, or ISBN..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-surface-container-low rounded-xl text-xs text-on-surface placeholder:text-on-surface-variant/70 border border-surface-container-high focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-on-surface-variant hover:text-on-surface"
            >
              Clear
            </button>
          )}
        </div>

        {/* Subcategory Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full font-label-md text-xs whitespace-nowrap transition-colors ${
                selectedCategory === cat 
                  ? 'bg-primary text-on-primary shadow-xs' 
                  : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 gap-3.5 mt-2">
        {filteredBooks.map(book => {
          const defaultGradeInfo = book.grades[book.defaultGrade];
          const isCurrentActive = book.id === activeBookId;

          return (
            <div
              key={book.id}
              onClick={() => onSelectBook(book)}
              className={`cursor-pointer p-4 rounded-xl bg-surface-container-lowest border transition-all flex gap-3.5 hover:shadow-md ${
                isCurrentActive 
                  ? 'border-primary ring-1 ring-primary' 
                  : 'border-surface-container-high hover:border-surface-variant'
              }`}
            >
              {/* Thumbnail with Audited Stamp */}
              <div className="relative w-24 h-34 rounded-lg overflow-hidden shrink-0 shadow-sm bg-surface-container">
                <img 
                  src={book.coverImage} 
                  alt={book.coverAlt} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1.5 right-1.5 bg-surface-container-lowest/90 px-1 py-0.5 rounded text-[8px] font-bold text-primary uppercase">
                  Audited
                </div>
              </div>

              {/* Information */}
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] text-secondary font-label-sm uppercase tracking-wide">
                    <span>{book.archivalBatch}</span>
                    <span>•</span>
                    <span>{book.subcategory}</span>
                  </div>

                  <h3 className="font-headline-sm text-primary text-base line-clamp-1 mt-0.5">
                    {book.title}
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant">
                    by {book.author} ({book.year})
                  </p>

                  <div className="flex items-center gap-1.5 mt-1 text-[11px] text-on-surface-variant">
                    <span className="flex items-center gap-0.5 text-secondary">
                      <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <strong className="text-on-surface">{book.rating}</strong>
                    </span>
                    <span>•</span>
                    <span>{book.binding}</span>
                    <span>•</span>
                    <span>{book.pages} pages</span>
                  </div>
                </div>

                {/* Pricing & Grade Summary */}
                <div className="mt-2 pt-2 border-t border-surface-container flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-title-md text-primary text-sm font-bold">
                        ${defaultGradeInfo.price.toFixed(2)}
                      </span>
                      <span className="text-[11px] line-through text-on-surface-variant">
                        ${defaultGradeInfo.listPrice.toFixed(2)}
                      </span>
                      <span className="font-label-sm text-[10px] bg-secondary-fixed text-on-secondary-fixed px-1 rounded">
                        {defaultGradeInfo.savings}
                      </span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant block">
                      From {defaultGradeInfo.name} ({defaultGradeInfo.stock} left)
                    </span>
                  </div>

                  <button className="px-3 py-1.5 bg-primary-fixed text-on-primary-fixed hover:bg-primary hover:text-on-primary font-label-md text-xs rounded-lg transition-colors flex items-center gap-1">
                    <span>Inspect</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
