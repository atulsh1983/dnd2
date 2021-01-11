import React from "react";
import FormHeadOne from "../FormUI/FormHead/FormHeadOne";
import FormBodyOne from "../FormUI/FormBody/FormBodyOne";



export default class Preview extends React.Component{

    constructor(props){
        super(props);
    }

    saveFormat = () =>{
        console.log("[Generate the final json]");
    };

    
    render(){
      
        let printHead, printBody, printFooter; 

        const {headerSection, headerUI, bodySection, bodyUI, footerSection, footerUI} = this.props.location.currentState;

        if(headerUI=='head1')
        {
            printHead = <FormHeadOne headerSection={headerSection}/>
        }
        if(bodyUI=='body1')
        {
            printBody = <FormBodyOne bodySection={bodySection}/>
        }

        
        
        return(
            <div>
               {printHead}
               {printBody}
                
            </div>
            
            
        )
    }
}