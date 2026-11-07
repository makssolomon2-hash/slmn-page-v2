type ArrowIconProps = {
  diagonal?: boolean;
  className?: string;
};

export function ArrowIcon({ diagonal = false, className = "" }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={`size-[17px] shrink-0 fill-none stroke-current stroke-[1.6] ${className}`}
      viewBox="0 0 20 20"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export function SocialIcon({ kind }: { kind: "github" | "discord" }) {
  return kind === "github" ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.29-.5-1.43.11-2.98 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.43 3.05-1.14 3.05-1.14.61 1.55.23 2.69.11 2.98.72.78 1.15 1.78 1.15 3.01 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.73 5.17a18.2 18.2 0 0 0-4.5-1.39l-.55 1.12a16.9 16.9 0 0 0-5.36 0l-.55-1.12a18.2 18.2 0 0 0-4.5 1.39C1.42 9.36.65 13.44 1.03 17.47a18.3 18.3 0 0 0 5.52 2.79l1.19-1.93a11.9 11.9 0 0 1-1.87-.9l.46-.36c3.61 1.67 7.52 1.67 11.09 0l.47.36c-.6.36-1.23.66-1.88.9l1.19 1.93a18.2 18.2 0 0 0 5.52-2.79c.45-4.68-.77-8.72-3-12.3ZM8.39 15.2c-1.08 0-1.97-.99-1.97-2.2s.87-2.21 1.97-2.21 1.98.99 1.97 2.2c0 1.22-.87 2.21-1.97 2.21Zm7.22 0c-1.08 0-1.97-.99-1.97-2.2s.87-2.21 1.97-2.21 1.98.99 1.97 2.2c0 1.22-.87 2.21-1.97 2.21Z" />
    </svg>
  );
}