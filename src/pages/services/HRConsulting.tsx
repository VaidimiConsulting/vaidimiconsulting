import ServicePageLayout from '@/components/templates/ServicePageLayout';
import { getServiceBySlug } from '@/data/services';

export default function HRConsulting() {
  return <ServicePageLayout service={getServiceBySlug('hr-consulting')!} />;
}
