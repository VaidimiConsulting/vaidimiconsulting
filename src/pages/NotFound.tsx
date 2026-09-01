import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-20">
      <p className="font-display text-6xl text-primary mb-4">404</p>
      <h1 className="text-xl font-medium text-text-primary mb-2">Page not found</h1>
      <p className="text-text-secondary text-sm mb-8 max-w-sm">The page you're looking for doesn't exist or may have moved.</p>
      <Button to="/">Back to home</Button>
    </section>
  );
}
