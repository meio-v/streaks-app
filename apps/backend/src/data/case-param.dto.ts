import { Case } from '../types/case.enum'
import { IsEnum } from 'class-validator'

export class CaseParamDto {
  @IsEnum(Case) case!: Case
}
