
export 
interface SmartActionModalProps {
    title: string;
    msg?: string;   
    okFunction:()=>void,
    cancelFunction:()=>void   
}


const ActionModalService=(props:SmartActionModalProps)=>{
    const {
        title="",
        msg="",
        okFunction,
        cancelFunction
    } = props;

    

}

export {
    ActionModalService
}