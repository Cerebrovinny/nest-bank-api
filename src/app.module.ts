import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BalanceModule } from './balance/balance.module';
import { RouterModule, Routes } from 'nest-router'; 

const routes: Routes = [
  {
    path: '/v1',
    children: [
      {
        path: '/balance',
        module: BalanceModule
      },
    ]
  }
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    BalanceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
