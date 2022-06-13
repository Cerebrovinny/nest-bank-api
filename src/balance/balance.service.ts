import { Injectable } from '@nestjs/common';
import { Balance } from './balance.interface';

@Injectable()
export class BalanceService {
    private balance: Array<Balance> = [];
    static instance;

    static getInstance() {
        if(BalanceService.instance) return BalanceService.instance;
        BalanceService.instance = new BalanceService();
        return BalanceService.instance;
    }

    find(id: number): Balance {
        return this.balance.find(event => event.account_id === id);
    }

    reset() {
        this.balance = [];
    }

    changeAmount(account_id: number, amount: number, type: number) {
        this.balance.map(event => {
            (event.account_id === account_id)
                ? event.amount = event.amount + type * amount : event.amount
        });
    }

    deposit(account_id: number, amount: number) {
        if(this.find(account_id)) {
            this.changeAmount(account_id, amount, 1);
        } else {
            this.balance.push({ 'account_id': account_id, 'amount': amount });
        }

        return { 'destination': this.find(account_id) };
    }
    
    withdraw(account_id: number, amount: number) {
        this.changeAmount(account_id, amount, -1);

        return { 'origin': this.find(account_id) };
    }

    transfer(origin: number, destination: number, amount: number) {
        this.changeAmount(origin, amount, -1);
        this.deposit(destination, amount);

        return { 'origin': this.find(origin), 'destination': this.find(destination) };
    }

}