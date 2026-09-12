import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const PowerIcon: React.FC<IconProps> = ({ size = 24, color = "#10B981" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill={color} fillOpacity="0.25" />
  </svg>
);

export const AirFlowIcon: React.FC<IconProps> = ({ size = 24, color = "#38BDF8" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
  </svg>
);

export const ShieldIcon: React.FC<IconProps> = ({ size = 24, color = "#F59E0B" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill={color} fillOpacity="0.2" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const TurbineIcon: React.FC<IconProps> = ({ size = 24, color = "#F97316" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" fill={color} />
    <path d="M12 2a10 10 0 0 1 7.07 2.93L12 12" />
    <path d="M22 12a10 10 0 0 1-2.93 7.07L12 12" />
    <path d="M12 22a10 10 0 0 1-7.07-2.93L12 12" />
    <path d="M2 12a10 10 0 0 1 2.93-7.07L12 12" />
  </svg>
);

export const GearIcon: React.FC<IconProps> = ({ size = 24, color = "#94A3B8" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" fill={color} fillOpacity="0.25" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const BatteryIcon: React.FC<IconProps> = ({ size = 24, color = "#F59E0B" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="16" height="10" rx="2" ry="2" fill={color} fillOpacity="0.2" />
    <line x1="22" y1="11" x2="22" y2="13" />
    <polygon points="10 9 7 13 11 13 8 16 13 11 9 11 10 9" fill={color} />
  </svg>
);

export const FuelPumpIcon: React.FC<IconProps> = ({ size = 24, color = "#A855F7" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 22V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v18" />
    <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L19 6" />
    <path d="M3 9h10" />
    <path d="M7 6v1" />
  </svg>
);

export const AvionicsIcon: React.FC<IconProps> = ({ size = 24, color = "#38BDF8" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" fill={color} fillOpacity="0.2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <circle cx="12" cy="10" r="3" />
    <line x1="6" y1="10" x2="9" y2="10" />
    <line x1="15" y1="10" x2="18" y2="10" />
    <line x1="12" y1="4" x2="12" y2="7" />
  </svg>
);

export const PlaneIcon: React.FC<IconProps> = ({ size = 24, color = "#38BDF8" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.5.1-1.8.7l-.5 1 5.5 3.5-3 3-2.5-.5-.8.5 2 2 2 2 .5-.8-.5-2.5 3-3 3.5 5.5 1-.5c.6-.3.9-1 .7-1.8z" fill={color} fillOpacity="0.2" />
  </svg>
);

export const SnowflakeIcon: React.FC<IconProps> = ({ size = 24, color = "#38BDF8" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="12" y1="2" x2="9" y2="5" />
    <line x1="12" y1="2" x2="15" y2="5" />
    <line x1="12" y1="22" x2="9" y2="19" />
    <line x1="12" y1="22" x2="15" y2="19" />
    <line x1="20" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="17" y2="9" />
    <line x1="20" y1="12" x2="17" y2="15" />
    <line x1="4" y1="12" x2="7" y2="9" />
    <line x1="4" y1="12" x2="7" y2="15" />
  </svg>
);

export const FlameIcon: React.FC<IconProps> = ({ size = 24, color = "#EF4444" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z" fill={color} fillOpacity="0.25" />
  </svg>
);
