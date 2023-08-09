import { Controller, Get, Post, Body } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('content') content: string,
  ): Board {
    // service를 보면 board 하나만 return하기 때문에 []로 하지 않아도 된다.
    return this.boardsService.createBoard(title, content);
  }
}
