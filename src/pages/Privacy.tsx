import PageBanner from '@/components/ui/PageBanner';

export default function Privacy() {
  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Vaidimi Consulting collects, uses, and protects your information."
        accent="accent"
        crumbs={[{ label: 'Privacy Policy' }]}
      />
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 prose prose-sm text-text-secondary space-y-4">
          {/* Replace this placeholder with your real privacy policy text */}
          <p>This is placeholder text. Replace this page with your actual privacy policy before launch — covering what data you collect (contact form submissions, newsletter emails, analytics), how it's stored, who it's shared with, and how users can request deletion.</p>
          <p>Last updated: August 2026.</p>
        </div>
      </section>
    </>
  );
}
