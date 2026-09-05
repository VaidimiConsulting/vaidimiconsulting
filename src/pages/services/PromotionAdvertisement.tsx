import ServicePageLayout from '@/components/templates/ServicePageLayout';
import { getServiceBySlug } from '@/data/services';

export default function PromotionAdvertisement() {
  return <ServicePageLayout service={getServiceBySlug('promotion-advertisement')!} />;
}
