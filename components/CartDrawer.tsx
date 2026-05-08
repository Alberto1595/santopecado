"use client";
import { useEffect, useRef, useState } from "react";
import { useCart } from "./CartContext";
import { negocio } from "@/config";

const ENVIO = 35;

export default function CartDrawer() {
  const { state, increment, decrement, closeCart, clearCart, total, totalItems } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  const [paso, setPaso] = useState<"carrito" | "tipo" | "direccion">("carrito");
  const [direccion, setDireccion] = useState("");

  // Reset flujo cuando se cierra el drawer
  useEffect(() => {
    if (!state.isOpen) {
      setPaso("carrito");
      setDireccion("");
    }
  }, [state.isOpen]);

  // Close on outside click
  useEffect(() => {
    if (!state.isOpen) return;
    const handler = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        closeCart();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [state.isOpen, closeCart]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = state.isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [state.isOpen]);

  function buildWhatsAppMessage(conEnvio: boolean) {
    const lineas = state.items.map((item) => {
      const precio = item.variantePrecio ?? item.producto.precio;
      const variante = item.varianteLabel ? ` (${item.varianteLabel})` : "";
      return `• ${item.cantidad}x ${item.producto.nombre}${variante} — $${precio * item.cantidad}`;
    });

    const totalFinal = conEnvio ? total + ENVIO : total;

    let mensaje =
      `🛒 *Pedido — ${negocio.nombre}*\n\n` +
      lineas.join("\n");

    if (conEnvio) {
      mensaje += `\n\n🚚 *Envío: $${ENVIO}*`;
      mensaje += `\n💰 *Total con envío: $${totalFinal}*`;
      mensaje += `\n\n📍 *Dirección: ${direccion}*`;
    } else {
      mensaje += `\n\n🏃 *Para llevar*`;
      mensaje += `\n💰 *Total: $${totalFinal}*`;
    }

    const encoded = encodeURIComponent(mensaje);
    const url = `https://wa.me/${negocio.whatsapp}?text=${encoded}`;
    window.open(url, "_blank");
  }

  if (!state.isOpen && state.items.length === 0) return null;

  // ── Títulos del header según paso ──
  const headerTitulo =
    paso === "carrito" ? "Tu Pedido" :
    paso === "tipo"    ? "¿Cómo lo quieres?" :
                         "¿A dónde te lo llevamos?";

  const headerSub =
    paso === "carrito"
      ? `${totalItems} ${totalItems === 1 ? "producto" : "productos"}`
      : paso === "tipo"
      ? "Elige una opción"
      : "Escribe tu dirección";

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          state.isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(2px)" }}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full z-50 flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          state.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          width: "min(420px, 100vw)",
          background: "linear-gradient(160deg, #141414 0%, #0d0d0d 100%)",
          borderLeft: "1px solid rgba(241,196,15,0.2)",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.6)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(241,196,15,0.15)" }}
        >
          <div className="flex items-center gap-3">
            {/* Botón atrás cuando no estamos en paso inicial */}
            {paso !== "carrito" && (
              <button
                onClick={() => setPaso(paso === "direccion" ? "tipo" : "carrito")}
                className="flex items-center justify-center w-8 h-8 rounded-full transition-all hover:opacity-80 mr-1"
                style={{ background: "rgba(241,196,15,0.1)", color: "var(--dorado)", fontSize: "1rem" }}
              >
                ←
              </button>
            )}
            <span className="text-2xl">
              {paso === "carrito" ? "🛒" : paso === "tipo" ? "🍔" : "📍"}
            </span>
            <div>
              <div
                className="font-cinzel font-bold tracking-wider"
                style={{ color: "var(--dorado)", fontSize: "0.95rem" }}
              >
                {headerTitulo}
              </div>
              <div className="text-xs opacity-50" style={{ color: "var(--blanco)" }}>
                {headerSub}
              </div>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="flex items-center justify-center w-9 h-9 rounded-full transition-all hover:opacity-80"
            style={{ background: "rgba(255,255,255,0.07)", color: "var(--blanco)" }}
          >
            ✕
          </button>
        </div>

        {/* ══ PASO: CARRITO ══ */}
        {paso === "carrito" && (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 opacity-40">
                  <span className="text-5xl">🛒</span>
                  <p className="font-cinzel text-sm tracking-wider" style={{ color: "var(--blanco)" }}>
                    Tu carrito está vacío
                  </p>
                </div>
              ) : (
                state.items.map((item) => {
                  const precio = item.variantePrecio ?? item.producto.precio;
                  const key = item.varianteLabel
                    ? `${item.producto.id}__${item.varianteLabel}`
                    : item.producto.id;
                  return (
                    <div
                      key={key}
                      className="rounded-xl p-4 flex gap-3"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(241,196,15,0.1)",
                      }}
                    >
                      <div className="flex-1 min-w-0">
                        <div
                          className="font-cinzel font-semibold text-sm leading-tight"
                          style={{ color: "var(--blanco)" }}
                        >
                          {item.producto.nombre}
                        </div>
                        {item.varianteLabel && (
                          <div className="text-xs mt-0.5 opacity-50" style={{ color: "var(--blanco)" }}>
                            {item.varianteLabel}
                          </div>
                        )}
                        <div className="text-sm font-bold mt-1" style={{ color: "var(--dorado)" }}>
                          ${precio * item.cantidad}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => decrement(item.producto.id, item.varianteLabel)}
                          className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all hover:scale-110"
                          style={{
                            background: "rgba(192,57,43,0.2)",
                            border: "1px solid rgba(192,57,43,0.4)",
                            color: "var(--rojo-fuego)",
                          }}
                        >
                          −
                        </button>
                        <span
                          className="w-6 text-center font-cinzel font-bold text-sm"
                          style={{ color: "var(--blanco)" }}
                        >
                          {item.cantidad}
                        </span>
                        <button
                          onClick={() => increment(item.producto.id, item.varianteLabel)}
                          className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all hover:scale-110"
                          style={{
                            background: "rgba(241,196,15,0.15)",
                            border: "1px solid rgba(241,196,15,0.35)",
                            color: "var(--dorado)",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {state.items.length > 0 && (
              <div
                className="px-5 py-5 flex-shrink-0 space-y-3"
                style={{ borderTop: "1px solid rgba(241,196,15,0.15)" }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-cinzel tracking-wider text-sm opacity-70" style={{ color: "var(--blanco)" }}>
                    Subtotal
                  </span>
                  <span className="font-cinzel-deco font-bold text-xl" style={{ color: "var(--dorado)" }}>
                    ${total}
                  </span>
                </div>

                <button
                  onClick={() => setPaso("tipo")}
                  className="w-full flex items-center justify-center gap-3 rounded-xl py-4 font-cinzel font-bold tracking-wider text-sm transition-all hover:scale-[1.02] hover:shadow-lg active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                    color: "#fff",
                    boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12.001 2C6.478 2 2 6.478 2 12.001c0 1.77.463 3.478 1.344 4.978L2 22l5.197-1.326A9.955 9.955 0 0012.001 22C17.523 22 22 17.523 22 12.001 22 6.478 17.523 2 12.001 2z" fill="#fff" fillOpacity=".3"/>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.669.15-.198.296-.768.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/>
                  </svg>
                  Continuar pedido
                </button>

                <button
                  onClick={clearCart}
                  className="w-full text-center text-xs py-1 opacity-40 hover:opacity-70 transition-opacity font-cinzel tracking-wider"
                  style={{ color: "var(--blanco)" }}
                >
                  Vaciar carrito
                </button>
              </div>
            )}
          </>
        )}

        {/* ══ PASO: TIPO DE ENTREGA ══ */}
        {paso === "tipo" && (
          <div className="flex-1 flex flex-col px-5 py-8 gap-4">
            <p className="text-center text-sm opacity-50 font-cinzel tracking-wider mb-2" style={{ color: "var(--blanco)" }}>
              ¿Cómo quieres recibir tu pedido?
            </p>

            {/* Para llevar */}
            <button
              onClick={() => buildWhatsAppMessage(false)}
              className="w-full rounded-2xl p-5 flex items-center gap-4 transition-all hover:scale-[1.02] active:scale-95"
              style={{
                background: "rgba(241,196,15,0.07)",
                border: "1.5px solid rgba(241,196,15,0.35)",
              }}
            >
              <span className="text-3xl">🏃</span>
              <div className="text-left">
                <div className="font-cinzel font-bold text-sm tracking-wider" style={{ color: "var(--dorado)" }}>
                  Para llevar
                </div>
                <div className="text-xs opacity-50 mt-0.5" style={{ color: "var(--blanco)" }}>
                  Paso a recogerlo — Total: ${total}
                </div>
              </div>
            </button>

            {/* A domicilio */}
            <button
              onClick={() => setPaso("direccion")}
              className="w-full rounded-2xl p-5 flex items-center gap-4 transition-all hover:scale-[1.02] active:scale-95"
              style={{
                background: "rgba(37,211,102,0.07)",
                border: "1.5px solid rgba(37,211,102,0.35)",
              }}
            >
              <span className="text-3xl">🛵</span>
              <div className="text-left">
                <div className="font-cinzel font-bold text-sm tracking-wider" style={{ color: "#25D366" }}>
                  A domicilio
                </div>
                <div className="text-xs opacity-50 mt-0.5" style={{ color: "var(--blanco)" }}>
                  Envío $35 — Total: ${total + ENVIO}
                </div>
              </div>
            </button>
          </div>
        )}

        {/* ══ PASO: DIRECCIÓN ══ */}
        {paso === "direccion" && (
          <div className="flex-1 flex flex-col px-5 py-8 gap-5">
            <p className="text-center text-sm opacity-50 font-cinzel tracking-wider" style={{ color: "var(--blanco)" }}>
              Escribe tu dirección completa
            </p>

            <textarea
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Escribe tu direccion completa"
              rows={4}
              className="w-full rounded-xl p-4 text-sm resize-none outline-none transition-all"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1.5px solid rgba(241,196,15,0.3)",
                color: "var(--blanco)",
                fontFamily: "var(--font-baskerville), serif",
                lineHeight: 1.6,
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(241,196,15,0.7)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(241,196,15,0.3)")}
            />

            {/* Resumen */}
            <div
              className="rounded-xl px-4 py-3 space-y-1.5"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(241,196,15,0.1)" }}
            >
              <div className="flex justify-between text-xs opacity-50" style={{ color: "var(--blanco)" }}>
                <span className="font-cinzel">Subtotal</span>
                <span>${total}</span>
              </div>
              <div className="flex justify-between text-xs opacity-50" style={{ color: "var(--blanco)" }}>
                <span className="font-cinzel">Envío</span>
                <span>${ENVIO}</span>
              </div>
              <div
                className="flex justify-between text-sm font-bold pt-1"
                style={{ borderTop: "1px solid rgba(241,196,15,0.15)", color: "var(--dorado)" }}
              >
                <span className="font-cinzel tracking-wider">Total</span>
                <span>${total + ENVIO}</span>
              </div>
            </div>

            <button
              onClick={() => buildWhatsAppMessage(true)}
              disabled={!direccion.trim()}
              className="w-full flex items-center justify-center gap-3 rounded-xl py-4 font-cinzel font-bold tracking-wider text-sm transition-all active:scale-95"
              style={{
                background: direccion.trim()
                  ? "linear-gradient(135deg, #25D366, #128C7E)"
                  : "rgba(255,255,255,0.08)",
                color: direccion.trim() ? "#fff" : "rgba(255,255,255,0.3)",
                boxShadow: direccion.trim() ? "0 4px 20px rgba(37,211,102,0.3)" : "none",
                cursor: direccion.trim() ? "pointer" : "not-allowed",
                transform: direccion.trim() ? undefined : "none",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12.001 2C6.478 2 2 6.478 2 12.001c0 1.77.463 3.478 1.344 4.978L2 22l5.197-1.326A9.955 9.955 0 0012.001 22C17.523 22 22 17.523 22 12.001 22 6.478 17.523 2 12.001 2z" fill="#fff" fillOpacity=".3"/>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.669.15-.198.296-.768.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/>
              </svg>
              Enviar pedido por WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}