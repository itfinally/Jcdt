import { ObjectIterator, Collection, AbstractCollection } from "./collection";

export interface Entry<K, V> {
  key: K;
  value: V;
  hash: number;
  next: Entry<K, V>;
}

export interface Map<K, V> {
  clear(): void;

  containsKey( key: any ): boolean;

  containsValue( value: any ): boolean;

  entrySet(): Set<Entry<K, V>>;

  get( key: any ): V;

  getOrDefault( key: any, defaultVal: V ): V;

  isEmpty(): boolean;

  keySet(): Set<K>;

  put( key: K, value: V ): V;

  putAll( map: Map<K, V> ): void;

  remove( key: any ): V;

  size(): number;

  values(): Collection<V>;
}

export interface Set<T>extends Collection<T> {
  add( e: T ): boolean;

  addAll( c: Collection<T> ): boolean;

  remove( o: any ): boolean;
}

export abstract class AbstractMap<K, V> implements Map<K, V> {
  public size(): number;

  public clear(): void;

  public containsKey( key: any ): boolean;

  public containsValue( value: any ): boolean;

  public abstract entrySet(): Set<Entry<K, V>>;

  public get( key: any ): V;

  public getOrDefault( key: any, defaultVal: V ): V;

  public isEmpty(): boolean;

  public keySet(): Set<K>;

  public abstract put( key: K, value: V ): V;

  public putAll( map: Map<K, V> ): void;

  public remove( key: any ): V;

  public values(): Collection<V>;

  public toString(): string;
}

export abstract class AbstractSet<T> extends AbstractCollection<T> implements Set<T> {
  public abstract iterator(): ObjectIterator<T>;

  public abstract size(): number;

  public add( e: T ): boolean;

  public addAll( c: Collection<T> ): boolean;

  public remove( o: any ): boolean;
}

export class HashMap<K, V> extends AbstractMap<K, V> implements Map<K, V> {
  private static Entry;

  private elements: Entry<K, V>[];
  private loadFactor: number;
  private threshold: number;
  private capacity: number;
  private length: number;

  public constructor( initCapacity?: number, loadFactor?: number );

  private static hash( key: any ): number;

  private resize(): void;

  private reload( capacity: number ): void;

  private calculateSize( addSize: number ): number;

  private getIterator(): ObjectIterator<Entry<K, V>>;

  public entrySet(): Set<Entry<K, V>>;

  public put( key: K, value: V ): V;

  public putAll( map: Map<K, V> ): void;

  public remove( key: any ): V;

  public containsKey( key: any ): boolean;

  public containsValue( value: any ): boolean;

  public size(): number;

  public get( key: any ): V;

  public values(): Collection<V>;

  public keySet(): Set<K>;

  public clear(): void;

  public isEmpty(): boolean;
}

export class HashSet<T> extends AbstractSet<T> implements Set<T> {
  private map: Map<T, null>;

  public iterator(): ObjectIterator<T>;

  public size(): number;

  public add( e: T ): boolean;

  public remove( o: any ): boolean;

  public contains( o: any ): boolean;

  public isEmpty(): boolean;

  public clear(): void;
}