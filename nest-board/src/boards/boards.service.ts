import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // private을 사용하지 않으면, 다름 컴포넌트에서 해당 배열을 수정할 수 있어서 차단하기 위해 사용

  getAllBoards(): Board[] {
    // 이 함수를 호출하면,
    return this.boards; // 위의 보드 배열에 있는 값을 return한다.
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, content } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      content,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
