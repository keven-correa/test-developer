import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesGateway } from './vehicles.gateway';
import { VehiclesController } from './vehicles.controller';

@Module({
  providers: [VehiclesGateway, VehiclesService],
  controllers: [VehiclesController]
})
export class VehiclesModule {}
