const students = [
    {
        id: 1,
        name: "one",
    },
    {
        id: 2,
        name: "two",
    },
    {
        id: 3,
        name: "three",
    },
    {
        id: 4,
        name: "four"
    }
]

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;