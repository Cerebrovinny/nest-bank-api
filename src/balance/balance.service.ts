import { Injectable } from '@nestjs/common';
import { Balance } from './balance.interface';

@Injectable()
export class BalanceService {
    private balance: Array<Balance> = [];

    find(id: number): Balance {
        return this.balance.find(event => event.account_id === id);
    }
}