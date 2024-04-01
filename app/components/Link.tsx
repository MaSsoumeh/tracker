import { Link as RadixLink } from "@radix-ui/themes";
import NextLink from "next/link";

interface Props {
  children: React.ReactNode | string;
  href: string;
}
const Link = ({ children, href }: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default Link;
