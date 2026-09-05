import ServicePageLayout from '@/components/templates/ServicePageLayout';
import { getServiceBySlug } from '@/data/services';

export default function FinancialConsulting() {
  return <ServicePageLayout service={getServiceBySlug('financial-consulting')!} />;
}
