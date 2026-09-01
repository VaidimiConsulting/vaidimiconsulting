import PageBanner from '@/components/ui/PageBanner';

export default function Terms() {
  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms governing use of the Vaidimi Consulting website and services."
        accent="accent"
        crumbs={[{ label: 'Terms of Service' }]}
      />
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 prose prose-sm text-text-secondary space-y-4">
          {/* Replace this placeholder with your real terms of service text */}
          <p>This is placeholder text. Replace this page with your actual terms of service before launch.</p>
          <p>Last updated: August 2026.</p>
        </div>
      </section>
    </>
  );
}
