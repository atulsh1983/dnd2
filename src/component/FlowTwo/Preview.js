import React from "react";
import FormOne from "../FormUI/FormOne";



export default class Preview extends React.Component{

    constructor(props){
        super(props);
    }

    saveFormat = () =>{
        console.log("[Generate the final json]");
        

        var jsonFormValues = {"Header":[]};

        for(let i=0;i<6;i++)
        {
            var divElem = document.getElementById('header_col_'+i);
            
            console.log(divElem);

            var inputElements = divElem.querySelectorAll("input, select, checkbox, textarea");

            console.log(inputElements);
            //console.log(document.getElementById('header_col_'+i));
            //console.log(document.getElementById('header_col_'+i).contains('input'));
            // if(document.getElementById('header_col_'+i).getElementsByTagName('input'))
            // {
            //     let temp = document.getElementById('header_col_'+i).getElementsByTagName('input');
            //     console.log(temp);
            // }
          
        }


        



    };

    
    render(){
        console.log(this.props.location);

        const { header, layoutSelected } = this.props.location;

        let PrintForm=null;

        if(layoutSelected==='d1')
        {
            PrintForm = <FormOne headervalues={header}/>
        }

        
        return(
            <div>
                {PrintForm}
                <button onClick={this.saveFormat}>Save</button>
                
            </div>
            
            
        )
    }
}