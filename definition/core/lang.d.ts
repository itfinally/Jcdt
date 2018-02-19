export class CoreUtils {
  private constructor();

  public static isBaseType( target: any ): boolean;

  public static isNumber( target: any ): boolean;

  public static isString( target: any ): boolean;

  public static isBoolean( target: any ): boolean;

  public static isSimpleObject( target: any ): boolean;

  public static isArrayLike( target: any ): boolean;

  public static isNone( target: any ): boolean;

  public static getOrDefault<T>( expect: T, defaultVal: T ): T;

  public static hashCode( target: string ): number;

  public static base64Encoder( target: string ): string;

  public static base64Decoder( target: string ): string;

  public static uuid(): string;

  public static deepCopy( to: any, from: any, ignoreFunction: boolean ): void;

  public static each<T>( collection: Array<T> | ArrayLike<T>, callback: ( item: T, index: number, collection: any ) => boolean, thisArg?: any ): void;

  public static eq( target: any, src: any ): boolean;

  public static sleep( millis: number ): Promise<void>;
}

export class Assert {
  private constructor();

  public static requireNotNull<T = any>( o: T, message?: string ): T;

  public static isNull( o: any ): boolean;

  public static nonNull( o: any ): boolean;
}

export class StringUtils {

  public static format( template: string, kwArgs: any, ...args: any[] ): string;

  public static isBlank( str: string ): boolean;

  public static isNotBlank( str: string ): boolean;
}

export class EventEmitter {
  private events: any;
  private maxListeners: number;
  private delayList: { [event: string]: any[][] };
  private static EventListener;

  public constructor( maxListeners?: number );

  private emitDelayEvent( eventName: string ): void;

  private addListener( eventName: string, listener: Function, isOnce: boolean, isPrepend: boolean ): this;

  private task( fn: Function, args: any[] ): () => Promise<any>;

  private executor( listeners: Function | Function[], args: any[] ): void;

  public emit( eventName: string, ...args: any[] ): boolean;

  public delayEmit( eventName: string, ...args: any[] ): void;

  public eventNames(): string[];

  public listenerCount( eventName: string ): number;

  public on( eventName: string, listener: Function ): this;

  public once( eventName: string, listener: Function ): this;

  public prependListener( eventName: string, listener: Function ): this;

  public prependOnceListener( eventName: string, listener: Function ): this;

  public listeners( eventName: string ): EventListener | EventListener[];

  public removeAllListeners( eventName: string ): this;

  public removeListener( eventName: string, listener: Function ): this;
}

export class Dates {
  private constructor();

  public static toLocalDateTimeString( millis: number ): string;
}
