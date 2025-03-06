import Commnet from "./Commnet";

const comments = [
    {
        name: "일번",
        comment: "일번 댓글입니다."
    },
    {
        name: "이이번",
        comment: "두번째 댓글입니다."
    },
    {
        name: "삼삼번",
        comment: "세번째 댓글입니다."
    },
]
function CommentList(props) {
    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <Commnet name={comment.name} comment={comment.comment} />
                    )
                })
            }
        </div>
    )
}

export default CommentList;