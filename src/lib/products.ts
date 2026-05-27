import basmati from "@/assets/products/basmati.jpg";
import sonaMasuri from "@/assets/products/sona-masuri.jpg";
import ponni from "@/assets/products/ponni.jpg";
import kolam from "@/assets/products/kolam.jpg";
import jeera from "@/assets/products/jeera-rice.jpg";
import brown from "@/assets/products/brown-rice.jpg";
import steam from "@/assets/products/steam-rice.jpg";
import raw from "@/assets/products/raw-rice.jpg";
import broken from "@/assets/products/broken-rice.jpg";
import idli from "@/assets/products/idli-rice.jpg";
import toor from "@/assets/products/toor-dal.jpg";
import moong from "@/assets/products/moong-dal.jpg";
import masoor from "@/assets/products/masoor-dal.jpg";
import chana from "@/assets/products/chana-dal.jpg";
import urad from "@/assets/products/urad-dal.jpg";
import greenGram from "@/assets/products/green-gram.jpg";
import yellowMoong from "@/assets/products/yellow-moong.jpg";
import splitUrad from "@/assets/products/split-urad.jpg";
import kajuW180 from "@/assets/products/kaju-w180.jpg";
import kajuW210 from "@/assets/products/kaju-w210.jpg";
import kajuW240 from "@/assets/products/kaju-w240.jpg";
import kajuW320 from "@/assets/products/kaju-w320.jpg";
import kajuSalted from "@/assets/products/kaju-salted.jpg";
import kajuRoasted from "@/assets/products/kaju-roasted.jpg";

export type Category = "Rice" | "Dals" | "Kaaju";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  image: string;
  description: string;
  highlight: string;
  price: number;        // ₹ per kg
  unit: string;         // e.g. "kg"
  availability: "In Stock" | "Limited" | "Pre-Order";
  quality: string;
}

