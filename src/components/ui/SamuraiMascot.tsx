import { memo } from "react";

// Purple & Gold Mecha Samurai Warrior - based on provided mascot reference
const SamuraiMascot = memo(function SamuraiMascot() {
  return (
    <div className="relative" style={{ filter: "drop-shadow(0 0 40px rgba(239,216,68,0.45))" }}>
      <svg viewBox="0 0 320 480" width="270" height="405" xmlns="http://www.w3.org/2000/svg">

        {/* ===== KATANA ON BACK (behind body) ===== */}
        <rect x="210" y="40" width="8" height="160" rx="3" fill="#D89202" stroke="#080511" strokeWidth="2" transform="rotate(12 210 40)"/>
        <rect x="206" y="30" width="16" height="22" rx="3" fill="#EFD844" stroke="#080511" strokeWidth="2" transform="rotate(12 210 40)"/>
        <rect x="210" y="52" width="8" height="148" rx="2" fill="#FFFCF3" opacity="0.3" transform="rotate(12 210 40)"/>

        {/* ===== GOLD CROWN / HELMET HORNS ===== */}
        {/* Center tall horn */}
        <polygon points="160,22 174,72 146,72" fill="#EFD844" stroke="#080511" strokeWidth="3"/>
        {/* Left horn */}
        <polygon points="133,32 144,74 120,74" fill="#EFD844" stroke="#080511" strokeWidth="2.5"/>
        {/* Right horn */}
        <polygon points="187,32 200,74 176,74" fill="#EFD844" stroke="#080511" strokeWidth="2.5"/>
        {/* Horn shine */}
        <polygon points="160,28 165,60 158,60" fill="#FFFCF3" opacity="0.4"/>

        {/* ===== HEAD / HELMET ===== */}
        <rect x="106" y="68" width="108" height="84" rx="14" fill="#79359C" stroke="#080511" strokeWidth="3.5"/>
        {/* Face visor - dark slit */}
        <rect x="112" y="80" width="96" height="42" rx="10" fill="#080511" stroke="#291648" strokeWidth="2"/>
        {/* Visor slit glow */}
        <rect x="116" y="90" width="88" height="16" rx="7" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
        <rect x="122" y="93" width="76" height="10" rx="4" fill="#FFFCF3" opacity="0.8"/>
        {/* Animated visor pulse */}
        <rect x="116" y="90" width="88" height="16" rx="7" fill="#EFD844" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite"/>
        </rect>
        {/* Lower face grille */}
        <rect x="122" y="112" width="76" height="14" rx="6" fill="#43186B" stroke="#080511" strokeWidth="2"/>
        <line x1="132" y1="119" x2="188" y2="119" stroke="#EFD844" strokeWidth="1.5" opacity="0.5"/>
        {/* Helmet side vents */}
        <rect x="107" y="86" width="9" height="32" rx="3" fill="#43186B" stroke="#080511" strokeWidth="2"/>
        <rect x="204" y="86" width="9" height="32" rx="3" fill="#43186B" stroke="#080511" strokeWidth="2"/>
        {/* Cheek armor */}
        <rect x="107" y="120" width="24" height="18" rx="6" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
        <rect x="189" y="120" width="24" height="18" rx="6" fill="#EFD844" stroke="#080511" strokeWidth="2"/>

        {/* ===== NECK ===== */}
        <rect x="140" y="150" width="40" height="22" rx="6" fill="#43186B" stroke="#080511" strokeWidth="2.5"/>
        <rect x="147" y="155" width="26" height="12" rx="3" fill="#291648"/>

        {/* ===== SHOULDER PADS (square, chunky) ===== */}
        {/* Left shoulder - with ASTERISK */}
        <rect x="56" y="148" width="58" height="58" rx="10" fill="#EFD844" stroke="#080511" strokeWidth="3.5"/>
        <rect x="63" y="156" width="44" height="42" rx="7" fill="#D89202" stroke="#080511" strokeWidth="2"/>
        <text x="70" y="185" fontFamily="monospace" fontSize="24" fontWeight="900" fill="#291648" stroke="#080511" strokeWidth="1">✱</text>
        {/* Right shoulder - with ASTERISK */}
        <rect x="206" y="148" width="58" height="58" rx="10" fill="#EFD844" stroke="#080511" strokeWidth="3.5"/>
        <rect x="213" y="156" width="44" height="42" rx="7" fill="#D89202" stroke="#080511" strokeWidth="2"/>
        <text x="220" y="185" fontFamily="monospace" fontSize="24" fontWeight="900" fill="#291648" stroke="#080511" strokeWidth="1">✱</text>

        {/* ===== TORSO ===== */}
        <rect x="90" y="168" width="140" height="120" rx="16" fill="#79359C" stroke="#080511" strokeWidth="3.5"/>
        {/* Chest plate hex */}
        <polygon points="160,182 182,194 182,218 160,230 138,218 138,194" fill="#43186B" stroke="#080511" strokeWidth="2.5"/>
        {/* HASHTAG on chest */}
        <text x="146" y="216" fontFamily="monospace" fontSize="26" fontWeight="900" fill="#EFD844" stroke="#080511" strokeWidth="1.5">#</text>
        {/* Circuit lines on torso */}
        <line x1="96" y1="198" x2="130" y2="198" stroke="#EFD844" strokeWidth="1.5" opacity="0.4"/>
        <line x1="96" y1="210" x2="120" y2="210" stroke="#EFD844" strokeWidth="1.5" opacity="0.4"/>
        <line x1="190" y1="198" x2="224" y2="198" stroke="#EFD844" strokeWidth="1.5" opacity="0.4"/>
        <line x1="200" y1="210" x2="224" y2="210" stroke="#EFD844" strokeWidth="1.5" opacity="0.4"/>
        {/* Belt */}
        <rect x="96" y="272" width="128" height="20" rx="7" fill="#EFD844" stroke="#080511" strokeWidth="2.5"/>
        <rect x="141" y="275" width="38" height="14" rx="4" fill="#B36A04" stroke="#080511" strokeWidth="2"/>

        {/* ===== SATCHEL BAG (left side) ===== */}
        <rect x="57" y="220" width="46" height="56" rx="8" fill="#8B6348" stroke="#080511" strokeWidth="2.5"/>
        <rect x="61" y="226" width="38" height="44" rx="6" fill="#7A5540" stroke="#080511" strokeWidth="1.5"/>
        {/* Bag strap */}
        <line x1="90" y1="172" x2="78" y2="220" stroke="#6B4C36" strokeWidth="5" strokeLinecap="round"/>
        {/* Bag clasp */}
        <rect x="70" y="240" width="28" height="18" rx="4" fill="#D89202" stroke="#080511" strokeWidth="2"/>
        <ellipse cx="84" cy="249" rx="6" ry="7" fill="#B36A04" stroke="#080511" strokeWidth="1.5"/>

        {/* ===== UPPER ARMS ===== */}
        <rect x="57" y="202" width="36" height="56" rx="10" fill="#79359C" stroke="#080511" strokeWidth="3"/>
        <rect x="227" y="202" width="36" height="56" rx="10" fill="#79359C" stroke="#080511" strokeWidth="3"/>

        {/* ===== LOWER ARMS / GAUNTLETS ===== */}
        <rect x="52" y="254" width="44" height="52" rx="10" fill="#43186B" stroke="#080511" strokeWidth="3"/>
        <rect x="52" y="266" width="44" height="10" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
        <rect x="224" y="254" width="44" height="52" rx="10" fill="#43186B" stroke="#080511" strokeWidth="3"/>
        <rect x="224" y="266" width="44" height="10" fill="#EFD844" stroke="#080511" strokeWidth="2"/>

        {/* ===== WAIST / HIP PLATE ===== */}
        <rect x="100" y="286" width="120" height="28" rx="10" fill="#43186B" stroke="#080511" strokeWidth="3"/>
        <rect x="108" y="292" width="32" height="16" rx="5" fill="#291648" stroke="#080511" strokeWidth="2"/>
        <rect x="180" y="292" width="32" height="16" rx="5" fill="#291648" stroke="#080511" strokeWidth="2"/>

        {/* ===== THIGHS ===== */}
        <rect x="104" y="310" width="44" height="68" rx="10" fill="#79359C" stroke="#080511" strokeWidth="3"/>
        <rect x="172" y="310" width="44" height="68" rx="10" fill="#79359C" stroke="#080511" strokeWidth="3"/>
        {/* Knee pads */}
        <ellipse cx="126" cy="350" rx="14" ry="10" fill="#EFD844" stroke="#080511" strokeWidth="2.5"/>
        <ellipse cx="194" cy="350" rx="14" ry="10" fill="#EFD844" stroke="#080511" strokeWidth="2.5"/>

        {/* ===== LOWER LEGS ===== */}
        <rect x="106" y="376" width="40" height="54" rx="8" fill="#43186B" stroke="#080511" strokeWidth="3"/>
        <rect x="174" y="376" width="40" height="54" rx="8" fill="#43186B" stroke="#080511" strokeWidth="3"/>
        {/* Shin accent */}
        <rect x="110" y="382" width="32" height="10" rx="3" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
        <rect x="178" y="382" width="32" height="10" rx="3" fill="#EFD844" stroke="#080511" strokeWidth="2"/>

        {/* ===== FEET ===== */}
        <rect x="100" y="428" width="52" height="28" rx="9" fill="#43186B" stroke="#080511" strokeWidth="3"/>
        <rect x="168" y="428" width="52" height="28" rx="9" fill="#43186B" stroke="#080511" strokeWidth="3"/>
        <rect x="100" y="444" width="20" height="12" rx="4" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
        <rect x="168" y="444" width="20" height="12" rx="4" fill="#EFD844" stroke="#080511" strokeWidth="2"/>

        {/* ===== LIGHTNING SWORD (right hand) ===== */}
        {/* Sword blade */}
        <rect x="270" y="290" width="10" height="120" rx="3" fill="#EFD844" stroke="#080511" strokeWidth="2" transform="rotate(25 270 290)"/>
        <rect x="272" y="292" width="6" height="118" rx="2" fill="#FFFCF3" opacity="0.5" transform="rotate(25 270 290)"/>
        {/* Guard */}
        <rect x="258" y="290" width="34" height="14" rx="5" fill="#D89202" stroke="#080511" strokeWidth="2.5" transform="rotate(25 270 290)"/>
        {/* Handle */}
        <rect x="264" y="302" width="12" height="32" rx="4" fill="#43186B" stroke="#080511" strokeWidth="2" transform="rotate(25 270 290)"/>
        {/* Lightning effect on blade */}
        <polyline points="276,308 284,325 278,330 290,350 282,355 296,380" fill="none" stroke="#a855c8" strokeWidth="3" strokeLinecap="round" opacity="0.9" transform="rotate(25 270 290)">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="0.6s" repeatCount="indefinite"/>
        </polyline>
        <polyline points="276,308 284,325 278,330 290,350 282,355 296,380" fill="none" stroke="#FFFCF3" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" transform="rotate(25 270 290)"/>

        {/* ===== GROUND GLOW ===== */}
        <ellipse cx="160" cy="468" rx="90" ry="10" fill="#EFD844" opacity="0.15">
          <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite"/>
        </ellipse>

      </svg>

      {/* CSS glow platform */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[240px] h-[28px] bg-gold blur-[30px] opacity-40 rounded-full"/>
    </div>
  );
});

export default SamuraiMascot;
