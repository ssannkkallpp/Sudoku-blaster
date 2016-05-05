function findEmpty(grid) {
    for(var i=0;i<9;i++) {
        for(var j=0;j<9;j++) {
            if(grid[i][j] == 0) return [i,j];
        }
    }
    return 0;
}
function InRowCol(row, col, val, grid) {
    console.log("rowcol", row, col);
    for (var i=0;i<9;i++) {
        if(grid[row][i] == val || grid[i][col] == val)
			return 1;
	}
    return 0;
}
function InBox(startrow, startcol, val, grid) {
    for (var row=0;row<3;row++) {
        for (var col=0;col<3;col++) {
            if (grid[row+startrow][col+startcol] == val)
				return 1;
		}
	}
    return 0;
}
function admissable(row, col, val, grid) {
    if(InRowCol(row, col, val, grid) == 0 && InBox(row - row%3 , col - col%3, val, grid) == 0)
		return 1;
    else return 0;
}




function solve_sudoku(grid) {
    var arr = findEmpty(grid);
    if (arr == 0) {
		return 1;
		alert(arr);
	}
    var row = arr[0];
    var col = arr[1];
	if(row == undefined || col == undefined)
		alert("UNDEFINED:" + arr);
    console.log(row, col);
    for(var i=1;i<10;i++) {
        if (admissable(row, col, i, grid)) {
            grid[row][col] = i;
            if(solve_sudoku(grid) == 1)
                return 1;
            grid[row][col] = 0;
        }
    }
    return 0;
}
