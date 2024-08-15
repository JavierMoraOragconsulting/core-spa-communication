import { BehaviorSubject } from "rxjs";

export abstract class BaseService {
  abstract $query: BehaviorSubject<string>;
  abstract setQuery(query: string): void;
  // abstract addTodo(todo: string): void;
  // abstract removeTodo(index: number): void;
}
