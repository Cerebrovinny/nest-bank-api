import { Controller, Get, HttpStatus, Query, Req, Res } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { Response } from 'express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Balance } from './balance.interface';

@ApiTags('Balance')
@Controller()
export class BalanceController {
    constructor(private readonly balanceService: BalanceService) {}

    @Get()
    @ApiOperation({ summary: 'Get balance' })
    public async find(@Query('account_id') accountId: number, @Res() res: Response) {
        const balance: Balance = await this.balanceService.find(accountId);
        if(balance) {
            res.status(HttpStatus.OK).json(balance.amount);
        } else {
            res.status(HttpStatus.NOT_FOUND).json({ message: 'Account not found' });
        }
    }
}