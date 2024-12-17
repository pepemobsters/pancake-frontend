export type TonFunctionDef = {
  method: string
  inputs: readonly TonInputDef[] // Changed to readonly array
  outputs: readonly { type: string }[] // Changed to readonly array
  defaultValue?: any
}

export type TonInputType = 'address' | 'int'

type TonInputDef = {
  type: 'address' | 'int'
  name: string
}

type TonOutputDef = {
  type: string
}

type TypeMap = {
  address: string
  int: bigint
  bits: string
}

type MapType<T extends string> = T extends keyof TypeMap ? TypeMap[T] : any

// Recursive type to construct a tuple of input types
type InputTypes<T extends readonly TonInputDef[]> = T extends readonly [infer First, ...infer Rest]
  ? First extends TonInputDef
    ? Rest extends readonly TonInputDef[]
      ? [MapType<First['type']>, ...InputTypes<Rest>]
      : [MapType<First['type']>]
    : []
  : []

type OutputTypes<T extends readonly TonOutputDef[]> = T extends readonly [infer First, ...infer Rest]
  ? First extends TonOutputDef
    ? Rest extends readonly TonOutputDef[]
      ? [Promise<MapType<First['type']>>, ...OutputTypes<Rest>]
      : [Promise<MapType<First['type']>>]
    : []
  : []

type OutputWrapper<T extends readonly unknown[]> = T extends readonly [infer First]
  ? First
  : T extends readonly []
  ? void
  : T

export type FunctionDef<T extends TonFunctionDef> = (
  ...args: InputTypes<T['inputs']>
) => OutputWrapper<OutputTypes<T['outputs']>>

export interface TonContractClassDef {
  interfaces: readonly TonFunctionDef[]
}

export type TonContractInstance<TDef extends TonContractClassDef> = {
  [K in TDef['interfaces'][number] as K['method']]: FunctionDef<K>
}
