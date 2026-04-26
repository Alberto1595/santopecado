"use client";
import { useEffect, useRef, useState } from "react";
import { useCart } from "./CartContext";

export default function CartButton() {
  const { totalItems, total, toggleCart } = useCart();
  const [bouncing, setBouncing] = useState(false);
  const prevTotal = useRef(totalItems);

  useEffect(() => {
    if (totalItems > prevTotal.current) {
      setBouncing(true);
      const t = setTimeout(() => setBouncing(false), 400);
      prevTotal.current = totalItems;
      return () => clearTimeout(t);
    }
    prevTotal.current = totalItems;
  }, [totalItems]);

  return (
    <button
      onClick={toggleCart}
      className={`fixed bottom-6 left-6 z-40 flex items-center gap-3 rounded-2xl px-4 py-3 transition-all hover:scale-105 active:scale-95 ${
        bouncing ? "animate-cart-bounce" : ""
      }`}
      style={{
        background: "linear-gradient(135deg, rgba(10,10,10,0.95), rgba(20,20,20,0.95))",
        border: "1.5px solid rgba(241,196,15,0.4)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(241,196,15,0.1)",
        backdropFilter: "blur(12px)",
        color: "var(--blanco)",
      }}
    >
      {/* Cart icon */}
      <div className="relative">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinejoin="round"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        {totalItems > 0 && (
          <span
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold animate-badge-pop"
            style={{
              background: "var(--rojo-fuego)",
              color: "#fff",
              fontSize: "0.65rem",
              fontFamily: "var(--font-cinzel)",
            }}
          >
            {totalItems > 9 ? "9+" : totalItems}
          </span>
        )}
      </div>

      {/* Total */}
      <div className="flex flex-col items-start leading-none">
        <span
          className="font-cinzel text-xs tracking-wider opacity-60"
          style={{ fontSize: "0.6rem" }}
        >
          MI PEDIDO
        </span>
        <span
          className="font-cinzel-deco font-bold"
          style={{ color: "var(--dorado)", fontSize: "0.95rem" }}
        >
          {totalItems === 0 ? "Vacío" : `$${total}`}
        </span>
      </div>
    </button>
  );
}
