import React from 'react'
import styled from 'styled-components';

const Spinner = ({primary}) => {
  if(!primary){
      return (
        <Spinn>
            <div className="spinner">
                <div className="spinn"/>
            </div>
        </Spinn>
        )
    } else {
        return (
            <Spinn primary>
            <div className="spinner">
              <div className="spinn"/>
            </div>
            </Spinn>
          )
      }
}
const Spinn = styled.div`
.spinner {
    display: flex;
    width: 100%;
    min-height: 100%;
    align-items: center;
    justify-content: center;
    .spinn {
        width: 6rem;
        height: 6rem;

        &:after {
            content: ' ';
            display: block;
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            border: ${props => props.primary ? '7px solid rgba(255,255,255,0.4)' : '7px solid rgba(0,0,0,0.4)'};
            border-color: ${props => props.primary ? 'rgba(255,255,255,0.7) transparent rgba(255,255,255,0.7) transparent' : 'rgba(0,0,0,0.4) transparent rgba(0,0,0,0.4) transparent'};
            animation: spin 1.7s linear infinite;
        }
    }
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`;
export default Spinner;