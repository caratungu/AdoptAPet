import { ServiceModel } from "../config/data-source"
import IServiceDto from "../dto/ServiceDto";
import { Service } from "../entities/Service";

// GET /services obtener todos los servicios
export const getServicesService = async (): Promise<Service[]> => {
    const allServices: Service[] = await ServiceModel.find();
    return allServices;
}

// GET /services/:id Obtener un servicio por id
export const getServiceByIdService = async (id: number): Promise<Service | null> => {
    const serviceById: Service | null= await ServiceModel.findOneBy({
        id,
    })
    if (serviceById) {
        return serviceById;
    } else {
        throw Error();
    }
}

// POST /services/create Crear un nuevo servicio
export const createServiceService = async (serviceData: IServiceDto): Promise<void> => {
    if (serviceData.description && serviceData.name) {
      const newService: Service = await ServiceModel.create(serviceData);
      newService.is_active = true;
      await ServiceModel.save(newService);
    } else {
      throw Error ()
    }
}

// PUT /services/isactive/:id Cambia el estado activo-inactivo del servicio
export const changeStatusServiceService = async (id: number, serviceData: IServiceDto): Promise<void> => {
    const serviceToUpdate: Service | null = await ServiceModel.findOneBy({
        id,
    })
    if (serviceToUpdate) {
        const status: boolean = serviceToUpdate.is_active;
        serviceToUpdate.is_active = !status;
        ServiceModel.merge(serviceToUpdate, serviceData)
        await ServiceModel.save(serviceToUpdate);
    } else {
        throw Error();
    }
}