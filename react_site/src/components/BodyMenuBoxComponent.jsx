const menuArr = [
    {title:'캠핑장소개',subMenu:['인사말','시설보기','오시는길']},
    {title:'사이트보기',subMenu:['시설물보기']},
    {title:'예약안내',subMenu:['예약안내','실시간예약']},
    {title:'특별함',subMenu:['특별함']},
    {title:'인기여행지',subMenu:['인근여행지']},
    {title:'커뮤니티',subMenu:['공지사항','고객문의','이용후기','포토갤러리']},
];

function BodyMenuBoxComponent(props){


    return (
        <div id="left_menu_box">
            <span className="left_menu_title">{menuArr[props.menuPage].title}</span>
            <ul>
                {menuArr[props.menuPage].subMenu.map(item=>(<li className="left_menu"><a href="#">{item}</a></li>))}
            </ul>
        </div>
    );
}

export default BodyMenuBoxComponent;