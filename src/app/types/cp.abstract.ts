import { Subject } from "rxjs";

export abstract class FlowAbstractComponent {

  public resolve : Subject<any> = new Subject();

  abstract initial(data?: any);
}
