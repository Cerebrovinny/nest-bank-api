import { 
Controller,
Post, 
Body, 
Param,
Patch,
Query,
UseGuards,
Res,
HttpStatus
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';
import { BalanceService } from 'src/balance/balance.service';


@ApiTags('Reset')
@Controller()
export class ResetController {
    private balanceService: BalanceService = BalanceService.getInstance();

    @Post()
    @ApiOperation({ summary: 'Reset the balance' })
    public async reset(@Res() res: Response) {
        this.balanceService.reset();
        const ok: any = "OK";
        const removeString = ok.replace(/"/g, '');
        res.status(HttpStatus.OK).json(removeString);
    }
}