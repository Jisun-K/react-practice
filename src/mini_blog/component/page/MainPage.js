import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import PostList from "../list/PostList";
import data from "../../data.json";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 750px;
    & > * {
        :not(:last-child) {
            margin: 0 0 16px 0;
        }
    }
`;

function MainPage(props) {
    const { } = props;

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <Button
                    title={"글 작성하기"}
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />
                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    )
}

export default MainPage;