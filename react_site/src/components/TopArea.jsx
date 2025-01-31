import {TitleZone} from './TitleZone';
import {MenuZone} from './MenuZone';
import {SliderZone} from './SliderZone';

export function TopArea({setLeftMenu}){
    return(
        //상단Area 시작
        <div id="topArea">
        <TitleZone/>
        <MenuZone setLeftMenu={setLeftMenu}/>
        <SliderZone/>
        </div>
        //상단Area 끝

            // <div id="topArea">
            // <!-- 타이틀Zone시작 -->
            // <style>
            //     #titleZone{
            //         background-color: yellowgreen;
            //         position: relative;
            //     }
            //     #gnb{
            //         position: absolute;    
            //         right:20px;
            //         top:5px;                
            //     }
            //     #gnb>ul{
            //         overflow: hidden;
            //     }
            //     #gnb>ul>li{
            //         float: left;
            //         margin:0px 10px;
            //     }
            //     #logo{
            //         width: 200px;
            //         margin: 5px auto;
            //     }
            //     #logo>img{
            //         width: 100%;
            //     }
            // </style>
            // <div id="titleZone">
            //     <div id="gnb">
            //         <ul>
            //             <li><a href="#">Home</a></li>
            //             <li><a href="#">Login</a></li>
            //             <li><a href="#">Join</a></li>
            //             <li><a href="#">Mypage</a></li>
            //         </ul>                    
            //     </div>
            //     <div id="logo">
            //         <img src="img/logo.jpg" alt="">
            //     </div>
            // </div>
            // <!-- 타이틀Zone끝 -->
            // <!-- 메뉴Zone시작 -->
            // <style>
            //     #menuZone{
            //         position: relative;
            //         background-color: #333;
            //     }
            //     .mainmenu{
            //         display:flex;
            //         background-color:#333;
            //         width:700px;
            //         margin: 0 auto;
            //         padding: 0;
            //     }
            //     .mainmenu>li{position:relative;}
            //     .mainmenu>li>a{
            //         display: block;
            //         color:white;        
            //         padding: 15px 20px;            
            //     }
            //     .mainmenu>li:hover > a{background-color: #444;}
            //     .mainmenu>li:hover > .submenu{display:block;}
            //     .submenu{
            //         display:none;
            //         position: absolute;
            //         top:100%;
            //         left:0;
            //         background-color: #444;
            //         width: 200px;
            //         z-index:10;
            //     }
            //     .submenu>li>a{
            //         display: block;
            //         color:white;
            //         padding:10px;
            //     }
            //     .submenu>li:hover .submenu{display:block;}
            //     .submenu>li>a:hover {background-color: #555;}


            // </style>
            // <div id="menuZone">
            //     <ul class="mainmenu">
            //         <li>
            //             <a href="#">캠핑장소개</a>
            //             <ul class="submenu">
            //                 <li><a href="#">인사말</a></li>
            //                 <li><a href="#">시설보기</a></li>
            //                 <li><a href="#">오시는길</a></li>
            //             </ul>
            //         </li>
            //         <li>
            //             <a href="#">사이트보기</a>
            //             <ul class="submenu">
            //                 <li><a href="#">시설물보기</a></li>
            //             </ul>
            //         </li>
            //         <li>
            //             <a href="#">예약안내</a>
            //             <ul class="submenu">
            //                 <li><a href="#">예약안내</a></li>
            //                 <li><a href="#">실시간예약</a></li>
            //             </ul>
            //         </li>
            //         <li>
            //             <a href="#">특별함</a>
            //             <ul class="submenu">
            //                 <li><a href="#">특별함</a></li>
            //             </ul>
            //         </li>
            //         <li>
            //             <a href="#">인기여행지</a>
            //             <ul class="submenu">
            //                 <li><a href="#">인근여행지</a></li>
            //             </ul>
            //         </li>
            //         <li>
            //             <a href="#">커뮤니티</a>
            //             <ul class="submenu">
            //                 <li><a href="#">공지사항</a></li>
            //                 <li><a href="#">고객문의</a></li>
            //                 <li><a href="#">이용후기</a></li>
            //                 <li><a href="#">포토갤러리</a></li>
            //             </ul>
            //         </li>
            //     </ul>
            // </div>
            // <!-- 메뉴Zone끝 -->
            // <!-- 슬라이더Zone시작 -->
            // <style>
           
            //     /* 슬라이더 배경이미지처리 */
            //     #sliderZone{
            //         position: relative;
            //         width: 100% ;
            //         max-width: 1200px;
            //         margin: 0 auto;
            //         overflow: hidden;
            //     }
            //     .slider_panel{
            //         /* width: 100%; */
            //         display: flex;
            //         position: relative;
            //         left:0;  /*좌표변경으로 스라이딩 표현 */
            //         transition: left 0.5s ease; 
            //     }
            //     /* .slider_panel>li */
            //     .slider_image{
            //         min-width: 100%;
            //     }
            //     .slider_image img{
            //         width: 100%;
            //         display: block;
            //     }

            //     /* 슬라이더 컨트롤 */
            //     #sub_photo_bg{
            //         background-color: aqua;
            //     }
            //     .control_panel{
            //         position: absolute;
            //         bottom:10px;
            //         left:50%;
            //         display: flex;
            //         gap:5px;
            //         transform: translateX(-50%);
            //     }
            //     .control_btn{
            //         width: 10px;
            //         height: 10px;
            //         background-color: white;
            //         border-radius: 50%;
            //         cursor: pointer;
            //     }

            //     .control_btn.active{
            //         background-color: red;
            //     }
            //     /* 좌우버튼 */
            //     .direct_btn{
            //         position: absolute;
            //         top:50%;
            //         width: 100%;
            //         display: flex;
            //         transform:translateY(-50%);
            //         justify-content:space-between;
            //     }
            //     .direct_btn img{ cursor: pointer;}

            // </style>
            // <div id="sliderZone">
            //     <div id="sub_photo_bg">
            //         <ul class="slider_panel">
            //             <li class="slider_image"><img src="img/1.jpg" alt=""></li>
            //             <li class="slider_image"><img src="img/2.jpg" alt=""></li>
            //             <li class="slider_image"><img src="img/3.jpg" alt=""></li>
            //             <!-- <li class="slider_image"><img src="img/1.jpg" alt=""></li>
            //             <li class="slider_image"><img src="img/2.jpg" alt=""></li>
            //             <li class="slider_image"><img src="img/3.jpg" alt=""></li> -->
            //         </ul>
            //         <div class="control_panel">
            //             <div class="control_btn active"  data-index="0"></div>
            //             <div class="control_btn" data-index="1"></div>
            //             <div class="control_btn" data-index="2"></div>
            //         </div>
            //         <div class="direct_btn">
            //             <div class="left_btn"><img src="img/left_btn.png" alt=""></div>
            //             <div class="right_btn"><img src="img/right_btn.png" alt=""></div>
            //         </div>
            //     </div>
            // </div>
            // <script>
            //     $(function(){
            //         const $sliderPanel = $('.slider_panel');
            //         const $controlBtns = $('.control_btn');
            //         const $leftBtn     = $('.left_btn img');
            //         const $rightBtn    = $('.right_btn img');

            //         let currentIndex = 0;
            //         function updateSlider(index){
            //             $sliderPanel.css('left', `-${index * 100}%`);
            //             $controlBtns.removeClass('active');
            //             $controlBtns.eq(index).addClass('active');
            //         }

            //         $leftBtn.on('click',function(){
            //             currentIndex--;
            //             if(currentIndex<0){
            //                 currentIndex=0;
            //             }
            //             updateSlider(currentIndex);
            //         });
            //         $rightBtn.on('click', function(){
            //             currentIndex++;
            //             if(currentIndex>2){
            //                 currentIndex=2;
            //             }
            //             updateSlider(currentIndex);
            //         });

            //         $controlBtns.on('click',function(){
            //             currentIndex = parseInt($(this).data('index'));
            //             updateSlider(currentIndex);

            //         });
            //         setInterval(function(){
            //             currentIndex=(currentIndex+1) % $controlBtns.length;
            //             updateSlider(currentIndex);
            //         }, 3000);
            //     });
            // </script>
            // <!-- 슬라이더Zone끝 -->
    )
}