import ServicePageLayout from '@/components/templates/ServicePageLayout';
import { getServiceBySlug } from '@/data/services';

export default function EventManagement() {
  return <ServicePageLayout service={getServiceBySlug('event-management')!} />;
}
