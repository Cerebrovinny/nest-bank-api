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

    find(id: string): Balance {
        return this.balance.find(event => event.id === id);
    }

    reset() {
        this.balance = [];
    }

    changeAmount(id: string, amount: number, type: number) {
        this.balance.map(event => {
            (event.id === id)
                ? event.balance = event.balance + type * amount : event.balance
        });
    }

    deposit(id: string, balance: number) {
        if(this.find(id)) {
            this.changeAmount(id, balance, 1);
        } else {
            this.balance.push({ 'id': id, balance });
        }

        return { 'destination':  this.find(id) };
    }
    
    withdraw(id: string, amount: number) {
        this.changeAmount(id, amount, -1);

        return { 'origin':  this.find(id) };
    }

    transfer(origin: string, destination: string, amount: number) {
        this.changeAmount(origin, amount, -1);
        this.deposit(destination, amount);

        return { 'origin':  this.find(origin), 'destination':  this.find(destination) };
    }

}