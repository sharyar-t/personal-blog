import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-svh">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-neutral-600 dark:text-neutral-400">Oops! The page you are looking for does not exist.</p>
      <Button asChild variant="outline">
        <Link href="/">
          Go back to Home
        </Link>
      </Button>
    </div>
  );
}
