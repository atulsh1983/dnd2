import React from 'react';
import HeadOne from "./headOne";

export default class headDesign extends React.Component{

    constructor(props){
        super(props);
    }

    


    render(){

        let panelUI;

        let {designParam,header} = this.props;

        //console.log(designParam);

        switch(designParam){
            case 'head1':
                panelUI = <HeadOne header={header}/>
            break;    
        }

        return(
            <div>
                <div className="titlebar1">Head</div>
                {panelUI}

            </div>
        )
    }
}