export const products: Product[] = [
  { slug: "basmati", name: "Basmati Rice", category: "Rice", image: basmati, description: "Long-grain aromatic Basmati, aged to perfection for fluffy, fragrant biryanis and pulaos.", highlight: "Premium aged grain", price: 120, unit: "kg", availability: "In Stock", quality: "Aged 12+ months · Hand-cleaned · Extra long grain" },
  { slug: "sona-masuri", name: "Sona Masuri Rice", category: "Rice", image: sonaMasuri, description: "Lightweight medium-grain rice, ideal for everyday meals, idlis and dosas.", highlight: "Everyday favourite", price: 70, unit: "kg", availability: "In Stock", quality: "Polished · Sortex cleaned · Low broken %" },
  { slug: "ponni", name: "Ponni Rice", category: "Rice", image: ponni, description: "Short-grain South Indian rice with a soft, tender texture after cooking.", highlight: "South Indian classic", price: 75, unit: "kg", availability: "In Stock", quality: "Boiled Ponni · Sortex cleaned" },
  { slug: "kolam", name: "Kolam Rice", category: "Rice", image: kolam, description: "Polished medium-grain rice with a delicate, slightly sweet flavour profile.", highlight: "Soft & non-sticky", price: 68, unit: "kg", availability: "In Stock", quality: "Double polished · Premium grade" },
  { slug: "jeera-rice", name: "Jeera Rice", category: "Rice", image: jeera, description: "Tiny cumin-sized grains, naturally aromatic and perfect for festive dishes.", highlight: "Naturally fragrant", price: 95, unit: "kg", availability: "In Stock", quality: "Naturally aromatic · Hand-sorted" },
  { slug: "brown-rice", name: "Brown Rice", category: "Rice", image: brown, description: "Whole-grain unpolished rice, rich in fibre and nutrients for wholesome meals.", highlight: "High fibre", price: 85, unit: "kg", availability: "In Stock", quality: "Unpolished · High fibre · Wholegrain" },
  { slug: "steam-rice", name: "Steam Rice", category: "Rice", image: steam, description: "Parboiled steamed rice with a soft bite and longer shelf life.", highlight: "Long shelf life", price: 62, unit: "kg", availability: "In Stock", quality: "Parboiled · Sortex cleaned" },
  { slug: "raw-rice", name: "Raw Rice", category: "Rice", image: raw, description: "Unprocessed white rice retaining natural flavour and starch character.", highlight: "Pure & unpolished", price: 58, unit: "kg", availability: "In Stock", quality: "Single polished · Natural finish" },
  { slug: "broken-rice", name: "Broken Rice", category: "Rice", image: broken, description: "Fragmented grains, excellent for porridge, kanji and economical cooking.", highlight: "Value pack", price: 42, unit: "kg", availability: "In Stock", quality: "Clean broken · Ideal for kanji" },
  { slug: "idli-rice", name: "Idli Rice", category: "Rice", image: idli, description: "Short fat parboiled rice yielding soft, fluffy idlis every time.", highlight: "Soft idli batter", price: 65, unit: "kg", availability: "In Stock", quality: "Parboiled idli grade · Soft batter" },

  { slug: "toor-dal", name: "Toor Dal", category: "Dals", image: toor, description: "Split pigeon peas — the heart of every Indian sambar and dal tadka.", highlight: "Protein rich", price: 145, unit: "kg", availability: "In Stock", quality: "Polished · Sortex cleaned · Premium grade" },
  { slug: "moong-dal", name: "Moong Dal", category: "Dals", image: moong, description: "Split moong lentils, easy to digest and perfect for light dals and khichdi.", highlight: "Easy to digest", price: 130, unit: "kg", availability: "In Stock", quality: "Split with skin · Hand-cleaned" },
  { slug: "masoor-dal", name: "Masoor Dal", category: "Dals", image: masoor, description: "Vibrant red split lentils that cook quickly into creamy, hearty curries.", highlight: "Quick cooking", price: 110, unit: "kg", availability: "In Stock", quality: "Red split · Sortex cleaned" },
  { slug: "chana-dal", name: "Chana Dal", category: "Dals", image: chana, description: "Split chickpeas with a nutty flavour, ideal for dals, sweets and snacks.", highlight: "Nutty & wholesome", price: 95, unit: "kg", availability: "In Stock", quality: "Bold split · Premium grade" },
  { slug: "urad-dal", name: "Urad Dal", category: "Dals", image: urad, description: "Whole black gram, essential for authentic dal makhani and South Indian batters.", highlight: "Rich & creamy", price: 140, unit: "kg", availability: "In Stock", quality: "Whole black gram · Clean & sorted" },
  { slug: "green-gram", name: "Green Gram", category: "Dals", image: greenGram, description: "Whole moong beans — sprout, boil or curry for protein-packed meals.", highlight: "Sprouting friendly", price: 125, unit: "kg", availability: "In Stock", quality: "Whole moong · Sprout grade" },
  { slug: "yellow-moong", name: "Yellow Moong Dal", category: "Dals", image: yellowMoong, description: "Split skinless moong, golden yellow and perfect for soft, light dals.", highlight: "Light & nourishing", price: 135, unit: "kg", availability: "In Stock", quality: "Skinless split · Premium grade" },
  { slug: "split-urad", name: "Split Urad Dal", category: "Dals", image: splitUrad, description: "Skinless split black gram, the secret to perfect vadas and idli batter.", highlight: "Soft texture", price: 145, unit: "kg", availability: "In Stock", quality: "Skinless split · Hand-cleaned" },

  { slug: "kaju-w180", name: "W180 Cashew", category: "Kaaju", image: kajuW180, description: "Largest premium grade — extra-large whole kernels with a creamy bite. Reserved for festive gifting and royal dishes.", highlight: "King size grade", price: 1250, unit: "kg", availability: "Limited", quality: "W180 · Extra large whole · A-grade kernels" },
  { slug: "kaju-w210", name: "W210 Cashew", category: "Kaaju", image: kajuW210, description: "Premium large whole cashews — uniform, ivory-white kernels prized for sweets and snacking.", highlight: "Premium large", price: 1050, unit: "kg", availability: "In Stock", quality: "W210 · Large whole · Sortex cleaned" },
  { slug: "kaju-w240", name: "W240 Cashew", category: "Kaaju", image: kajuW240, description: "Medium-large whole cashews — a versatile favourite for cooking, gifting and everyday use.", highlight: "Best value premium", price: 950, unit: "kg", availability: "In Stock", quality: "W240 · Medium-large whole · A-grade" },
  { slug: "kaju-w320", name: "W320 Cashew", category: "Kaaju", image: kajuW320, description: "The most popular grade — medium uniform whole cashews, perfect for daily kitchens and bulk needs.", highlight: "Most popular grade", price: 850, unit: "kg", availability: "In Stock", quality: "W320 · Medium whole · Hand-picked" },
  { slug: "kaju-salted", name: "Salted Cashew", category: "Kaaju", image: kajuSalted, description: "Lightly salted whole cashews — crunchy, savoury and ready to serve straight from the pack.", highlight: "Ready to snack", price: 980, unit: "kg", availability: "In Stock", quality: "Lightly salted · Whole kernels · Crisp finish" },
  { slug: "kaju-roasted", name: "Roasted Cashew", category: "Kaaju", image: kajuRoasted, description: "Slow-roasted whole cashews with a deep golden colour and rich, nutty aroma.", highlight: "Slow-roasted", price: 1020, unit: "kg", availability: "In Stock", quality: "Dry roasted · Whole kernels · No oil added" },
];

export const WHATSAPP_NUMBER = "919438426292";
export const WHATSAPP_URL = "https://wa.me/919438426292?text=" + encodeURIComponent("Hello TRIVENI TRADERS, I would like to know more about your products.");
export const PHONE = "9438426292";
export const EMAIL = "Jk355671@gmail.com";
export const ADDRESS = "MG Road, Jeypore (D), Koraput, Odisha";

export function inquiryUrl(productName: string) {
  return "https://wa.me/919438426292?text=" + encodeURIComponent(`Hello TRIVENI TRADERS, I would like to know more about ${productName}.`);
}

export function orderUrl(productName: string, qty: number, total: number) {
  const msg = `Hello TRIVENI TRADERS, I would like to place an order:\n\nProduct: ${productName}\nQuantity: ${qty} kg\nEstimated Total: ₹${total}\n\nPlease confirm availability and payment details.`;
  return "https://wa.me/919438426292?text=" + encodeURIComponent(msg);
}
