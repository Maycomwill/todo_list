import styled from 'styled-components';
import { TemaPadrao } from '../../styles/global'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${TemaPadrao.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;


    .Header{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        
    }

    .Header span{
        text-align: center;
    }

    .Header .button-wrapper{
        width: 10%;
    }

    .list-wrapper{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .list-wrapper ul{
        width: 100%;
        place-items: center;
        grid-row-gap: 12px;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        
    }

    .create-btn{
        width: 20%;
    }
`;
