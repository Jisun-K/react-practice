import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background: lightgrey;
`;

const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 1rem;
    background: ${(props) => props.backgroundColor};
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

const blockItmes = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor: "red",
    },
    {
        label: "2",
        padding: "3rem",
        backgroundColor: "green",
    },
    {
        label: "1",
        padding: "2rem",
        backgroundColor: "blue",
    },
]

function Blocks(props) {
    return (
        <Wrapper>
            {blockItmes.map((item) => {
                return (
                    <Block padding={item.padding}
                        backgroundColor={item.backgroundColor}
                    >
                        {item.label}
                    </Block>
                );
            })}
        </Wrapper>
    )
}

export default Blocks;