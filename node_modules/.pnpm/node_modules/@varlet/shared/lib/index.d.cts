export * from 'rattail';

declare function assert(condition: boolean, source: string, message: string): asserts condition;
declare function warn(source: string, message: string): void;
declare function error(source: string, message: string): void;
declare const isURL: (val: string | undefined | null) => boolean;

export { assert, error, isURL, warn };
