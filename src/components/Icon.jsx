const paths = {
  monitor: "M3 4h18v12H3zM8 20h8M12 16v4",
  layers: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5",
  server: "M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01",
  lock: "M5 11h14v10H5zM8 11V7a4 4 0 018 0v4",
  bot: "M5 8h14v11H5zM12 8V4M9 13h.01M15 13h.01M9 16h6M2 13v3M22 13v3",
  cloud: "M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18z",
  dashboard: "M3 3h8v10H3zM13 3h8v6h-8zM13 11h8v10h-8zM3 15h8v6H3z",
  rocket: "M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M14 4c3-1.500 6-1 6-1s.5 3-1 6l-6 6-4-4zM9 12l-4-1 2-3 4 0M12 15l1 4 3-2 0-4",
  sun: "M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
  moon: "M21 13A9 9 0 1111 3a7 7 0 0010 10z",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "M6 6l12 12M18 6L6 18",
  mail: "M3 5h18v14H3zM3 7l9 7 9-7",
  download: "M12 3v12M7 10l5 5 5-5M4 20h16",
  arrow: "M5 12h14M13 6l6 6-6 6",
  external: "M14 4h6v6M20 4l-9 9M18 14v6H4V6h6",
  check: "M5 12l5 5L20 7",
  prev: "M15 5l-7 7 7 7",
  next: "M9 5l7 7-7 7",
  github: "M9 19c-4 1.500-4-2-6-2m12 4v-3.500c0-1 .1-1.400-.5-2 2.800-.3 5.500-1.400 5.500-6a4.600 4.600 0 00-1.300-3.200 4.200 4.200 0 00-.1-3.200s-1.100-.3-3.500 1.300a12 12 0 00-6.200 0C6.500 2.800 5.400 3.100 5.400 3.100a4.200 4.200 0 00-.1 3.200A4.600 4.600 0 004 9.500c0 4.600 2.700 5.700 5.500 6-.6.600-.6 1.200-.5 2V21",
  linkedin: "M4 9h4v12H4zM6 3a2 2 0 110 4 2 2 0 010-4zM10 9h4v2c.8-1.300 2.200-2.200 4-2.200 3 0 4 2 4 5V21h-4v-6c0-1.500-.5-2.500-2-2.500S14 13.500 14 15v6h-4z",
  whatsapp: "M3 21l1.700-5A9 9 0 118 19.400zM9 9c0 3 3 6 6 6l1.500-1.500-2-1-1 .7c-1-.4-2-1.400-2.400-2.400l.7-1-1-2z",
  image: "M3 4h18v16H3zM8 10a1.500 1.500 0 100-3 1.500 1.500 0 000 3zM21 16l-5-5-8 9",
};

export default function Icon({ name, size = 22, className = "" }) {
  return (
    <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={paths[name] || paths.check} />
    </svg>
  );
}
