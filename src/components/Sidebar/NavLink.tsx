import {
  Icon,
  Link,
  Text,
  LinkProps as ChackraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";

interface Props extends ChackraLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: Props) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
