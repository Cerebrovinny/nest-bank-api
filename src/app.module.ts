import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BalanceModule } from './balance/balance.module';
import { RouterModule, Routes } from 'nest-router'; 
import { EventModule } from './event/event.module';

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
    BalanceModule,
    EventModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
