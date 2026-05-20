import { forwardRef, type AnchorHTMLAttributes } from "react";
import { Link, NavLink, type LinkProps, type NavLinkProps } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

type LinkBaseProps = Omit<LinkProps, "to"> & { to: string };
type NavLinkBaseProps = Omit<NavLinkProps, "to"> & { to: string };

/** <Link> wrapper that auto-prefixes /ar when the user is in Arabic mode. */
export const LocalizedLink = forwardRef<HTMLAnchorElement, LinkBaseProps>(
  function LocalizedLink({ to, ...rest }, ref) {
    const { locHref } = useLanguage();
    return <Link ref={ref} to={locHref(to)} {...rest} />;
  },
);

/** <NavLink> wrapper with the same auto-prefix behaviour. */
export const LocalizedNavLink = forwardRef<HTMLAnchorElement, NavLinkBaseProps>(
  function LocalizedNavLink({ to, ...rest }, ref) {
    const { locHref } = useLanguage();
    return <NavLink ref={ref} to={locHref(to)} {...rest} />;
  },
);

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

/** Plain <a> hash/external link — no prefix, here for naming symmetry. */
export function ExtLink(props: AnchorProps) {
  return <a {...props} />;
}
