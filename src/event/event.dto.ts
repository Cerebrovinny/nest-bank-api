import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { EventType } from './event.interface';
import { IsNotEmpty, IsNumber } from 'class-validator'

export class EventDto {
  @ApiProperty({
    enum: EventType,
    description: 'Event Types'
  })
  @IsNotEmpty()
  type: EventType

  @ApiPropertyOptional({
    name: 'origin',
    description: 'Origin account id',
  })
  @IsNumber()
  origin: number

  @ApiPropertyOptional({
    name: 'destination',
    description: 'Desired account id',
  })
  @IsNumber()
  destination: number

  @ApiProperty({
    name: 'amount',
    description: 'Amount',
  })
  @IsNumber()
  amount: number
}