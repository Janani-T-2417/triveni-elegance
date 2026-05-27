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
import cashews from "@/assets/products/cashews.jpg";

export type Category = "Rice" | "Dals" | "Cashews";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  image: string;
  description: string;
  highlight: string;
}

export const products: Product[] = [
  { slug: "basmati", name: "Basmati Rice", category: "Rice", image: basmati, description: "Long-grain aromatic Basmati, aged to perfection for fluffy, fragrant biryanis and pulaos.", highlight: "Premium aged grain" },
  { slug: "sona-masuri", name: "Sona Masuri Rice", category: "Rice", image: sonaMasuri, description: "Lightweight medium-grain rice, ideal for everyday meals, idlis and dosas.", highlight: "Everyday favourite" },
  { slug: "ponni", name: "Ponni Rice", category: "Rice", image: ponni, description: "Short-grain South Indian rice with a soft, tender texture after cooking.", highlight: "South Indian classic" },
  { slug: "kolam", name: "Kolam Rice", category: "Rice", image: kolam, description: "Polished medium-grain rice with a delicate, slightly sweet flavour profile.", highlight: "Soft & non-sticky" },
  { slug: "jeera-rice", name: "Jeera Rice", category: "Rice", image: jeera, description: "Tiny cumin-sized grains, naturally aromatic and perfect for festive dishes.", highlight: "Naturally fragrant" },
  { slug: "brown-rice", name: "Brown Rice", category: "Rice", image: brown, description: "Whole-grain unpolished rice, rich in fibre and nutrients for wholesome meals.", highlight: "High fibre" },
  { slug: "steam-rice", name: "Steam Rice", category: "Rice", image: steam, description: "Parboiled steamed rice with a soft bite and longer shelf life.", highlight: "Long shelf life" },
  { slug: "raw-rice", name: "Raw Rice", category: "Rice", image: raw, description: "Unprocessed white rice retaining natural flavour and starch character.", highlight: "Pure & unpolished" },
  { slug: "broken-rice", name: "Broken Rice", category: "Rice", image: broken, description: "Fragmented grains, excellent for porridge, kanji and economical cooking.", highlight: "Value pack" },
  { slug: "idli-rice", name: "Idli Rice", category: "Rice", image: idli, description: "Short fat parboiled rice yielding soft, fluffy idlis every time.", highlight: "Soft idli batter" },
  { slug: "toor-dal", name: "Toor Dal", category: "Dals", image: toor, description: "Split pigeon peas — the heart of every Indian sambar and dal tadka.", highlight: "Protein rich" },
  { slug: "moong-dal", name: "Moong Dal", category: "Dals", image: moong, description: "Split moong lentils, easy to digest and perfect for light dals and khichdi.", highlight: "Easy to digest" },
  { slug: "masoor-dal", name: "Masoor Dal", category: "Dals", image: masoor, description: "Vibrant red split lentils that cook quickly into creamy, hearty curries.", highlight: "Quick cooking" },
  { slug: "chana-dal", name: "Chana Dal", category: "Dals", image: chana, description: "Split chickpeas with a nutty flavour, ideal for dals, sweets and snacks.", highlight: "Nutty & wholesome" },
  { slug: "urad-dal", name: "Urad Dal", category: "Dals", image: urad, description: "Whole black gram, essential for authentic dal makhani and South Indian batters.", highlight: "Rich & creamy" },
  { slug: "green-gram", name: "Green Gram", category: "Dals", image: greenGram, description: "Whole moong beans — sprout, boil or curry for protein-packed meals.", highlight: "Sprouting friendly" },
  { slug: "yellow-moong", name: "Yellow Moong Dal", category: "Dals", image: yellowMoong, description: "Split skinless moong, golden yellow and perfect for soft, light dals.", highlight: "Light & nourishing" },
  { slug: "split-urad", name: "Split Urad Dal", category: "Dals", image: splitUrad, description: "Skinless split black gram, the secret to perfect vadas and idli batter.", highlight: "Soft texture" },
  { slug: "cashews", name: "Premium Cashews", category: "Cashews", image: cashews, description: "Whole W320 grade cashews — creamy, crunchy and hand-picked for quality.", highlight: "W320 grade" },
];

export const WHATSAPP_URL = "https://wa.me/919438426292?text=" + encodeURIComponent("Hello TRIVENI TRADERS, I would like to know more about your products.");
export const PHONE = "9438426292";
export const EMAIL = "Jk355671@gmail.com";
export const ADDRESS = "MG Road, Jeypore (D), Koraput, Odisha";

export function inquiryUrl(productName: string) {
  return "https://wa.me/919438426292?text=" + encodeURIComponent(`Hello TRIVENI TRADERS, I would like an inquiry about ${productName}.`);
}
