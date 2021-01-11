import React from 'react';

export default class FormBodyOne extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const {bodySection} = this.props;

        console.log(bodySection);

        let tempBodyUI = bodySection.map((val,index)=>{
            console.log(index);
            console.log(val);
           
        })

        return(
             <div id="SenderDetails" className="mt5 bg1 dispt fullw setequal">                    
                <div id="body_col_0" className="disptc vmid">1</div>
                <div id="body_col_1" className="disptc vmid">2</div>
                <div id="body_col_2" className="disptc vmid">3</div>                
            </div>
        )
    }




}