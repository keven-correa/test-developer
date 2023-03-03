import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { vehiclesData } from "./data/data";
import { VehiclesService } from "./vehicles.service";
@Controller('vehicle')
export class VehiclesController{
    constructor(private readonly vehicleService: VehiclesService){}
    @Get()
     findAll(){
        return  this.vehicleService.findAll();
    }

    @Get(':speed')
    excedeedLimit(@Param('speed') speed: number){
        return this.vehicleService.findExcedeedSpeed(speed);
    }

    @Get('/vehicles-notifications')
    getNotifications(){
        return this.vehicleService.findNotifications();
    }

    @Post()
    addPayload(@Body() body: any){
        return this.vehicleService.create(body)
    }
}