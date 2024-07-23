import '../styles/BodyArea.css';
import { ContentsZone } from './ContentsZone';
import { LeftmenuZone } from './LeftmenuZone';

export function BodyArea(){
    return(
        <>
            <div id="bodyArea">
                <LeftmenuZone/>
                <ContentsZone/>
            </div>
        </>
    )
}