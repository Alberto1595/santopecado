"use client";
import { useState } from "react";
import { negocio, secciones } from "@/config";
import { CartProvider } from "@/components/CartContext";
import CartDrawer from "@/components/CartDrawer";
import CartButton from "@/components/CartButton";
import ProductCard from "@/components/ProductCard";
import SocialLinks from "@/components/SocialLinks";

export default function MenuPage() {
  const [activeId, setActiveId] = useState(secciones[0].id);

  const activeSeccion = secciones.find((s) => s.id === activeId) ?? secciones[0];

  return (
    <CartProvider>
      <div className="relative min-h-screen" style={{ fontFamily: "var(--font-baskerville), serif" }}>

        {/* ══ HEADER ══ */}
        <header
          className="relative z-10 text-center overflow-hidden"
          style={{
            padding: "60px 20px 40px",
            background: "linear-gradient(180deg, #0a0a0a 0%, rgba(10,10,10,0.95) 100%)",
            borderBottom: "2px solid var(--dorado2)",
          }}
        >
          {/* Rainbow accent line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{
              background: "linear-gradient(90deg, transparent, var(--rojo-fuego), var(--dorado), var(--teal-claro), transparent)",
            }}
          />

          {/* Halo ring */}
          <img
            src="/logo.jpg"
            alt="Santo Pecado"
            className="animate-halo mx-auto mb-4"
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid var(--dorado)",
            }}
          />

          <h1
            className="animate-title-fade"
            style={{
              fontFamily: "var(--font-cinzel-deco), serif",
              fontSize: "clamp(1.6rem, 5vw, 3rem)",
              fontWeight: 900,
              color: "var(--dorado)",
              letterSpacing: "0.05em",
              textShadow: "0 0 30px rgba(241,196,15,0.5), 2px 2px 0 rgba(0,0,0,0.8)",
              lineHeight: 1.1,
            }}
          >
            {negocio.nombre}
          </h1>

          <p
            className="mt-1.5"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "clamp(0.7rem, 2vw, 0.9rem)",
              color: "var(--blanco)",
              letterSpacing: "0.3em",
              opacity: 0.7,
            }}
          >
            {negocio.subtitulo}
          </p>

          <p
            className="mt-3"
            style={{
              fontFamily: "var(--font-baskerville), serif",
              fontStyle: "italic",
              fontSize: "clamp(0.85rem, 2.5vw, 1.05rem)",
              color: "var(--dorado2)",
              opacity: 0.9,
            }}
          >
            {negocio.tagline}
          </p>

          <p
            className="mt-2.5"
            style={{
              fontSize: "0.75rem",
              color: "rgba(245,240,232,0.5)",
              letterSpacing: "0.05em",
            }}
          >
            {negocio.direccion}
          </p>
        </header>

        {/* ══ NAV TABS ══ */}
        <nav
          className="sticky top-0 z-30 nav-scroll overflow-x-auto"
          style={{
            background: "rgba(10,10,10,0.97)",
            borderBottom: "1px solid rgba(241,196,15,0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="flex gap-1.5 px-4 py-3 min-w-max mx-auto"
            style={{ justifyContent: "center" }}
          >
            {secciones.map((s) => {
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveId(s.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="whitespace-nowrap flex items-center gap-1.5 transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-cinzel), serif",
                    fontSize: "0.82rem",
                    letterSpacing: "0.07em",
                    padding: "12px 18px",
                    borderRadius: "8px",
                    minHeight: "44px",
                    background: isActive ? "var(--dorado)" : "rgba(241,196,15,0.07)",
                    border: isActive
                      ? "1.5px solid var(--dorado)"
                      : "1.5px solid rgba(241,196,15,0.45)",
                    color: isActive ? "var(--negro)" : "rgba(245,240,232,0.9)",
                    fontWeight: isActive ? 700 : 400,
                    boxShadow: isActive ? "0 0 20px rgba(241,196,15,0.4)" : "none",
                    transform: isActive ? "translateY(-1px)" : "none",
                    cursor: "pointer",
                  }}
                >
                  <span>{s.emoji}</span>
                  <span>{s.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* ══ MAIN CONTENT ══ */}
        <main
          className="relative z-10 mx-auto px-5"
          style={{ maxWidth: 860, paddingTop: 40, paddingBottom: 120 }}
        >
          <div key={activeId} className="animate-fade-in">
            {/* Section header */}
            <div
              className="flex items-center gap-4 mb-8 pb-4"
              style={{ borderBottom: "1px solid rgba(241,196,15,0.2)" }}
            >
              <span style={{ fontSize: "2.2rem", filter: "drop-shadow(0 0 8px rgba(241,196,15,0.4))" }}>
                {activeSeccion.emoji}
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-cinzel-deco), serif",
                  fontSize: "clamp(1.3rem, 4vw, 2rem)",
                  fontWeight: 700,
                  color: "var(--dorado)",
                  textShadow: "0 0 20px rgba(241,196,15,0.3)",
                }}
              >
                {activeSeccion.titulo}
              </h2>
            </div>

            {/* Divider */}
            <div
              className="text-center text-lg mb-8 tracking-widest opacity-40"
              style={{ color: "var(--dorado)" }}
            >
              🔥 😈 🔥
            </div>

            {/* Products */}
            {activeSeccion.productos.map((p) => (
              <ProductCard key={p.id} producto={p} />
            ))}
          </div>
        </main>

        {/* ══ FOOTER ══ */}
        <footer
          className="relative z-10 text-center px-5 pt-8 pb-10"
          style={{
            borderTop: "1px solid rgba(241,196,15,0.15)",
            background: "rgba(10,10,10,0.8)",
          }}
        >
          {/* Social buttons */}
          <div className="mb-6">
            <SocialLinks />
          </div>

          <p
            className="italic opacity-60 text-sm"
            style={{ color: "var(--blanco)", fontFamily: "var(--font-baskerville), serif" }}
          >
            {negocio.tagline} — {negocio.nombre}
          </p>
          <p className="mt-1.5 text-xs opacity-40" style={{ color: "var(--blanco)" }}>
            {negocio.direccion}
          </p>
          <p className="mt-1.5 text-xs opacity-50" style={{ color: "var(--blanco)" }}>
            🕕 {negocio.horario}
          </p>
        </footer>

        {/* ══ FLOATING SOCIAL LINKS (bottom right) ══ */}
        <div
          className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-2.5"
        >
          {Object.entries(negocio.redes).map(([red, url]) => {
            const configs: Record<string, { icon: React.ReactNode; color: string; label: string }> = {
              whatsapp: {
                label: "WhatsApp",
                color: "#25D366",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12.001 2C6.478 2 2 6.478 2 12.001c0 1.77.463 3.478 1.344 4.978L2 22l5.197-1.326A9.955 9.955 0 0012.001 22C17.523 22 22 17.523 22 12.001 22 6.478 17.523 2 12.001 2z" fill="#25D366"/>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.669.15-.198.296-.768.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/>
                  </svg>
                ),
              },
              facebook: {
                label: "Facebook",
                color: "#1877F2",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="4" fill="#1877F2"/>
                    <path d="M16.5 3H14C11.8 3 10 4.8 10 7v2H8v3h2v9h3v-9h2.5l.5-3H13V7c0-.6.4-1 1-1h2.5V3z" fill="#fff"/>
                  </svg>
                ),
              },
              instagram: {
                label: "Instagram",
                color: "#d6249f",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <defs>
                      <radialGradient id="ig-float" cx="30%" cy="107%" r="150%">
                        <stop offset="0%" stopColor="#fdf497"/>
                        <stop offset="45%" stopColor="#fd5949"/>
                        <stop offset="60%" stopColor="#d6249f"/>
                        <stop offset="90%" stopColor="#285AEB"/>
                      </radialGradient>
                    </defs>
                    <rect width="24" height="24" rx="5.5" fill="url(#ig-float)"/>
                    <rect x="6" y="6" width="12" height="12" rx="3" stroke="#fff" strokeWidth="1.5" fill="none"/>
                    <circle cx="12" cy="12" r="3.2" stroke="#fff" strokeWidth="1.5" fill="none"/>
                    <circle cx="17" cy="7" r="0.8" fill="#fff"/>
                  </svg>
                ),
              },
              maps: {
                label: "Maps",
                color: "#EA4335",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" fill="#EA4335"/>
                    <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13V2z" fill="#C5221F"/>
                    <circle cx="12" cy="9" r="3" fill="#fff"/>
                  </svg>
                ),
              },
            };

            const cfg = configs[red];
            if (!cfg) return null;

            return (
              <a
                key={red}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full transition-all hover:-translate-x-1 hover:shadow-lg"
                style={{
                  padding: "8px 14px 8px 10px",
                  background: "rgba(10,10,10,0.88)",
                  border: "1px solid rgba(241,196,15,0.2)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
                  color: "var(--blanco)",
                  textDecoration: "none",
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-cinzel), serif",
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                }}
              >
                {cfg.icon}
                <span>{cfg.label}</span>
              </a>
            );
          })}
        </div>

        {/* ══ CART ══ */}
        <CartButton />
        <CartDrawer />
      </div>

      <style jsx global>{`
        .social-btn-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 10px;
          padding: 10px 16px;
          text-decoration: none;
          color: var(--blanco);
          font-family: var(--font-cinzel), serif;
          font-size: 0.75rem;
          letter-spacing: 0.06em;
          transition: all 0.25s;
          min-height: 44px;
        }
        .social-btn-link:hover {
          background: rgba(255,255,255,0.13);
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
      `}</style>
    </CartProvider>
  );
}
