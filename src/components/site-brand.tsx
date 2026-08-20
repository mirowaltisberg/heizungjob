import { cn } from "@/lib/utils";

interface SiteBrandProps {
  className?: string;
  inverse?: boolean;
}

/** A compact heating-circuit lockup drawn in SVG; no external brand asset. */
export function SiteBrand({ className, inverse = false }: SiteBrandProps) {
  return (
    <span
      className={cn("site-brand", inverse && "site-brand--inverse", className)}
      role="img"
      aria-label="heizungjob.ch"
    >
      <svg
        className="site-brand__mark"
        viewBox="0 0 48 48"
        aria-hidden="true"
        focusable="false"
      >
        <path className="site-brand__circuit" d="M5 14h7v20H5M43 14h-7v20h7" />
        <path className="site-brand__radiator" d="M14 10v28M20.5 10v28M27 10v28M33.5 10v28" />
        <circle className="site-brand__node" cx="24" cy="24" r="3.5" />
      </svg>
      <span className="site-brand__type">
        <strong>heizung</strong>
        <span>job.ch</span>
      </span>
    </span>
  );
}
