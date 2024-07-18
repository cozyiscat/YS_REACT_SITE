import {Counter} from './Counter';
import { UnmountComp } from './unmountComp';
import {UseMemoComp} from "./UseMemoComp";
import { UseCallbackComp } from './UseCallbackComp'; // 파일 경로에 따라 수정

export function App(){

    return(
        <>
        {/* <Counter/> */}
        <UnmountComp/>
        {/*  <UseMemoComp/> */}
        <UseCallbackComp/> 
        </>
    );
}