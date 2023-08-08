import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = []; // private을 사용하지 않으면, 다름 컴포넌트에서 해당 배열을 수정할 수 있어서 차단하기 위해 사용

  getAllBoards() {
    // 이 함수를 호출하면,
    return this.boards; // 위의 보드 배열에 있는 값을 return한다.
  }
}
