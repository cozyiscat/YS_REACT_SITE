const students= [
    {id: 1, name:'홍길동',job:'백수'},
    {id: 2, name:'강감찬',job:'공무원'},
    {id: 3, name:'이순신',job:'군인'},
]
export function ListTest4(){
    return (
        students.map(
            (stu,index)=>{
                return <li key={index}>{stu.id}.{stu.name}({stu.job})</li>
            }
        )
    )
}