import { ObjectIterator, Collection, AbstractCollection, List, Deque } from "./collection";


export abstract class AbstractList<T> extends AbstractCollection<T> implements List<T> {
  protected checkForRange( index: number ): void;

  public abstract get( index: number ): T;

  public indexOf( o: any ): number;

  public abstract lastIndexOf( o: any ): number;

  public remove( indexOrObject: number | any ): boolean | any;

  protected removeByIndex( index: number ): boolean;

  public abstract set( index: number, element: T ): T;

  public subList( fromIndex: number, toIndex: number ): List<T>;
}

export class ArrayList<T> extends AbstractList<T> implements List<T> {
  private elements: T[];

  public constructor( c?: Collection<T> );

  public get( index: number ): T;

  public indexOf( o: any ): number;

  public lastIndexOf( o: any ): number;

  public set( index: number, element: T ): T;

  public add( e: T, index?: number ): boolean;

  public iterator(): ObjectIterator<T>;

  public contains( o: any ): boolean;

  public isEmpty(): boolean;

  public size(): number;

  public remove( indexOrObject: any ): boolean;

  public clear(): void;
}

export class ArrayDeque<T> extends AbstractCollection<T> implements Deque<T> {
  private capacity: number;
  private head: number;
  private tail: number;

  private border: boolean;
  private full: boolean;

  private elements: T[];

  public constructor( initCapacity?: number, border?: boolean );

  private doubleCapacity();

  public add( e: T, index?: number ): boolean;

  public contains( o: any ): boolean ;

  public addFirst( e: T ): void ;

  public addLast( e: T ): void ;

  public offerFirst( e: T ): boolean ;

  public offerLast( e: T ): boolean ;

  public getFirst(): T;

  public getLast(): T;

  public peekFirst(): T;

  public peekLast(): T;

  public pollFirst(): T;

  public pollLast(): T;

  public pop(): T;

  public push( e: T ): void;

  public removeFirst(): T;

  public removeLast(): T;

  public element(): T;

  public offer( e: T ): boolean;

  public peek(): T;

  public poll(): T;

  public remove( o?: any ): T | boolean;

  public clear(): void;

  private delete( index: number ): boolean;

  public iterator(): ObjectIterator<T> ;

  public isEmpty(): boolean;

  public size(): number;
}

declare interface Node<T> {
  val: T;
  next: Node<T>;
  prev: Node<T>;
}

export class LinkedList<T> extends AbstractList<T> implements Deque<T> {
  private static Node;

  private head: Node<T>;
  private tail: Node<T>;
  private length: number;

  public constructor( c?: Collection<T> );

  public get( index: number ): T;

  public lastIndexOf( o: any ): number;

  public set( index: number, element: T ): T;

  public add( e: T, index?: number ): boolean;

  private removeNode( n: Node<T> ): void;

  public iterator(): ObjectIterator<T>;

  public size(): number;

  public addFirst( e: T ): void;

  public addLast( e: T ): void;

  public getFirst(): T;

  public getLast(): T;

  public offerFirst( e: T ): boolean;

  public offerLast( e: T ): boolean;

  public peekFirst(): T;

  public peekLast(): T;

  public pollFirst(): T;

  public pollLast(): T;

  public pop(): T;

  public push( e: T ): void;

  public removeFirst(): T;

  public removeLast(): T;

  public element(): T;

  public offer( e: T ): boolean;

  public peek(): T;

  public poll(): T;

  public remove( o?: any ): T | boolean;

  public clear(): void;
}