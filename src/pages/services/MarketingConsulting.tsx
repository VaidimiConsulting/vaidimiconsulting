import ServicePageLayout from '@/components/templates/ServicePageLayout';
import { getServiceBySlug } from '@/data/services';

export default function MarketingConsulting() {
  return <ServicePageLayout service={getServiceBySlug('marketing-consulting')!} />;
}
