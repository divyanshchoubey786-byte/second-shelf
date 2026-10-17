import { Book } from '../types';

export const BOOKS_DATA: Book[] = [
  {
    id: 'tomorrow-and-tomorrow',
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    author: 'Gabrielle Zevin',
    year: 2022,
    rating: 4.8,
    reviewsCount: 142,
    binding: 'Hardcover',
    pages: 416,
    isbn: '978-0593321201',
    category: 'Fiction',
    subcategory: 'Contemporary',
    archivalBatch: 'Archival Batch #409',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCESqXnkRvzgTx2cCIJ3s-FBlwDFuplvxYxFIIkJ2W5I0HLw0ArHpdDwXN9clXnMge5tZPvim8UD4lSVbq5ic-RlGKAc8hmq4yY0k-n-R1FnEmx0T24YeCmyWKPYbYBWrcUPOr2sopmU5BMZjt8Qf9vIJVZAgbGUEk2w5WCeMpl9TSDteX63pT0hw-Pq1ip1N4ZPDdlWFdRvoXgdiox-uRxNR9J3vApiueG_Nr2qGnCGsu26Nucq0zmtQ',
    coverAlt: 'Editorial book cover art for Tomorrow, and Tomorrow, and Tomorrow by Gabrielle Zevin, modern artistic graphic with wave motifs in collegiate green, warm terracotta cognac tones, and cream archival paper texture, photorealistic studio lighting showing linen texture and spine embossed typography.',
    defaultGrade: 'likenew',
    tradeInValue: 7.25,
    cashValue: 5.80,
    summary: 'A luminous novel spanning thirty years about identity, creativity, love, and video games by acclaimed novelist Gabrielle Zevin.',
    inspectionPhotos: [
      {
        id: 'photo-cover',
        label: 'Front Cover',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHOMRAMs4_FL5zW6SMLCUHCljuvpkAhW25TbEpH1ST56CWDGQlwujl-KpVpReilU19n9dZcACFyWloqDPfQvbxLPr2UKfC6KpoGaa7kHyap2_LJBYLJd9v-HYySdNyrGZtu8FzSs1RcimmKAZT0KBr76eR624OjeGLsRONDIha5KeZ3VPF5uhB1NxO8HdSLoyoGE3QZTP39RZ8MtyAyk-KGZIkaUtJTm80OiirRK6uGg3D4-D3JeRVjA',
        alt: 'Macro close-up photograph of a restored book dust cover showing clean reflective finish, vibrant typography, and crisp non-creased edges under soft antiquarian studio lighting.',
        description: 'Reflective gloss lamination preserved. Corners free of shelf bumps or compression fractures.',
        inspectorNote: 'Bench #2 calibrated fiber optic illumination confirms 100% dust jacket color saturation with zero sun-bleaching.',
        defectScore: '99.4% Integrity'
      },
      {
        id: 'photo-spine',
        label: 'Spine & Block',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw1Ev4cFb3V2Ar6WVcmnEA2BZmNXBz9Y-WUEx_WidFiGlh5JMPppp1esWxwMuRFRl0LyC9FSYQcPXJ5hyqV3qkXDTJli9sQTlTZenY4GImeBj8SkCNKlFb4rgPHCeCz0IOShCEX8WZpZ7FkRmH8UCpUKYI9ExDZybvbRuQOkSuwxPdLZKpEdVC6tbpKyt2S9tWZJAsv8_20FWgxq5w7RjRtysbqCrhDr17vd33WcMctrpkqpGmNfXLbw',
        alt: 'Detailed studio photo of a book spine showing tight clean bookbinding, gold foil title stamping intact, and uncreased hardcover hinge on warm wooden conservation bench.',
        description: 'Square, uncracked spine block. Headband stitching factory secure without sag or thread fray.',
        inspectorNote: 'Tensile reading: 9.8/10 hinge strength. Headband and tailband linen reinforcement in pristine state.',
        defectScore: 'Factory Tight'
      },
      {
        id: 'photo-edge',
        label: 'Fore-edge Scan',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIvozXmIuFZhDXSeXl6A9R5PrPwclxJOckFXo9CTuFP09VkANll80QQ1pBu0Vm62HcVlgQIpbpLiVna3ZbSK4RosQbt2zYR-RbhXLiGvJNsEIzrcSlPN7VZA5vq6JZCa5WToNyIJqlO4HskhLh4pjLmx0yRbrQSNz2DAhDie1KNgrPGOHhVMEN-KMoffxM-s4EQqLmkNNYE_MMpbhVZ-pQBM5ub3O6HkQ-OKQ0TxjqWnc9x_xIbKuMtQ',
        alt: 'Macro shot of smooth unyellowed deckle paper edges of closed book block, clean cream paper pages without smudges or pen ink marks on inspection felt pad.',
        description: 'Micro-polished fore-edge block. Paper lignin test indicates pristine pH neutral preservation.',
        inspectorNote: 'Edge spectrophotometer confirms 0.0 delta discoloration. No liquid rings or thumb soot.',
        defectScore: 'Zero Smudge'
      }
    ],
    grades: {
      likenew: {
        key: 'likenew',
        name: 'Like New',
        badge: 'Top Tier',
        price: 11.50,
        listPrice: 28.00,
        savings: 'Save 59%',
        stock: 3,
        co2Saved: '0.8 lbs',
        waterSaved: '12 gal',
        cover: {
          text: 'Clean gloss preservation, no edge curling or shelf tears.',
          score: '5.0 / 5',
          detail: 'No micro-creasing, corners 90° razor crisp'
        },
        spine: {
          text: 'Never cracked; tight block, signature stitching factory secure.',
          score: '5.0 / 5',
          detail: 'Hinge unopened past 60°, headband untouched'
        },
        pages: {
          text: 'Zero pen margin notes, highlighter, or folded dog-ears.',
          score: '5.0 / 5',
          detail: 'Acid-free cream paper, crisp linen hand-feel'
        },
        remainder: {
          text: 'Pristine top and bottom edges; no Sharpie liquidation dots.',
          score: 'None',
          detail: '100% clean trim edges, unpunched bar code'
        },
        sanitation: {
          text: 'UV germicidal sanitized & ozone aerated. Archival fresh.',
          score: 'Certified',
          detail: '400nm UV-C exposure + 15 min dry ionization'
        }
      },
      verygood: {
        key: 'verygood',
        name: 'Very Good',
        badge: 'Best Value',
        price: 9.20,
        listPrice: 28.00,
        savings: 'Save 67%',
        stock: 7,
        co2Saved: '0.9 lbs',
        waterSaved: '14 gal',
        cover: {
          text: 'Minor micro-shelf rubbing on bottom edge, no deep tears.',
          score: '4.5 / 5',
          detail: 'Subtle contact sheen on lower jacket lip'
        },
        spine: {
          text: 'Straight and firm, minimal cosmetic reading creasing.',
          score: '4.7 / 5',
          detail: 'Block remains true and vertical, binding firm'
        },
        pages: {
          text: 'Clean clean pages, negligible tanning at outer corner.',
          score: '4.8 / 5',
          detail: 'Pencil inscription on endpaper lightly lifted'
        },
        remainder: {
          text: 'Small clean publisher mark on lower edge.',
          score: 'Minor',
          detail: 'Faint 1mm archival inventory stamp on bottom edge'
        },
        sanitation: {
          text: 'UV germicidal sanitized & ozone aerated. Archival fresh.',
          score: 'Certified',
          detail: '400nm UV-C exposure + 15 min dry ionization'
        }
      },
      good: {
        key: 'good',
        name: 'Good',
        badge: 'Budget',
        price: 6.80,
        listPrice: 28.00,
        savings: 'Save 76%',
        stock: 2,
        co2Saved: '1.1 lbs',
        waterSaved: '16 gal',
        cover: {
          text: 'Gentle handling wear, softening at jacket spine ends.',
          score: '3.8 / 5',
          detail: 'Tiny 2mm archival mended rub on top head'
        },
        spine: {
          text: 'Solid structural integrity, softened hinge from reading.',
          score: '4.0 / 5',
          detail: 'Opens flat comfortably for pleasant reading'
        },
        pages: {
          text: 'Previous reader pencil inscription on front flyleaf erased.',
          score: '4.1 / 5',
          detail: 'All text block legible, no tears or loose leaves'
        },
        remainder: {
          text: 'Discreet bottom remainder stroke present.',
          score: 'Present',
          detail: 'Small warehouse remainder dot on bottom block'
        },
        sanitation: {
          text: 'UV germicidal sanitized & ozone aerated. Archival fresh.',
          score: 'Certified',
          detail: '400nm UV-C exposure + 15 min dry ionization'
        }
      },
      acceptable: {
        key: 'acceptable',
        name: 'Acceptable',
        badge: 'Reader Copy',
        price: 4.90,
        listPrice: 28.00,
        savings: 'Save 82%',
        stock: 1,
        co2Saved: '1.2 lbs',
        waterSaved: '18 gal',
        cover: {
          text: 'Authentic patina, edge scuffs present, jacket protected with Mylar.',
          score: '3.2 / 5',
          detail: 'Archival Mylar sleeve fitted to preserve vintage jacket'
        },
        spine: {
          text: 'Readable and secure, moderate reading creases across spine.',
          score: '3.5 / 5',
          detail: 'Interior hinges reinforced with acid-free Japanese tissue'
        },
        pages: {
          text: 'Occasional light marginalia or highlighting by prior scholar.',
          score: '3.4 / 5',
          detail: 'Complete and intact text, ideal heavy-duty reading copy'
        },
        remainder: {
          text: 'Clear remainder strike or former catalog stamp.',
          score: 'Marked',
          detail: 'Standard remainder dot on paper edge'
        },
        sanitation: {
          text: 'UV germicidal sanitized & ozone aerated. Archival fresh.',
          score: 'Certified',
          detail: '400nm UV-C exposure + 15 min dry ionization'
        }
      }
    }
  },
  {
    id: 'old-man-and-sea',
    title: 'The Old Man and the Sea',
    author: 'Ernest Hemingway',
    year: 1952,
    rating: 4.9,
    reviewsCount: 310,
    binding: 'Hardcover',
    pages: 128,
    isbn: '978-0684801223',
    category: 'Fiction',
    subcategory: 'Classics',
    archivalBatch: 'Archival Batch #398',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHOMRAMs4_FL5zW6SMLCUHCljuvpkAhW25TbEpH1ST56CWDGQlwujl-KpVpReilU19n9dZcACFyWloqDPfQvbxLPr2UKfC6KpoGaa7kHyap2_LJBYLJd9v-HYySdNyrGZtu8FzSs1RcimmKAZT0KBr76eR624OjeGLsRONDIha5KeZ3VPF5uhB1NxO8HdSLoyoGE3QZTP39RZ8MtyAyk-KGZIkaUtJTm80OiirRK6uGg3D4-D3JeRVjA',
    coverAlt: 'Restored Vintage Classic Edition of The Old Man and the Sea by Ernest Hemingway on inspection felt.',
    defaultGrade: 'verygood',
    tradeInValue: 6.50,
    cashValue: 4.90,
    summary: 'Hemingway’s Pulitzer Prize-winning masterpiece about an aging Cuban fisherman and his supreme ordeal with a giant marlin.',
    inspectionPhotos: [
      {
        id: 'photo-om-1',
        label: 'Front Cover',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHOMRAMs4_FL5zW6SMLCUHCljuvpkAhW25TbEpH1ST56CWDGQlwujl-KpVpReilU19n9dZcACFyWloqDPfQvbxLPr2UKfC6KpoGaa7kHyap2_LJBYLJd9v-HYySdNyrGZtu8FzSs1RcimmKAZT0KBr76eR624OjeGLsRONDIha5KeZ3VPF5uhB1NxO8HdSLoyoGE3QZTP39RZ8MtyAyk-KGZIkaUtJTm80OiirRK6uGg3D4-D3JeRVjA',
        alt: 'Vintage cover of The Old Man and the Sea',
        description: 'Original artwork restored with acid-neutral cleaning agent.',
        inspectorNote: 'Vintage illustrated jacket with archival preservation film applied.',
        defectScore: '98.0% Integrity'
      },
      {
        id: 'photo-om-2',
        label: 'Spine & Block',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw1Ev4cFb3V2Ar6WVcmnEA2BZmNXBz9Y-WUEx_WidFiGlh5JMPppp1esWxwMuRFRl0LyC9FSYQcPXJ5hyqV3qkXDTJli9sQTlTZenY4GImeBj8SkCNKlFb4rgPHCeCz0IOShCEX8WZpZ7FkRmH8UCpUKYI9ExDZybvbRuQOkSuwxPdLZKpEdVC6tbpKyt2S9tWZJAsv8_20FWgxq5w7RjRtysbqCrhDr17vd33WcMctrpkqpGmNfXLbw',
        alt: 'Cloth spine showing gold stamping',
        description: 'Navy blue buckram cloth with intact spine stamping.',
        inspectorNote: 'Reinforced interior crash cloth added to assure lifetime durability.',
        defectScore: '97.5% Integrity'
      },
      {
        id: 'photo-om-3',
        label: 'Fore-edge Scan',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIvozXmIuFZhDXSeXl6A9R5PrPwclxJOckFXo9CTuFP09VkANll80QQ1pBu0Vm62HcVlgQIpbpLiVna3ZbSK4RosQbt2zYR-RbhXLiGvJNsEIzrcSlPN7VZA5vq6JZCa5WToNyIJqlO4HskhLh4pjLmx0yRbrQSNz2DAhDie1KNgrPGOHhVMEN-KMoffxM-s4EQqLmkNNYE_MMpbhVZ-pQBM5ub3O6HkQ-OKQ0TxjqWnc9x_xIbKuMtQ',
        alt: 'Page edge inspection',
        description: 'Clean archival page edges without stains.',
        inspectorNote: 'Ozone treated; 0.0 biological contaminants detected.',
        defectScore: 'Archival Grade'
      }
    ],
    grades: {
      likenew: {
        key: 'likenew',
        name: 'Like New',
        badge: 'Top Tier',
        price: 14.00,
        listPrice: 26.00,
        savings: 'Save 46%',
        stock: 2,
        co2Saved: '0.7 lbs',
        waterSaved: '11 gal',
        cover: { text: 'Mint condition vintage jacket replica, sharp corners.', score: '5.0 / 5' },
        spine: { text: 'Pristine unbent spine, crisp cloth texture.', score: '5.0 / 5' },
        pages: { text: 'Spotless unread interior leaves.', score: '5.0 / 5' },
        remainder: { text: 'None.', score: 'None' },
        sanitation: { text: 'UV germicidal sanitized & ozone aerated.', score: 'Certified' }
      },
      verygood: {
        key: 'verygood',
        name: 'Very Good',
        badge: 'Best Value',
        price: 10.50,
        listPrice: 26.00,
        savings: 'Save 60%',
        stock: 5,
        co2Saved: '0.8 lbs',
        waterSaved: '13 gal',
        cover: { text: 'Gentle antiquarian shelf patina, clean front illustration.', score: '4.7 / 5' },
        spine: { text: 'Tight signature block, faint shelf touch on foot.', score: '4.6 / 5' },
        pages: { text: 'Supple cream paper, completely unmarked.', score: '4.9 / 5' },
        remainder: { text: 'No remainder marks.', score: 'None' },
        sanitation: { text: 'UV germicidal sanitized & ozone aerated.', score: 'Certified' }
      },
      good: {
        key: 'good',
        name: 'Good',
        badge: 'Budget',
        price: 7.20,
        listPrice: 26.00,
        savings: 'Save 72%',
        stock: 3,
        co2Saved: '0.9 lbs',
        waterSaved: '15 gal',
        cover: { text: 'Minor edge curling on jacket flap, cloth sound.', score: '4.0 / 5' },
        spine: { text: 'Solid structural block, read with care.', score: '4.2 / 5' },
        pages: { text: 'Uniform vintage toning, zero ink or highlight.', score: '4.4 / 5' },
        remainder: { text: 'Small bottom mark.', score: 'Minor' },
        sanitation: { text: 'UV germicidal sanitized & ozone aerated.', score: 'Certified' }
      },
      acceptable: {
        key: 'acceptable',
        name: 'Acceptable',
        badge: 'Reader Copy',
        price: 5.00,
        listPrice: 26.00,
        savings: 'Save 81%',
        stock: 1,
        co2Saved: '1.0 lbs',
        waterSaved: '16 gal',
        cover: { text: 'Worn jacket, cloth binding intact.', score: '3.3 / 5' },
        spine: { text: 'Supple spine block, firm internal stitching.', score: '3.6 / 5' },
        pages: { text: 'Name on inside flyleaf, complete text.', score: '3.8 / 5' },
        remainder: { text: 'Remainder dot.', score: 'Present' },
        sanitation: { text: 'UV germicidal sanitized & ozone aerated.', score: 'Certified' }
      }
    }
  },
  {
    id: 'silent-tides',
    title: 'Silent Tides',
    author: 'Eliza Vance',
    year: 2021,
    rating: 4.7,
    reviewsCount: 88,
    binding: 'Hardcover',
    pages: 368,
    isbn: '978-1984822108',
    category: 'Fiction',
    subcategory: 'Literary',
    archivalBatch: 'Archival Batch #409',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw1Ev4cFb3V2Ar6WVcmnEA2BZmNXBz9Y-WUEx_WidFiGlh5JMPppp1esWxwMuRFRl0LyC9FSYQcPXJ5hyqV3qkXDTJli9sQTlTZenY4GImeBj8SkCNKlFb4rgPHCeCz0IOShCEX8WZpZ7FkRmH8UCpUKYI9ExDZybvbRuQOkSuwxPdLZKpEdVC6tbpKyt2S9tWZJAsv8_20FWgxq5w7RjRtysbqCrhDr17vd33WcMctrpkqpGmNfXLbw',
    coverAlt: 'Restored hardcover volume of Silent Tides by Eliza Vance with gold foil typography.',
    defaultGrade: 'likenew',
    tradeInValue: 5.75,
    cashValue: 4.25,
    summary: 'A breathtaking atmospheric exploration of coastal memory, lost maritime cartography, and estranged familial bonds.',
    inspectionPhotos: [
      {
        id: 'photo-st-1',
        label: 'Spine & Block',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw1Ev4cFb3V2Ar6WVcmnEA2BZmNXBz9Y-WUEx_WidFiGlh5JMPppp1esWxwMuRFRl0LyC9FSYQcPXJ5hyqV3qkXDTJli9sQTlTZenY4GImeBj8SkCNKlFb4rgPHCeCz0IOShCEX8WZpZ7FkRmH8UCpUKYI9ExDZybvbRuQOkSuwxPdLZKpEdVC6tbpKyt2S9tWZJAsv8_20FWgxq5w7RjRtysbqCrhDr17vd33WcMctrpkqpGmNfXLbw',
        alt: 'Detailed studio photo of Silent Tides spine',
        description: 'Navy blue linen case with foil stamping in mint state.',
        inspectorNote: 'Foil stamping tested with zero flaking. Spine strictly vertical.',
        defectScore: '100% Intact'
      },
      {
        id: 'photo-st-2',
        label: 'Fore-edge Scan',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIvozXmIuFZhDXSeXl6A9R5PrPwclxJOckFXo9CTuFP09VkANll80QQ1pBu0Vm62HcVlgQIpbpLiVna3ZbSK4RosQbt2zYR-RbhXLiGvJNsEIzrcSlPN7VZA5vq6JZCa5WToNyIJqlO4HskhLh4pjLmx0yRbrQSNz2DAhDie1KNgrPGOHhVMEN-KMoffxM-s4EQqLmkNNYE_MMpbhVZ-pQBM5ub3O6HkQ-OKQ0TxjqWnc9x_xIbKuMtQ',
        alt: 'Fore-edge of Silent Tides',
        description: 'Silky smooth paper block, pristine cut.',
        inspectorNote: 'Archival edge scan verified no foxing or dampness.',
        defectScore: 'Zero Defect'
      },
      {
        id: 'photo-st-3',
        label: 'Front Cover',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCESqXnkRvzgTx2cCIJ3s-FBlwDFuplvxYxFIIkJ2W5I0HLw0ArHpdDwXN9clXnMge5tZPvim8UD4lSVbq5ic-RlGKAc8hmq4yY0k-n-R1FnEmx0T24YeCmyWKPYbYBWrcUPOr2sopmU5BMZjt8Qf9vIJVZAgbGUEk2w5WCeMpl9TSDteX63pT0hw-Pq1ip1N4ZPDdlWFdRvoXgdiox-uRxNR9J3vApiueG_Nr2qGnCGsu26Nucq0zmtQ',
        alt: 'Front jacket of Silent Tides',
        description: 'Lustrous matte finish jacket with embossed titling.',
        inspectorNote: 'Full UV germicidal sterilization passed with grade A+ certificate.',
        defectScore: '99.1% Integrity'
      }
    ],
    grades: {
      likenew: {
        key: 'likenew',
        name: 'Like New',
        badge: 'Top Tier',
        price: 12.00,
        listPrice: 27.00,
        savings: 'Save 56%',
        stock: 4,
        co2Saved: '0.8 lbs',
        waterSaved: '12 gal',
        cover: { text: 'Immaculate cloth boards, zero sun fading.', score: '5.0 / 5' },
        spine: { text: 'Spine gold foil factory crisp, hinge tight.', score: '5.0 / 5' },
        pages: { text: 'Crisp unturned pages, archival fresh.', score: '5.0 / 5' },
        remainder: { text: 'Clean cut, no publisher marks.', score: 'None' },
        sanitation: { text: 'UV germicidal sanitized & ozone aerated.', score: 'Certified' }
      },
      verygood: {
        key: 'verygood',
        name: 'Very Good',
        badge: 'Best Value',
        price: 9.50,
        listPrice: 27.00,
        savings: 'Save 65%',
        stock: 6,
        co2Saved: '0.9 lbs',
        waterSaved: '14 gal',
        cover: { text: 'Very light shelf touch on back board.', score: '4.7 / 5' },
        spine: { text: 'Firm square spine, minor gentle reading flex.', score: '4.8 / 5' },
        pages: { text: 'Pure text block, no notes or pencil marks.', score: '4.9 / 5' },
        remainder: { text: 'No marks.', score: 'None' },
        sanitation: { text: 'UV germicidal sanitized & ozone aerated.', score: 'Certified' }
      },
      good: {
        key: 'good',
        name: 'Good',
        badge: 'Budget',
        price: 6.90,
        listPrice: 27.00,
        savings: 'Save 74%',
        stock: 2,
        co2Saved: '1.0 lbs',
        waterSaved: '15 gal',
        cover: { text: 'Moderate corner softening, jacket intact.', score: '4.0 / 5' },
        spine: { text: 'Solid structural block, clean spine.', score: '4.1 / 5' },
        pages: { text: 'Clean pages throughout, slight finger patina on page 1.', score: '4.2 / 5' },
        remainder: { text: 'Small dot on base.', score: 'Minor' },
        sanitation: { text: 'UV germicidal sanitized & ozone aerated.', score: 'Certified' }
      },
      acceptable: {
        key: 'acceptable',
        name: 'Acceptable',
        badge: 'Reader Copy',
        price: 4.80,
        listPrice: 27.00,
        savings: 'Save 82%',
        stock: 1,
        co2Saved: '1.1 lbs',
        waterSaved: '17 gal',
        cover: { text: 'Edge rubs, cloth boards intact.', score: '3.4 / 5' },
        spine: { text: 'Relaxed binding, completely sound.', score: '3.6 / 5' },
        pages: { text: 'Clean reading text, minor dogear creases.', score: '3.7 / 5' },
        remainder: { text: 'Clear remainder mark.', score: 'Present' },
        sanitation: { text: 'UV germicidal sanitized & ozone aerated.', score: 'Certified' }
      }
    }
  }
];

export const REBOUND_LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8dcsmnHGzxuNmqBfTyXzlqLcv2XKtTItuP-PH2D0IregDbk2mMQRf0bN3nceifauN3RazZ2VIPE28iOKwPg_N3ROkfOROyBJHeRPCN9vUZaV65y64IwJTuHuYxtqP0D609QGJFkB9F3HnrSUWykSMg_igj9t3Eq3n1gXOs_hrBqYXv4jZSBHOBT3xtWtUR5XC2kfftsDY10ozwNa6IN3-Wfs8fhyApegCt5EjBzBubFvkZa5-XtT9WA';

export const USER_AVATAR_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpGwrFM4RuhSw9tg5sutwzhNn3_lj3pJRUN9_Z6k3otw303pk4X-0c1F3mzEiQ-80xgf0hMhrGaSyDTWW0Ub-9PkhR9fiUnYn_Ju2YR3eWpfW5-pB8TknS3tQpY0ECZxlA5hZHoNHljqaZWVDCC3m6oYyFmNG9F5TDE4akk__u7Zie2Uek4Xi06OqwqBY--gTh91oU46GoQSJESxs8nhHFxYV_o6A50ypcrByIhychxEYGecNUKhvLzQ';
