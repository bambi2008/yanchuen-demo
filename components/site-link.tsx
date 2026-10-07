import type { AnchorHTMLAttributes, ReactNode } from "react";

type SiteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

/**
 * Vinext's client-side Next Link runtime currently fails in this deployment.
 * A native anchor keeps every internal route and language switch reliable.
 */
export default function SiteLink({ href, children, ...props }: SiteLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
