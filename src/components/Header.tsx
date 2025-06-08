'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { ModeToggle } from './ModeToggle';
import { MotionButton } from './ui/button';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';

interface MenuItem {
  href: string;
  label: string;
}

const menuItems: MenuItem[] = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/newsletter", label: "Newsletter" },
];

const menuLinkClassName = "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-0";
const menuLinkActiveClassName = "font-medium text-neutral-900 dark:text-neutral-0";

const DesktopMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="sm:flex items-center gap-6 hidden">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(menuLinkClassName, pathname === item.href ? menuLinkActiveClassName : "")}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

const MobileMenu = () => {
  const pathname = usePathname();

  const containerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const itemAnimation = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.nav
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      transition={{
        type: 'spring',
        delayChildren: 0.5,
        staggerChildren: 0.2,
      }}
      exit={{ opacity: 0, y: 50 }}
      className="sm:hidden flex flex-col absolute top-16 left-0 right-0 z-50 bg-neutral-0 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-1.5"
    >
      {menuItems.map((item) => (
        <motion.div variants={itemAnimation} key={item.href} className="border-b border-neutral-200 dark:border-neutral-700 last:border-b-0 py-1.5">
          <Link
            href={item.href}
            className={cn(menuLinkClassName, pathname === item.href ? menuLinkActiveClassName : "", "block")}
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
};

const MobileMenuButton = ({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) => {
  return (
    <MotionButton
      variant={isOpen ? "default" : "ghost"}
      size="icon"
      className="sm:hidden"
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
    >
      {isOpen ? <XIcon /> : <MenuIcon />}
    </MotionButton>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      <header className="bg-neutral-0 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-1.5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center justify-center">
            <Image src="/me.PNG" alt="me" width={40} height={40} priority={true} className="rounded-md" />
          </Link>
          <div className="flex items-center gap-1.5 sm:gap-5">
            <DesktopMenu />
            <MobileMenuButton isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            <ModeToggle />
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
