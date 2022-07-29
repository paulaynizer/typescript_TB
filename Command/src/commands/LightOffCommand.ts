import Light from "../receiver/Light";
import ICommand from "./ICommand";

export default class LightOffCommand implements ICommand{
    private _light : Light;

    constructor(light: Light) {
        this._light = light;
    }

    execute() {
        this._light.off();
    }

}