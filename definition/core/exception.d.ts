export class Exception extends Error {
  public constructor( name: string, message: string );
}

export class IllegalStateException extends Exception {
  public constructor( message?: string );
}

export class IllegalArgumentException extends Exception {
  public constructor( message?: string );
}

export class NullPointException extends Exception {
  public constructor( message?: string );
}

export class UnsupportedOperationException extends Exception {
  public constructor( message?: string );
}

export class IndexOutOfBoundsException extends Exception {
  public constructor( message?: string );
}

export class NoSuchElementException extends Exception {
  public constructor( message?: string );
}