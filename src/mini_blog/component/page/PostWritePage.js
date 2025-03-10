import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";


const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    & > * {
        :not(:last-child) {
            margin: 0 0 16px 0;
        }
    }
`;

function PostWritePage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />
                <Button
                    title={"글 작성하기"}
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    )
}

export default PostWritePage;