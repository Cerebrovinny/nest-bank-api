import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BalanceModule } from './balance/balance.module';
import { RouterModule, Routes } from 'nest-router'; 
import { EventModule } from './event/event.module';
import { ResetModule } from './reset/reset.module';

const routes: Routes = [
  {
    path: '/',
    children: [
      {
        path: '/balance',
        module: BalanceModule
      },
      {
        path: '/event',
        module: EventModule
      },
      {
        path: '/reset',
        module: ResetModule
      }
    ]
  }
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    BalanceModule,
    EventModule,
    ResetModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
