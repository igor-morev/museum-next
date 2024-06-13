import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo/logo-group-small.png';

import './BaseHeader.scss';

export default function BaseHeader({
  logoUrl,
  children,
}: Readonly<{
  logoUrl: string;
  children?: React.ReactNode;
}>) {
  return (
    <div className="base-header">
      <Link href={logoUrl} className="logo">
        <Image src={logo} alt="" />
      </Link>
      {children}
    </div>
  );
}
