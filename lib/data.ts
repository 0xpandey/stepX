export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  images: string[];
  sizes: { size: string; inStock: boolean }[];
  colors: { name: string; hex: string }[];
  description: string;
  badge?: string;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface WishlistItem {
  product: Product;
  selectedSize?: string;
  selectedColor?: string;
}

export interface Order {
  id: string;
  items: {
    product: Product;
    quantity: number;
    size: string;
    color: string;
  }[];
  total: number;
  status: "processing" | "shipped" | "delivered" | "returned";
  estimatedDelivery?: string;
  createdAt: string;
  progress: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  memberSince: string;
  tier: string;
  points: number;
}

// Mock Products Data
export const products: Product[] = [
  {
    id: "1",
    name: "Air Jordan 1 Dark Mocha",
    slug: "air-jordan-1-dark-mocha",
    brand: "Jordan Brand",
    category: "Basketball",
    price: 14999,
    originalPrice: 18000,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1ntKwHpo8VmXC37NN1XRZIFOEes_9C-C24vpDQAWMxvy4rGFOnc36TtZartFET02fQ1pTlsFy4N7FKQbQmJGJtCUa7ye5VNO4hZ4GYaXfOCQwMR6XI6wXMTsga7mS7aWZPEhDzxjR19Nc3wJwh7uUJjCRqpcL9Od57f1XTIPxr6qz7pp-JMDTq8Lauiubp37BBQKmBGW_EEpDghYWUkmT_wd4LiKTrmHTfwfTcT6Cw-NuZUwSacBgJfpJ1rND6yndqUdmXUhuqg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFynsnvDyP6VMJ598r7I7hPv0Y_rpqTO6BYJjrXZmowJcixwlAL7wQ4Sd4tTd3aS21P4KleZUk_LsQO0wT2i-v6u30iMKhnKzMeXMKtqIZsYtnI-dg7vgCgV534nqttJ2xKGM5VfOXqY1W6ijJw0JUU0ka9KEytbga8UejdxWUa06H9EPloOoO8nVlRozMrCGs-Av2jRt8_SUd1EJJUyRrvzEjJYzUZiVOsfDs5yZFwTiSVxuNEuAT7-fhfJhp_o88TK0hSERlSQ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAh3Id3IEQYHUzfG7Kq1-OS6YJVYFT2FPwRGUlpaErWoB59aIEmq-V-8mkAsXAFN75KRyxC_Csdwu7SsmEAYEw0q20-3WX0fTxDVUGwdG29FjKYhASBanEatP3bZt69SKJdlVdvj79TtnGruqZCMn6DN5KE4tVNhkxtv46wzsp5zLY_YChswsuPNq333xg0sFhvJVxFqhAB1Uw1Mii5_ePjPdh1nflLInGZ8YTcE6hVfXpZZ8CLfc6qNT2x1rt5rKel0njSj-ZSpw",
    ],
    sizes: [
      { size: "7", inStock: true },
      { size: "8", inStock: true },
      { size: "9", inStock: true },
      { size: "10", inStock: true },
      { size: "11", inStock: true },
      { size: "12", inStock: false },
    ],
    colors: [
      { name: "Dark Mocha", hex: "#3D2B1F" },
      { name: "Black", hex: "#1A1A1A" },
      { name: "White", hex: "#FFFFFF" },
    ],
    description:
      "The Air Jordan 1 'Dark Mocha' features a distinctive color blocking that calls back to one of the most coveted collaborations in recent history. Combining soft nubuck leather in a rich Mocha brown with crisp white leather and black accents, this silhouette redefines modern luxury.",
    badge: "Exclusive Drop",
    stock: 3,
  },
  {
    id: "2",
    name: "Air Max 270 Elite",
    slug: "air-max-270-elite",
    brand: "Nike Sportswear",
    category: "Lifestyle",
    price: 14995,
    originalPrice: 18500,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnm1vMfFJIgb2KALkQ8d0v2kJpTucqXx5Q0vkq3T9_MHXr6VTlf2zb4NvYE4uzmnGKOA5YVCbJB8auNVh4oz9wIH6NGJzONA_gstFMDKLRkoUoqy4GncSWB3x4ClZZuBncu46-AVcefBOw3iXHIr4qMpvdUh8f0e4cJ-zu7ba4D6LdqGVp_tuqOAPNowmF655CqavryXfHIUA8HyZ-wzT7rC2dWG0QWbWMvPVDlr_xLlkdyLhA_QA_mK3YWg8zfH64UXO6YuAB0g",
    ],
    sizes: [
      { size: "7", inStock: true },
      { size: "8", inStock: true },
      { size: "9", inStock: true },
      { size: "10", inStock: true },
      { size: "11", inStock: true },
      { size: "12", inStock: true },
    ],
    colors: [
      { name: "Magma Red", hex: "#8B0000" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    description:
      "Experience next-level comfort with the Air Max 270 Elite. Featuring Nike's tallest Air unit ever for a super-soft ride that feels as good as it looks.",
    badge: "20% OFF",
    stock: 15,
  },
  {
    id: "3",
    name: "Jordan 1 Retro OG",
    slug: "jordan-1-retro-og",
    brand: "Jordan Brand",
    category: "Basketball",
    price: 16495,
    originalPrice: 21000,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAe3NauZZbDZn2jZwCyx7XazOdsG7vm3pTifL3JkUoOjWuO_sHAPXtMn3ZzcWROcRzvqvlyMJYowMnESYi7wXQA_EmTjWiBfBFl4UyYJIUM6-sJGjuuvFAQs8nnDnmfJXzX8xoXNyQ_pahFKMYffWyLyJ360ju2e4ZLcfcVyJGCAaZRiWQQu_g9g3icP68oPc5iUbSjTwz4wK7IUJcNQRphdH6xoVafwMRqLcPEfHapqkyEhszT55xsaK4i-PgmsvJcg2rSRZc_KQ",
    ],
    sizes: [
      { size: "7", inStock: true },
      { size: "8", inStock: true },
      { size: "9", inStock: false },
      { size: "10", inStock: true },
      { size: "11", inStock: true },
      { size: "12", inStock: true },
    ],
    colors: [
      { name: "Cream", hex: "#FFFDD0" },
      { name: "Brown", hex: "#8B4513" },
    ],
    description:
      "The Jordan 1 Retro OG brings back the classic silhouette that started it all. Timeless design meets premium materials for a shoe that transcends generations.",
    stock: 8,
  },
  {
    id: "4",
    name: "Neon Velocity X",
    slug: "neon-velocity-x",
    brand: "Exclusive Series",
    category: "Lifestyle",
    price: 12250,
    originalPrice: 15000,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCN3Z1Bjo9aCatRrtuLRUGW1huU9cQw7-k5PHr6s5NCyJP3W6v54jxFQJhwL3z2_OlgGv2OR7H2T98Tfwc8t7-2QH4lVLJnLtDIEAnoPc0bbCzhoVtiMbXIFgNuJPA1VgGlDX8lubW48kI_KPF3TYKuKAVUBzk8E1O9HT0LyJDhAauZh7yu_kmJ3F9QGtR8SdDt2rFRSa3SPSS5REmkiBHIH3K_Auaae1ORBLTAPaG8WMPmqH6Yhk4QiCLLeF_urJR6FUI3nyCiRA",
    ],
    sizes: [
      { size: "7", inStock: true },
      { size: "8", inStock: true },
      { size: "9", inStock: true },
      { size: "10", inStock: true },
      { size: "11", inStock: true },
      { size: "12", inStock: true },
    ],
    colors: [
      { name: "Neon Yellow", hex: "#DFFF00" },
      { name: "Grey", hex: "#808080" },
    ],
    description:
      "Futuristic design meets everyday comfort. The Neon Velocity X features a chunky sole and bold colorway that demands attention.",
    stock: 20,
  },
  {
    id: "5",
    name: "Aero Vault 01 Obsidian",
    slug: "aero-vault-01-obsidian",
    brand: "StepX",
    category: "Lifestyle",
    price: 7199,
    originalPrice: 8999,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6Q-MG-DaABtBDhRPEB-X9rPsgX2QrJtdQMUNL_H-ocSGTZ5y6v3oDOC_r2yocWvf7za8hLl-YMqUHM0iO0f6-tsRvL-eidaL9sXxZxw1JOTvyGvudPM4m4Im4ESsC8CAzDCDKSfCsMN4dJk0TgUNJs-eQBtJKetSBj_l7lIhdn4Gopd_1EECpjhXILOpX2spWz3Oebe2k525SO0pt_ORylKYKEW3OcONd6p_VmjVpRrozIjPOGBHwIxLcoEPvSReSXsqBJiKzSg",
    ],
    sizes: [
      { size: "7", inStock: true },
      { size: "8", inStock: true },
      { size: "9", inStock: true },
      { size: "10", inStock: true },
      { size: "11", inStock: true },
      { size: "12", inStock: true },
    ],
    colors: [
      { name: "Obsidian", hex: "#2C3539" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    description:
      "A StepX exclusive. The Aero Vault 01 combines minimalist aesthetics with premium materials for the discerning collector.",
    badge: "20% OFF",
    stock: 25,
  },
  {
    id: "6",
    name: "Kinetic Flow Neon",
    slug: "kinetic-flow-neon",
    brand: "StepX",
    category: "Running",
    price: 12499,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCe2_TLLMEqhSuu6SHcgxD-gQAFFSiTwU2AS1FOJjnNvsXMdMI4brUjAM8kJowLlH0buQVbTqRMKd3EY64lNbdLVgM5qWzd05EBvADbJmu3W5YIsA_55TeXVHhQTx_jeVAhXgxTJqBdtCGtNudjo0u4tk1oa_Yx8cShxVM1fpABFt6mF_mfVh3Y_Q9kPfeWOO8bN-L9WRUse5CcxZf8KAKGXBYo-iUuEIUWsoelWqcFGX43WIiPyd0cXbXlrdfU76TuhAwIOcpqg",
    ],
    sizes: [
      { size: "7", inStock: true },
      { size: "8", inStock: true },
      { size: "9", inStock: true },
      { size: "10", inStock: true },
      { size: "11", inStock: true },
      { size: "12", inStock: true },
    ],
    colors: [
      { name: "Neon Green", hex: "#39FF14" },
      { name: "White", hex: "#FFFFFF" },
    ],
    description:
      "Built for performance. The Kinetic Flow delivers responsive cushioning and lightweight support for your daily runs.",
    badge: "NEW RELEASE",
    stock: 30,
  },
  {
    id: "7",
    name: "Titan Court Heritage",
    slug: "titan-court-heritage",
    brand: "StepX",
    category: "Basketball",
    price: 9349,
    originalPrice: 10999,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIVzRiQPmhCp9757lo_LybJkENNKFn3IGufUh045oJVlh-GI93R7yyTW5QgPcA1_Q1mIH07F82mW6tYaeCROyMnHiUGH4JQUiopBkxPejcxYzQtChRF3YwC3G7QHdpqhsVlK-PfVbvoUYG3qDhBIvjDwzCXXVmLt9wGJ4A0kEIvu7wuBUDljJWS31w-DsHvPThskfAB1xr33p3izHjy6C_FGbgtvrPRo2vIA_APvUt7VUnp4jGmj3e5M5L1ZQr73Nde1kg7Wci2Q",
    ],
    sizes: [
      { size: "7", inStock: true },
      { size: "8", inStock: true },
      { size: "9", inStock: true },
      { size: "10", inStock: true },
      { size: "11", inStock: true },
      { size: "12", inStock: true },
    ],
    colors: [
      { name: "Multi", hex: "#FF6B6B" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    description:
      "Heritage meets innovation. The Titan Court pays homage to basketball history while pushing design boundaries forward.",
    badge: "15% OFF",
    stock: 18,
  },
  {
    id: "8",
    name: "Shadow Strike V3",
    slug: "shadow-strike-v3",
    brand: "StepX",
    category: "Lifestyle",
    price: 8999,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCS4OixlHygIN6IvYNvGyMXHMBKT83C3XDmY3BKtLcadO14YWM1SpAVN2ebxEFoblBqTCDgYO5KTLu2OVAOZ65X4m8gK9Zg_CYkp4HxrBNpe9T2H3g4vvOg5lNoGfTqXwUSkK-0D1i95w_aevsGcZBacJOCLIYeyIqH2GpQYjeC0S8x5geW65z8Snmd4j3Z8QuCqSyEMj4N2ImVsYpxGUml4sLIs1iUBU3_K6eeDykZebkkU_Yjh4Qwoit3RBFMwrWIFdC_MFgkRw",
    ],
    sizes: [
      { size: "7", inStock: true },
      { size: "8", inStock: true },
      { size: "9", inStock: true },
      { size: "10", inStock: true },
      { size: "11", inStock: true },
      { size: "12", inStock: true },
    ],
    colors: [
      { name: "Stealth Black", hex: "#0A0A0A" },
    ],
    description:
      "All-black everything. The Shadow Strike V3 is the ultimate stealth silhouette for those who prefer to move in the shadows.",
    stock: 22,
  },
  {
    id: "9",
    name: "Ignite Prime Magma",
    slug: "ignite-prime-magma",
    brand: "StepX",
    category: "Running",
    price: 14999,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuHmbEQSfDS5rw-BTZUnGW8K7f4d_v_TVZ9UDSKE-SA2_YlLdB4bXMMRRQomPMfTHcjiKtQxUq3OfIhwgFxngWv3Hilh-ObN65wLlin6VlHDFvzUJlSq2-s81yQuB9NxSuHEkCKc5GojD5UrRixsp6LLEtkf5lMQK9qvu2hLRIa3E9XBjTO3tcnXj8fmjrYlqXeTA8D6vnHvOEHW1MqrHU7BxGLLciVosQX6bJwk-mkt_YT8KK9JzvnFjiqkW2-iuufAFDWlYWnw",
    ],
    sizes: [
      { size: "7", inStock: true },
      { size: "8", inStock: true },
      { size: "9", inStock: true },
      { size: "10", inStock: true },
      { size: "11", inStock: true },
      { size: "12", inStock: true },
    ],
    colors: [
      { name: "Magma Red", hex: "#FF4500" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    description:
      "Feel the heat. The Ignite Prime Magma brings explosive energy to every stride with its dynamic colorway and responsive foam.",
    badge: "POPULAR",
    stock: 12,
  },
  {
    id: "10",
    name: "Volt Impact Cyber",
    slug: "volt-impact-cyber",
    brand: "StepX",
    category: "Training",
    price: 5599,
    originalPrice: 7999,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-pE0BE8yWYmcEB8gahbbd881OheiX0GvOllnksvLwxEkaG1ro8anh5WD7ZXJCnECrIBOVSpSToS2nJt_GamkC9iaQvE3vsdwY2pkhM2DRDUv1wYmiTFQNhE4sCqH_BznKtgHr0EdTMzgEqKSkdQfeqoHiNSg85pnyZylbpgJQIH92GiGcqIpiDk3nFKLL53P2PCH_6qs3tPCYgBOsFOGVu3TUfORciyit-vD3nC3p6MW9GrPjAw4XBP9WGZUDT775pSYROctigg",
    ],
    sizes: [
      { size: "7", inStock: true },
      { size: "8", inStock: true },
      { size: "9", inStock: true },
      { size: "10", inStock: true },
      { size: "11", inStock: true },
      { size: "12", inStock: true },
    ],
    colors: [
      { name: "Cyber Lime", hex: "#C3F400" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    description:
      "Train harder. The Volt Impact Cyber provides the stability and support you need for your most intense workouts.",
    badge: "30% OFF",
    stock: 35,
  },
];

// Mock Orders Data
export const orders: Order[] = [
  {
    id: "SX-902341",
    items: [
      {
        product: products[4],
        quantity: 1,
        size: "10.5",
        color: "Tech-Grey",
      },
    ],
    total: 7199,
    status: "shipped",
    estimatedDelivery: "Oct 24",
    createdAt: "2024-10-20",
    progress: 85,
  },
  {
    id: "SX-902355",
    items: [
      {
        product: products[7],
        quantity: 1,
        size: "11",
        color: "Matte Black",
      },
    ],
    total: 8999,
    status: "processing",
    estimatedDelivery: "Oct 26",
    createdAt: "2024-10-21",
    progress: 40,
  },
];

// Mock User Data
export const mockUser: User = {
  id: "1",
  name: "Alexander",
  email: "alex@stepx.vault",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCcCmzkuRu8Uh9vkAQhswY3_ZGWZ8FySSmNFNqEjD5yYBDRKin7CzMCCR3OuVqrUXLlwvXdEYzOQshzjeD4PC0LVFM1VjGJASYtwFs3KlorOZ8AWB30u8VhXQ4dqZzioJLkQLjJunTX6Rsf_90OdRZYA5n2AZWozQYsz-0-shHq51Ykf0I6VvAK9-5kNmBPYr5IbN-LAJT2GDgXH2zV7ZuXa6m-Duip7rscBH7x3XaJ_QjU8chKT51fs5joGlLJLq7Mk7TjAon_zA",
  memberSince: "OCT 2021",
  tier: "Vault Tier IV",
  points: 12840,
};

// Collections Data
export const collections = [
  {
    id: "1",
    name: "New Arrivals",
    slug: "new-arrivals",
    description: "Fresh drops straight from the vault",
    image: products[5].images[0],
    productCount: 12,
  },
  {
    id: "2",
    name: "Limited Drops",
    slug: "limited-drops",
    description: "Exclusive releases, limited quantities",
    image: products[0].images[0],
    productCount: 8,
  },
  {
    id: "3",
    name: "Lifestyle",
    slug: "lifestyle",
    description: "Everyday essentials with premium style",
    image: products[4].images[0],
    productCount: 24,
  },
  {
    id: "4",
    name: "Performance",
    slug: "performance",
    description: "Built for athletes, styled for culture",
    image: products[8].images[0],
    productCount: 16,
  },
];

// Helper function to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

// Helper function to get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

// Helper function to get featured products
export function getFeaturedProducts(): Product[] {
  return products.slice(0, 3);
}
