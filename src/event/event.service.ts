import { Injectable } from '@nestjs/common';
import { BalanceService } from 'src/balance/balance.service';
import { DepositEvent, Event, EventType, TransferEvent, WithdrawEvent } from './event.interface';

@Injectable()
export class EventService {
    private balanceService: BalanceService = BalanceService.getInstance()

    createAccount(event: Event) {
        if(event.type === EventType.deposit) {
            return this.depositEvent(event);
        } else if(event.type === EventType.withdraw) {
            return this.withdrawEvent(event);
        } else if(event.type === EventType.transfer) {
            return this.transferEvent(event);
        }
    }

    depositEvent(event: DepositEvent) {
        return this.balanceService.deposit(event.destination, event.amount);
    }

    withdrawEvent(event: WithdrawEvent) {
        if(!this.balanceService.find(event.origin)) {
            return false;
        }
        return this.balanceService.withdraw(event.origin, event.amount);
    }

    transferEvent(event: TransferEvent) {
        if(!this.balanceService.find(event.origin)) return false;
        return this.balanceService.transfer(event.origin, event.destination, event.amount);
      }
    
}