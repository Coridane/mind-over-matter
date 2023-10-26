import styled, {keyframes,css} from 'styled-component';
import bg from 'public/logo.png';

interface GameCardProps {
    id: any
    check: Boolean
    movement: Boolean
    image : String
    match: Boolean
}
const rotate = keyframes`
    from {
    transform:rotateY(90deg);
    }
    to {
        transform:rotateY(0deg);
    }
    `;
    const rotate2 = keyframes`
    from {
        transform:rotateY(-90deg);
    }
    to {
        transform:rotateY(0deg);
    }
    `;
    
    export const GameCard = styled.div<GameCardProps>`
    width:160px;
    height:220px;
    margin:20px 0;
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.75);
    animation: ${({ check, movement }) => (movement || check ? css`${rotate2} 1s forwards` : css`${rotate} 1s forwards`)};
    background:${({ movement, check, image })  => (movement || check ?  `url(${image}) 50% center/cover no-repeat` : `url(${bg}) 50% center/cover no-repeat`)}; 
    visibility:${({match}) => (match ? 'hidden' : 'visible')};

    @media (max-width: 780px) {
        width: 100%;
        max-width: 130px;
        height: 180px;
      }
      `;
