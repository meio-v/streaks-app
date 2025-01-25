import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { StreakService } from './streak.service'
import { UserActivityService } from './user-activity.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [StreakService, UserActivityService],
})
export class AppModule {}
