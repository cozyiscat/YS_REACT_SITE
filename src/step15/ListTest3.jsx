export function ListTest3(){
    const animals=[
        '고양이','호랑이','기러기',
    ]
    return (
        <ul>
            {animals.map(
                (animal, index) => {
            //맵함수로 만들어지는 요소는 반드시 키값을 중복없이 만들어야함
                    return <li key={index}> {index}.{animal} </li>
                } //중괄호 빼고 해도 됨
            )
        }
        </ul>
    )
}