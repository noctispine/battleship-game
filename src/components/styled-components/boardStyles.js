import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`

const GameWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
	margin-bottom: 5rem;
	flex-wrap: wrap;
	margin-top: 3rem;
	

`;

const GameBoardGrid = styled.div`
    display: grid;
    position: relative;
    margin: 0 auto;
    grid-template: repeat(10, 4vw) / repeat(10, 4vw	);
    text-align: center;
    gap: 2px;

	animation: ${fadeIn} 3s ease-in-out;

	@media (max-width: 1350px) {
		grid-template: repeat(10, 6.5vw) / repeat(10, 6.5vw);
		margin-top: 5rem;
	}

	@media (max-width: 767px) {
		grid-template: repeat(10, 8vw) / repeat(10, 8vw);
		margin-top: 5rem;
	}




`;

const SetupGridContainer = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	left: 0;
	right: 0;
	margin-bottom: 5rem;
`;

const Cell = styled.div`

	border: 1px solid #F7C59F;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.3s;
	position: ${(props) => props.position};
	background-color: ${(props) =>
		props.board === 'friendly' && props.hasShip ? '#ff6b35' : ''};
	&:hover {
		background-color: ${(props) =>
			props.board === 'enemy' && props.hasShip && props.shot && props.hasShip ? 'rgba(246, 71, 71, .7)'
			: '' };
		cursor: ${(props) => props.cursor};
	}
`;


const HitMark = styled.span`
	height: 1rem;
	width: 1rem;
	background-color: ${props => props.shot && props.hasShip ? 'red' : props.shot ? 'black' : ''};
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