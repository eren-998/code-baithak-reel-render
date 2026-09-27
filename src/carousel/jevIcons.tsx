import React from "react";

export const RobotDoodle: React.FC<{ size?: number }> = ({ size = 38 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Antenna */}
    <line x1="24" y1="8" x2="24" y2="14" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="24" cy="6" r="3" fill="#1F2937" />
    {/* Head */}
    <rect x="10" y="14" width="28" height="24" rx="6" stroke="#1F2937" strokeWidth="2.5" fill="#FFFFFF" />
    {/* Eyes */}
    <circle cx="18" cy="24" r="3" fill="#1F2937" />
    <circle cx="30" cy="24" r="3" fill="#1F2937" />
    {/* Smile */}
    <path d="M18 31 Q 24 36 30 31" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const LightningDoodle: React.FC<{ size?: number }> = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path
      d="M17 3L7 17H16L15 29L25 15H16L17 3Z"
      fill="#F59E0B"
      stroke="#1F2937"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const TalkingHeadDoodle: React.FC<{ size?: number }> = ({ size = 42 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path
      d="M22 10C15.3726 10 10 15.3726 10 22C10 26.6438 12.6374 30.6726 16.5 32.6641V38L22.25 35.8359C24.1165 36.5684 26.1557 37 28.3 37C34.9274 37 40.3 31.6274 40.3 25C40.3 18.3726 34.9274 10 28.3 10H22Z"
      fill="#2563EB"
    />
    <path d="M38 18L44 14M38 24L45 24M38 30L44 34" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const FireDoodle: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#EA580C">
    <path d="M12 23c4.97 0 9-4.03 9-9 0-4.04-3.13-7.37-5.5-9.5-.72-.64-1.83-.17-1.89.78-.17 2.45-1.57 4.54-3.61 5.48-.48.22-1.02-.12-.99-.65.13-2.07-.63-4.14-2.22-5.59-.69-.64-1.79-.17-1.82.77C4.69 9.38 4 12.11 4 14c0 4.97 4.03 9 8 9z" />
  </svg>
);
