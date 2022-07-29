export default class Light{
    state: boolean = false;

    on() {
        this.state = true;
        console.log("Luz ligada");
    }

    off() {
        this.state = false;
        console.log("Luz desligada");
    }
}