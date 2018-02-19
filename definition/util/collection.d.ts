export function isCollection( c: any ): void;

export interface Iterator<T> {
  next(): any;

  hasNext(): boolean;

  remove(): void;
}

// Just for 'iterator' function
export interface ObjectIterator<T> extends Iterator<T> {
  next(): T;
}

// Just for 'of' operation
export interface SymbolIterator<T> extends Iterator<T> {
  next(): IteratorResult<T>;
}

export interface Iterable<T> {
  [ Symbol.iterator ](): SymbolIterator<T>;

  forEach( callbackFn: ( elem: T, index: number ) => boolean ): void;
}

export interface Collection<T> extends Iterable<T> {
  add( e: T, index?: number ): boolean;

  addAll( c: Collection<T>, index?: number ): void;

  iterator(): ObjectIterator<T>;

  clear(): void;

  contains( o: any ): boolean;

  containsAll( c: Collection<any> ): boolean;

  isEmpty(): boolean;

  remove( o: any ): any;

  removeAll( c: Collection<any> ): boolean;

  size(): number;

  toArray(): T[];
}

export interface List<T> extends Collection<T> {
  get( index: number ): T;

  indexOf( o: any ): number;

  lastIndexOf( o: any ): number;

  remove( index: number ): boolean;

  remove( o: any ): boolean;

  set( index: number, element: T ): T;

  subList( fromIndex: number, toIndex: number ): List<T>;
}

export interface Queue<T> extends Collection<T> {
  add( e: T ): boolean;

  element(): T;

  offer( e: T ): boolean;

  peek(): T;

  poll(): T;

  remove( o?: any ): T | boolean;
}

export interface Deque<T> extends Queue<T> {
  addFirst( e: T ): void;

  addLast( e: T ): void;

  getFirst(): T;

  getLast(): T;

  offerFirst( e: T ): boolean;

  offerLast( e: T ): boolean;

  peekFirst(): T;

  peekLast(): T;

  pollFirst(): T;

  pollLast(): T;

  pop(): T;

  push( e: T ): void;

  removeFirst(): T;

  removeLast(): T;
}

export abstract class AbstractCollection<T> implements Collection<T> {
  public add( e: T, index?: number ): boolean;

  public addAll( c: Collection<T>, index?: number ): void;

  public abstract iterator(): ObjectIterator<T>;

  public clear(): void;

  public contains( o: any ): boolean;

  public containsAll( c: Collection<any> ): boolean;

  public isEmpty(): boolean;

  public remove( o: any ): any;

  public removeAll( c: Collection<any> ): boolean;

  public abstract size(): number;

  public toArray(): T[];

  public [ Symbol.iterator ](): Iterator<T>;

  public forEach( callbackFn: ( elem: T, index: number ) => boolean ): void;

  public toString(): string;
}