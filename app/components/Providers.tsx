'use client';

import React from 'react'
import { SessionProvider } from 'next-auth/react';

interface Props {
    children: React.ReactNode;
}

const Providers = (props: Props) => {
  return (
    <SessionProvider refetchOnWindowFocus={false}>
        {props.children}
    </SessionProvider>
  )
}

export default Providers