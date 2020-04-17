import React from 'react';
import { connect } from 'react-redux';
import { drawXAction, drawOAction } from '../../actions/boardActions.js';
import { toggleTurnAction } from '../../actions/playerActions.js';

const Cell = props => {
	const { value, index, drawBoard, players, board, toggleTurn } = props;

	const drawGameBoard = async () => {
		await drawBoard(board, players, index);
		toggleTurn();
	};

	return (
		<button className='board__cell' onClick={drawGameBoard}>
			{value ? (value === 'X' ? 'X' : 'O') : ''}
		</button>
	);
};

const mapStateToProps = ({ board, players }) => ({ board, players });

const mapDispatchToProps = dispatch => ({
	drawBoard: (board, players, i) => {
		if (!board[i]) {
			if (players[players.turn] === 'X') {
				return dispatch(drawXAction(i));
			} else {
				return dispatch(drawOAction(i));
			}
		}
	},
	toggleTurn: () => dispatch(toggleTurnAction())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Cell);
