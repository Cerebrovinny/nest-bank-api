import { Controller, Get, HttpStatus, Query, Req, Res } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { Response } from 'express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Balance } from './balance.interface';

@ApiTags('Balance')
@Controller()
export class BalanceController {
    private balanceService: BalanceService = BalanceService.getInstance()

    @Get()
    @ApiOperation({ summary: 'Get balance' })
    public async findAccountBalance(@Query('account_id') account_id: string, @Res() res: Response) {
        const balance: Balance = this.balanceService.find(account_id);
        if(balance) {
            res.status(HttpStatus.OK).json(balance.balance);
        } else {
            res.status(HttpStatus.NOT_FOUND).json(0);
        }
    }
}