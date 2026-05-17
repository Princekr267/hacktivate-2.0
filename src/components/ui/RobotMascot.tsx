import { memo } from "react";

const RobotMascot = memo(function RobotMascot() {
  return (
    <>
      {/* Radial gold glow behind mascot */}
      <div className="absolute inset-0 bg-gold rounded-full blur-[60px] opacity-25 scale-75 mix-blend-screen pointer-events-none" />
      
      {/* Mecha Robot SVG */}
      <svg viewBox="0 0 280 380" width="340" height="460" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_30px_rgba(239,216,68,0.35)]">
        {/* Outline/shadow group for neobrutalism */}
        <g stroke="#080511" strokeLinejoin="round" strokeLinecap="round">

          {/* === FEET === */}
          <rect x="82" y="345" width="42" height="28" rx="8" ry="8" fill="#43186B" stroke="#080511" strokeWidth="3"/>
          <rect x="156" y="345" width="42" height="28" rx="8" ry="8" fill="#43186B" stroke="#080511" strokeWidth="3"/>
          <rect x="79" y="358" width="48" height="10" rx="5" fill="#291648" stroke="#080511" strokeWidth="2"/>
          <rect x="153" y="358" width="48" height="10" rx="5" fill="#291648" stroke="#080511" strokeWidth="2"/>
          {/* Gold toe caps */}
          <rect x="82" y="365" width="16" height="8" rx="3" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
          <rect x="156" y="365" width="16" height="8" rx="3" fill="#EFD844" stroke="#080511" strokeWidth="2"/>

          {/* === LEGS === */}
          {/* Left leg upper */}
          <rect x="88" y="295" width="36" height="58" rx="8" fill="#79359C" stroke="#080511" strokeWidth="3"/>
          {/* Left leg lower plate */}
          <rect x="91" y="315" width="30" height="28" rx="5" fill="#43186B" stroke="#080511" strokeWidth="2"/>
          {/* Left knee pad */}
          <ellipse cx="106" cy="312" rx="12" ry="8" fill="#EFD844" stroke="#080511" strokeWidth="2.5"/>
          {/* Right leg upper */}
          <rect x="156" y="295" width="36" height="58" rx="8" fill="#79359C" stroke="#080511" strokeWidth="3"/>
          {/* Right leg lower plate */}
          <rect x="159" y="315" width="30" height="28" rx="5" fill="#43186B" stroke="#080511" strokeWidth="2"/>
          {/* Right knee pad */}
          <ellipse cx="174" cy="312" rx="12" ry="8" fill="#EFD844" stroke="#080511" strokeWidth="2.5"/>

          {/* === WAIST / HIP PLATE === */}
          <rect x="82" y="272" width="116" height="30" rx="10" fill="#EFD844" stroke="#080511" strokeWidth="3"/>
          <rect x="90" y="278" width="30" height="17" rx="5" fill="#D89202" stroke="#080511" strokeWidth="2"/>
          <rect x="160" y="278" width="30" height="17" rx="5" fill="#D89202" stroke="#080511" strokeWidth="2"/>
          <rect x="126" y="276" width="28" height="20" rx="4" fill="#B36A04" stroke="#080511" strokeWidth="2"/>

          {/* === TORSO === */}
          <rect x="72" y="155" width="136" height="122" rx="18" fill="#79359C" stroke="#080511" strokeWidth="3.5"/>
          {/* Chest plate */}
          <rect x="90" y="172" width="100" height="70" rx="10" fill="#43186B" stroke="#080511" strokeWidth="2.5"/>
          {/* Chest gem / core */}
          <polygon points="140,188 153,205 140,222 127,205" fill="#EFD844" stroke="#080511" strokeWidth="2.5"/>
          <polygon points="140,195 148,205 140,215 132,205" fill="#FFFCF3" opacity="0.7"/>
          {/* Chest vents left */}
          <rect x="96" y="200" width="22" height="5" rx="2" fill="#291648" stroke="#080511" strokeWidth="1.5"/>
          <rect x="96" y="210" width="22" height="5" rx="2" fill="#291648" stroke="#080511" strokeWidth="1.5"/>
          <rect x="96" y="220" width="22" height="5" rx="2" fill="#291648" stroke="#080511" strokeWidth="1.5"/>
          {/* Chest vents right */}
          <rect x="162" y="200" width="22" height="5" rx="2" fill="#291648" stroke="#080511" strokeWidth="1.5"/>
          <rect x="162" y="210" width="22" height="5" rx="2" fill="#291648" stroke="#080511" strokeWidth="1.5"/>
          <rect x="162" y="220" width="22" height="5" rx="2" fill="#291648" stroke="#080511" strokeWidth="1.5"/>
          {/* Bottom belt */}
          <rect x="82" y="258" width="116" height="18" rx="6" fill="#EFD844" stroke="#080511" strokeWidth="2.5"/>
          <rect x="127" y="261" width="26" height="12" rx="4" fill="#B36A04" stroke="#080511" strokeWidth="2"/>

          {/* === SHOULDERS === */}
          {/* Left shoulder pad */}
          <rect x="30" y="145" width="50" height="55" rx="14" fill="#EFD844" stroke="#080511" strokeWidth="3.5"/>
          <rect x="38" y="155" width="34" height="35" rx="8" fill="#D89202" stroke="#080511" strokeWidth="2"/>
          {/* Asterisk symbol left */}
          <text x="46" y="180" fontFamily="monospace" fontSize="20" fontWeight="900" fill="#291648" stroke="#080511" strokeWidth="1">✱</text>
          {/* Right shoulder pad */}
          <rect x="200" y="145" width="50" height="55" rx="14" fill="#EFD844" stroke="#080511" strokeWidth="3.5"/>
          <rect x="208" y="155" width="34" height="35" rx="8" fill="#D89202" stroke="#080511" strokeWidth="2"/>
          {/* Asterisk symbol right */}
          <text x="216" y="180" fontFamily="monospace" fontSize="20" fontWeight="900" fill="#291648" stroke="#080511" strokeWidth="1">✱</text>

          {/* === UPPER ARMS === */}
          <rect x="36" y="197" width="36" height="60" rx="10" fill="#79359C" stroke="#080511" strokeWidth="3"/>
          <rect x="208" y="197" width="36" height="60" rx="10" fill="#79359C" stroke="#080511" strokeWidth="3"/>

          {/* === LOWER ARMS / GAUNTLETS === */}
          <rect x="32" y="254" width="44" height="52" rx="10" fill="#43186B" stroke="#080511" strokeWidth="3"/>
          <rect x="204" y="254" width="44" height="52" rx="10" fill="#43186B" stroke="#080511" strokeWidth="3"/>
          {/* Gold trim on gauntlets */}
          <rect x="32" y="267" width="44" height="8" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
          <rect x="204" y="267" width="44" height="8" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
          {/* Knuckle plates */}
          <rect x="36" y="290" width="14" height="10" rx="3" fill="#EFD844" stroke="#080511" strokeWidth="1.5"/>
          <rect x="54" y="290" width="14" height="10" rx="3" fill="#EFD844" stroke="#080511" strokeWidth="1.5"/>
          <rect x="208" y="290" width="14" height="10" rx="3" fill="#EFD844" stroke="#080511" strokeWidth="1.5"/>
          <rect x="226" y="290" width="14" height="10" rx="3" fill="#EFD844" stroke="#080511" strokeWidth="1.5"/>

          {/* === NECK === */}
          <rect x="120" y="132" width="40" height="28" rx="6" fill="#43186B" stroke="#080511" strokeWidth="2.5"/>
          <rect x="128" y="138" width="24" height="16" rx="3" fill="#291648" stroke="#080511" strokeWidth="1.5"/>

          {/* === HEAD === */}
          {/* Head base */}
          <rect x="86" y="52" width="108" height="85" rx="16" fill="#79359C" stroke="#080511" strokeWidth="4"/>
          {/* Face visor area */}
          <rect x="96" y="70" width="88" height="52" rx="10" fill="#291648" stroke="#080511" strokeWidth="2.5"/>
          {/* Eye visor - glowing gold slit */}
          <rect x="103" y="82" width="74" height="18" rx="8" fill="#EFD844" stroke="#080511" strokeWidth="2.5"/>
          <rect x="110" y="85" width="60" height="12" rx="5" fill="#FFFCF3" opacity="0.8"/>
          {/* Eye glow lines */}
          <line x1="130" y1="91" x2="150" y2="91" stroke="#EFD844" strokeWidth="2" opacity="0.6"/>
          <line x1="130" y1="95" x2="145" y2="95" stroke="#EFD844" strokeWidth="1.5" opacity="0.4"/>
          {/* Lower face grille */}
          <rect x="107" y="106" width="66" height="12" rx="5" fill="#43186B" stroke="#080511" strokeWidth="2"/>
          <line x1="115" y1="110" x2="165" y2="110" stroke="#EFD844" strokeWidth="1.5" opacity="0.5"/>
          <line x1="120" y1="114" x2="160" y2="114" stroke="#EFD844" strokeWidth="1" opacity="0.3"/>
          {/* Head side vents */}
          <rect x="88" y="80" width="10" height="28" rx="3" fill="#43186B" stroke="#080511" strokeWidth="2"/>
          <rect x="182" y="80" width="10" height="28" rx="3" fill="#43186B" stroke="#080511" strokeWidth="2"/>

          {/* === CROWN / HORNS === */}
          {/* Center tall horn */}
          <polygon points="140,12 150,54 130,54" fill="#EFD844" stroke="#080511" strokeWidth="3"/>
          {/* Left horn */}
          <polygon points="115,22 123,55 105,55" fill="#EFD844" stroke="#080511" strokeWidth="2.5"/>
          {/* Right horn */}
          <polygon points="165,22 177,55 157,55" fill="#EFD844" stroke="#080511" strokeWidth="2.5"/>
          {/* Small side spikes */}
          <polygon points="95,35 101,55 89,55" fill="#D89202" stroke="#080511" strokeWidth="2"/>
          <polygon points="185,35 197,55 179,55" fill="#D89202" stroke="#080511" strokeWidth="2"/>

          {/* === HASHTAG on chest === */}
          <text x="122" y="248" fontFamily="monospace" fontSize="18" fontWeight="900" fill="#EFD844" stroke="#080511" strokeWidth="1">#</text>

          {/* === LIGHTNING EFFECT in left hand === */}
          <polyline points="38,305 45,320 40,325 52,345 48,350 58,370" fill="none" stroke="#a855c8" strokeWidth="3" strokeLinecap="round" opacity="0.9"/>
          <polyline points="38,305 45,320 40,325 52,345 48,350 58,370" fill="none" stroke="#FFFCF3" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        </g>

        {/* Eye glow animation layer */}
        <rect x="103" y="82" width="74" height="18" rx="8" fill="#EFD844" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite"/>
        </rect>

        {/* Lightning glow */}
        <polyline points="38,305 45,320 40,325 52,345 48,350 58,370" fill="none" stroke="#EFD844" strokeWidth="4" strokeLinecap="round" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur="0.8s" repeatCount="indefinite"/>
        </polyline>
      </svg>

      {/* Platform glow ellipse */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[260px] h-[30px] bg-gold blur-[25px] opacity-35 mix-blend-screen rounded-full pointer-events-none"/>
    </>
  );
});

export default RobotMascot;
