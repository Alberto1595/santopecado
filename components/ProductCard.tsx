"use client";
import { useState } from "react";
import { Producto } from "@/config";
import { useCart } from "./CartContext";

export default function ProductCard({ producto }: { producto: Producto }) {
  const { addItem, openCart } = useCart();
  const [selectedVariante, setSelectedVariante] = useState(
    producto.variantes ? producto.variantes[0] : null
  );
  const [added, setAdded] = useState(false);

  const precio = selectedVariante?.precio ?? producto.precio;

  function handleAdd() {
    addItem(
      producto,
      selectedVariante?.label,
      selectedVariante?.precio
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <div
      className="group relative rounded-xl p-5 transition-all duration-200 hover:translate-x-1"
      style={{
        background: "linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(18,18,18,0.98) 100%)",
        border: "1px solid rgba(241,196,15,0.12)",
        marginBottom: "12px",
      }}
    >
      {/* Accent bar on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: "linear-gradient(180deg, var(--rojo-fuego), var(--dorado))" }}
      />

      <div className="flex items-start justify-between gap-4">
        {/* Left: info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="font-cinzel font-semibold leading-tight"
              style={{ color: "var(--blanco)", fontSize: "clamp(0.88rem, 2.5vw, 1rem)" }}
            >
              {producto.nombre}
            </span>
            {producto.badge && (
              <span
                className="text-xs px-2 py-0.5 rounded-full font-cinzel"
                style={{
                  background: "rgba(241,196,15,0.12)",
                  border: "1px solid rgba(241,196,15,0.3)",
                  color: "var(--dorado)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.05em",
                }}
              >
                {producto.badge}
              </span>
            )}
          </div>

          {producto.descripcion && (
            <p
              className="mt-1 leading-relaxed"
              style={{
                color: "rgba(245,240,232,0.5)",
                fontSize: "clamp(0.72rem, 2vw, 0.82rem)",
              }}
            >
              {producto.descripcion}
            </p>
          )}

          {/* Variante selector */}
          {producto.variantes && (
            <div className="flex gap-2 mt-3 flex-wrap">
              {producto.variantes.map((v) => (
                <button
                  key={v.label}
                  onClick={() => setSelectedVariante(v)}
                  className="px-3 py-1 rounded-lg text-xs font-cinzel tracking-wide transition-all"
                  style={{
                    background:
                      selectedVariante?.label === v.label
                        ? "rgba(241,196,15,0.2)"
                        : "rgba(255,255,255,0.05)",
                    border:
                      selectedVariante?.label === v.label
                        ? "1px solid rgba(241,196,15,0.6)"
                        : "1px solid rgba(255,255,255,0.12)",
                    color:
                      selectedVariante?.label === v.label
                        ? "var(--dorado)"
                        : "rgba(245,240,232,0.6)",
                    fontSize: "0.7rem",
                  }}
                >
                  {v.label} <span style={{ color: "var(--dorado2)" }}>${v.precio}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: price + add btn */}
        <div className="flex flex-col items-end gap-3 flex-shrink-0">
          <div
            className="font-cinzel-deco font-bold"
            style={{ color: "var(--dorado)", fontSize: "clamp(1rem, 3vw, 1.2rem)" }}
          >
            ${precio}
          </div>

          <button
            onClick={handleAdd}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl font-cinzel font-bold tracking-wide transition-all hover:scale-105 active:scale-95 text-xs"
            style={{
              background: added
                ? "rgba(37,211,102,0.2)"
                : "rgba(241,196,15,0.1)",
              border: added
                ? "1px solid rgba(37,211,102,0.5)"
                : "1px solid rgba(241,196,15,0.35)",
              color: added ? "#25D366" : "var(--dorado)",
              minWidth: "80px",
              justifyContent: "center",
            }}
          >
            {added ? (
              <>
                <span>✓</span>
                <span>¡Listo!</span>
              </>
            ) : (
              <>
                <span>+</span>
                <span>Agregar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
