import React from 'react';
import { connect } from 'react-redux';

import { checkResult, clearResultAction } from '../../actions/resultsAction';
import { clearBoardAction } from '../../actions/boardActions';
import Cell from './Cell.jsx';

import '../../App.css';

const Board = props => {
	const {
		board,
		players,
		status,
		checkResult,
		clearBoard,
		clearResult
	} = props;

	if (!(status.win || status.draw)) {
		checkResult(board);
	}

	let gameResult;

	if (status.draw) {
		gameResult = `Draw. Let's play again!`;
	} else if (status.win === 'X') {
		gameResult = `X wins!`;
	} else if (status.win === 'O') {
		gameResult = `O wins!`;
	} else if (!(status.draw || status.win === 'X' || status.win === 'O')) {
		gameResult = `Next player: ${players.turn === 'X' ? 'X' : 'O'}`;
	}

	const playAgain = state => {
		clearBoard(state);
		clearResult(state);
	};

	return (
		<>
			<div className='board'>
				{board.map((value, i) => (
					<Cell key={i} index={i} value={value} />
				))}
			</div>
			{gameResult}
			<button className='board__button' onClick={playAgain}>
				Play again
			</button>
		</>
	);
};
export default connect(
	({ board, players, status }) => ({ board, players, status }),
	dispatch => ({
		checkResult: board => dispatch(checkResult(board)),
		clearBoard: state => dispatch(clearBoardAction(state)),
		clearResult: state => dispatch(clearResultAction(state))
	})
)(Board);
