import { ReactNode } from "react"
import { Link } from '@chakra-ui/react';

type NavlinkProps = {
    children: ReactNode;
}

export function NavLink({ children }: NavlinkProps ) {
    return (
        <Link
            color="whiteAlpha.800"
            fontWeight="500"

            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: 'blue.500',
                color: 'green.500'
            }}
            href={'#'}>
            {children}
      </Link>
    )
}