export type Event = DepositEvent | WithdrawEvent | TransferEvent

export interface DepositEvent {
  type: EventType.deposit,
  destination: number,
  amount: number
}

export interface WithdrawEvent {
  type: EventType.withdraw,
  origin: number,
  amount: number
}

export interface TransferEvent {
  type: EventType.transfer,
  origin: number,
  destination: number,
  amount: number
}

export enum EventType {
  deposit = "deposit",
  withdraw = "withdraw",
  transfer = "transfer",
} 