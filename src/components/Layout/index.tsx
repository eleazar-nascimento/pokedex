import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box>
      {children}
    </Box>
  );
}