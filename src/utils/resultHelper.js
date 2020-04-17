const calculateWinner = (board, value) => {
	if (board[0] === value && board[1] === value && board[2] === value) {
		return true;
	}

	if (board[3] === value && board[4] === value && board[5] === value) {
		return true;
	}

	if (board[6] === value && board[7] === value && board[8] === value) {
		return true;
	}

	if (board[0] === value && board[3] === value && board[6] === value) {
		return true;
	}

	if (board[1] === value && board[4] === value && board[7] === value) {
		return true;
	}

	if (board[2] === value && board[5] === value && board[8] === value) {
		return true;
	}

	if (board[0] === value && board[4] === value && board[8] === value) {
		return true;
	}

	if (board[6] === value && board[4] === value && board[2] === value) {
		return true;
	}

	return false;
};

export default calculateWinner;
