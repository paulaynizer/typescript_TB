import VehicleBuilder from "./buiders/VehicleBuilder";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder :VehicleBuilder = new VehicleBuilder();
const director : Director = new Director(builder);

director.constructSedanCar();
let sedan : Vehicle = builder.getVehicle();
console.log("Criando um veículo do tipo " +sedan.vehicleType);
console.log("assentos " +sedan.seats);
console.log("rodas " +sedan._wheelsTotal);

builder.reset();

director.constructPickUp();
let pickup : Vehicle = builder.getVehicle();
console.log("Criando um veículo do tipo " +pickup.vehicleType);
console.log("assentos " +pickup.seats);
console.log("rodas " +pickup._wheelsTotal);
