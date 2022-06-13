import { Controller, Post, HttpStatus, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import {
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { EventService } from './event.service';
import { EventDto } from './event.dto';

@ApiTags('Event')
@Controller()
export class EventController {
  constructor(
    private readonly eventService: EventService
  ) {}

  @Post()
  @ApiOperation({ description: 'Accounts Events' })
  public async depositBalance(@Body() params: EventDto, @Res() res: Response) {
    const result = this.eventService.createAccount(params);
    if(result) {
      res.status(HttpStatus.CREATED).json(result);
    } else {
      res.status(HttpStatus.NOT_FOUND).json(0);
    }
  }
}