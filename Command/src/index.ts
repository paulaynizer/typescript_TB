import Light from "./receiver/Light";
import LightOnCommand from "./commands/LightOnCommand";
import LightOffCommand from "./commands/LightOffCommand";
import Switch from "./invokers/Switch";

const luz = new Light();
const acender = new LightOnCommand(luz);
const apagar = new LightOffCommand(luz);
const interruptor =  new Switch(acender,apagar);


interruptor.onSwitch();
interruptor.offSwitch();