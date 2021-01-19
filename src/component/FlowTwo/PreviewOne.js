import React from "react";
import FormHeadOne from "../FormUI/FormHead/FormHeadOne";
import FormBodyOne from "../FormUI/FormBody/FormBodyOne";
import FormFooterOne from "../FormUI/FormFooter/FormFooterOne";



export default class Preview extends React.Component{

    constructor(props){
        super(props);
    }

    saveFormat = () =>{
        console.log("[Generate the final json]");
        let objSaved ={};

        Object.assign(objSaved, {headerDesign: "head1"});
        Object.assign(objSaved, {bodyDesign: "body1"});
        Object.assign(objSaved, {footerDesign: "foot1"});
        Object.assign(objSaved, {head: []});
        Object.assign(objSaved, {bodyTop: []});
        Object.assign(objSaved, {bodyBottom: []});
        Object.assign(objSaved, {foot: []});





       //----start:get header values
       for(let i=0;i<6;i++)
       {
           let temp;
           temp = document.getElementById('header_col_'+i).getElementsByTagName('input');
           if(temp.length>0)
           {           
               for(let j=0;j<temp.length;j++)
               {                   
                   if(temp[j].disabled==false)
                   {                     
                       objSaved.head.push({
                           'grp': temp[j].getAttribute('data-grp'),
                           'id': temp[j].getAttribute('data-id'),
                           'label': temp[j].value
                       })                      
                   }                    
               }
           }          
            
       }


       //----start:get body top values
       let tempb1 = document.getElementById('borderTop').getElementsByTagName('input');       
       for(let i=0;i<tempb1.length;i++)
       {
           //console.log(tempb1[i]);

           objSaved.bodyTop.push({
            'grp': tempb1[i].getAttribute('data-grp'),
            'id': tempb1[i].getAttribute('data-id'),
            'label': tempb1[i].value
        })    
       }

       //----start:get body bottom values
       let tempb2 = document.getElementById('borderBottom').getElementsByTagName('input');       
       for(let i=0;i<tempb2.length;i++)
       {
           //console.log(tempb1[i]);

           objSaved.bodyBottom.push({
            'grp': tempb2[i].getAttribute('data-grp'),
            'id': tempb2[i].getAttribute('data-id'),
            'label': tempb2[i].value
        })    
       }

       //----start: get footer value
       let tempb3 = document.getElementById('footerblock').getElementsByTagName('input');       
       for(let i=0;i<tempb3.length;i++)
       {
           //console.log(tempb1[i]);
           if(tempb3[i].disabled==false)
           {
            objSaved.foot.push({
                'grp': tempb3[i].getAttribute('data-grp'),
                'id': tempb3[i].getAttribute('data-id'),
                'label': tempb3[i].value
            })    
           }
         
       }
    



       console.log("final Object");
       console.log(objSaved);

       
       





    };

    
    render(){
      
        let printHead, printBody, printFooter; 

        //console.log(this.props.location.currentState);

       //const {headerSection, headerUI, bodySection, bodyUI, footerSection, footerUI} = this.props.location.currentState;

        // if(headerUI=='head1')
        // {
        //     printHead = <FormHeadOne headerSection={headerSection}/>
        // }
        // if(bodyUI=='body1')
        // {
        //     printBody = <FormBodyOne bodySection={bodySection}/>
        // }
        // if(footerUI=="footer1")
        // {
        //     printFooter = <FormFooterOne footerSection={footerSection}/>
        // }
        printHead = <FormHeadOne/>
        printBody = <FormBodyOne/>
        printFooter = <FormFooterOne/>
        
        
        return(
            <div>
               {printHead}
               {printBody}
               {printFooter}
               
               <button className="m_b" onClick={this.saveFormat}>Save Format</button>
                
            </div>
            
            
        )
    }
}