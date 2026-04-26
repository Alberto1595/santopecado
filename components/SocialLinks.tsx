import { negocio } from "@/config";

export default function SocialLinks() {
  const { redes } = negocio;

  return (
    <div className="flex justify-center gap-3 flex-wrap">
      {/* WhatsApp */}
      <a
        href={redes.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn-link"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12.001 2C6.478 2 2 6.478 2 12.001c0 1.77.463 3.478 1.344 4.978L2 22l5.197-1.326A9.955 9.955 0 0012.001 22C17.523 22 22 17.523 22 12.001 22 6.478 17.523 2 12.001 2z" fill="#25D366"/>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.669.15-.198.296-.768.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/>
        </svg>
        <span>WhatsApp</span>
      </a>

      {/* Facebook */}
      <a
        href={redes.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn-link"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#1877F2"/>
          <path d="M16.5 3H14C11.8 3 10 4.8 10 7v2H8v3h2v9h3v-9h2.5l.5-3H13V7c0-.6.4-1 1-1h2.5V3z" fill="#fff"/>
        </svg>
        <span>Facebook</span>
      </a>

      {/* Instagram */}
      <a
        href={redes.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn-link"
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
          <defs>
            <radialGradient id="ig" cx="30%" cy="107%" r="150%">
              <stop offset="0%" stopColor="#fdf497"/>
              <stop offset="45%" stopColor="#fd5949"/>
              <stop offset="60%" stopColor="#d6249f"/>
              <stop offset="90%" stopColor="#285AEB"/>
            </radialGradient>
          </defs>
          <rect width="24" height="24" rx="5.5" fill="url(#ig)"/>
          <rect x="6" y="6" width="12" height="12" rx="3" stroke="#fff" strokeWidth="1.5" fill="none"/>
          <circle cx="12" cy="12" r="3.2" stroke="#fff" strokeWidth="1.5" fill="none"/>
          <circle cx="17" cy="7" r="0.8" fill="#fff"/>
        </svg>
        <span>Instagram</span>
      </a>

      {/* Google Maps */}
      <a
        href={redes.maps}
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn-link"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" fill="#EA4335"/>
          <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13V2z" fill="#C5221F"/>
          <circle cx="12" cy="9" r="3" fill="#fff"/>
        </svg>
        <span>Google Maps</span>
      </a>
    </div>
  );
}
