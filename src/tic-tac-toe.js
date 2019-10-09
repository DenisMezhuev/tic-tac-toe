class TicTacToe {
    constructor() {
        this.field = [[null,null,null],[null,null,null],[null,null,null]];
        this.winCondition = [[0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];
        
        this.currentSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
       return this.currentSymbol;
       
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] == null){
            this.field[rowIndex][columnIndex] = this.currentSymbol;
          
            if( this.currentSymbol === 'o'){
                this.currentSymbol = 'x';
            }else{
                this.currentSymbol = 'o';
            }
        }
      
    }

    isFinished() {
      if (this.isDraw() || this.getWinner()) return true;
       return false;
     
    }

    getWinner() {
      for(let elem of this.winCondition){
           if(this.field[elem[0]] === 'x') return 'x';
           if(this.field[elem[0]] === 'o') return 'o'; 
           return this.field[elem[0]];            
        }
        return null;
    }

    noMoreTurns() {
        for(let i = 0; i<3; i++){
            for(let j = 0; j<3; j++){
                if(!this.field[i][j]) return false;
            }
        }
    return true;
    }

    isDraw() {
     
     return this.noMoreTurns() && !this.getWinner();
    
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
