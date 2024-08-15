import { BehaviorSubject } from "rxjs";
import { BaseService } from "./base.service";
export const BaseServiceImpl: BaseService = Object.freeze({
  $query: new BehaviorSubject<string>(""),
  setQuery(query: string) {
    this.$query.next(query);
  },
});
