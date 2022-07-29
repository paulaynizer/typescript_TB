import ICommand from "../commands/ICommand";

export default class Switch{
  private onCommand: ICommand;
  private offCommand: ICommand;

  constructor(onCommand : ICommand, offCommand :ICommand) {
    this.onCommand = onCommand;
    this.offCommand = offCommand;
  }

  onSwitch() {
    this.onCommand.execute();
  }

  offSwitch() {
    this.offCommand.execute();
  }
}