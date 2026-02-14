// components/icon.tsx
import { LucideProps } from "lucide-react";
import dynamic from "next/dynamic";

export type Icon = React.ForwardRefExoticComponent<
  LucideProps & React.RefAttributes<SVGSVGElement>
>;

export const Icons = {
  // Keep only ONE logo definition
  logo: ({ className, ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 ${className || ""}`}
      {...props}
    >
      {/* Simple Spectrum/Prism Logo */}
      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
      <path d="M2 17L12 22L22 17" />
      <path d="M2 12L12 17L22 12" />
    </svg>
  ),

  // If you want a different version, give it a DIFFERENT name
  logoAlt: ({ className, ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 ${className || ""}`}
      {...props}
    >
      {/* Different version here */}
    </svg>
  ),
};
