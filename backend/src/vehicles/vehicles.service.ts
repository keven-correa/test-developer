import { Injectable } from '@nestjs/common';
import { notificationsDocument, vehiclesData } from './data/data';


@Injectable()
export class VehiclesService {
 
  async findAll() {
    return vehiclesData
  }

  async findExcedeedSpeed(speedQuery: number) {
    const limit = speedQuery; 
    console.log(speedQuery)
    const vehicleRes = vehiclesData.find((x) => x.speed > limit);
    console.log("Notification", notificationsDocument)
    notificationsDocument.push(vehicleRes)
    console.log(notificationsDocument)
    return vehicleRes;
    
    
    
  }

  async findNotifications() {
    console.log("from method", notificationsDocument)
    
  }

  async create(body: any) {
    
    const vehicle: any = vehiclesData.push(body)
    return vehicle

  }
}
