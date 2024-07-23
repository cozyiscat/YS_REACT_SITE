import { AddrZone } from "./AddrZone";
import { HotmenuZone } from "./HotmenuZone";

export function BottomArea(){
    return(
        <>
        <div id="bottomArea">
            <HotmenuZone/>
            <AddrZone/>
        </div>
        </>
    )
}