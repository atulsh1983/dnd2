import React from 'react';
import FooterOne from "../footerDesign/footerOne";

export default class footerDesign extends React.Component{

    constructor(props){
        super(props);
    }

    


    render(){

        let panelUI;

        let {footerParam,footer} = this.props;

       

        switch(footerParam){
            case 'footer1':
                panelUI = <FooterOne footer={footer}/>
            break;    
        }

        return(
            <div>
                <div className="titlebar1">Footer</div>
                {panelUI}

            </div>
        )
    }
}