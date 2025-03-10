import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

const ContextText = styled.p`
    font-size: 14px;
`;

function CommentListItem(props) {
    const { comment } = props;


    console.log("commentListItem ========>", comment);
    return (
        <Wrapper>
            <ContextText>{comment.content}</ContextText>
        </Wrapper>
    );
}

export default CommentListItem;