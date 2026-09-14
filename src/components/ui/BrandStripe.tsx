/**
 * BrandStripe — 4px multicolor horizontal bar using the 5 logo pen colors.
 * Creates the signature "bookend frame" accent across navbar and footer.
 */
export default function BrandStripe({ className = '' }: { className?: string }) {
  return (
    <div className={`flex w-full h-1 ${className}`} aria-hidden="true">
      <div className="flex-1 bg-[#7FC4D9]" />
      <div className="flex-1 bg-[#E8C84A]" />
      <div className="flex-1 bg-[#E06B6B]" />
      <div className="flex-1 bg-[#8FBF6B]" />
      <div className="flex-1 bg-[#E8A93A]" />
    </div>
  );
}
