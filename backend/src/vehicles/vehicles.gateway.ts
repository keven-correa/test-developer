import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { WebSocketServer } from '@nestjs/websockets/decorators';
import { Server } from 'socket.io';
import { Body, Post } from '@nestjs/common';
import { vehiclesData } from './data/data';

@WebSocketGateway()
export class VehiclesGateway {
  // constructor(private readonly vehiclesService: VehiclesService) {}
  @WebSocketServer() server: Server;
    @SubscribeMessage('track')
    create(@MessageBody() data: any) {
    // const { speed } = data;
    const limit = 10; 
    const vehicle = vehiclesData.find((x) => x.speed > limit);
    if(vehicle && vehicle.speed > limit){
      this.server.emit('Limite de velocidad excedido!', {
        ...vehicle
      });
    }
  }

  // @SubscribeMessage('findAllVehicles')
  // findAll() {
  //   return this.vehiclesService.findAll();
  // }

  // @SubscribeMessage('findOneVehicle')
  // findOne(@MessageBody() id: number) {
  //   return this.vehiclesService.findOne(id);
  // }

  // @SubscribeMessage('updateVehicle')
  // update(@MessageBody() updateVehicleDto: UpdateVehicleDto) {
  //   return this.vehiclesService.update(updateVehicleDto.id, updateVehicleDto);
  // }

  // @SubscribeMessage('removeVehicle')
  // remove(@MessageBody() id: number) {
  //   return this.vehiclesService.remove(id);
  // }
}
