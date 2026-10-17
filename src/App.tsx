import React, { useState } from 'react';
import { BOOKS_DATA } from './data/books';
import { Book, CartItem, ConditionGradeKey } from './types';
import { BookDetailScreen } from './components/BookDetailScreen';
import { CatalogScreen } from './components/CatalogScreen';
import { TopHeader } from './components/TopHeader';
import { GradingGuideModal } from './components/GradingGuideModal';
import { InspectionPhotoModal } from './components/InspectionPhotoModal';
import { TradeInModal } from './components/TradeInModal';
import { CartDrawer } from './components/CartDrawer';
import { ProfileModal } from './components/ProfileModal';

export default function App() {
  const [currentView, setCurrentView] = useState<'detail' | 'catalog'>('detail');
  const [currentBook, setCurrentBook] = useState<Book>(BOOKS_DATA[0]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [tradeInCredit, setTradeInCredit] = useState<number>(7.25);

  // Modals state
  const [inspectionPhotoId, setInspectionPhotoId] = useState<string | null>(null);
  const [showGradingGuide, setShowGradingGuide] = useState<boolean>(false);
  const [showTradeIn, setShowTradeIn] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);

  // View frame mode: toggle between framed mobile viewport and fluid desktop
  const [isMobileFrame, setIsMobileFrame] = useState<boolean>(false);

  // Cart operations
  const handleAddToBag = (book: Book, gradeKey: ConditionGradeKey, qty: number) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(i => i.book.id === book.id && i.gradeKey === gradeKey);
      if (existingIdx !== -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += qty;
        return updated;
      }
      return [...prev, { book, gradeKey, quantity: qty }];
    });
  };

  const handleUpdateQty = (bookId: string, gradeKey: string, delta: number) => {
    setCartItems(prev => {
      return prev
        .map(item => {
          if (item.book.id === bookId && item.gradeKey === gradeKey) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (bookId: string, gradeKey: string) => {
    setCartItems(prev => prev.filter(i => !(i.book.id === bookId && i.gradeKey === gradeKey)));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleTradeInSubmitted = (credit: number) => {
    setTradeInCredit(prev => +(prev + credit).toFixed(2));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const headerTitle = currentView === 'detail' ? 'Book Condition Details' : 'Archival Catalog';

  return (
    <div className={`min-h-screen bg-[#f4f1eb] flex flex-col items-center justify-start ${isMobileFrame ? 'py-4 sm:py-8' : ''}`}>
      {/* Container wrapper */}
      <div 
        className={`w-full bg-surface transition-all duration-300 relative flex flex-col min-h-screen ${
          isMobileFrame 
            ? 'max-w-[420px] rounded-[36px] shadow-[0_12px_45px_rgba(0,0,0,0.18)] border-8 border-[#222a25] overflow-hidden' 
            : 'max-w-2xl shadow-sm'
        }`}
      >
        {/* Dynamic Header */}
        <TopHeader
          title={headerTitle}
          showBack={currentView === 'detail'}
          onBack={() => setCurrentView('catalog')}
          cartCount={totalCartCount}
          onOpenCart={() => setShowCart(true)}
          onOpenProfile={() => setShowProfile(true)}
          isMobileFrame={isMobileFrame}
          onToggleFrame={() => setIsMobileFrame(prev => !prev)}
        />

        {/* Screen Content */}
        <main className="flex-1 flex flex-col relative w-full bg-surface">
          {currentView === 'detail' ? (
            <BookDetailScreen
              book={currentBook}
              onOpenGradingGuide={() => setShowGradingGuide(true)}
              onOpenInspectionPhoto={(photoId) => setInspectionPhotoId(photoId)}
              onOpenTradeIn={() => setShowTradeIn(true)}
              onNavigateToCatalog={(cat) => setCurrentView('catalog')}
              onAddToBag={handleAddToBag}
            />
          ) : (
            <CatalogScreen
              activeBookId={currentBook.id}
              onSelectBook={(book) => {
                setCurrentBook(book);
                setCurrentView('detail');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}
        </main>
      </div>

      {/* Modals & Drawers */}
      {showGradingGuide && (
        <GradingGuideModal
          onClose={() => setShowGradingGuide(false)}
        />
      )}

      {inspectionPhotoId && (
        <InspectionPhotoModal
          photos={currentBook.inspectionPhotos}
          initialPhotoId={inspectionPhotoId}
          onClose={() => setInspectionPhotoId(null)}
        />
      )}

      {showTradeIn && (
        <TradeInModal
          book={currentBook}
          onClose={() => setShowTradeIn(false)}
          onTradeInSubmitted={handleTradeInSubmitted}
        />
      )}

      <CartDrawer
        isOpen={showCart}
        items={cartItems}
        onClose={() => setShowCart(false)}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {showProfile && (
        <ProfileModal
          tradeInBalance={tradeInCredit}
          onClose={() => setShowProfile(false)}
        />
      )}
    </div>
  );
}
