// BugByte Logo Component - Dark Theme
const BugByteLogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Bug body */}
    <ellipse cx="50" cy="65" rx="28" ry="32" fill="currentColor" />
    {/* Bug head */}
    <circle cx="50" cy="30" r="20" fill="currentColor" />
    {/* Left antenna */}
    <g stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round">
      <path d="M 38 15 Q 28 8 20 5" />
      <circle cx="20" cy="5" r="3" fill="currentColor" />
    </g>
    {/* Right antenna */}
    <g stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round">
      <path d="M 62 15 Q 72 8 80 5" />
      <circle cx="80" cy="5" r="3" fill="currentColor" />
    </g>
    {/* Eye outer ring */}
    <circle cx="50" cy="30" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
    {/* Eye center - orange */}
    <circle cx="50" cy="30" r="6" fill="#ff6b35" />
  </svg>
);

export default BugByteLogo;
