import { 
Controller,
Post, 
Body, 
Param,
Patch,
Query,
UseGuards,
Res,
HttpStatus,
HttpCode
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
    @HttpCode(200)
    public async reset(@Res() res: Response) {
        this.balanceService.reset();
        return res.status(200).send("OK")
    }
}