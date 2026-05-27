import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, Smartphone, Wallet, Banknote, QrCode, Check } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { type Product, orderUrl } from "@/lib/products";

interface Props {
  product: Product | null;
  onClose: () => void;
}

type Method = "upi" | "razorpay" | "qr" | "cod";

const methods: { id: Method; label: string; desc: string; icon: typeof Smartphone }[] = [
  { id: "upi", label: "UPI Payment", desc: "Google Pay · PhonePe · Paytm · BHIM", icon: Smartphone },
  { id: "razorpay", label: "Razorpay", desc: "Cards · Netbanking · Wallets", icon: Wallet },
  { id: "qr", label: "Scan QR to Pay", desc: "Any UPI app", icon: QrCode },
  { id: "cod", label: "Cash on Delivery", desc: "Pay on arrival", icon: Banknote },
];

export function PaymentModal({ product, onClose }: Props) {
  const [qty, setQty] = useState(10);
  const [method, setMethod] = useState<Method>("upi");
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (!product) return;
    setQty(10); setMethod("upi"); setConfirmed(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [product]);

  const total = useMemo(() => (product ? product.price * qty : 0), [product, qty]);

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ type: "spring", damping: 26, stiffness: 240 }}
          className="relative bg-background rounded-3xl overflow-hidden shadow-card max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-border"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 z-10 size-10 rounded-full glass border border-border flex items-center justify-center hover:bg-secondary transition-colors">
            <X size={18} />
          </button>

          {!confirmed ? (
            <div className="p-6 md:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-sage-deep">Secure Checkout</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">Complete Your Order</h2>

              {/* Summary */}
              <div className="mt-6 flex gap-4 p-4 rounded-2xl bg-secondary/60 border border-border">
                <img src={product.image} alt={product.name} className="size-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <p className="font-display text-xl">{product.name}</p>
                  <p className="text-xs uppercase tracking-widest text-sage-deep mt-0.5">{product.category}</p>
                  <p className="text-sm text-muted-foreground mt-1">₹{product.price} / {product.unit}</p>
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <label className="text-sm font-medium text-foreground">Quantity ({product.unit})</label>
                <div className="mt-2 flex items-center gap-4">
                  <div className="inline-flex items-center gap-1 bg-card border border-border rounded-full p-1">
                    <button onClick={() => setQty(Math.max(1, qty - 1))} className="size-9 rounded-full hover:bg-secondary flex items-center justify-center"><Minus size={16} /></button>
                    <input type="number" value={qty} min={1} onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))} className="w-16 text-center bg-transparent font-medium focus:outline-none" />
                    <button onClick={() => setQty(qty + 1)} className="size-9 rounded-full hover:bg-secondary flex items-center justify-center"><Plus size={16} /></button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[10, 25, 50, 100].map(n => (
                      <button key={n} onClick={() => setQty(n)} className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${qty === n ? "bg-gradient-sage text-primary-foreground border-transparent" : "bg-card border-border text-muted-foreground hover:bg-secondary"}`}>{n}kg</button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Payment methods */}
              <div className="mt-6">
                <p className="text-sm font-medium text-foreground">Payment Method</p>
                <div className="mt-3 grid sm:grid-cols-2 gap-3">
                  {methods.map(m => {
                    const active = method === m.id;
                    return (
                      <button key={m.id} onClick={() => setMethod(m.id)}
                        className={`text-left p-4 rounded-2xl border transition-all flex items-start gap-3 ${active ? "border-sage bg-sage/5 shadow-soft" : "border-border bg-card hover:bg-secondary"}`}>
                        <div className={`size-10 rounded-xl flex items-center justify-center shrink-0 ${active ? "bg-gradient-sage text-primary-foreground" : "bg-secondary text-sage-deep"}`}>
                          <m.icon size={18} />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm text-foreground">{m.label}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{m.desc}</p>
                        </div>
                        {active && <Check size={18} className="text-sage-deep" />}
                      </button>
                    );
                  })}
                </div>

                {method === "qr" && (
                  <div className="mt-4 p-5 rounded-2xl bg-secondary/60 border border-border flex items-center gap-4">
                    <div className="size-32 rounded-xl bg-background border border-border flex items-center justify-center">
                      <QrCode size={88} className="text-foreground" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Scan with any UPI app</p>
                      <p className="text-muted-foreground mt-1">UPI ID: <span className="font-mono text-foreground">triveni@upi</span></p>
                      <p className="text-muted-foreground mt-1">Amount: ₹{total}</p>
                    </div>
                  </div>
                )}

                {/* Trust icons */}
                <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                  <span>Accepted:</span>
                  {["GPay", "PhonePe", "Paytm", "UPI", "VISA", "Mastercard", "RuPay"].map(p => (
                    <span key={p} className="px-2.5 py-1 rounded-md bg-card border border-border font-medium text-foreground/70">{p}</span>
                  ))}
                </div>
              </div>

              {/* Total + actions */}
              <div className="mt-7 p-5 rounded-2xl bg-gradient-hero border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Order Total</p>
                    <p className="font-display text-3xl text-sage-deep">₹{total.toLocaleString("en-IN")}</p>
                    <p className="text-xs text-muted-foreground mt-1">{qty} {product.unit} × ₹{product.price} · GST extra</p>
                  </div>
                  <button onClick={() => setConfirmed(true)} className="px-6 py-3 rounded-full bg-gradient-sage text-primary-foreground font-medium shadow-soft hover:shadow-card transition-all">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 md:p-12 text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 14 }} className="mx-auto size-20 rounded-full bg-gradient-sage flex items-center justify-center text-primary-foreground">
                <Check size={40} />
              </motion.div>
              <h2 className="mt-6 font-display text-3xl">Order Request Received</h2>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                Thank you! To confirm pricing and payment for <strong>{qty} {product.unit}</strong> of <strong>{product.name}</strong>, please send your order to us on WhatsApp — we'll respond within minutes.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <a href={orderUrl(product.name, qty, total)} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-sage text-primary-foreground font-medium shadow-soft">
                  Confirm on WhatsApp
                </a>
                <button onClick={onClose} className="inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-full bg-cream border border-border text-foreground font-medium hover:bg-secondary transition-colors">
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
