import React from 'react';
import BodyOne from "./BodyOne";

export default class headDesign extends React.Component{

    constructor(props){
        super(props);
    }

    


    render(){

        let panelUI;

        let {bodyParam,body} = this.props;

        //console.log(designParam);

        switch(bodyParam){
            case 'body1':
                panelUI = <BodyOne body={body}/>
            break;    
        }

        return(
            <div>
                <div className="titlebar1">Body</div>
                {panelUI}

            </div>
        )
    }
}