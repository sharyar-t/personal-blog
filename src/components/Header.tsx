import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from './ModeToggle';

const Header = () => {
  return (
    <header className="bg-neutral-0 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-1.5">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/me.png" alt="me" width={40} height={40} priority={true} className="rounded-md" />
        </Link>
        <div className="flex items-center gap-5">
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-neutral-600 dark:text-neutral-400">Home</Link>
            <Link href="/blog" className="text-neutral-600 dark:text-neutral-400">Blog</Link>
            <Link href="/about" className="text-neutral-600 dark:text-neutral-400">About</Link>
            <Link href="/newsletter" className="text-neutral-600 dark:text-neutral-400">Newsletter</Link>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
