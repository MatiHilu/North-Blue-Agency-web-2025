import ServicesPage, {
  createServicesMetadata,
  createServicesSchema,
} from "../services/page";

export const metadata = createServicesMetadata("/services");
export const servicesSchema = createServicesSchema("/services");

export default ServicesPage;
