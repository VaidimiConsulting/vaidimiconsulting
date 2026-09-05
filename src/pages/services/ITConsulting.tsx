import ServicePageLayout from '@/components/templates/ServicePageLayout';
import { getServiceBySlug } from '@/data/services';

export default function ITConsulting() {
  return <ServicePageLayout service={getServiceBySlug('it-consulting')!} />;
}
