import styled from 'styled-components'

const GameWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
	background-color: rgb(15, 65, 122);
`;

const GameBoardGrid = styled.div`
    display: grid;
    position: relative;
    margin: 0 auto;
    grid-template: repeat(10, 4rem) / repeat(10, 4rem);
    text-align: center;
    gap: 2px;
`;

const SetupGridContainer = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	left: 0;
	right: 0;
`;

const Cell = styled.div`

	border: 1px solid black;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.3s;
	position: ${(props) => props.position};
	background-color: ${(props) =>
		props.board === 'friendly' && props.hasShip ? 'black' 
		: props.board === 'enemy' && props.shot && props.hasShip ? 'red'
		: props.shot ? 'wheat' : ''};
	opacity: 0.5
	&:hover {
		background-color: ${(props) =>
			props.board === 'friendly'
				? 'transparent'
				: props.board === 'enemy' && !props.shot
				? 'rgba(60, 255, 60, 0.6)'
				: props.shot
				? 'rgba(255, 60, 60, 0.6)'
				: props.highlight
				? ''
				: 'rgba(255, 60, 60, 0.6)'};
		cursor: ${(props) => props.cursor};
	}
`;


const HitMark = styled.span`
	height: 1rem;
	width: 1rem;
	background-color: ${props => props.shot ? 'black' : ''};
	border-radius: 50%;
	display: inline-block;
`;


// props.highligxht ? 'rgba(255, 255, 255, 0.7)' : ''};



export {
	GameWrapper,
	SetupGridContainer,
	GameBoardGrid,
	Cell,
	HitMark
}