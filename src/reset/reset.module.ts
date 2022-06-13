import { Module } from '@nestjs/common';
import { BalanceService } from '../balance/balance.service';
import { ResetController } from './reset.controller';

@Module({
  controllers: [ResetController],
  providers: [BalanceService]
})

export class ResetModule {}