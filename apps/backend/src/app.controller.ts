import {
  Controller,
  Get,
  HttpStatus,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { StreakService } from './streak.service'
import { CaseParamDto } from './data/case-param.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: StreakService) {}

  @Get('streaks/:case')
  @UsePipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.NOT_FOUND,
      transform: true,
    }),
  )
  getStreaks(@Param() params: CaseParamDto) {
    const { case: caseNumber } = params

    return this.appService.generateStreakInformation(caseNumber)
  }
}
