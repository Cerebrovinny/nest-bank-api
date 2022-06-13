export type Event = DepositEvent | WithdrawEvent | TransferEvent

export interface DepositEvent {
  type: EventType.deposit,
  destination: string,
  amount: number
}

export interface WithdrawEvent {
  type: EventType.withdraw,
  origin: string,
  amount: number
}

export interface TransferEvent {
  type: EventType.transfer,
  origin: string,
  destination: string,
  amount: number
}

export enum EventType {
  deposit = "deposit",
  withdraw = "withdraw",
  transfer = "transfer",
} 