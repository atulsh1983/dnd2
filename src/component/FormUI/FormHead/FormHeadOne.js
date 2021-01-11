import React from 'react';

export default class FormOne extends React.Component{

    constructor(props){
        super(props);
    }

    onTodoChange = (value) =>{
        this.setState({
             name: value
        });
    }




    render(){

        let { headerSection } = this.props;

        console.log(headerSection);

        let headerPrint = null;

        let setUI,leftCol1,midCol1, rightCol1, leftCol2, midCol2, rightCol2 = null;
        
       
        if(headerSection[0]['column_0'].length>0)
        {
           
            leftCol1 = headerSection[0]['column_0'].map((val,index)=>{              
                let label, field = null;
                if(val.labelEdit==='N')
                {
                    label = <label className="wid200">{val.label}:</label>
                }
                else
                {
                    label = <div className="wid200"><input type="text" name={val.id+"_label"} defaultValue={val.label} onChange={e => this.onTodoChange(e.target.value)}/></div>
                }
                field = <input type="text" name={val.id} disabled/>  
                
                return(
                    <div key={val.id} className="setbox pad1">
                        {label}
                        {field}
                    </div>
                )
            })
        }
        if(headerSection[1]['column_1'].length>0)
        {
           
            midCol1 = headerSection[1]['column_1'].map((val,index)=>{              
                let label, field = null;
                if(val.labelEdit==='N')
                {
                    label = <label className="wid200">{val.label}:</label>
                }
                else
                {
                    label = <div className="wid200"><input type="text" name={val.id+"_label"} defaultValue={val.label} onChange={e => this.onTodoChange(e.target.value)}/></div>
                }
                field = <input type="text" name={val.id} disabled/>  
                
                return(
                    <div key={val.id} className="setbox pad1">
                        {label}
                        {field}
                    </div>
                )
            })
        }
        if(headerSection[2]['column_2'].length>0)
        {
           
            rightCol1 = headerSection[2]['column_2'].map((val,index)=>{              
                let label, field = null;
                if(val.labelEdit==='N')
                {
                    label = <label className="wid200">{val.label}:</label>
                }
                else
                {
                    label = <div className="wid200"><input type="text" name={val.id+"_label"} defaultValue={val.label} onChange={e => this.onTodoChange(e.target.value)}/></div>
                }
                field = <input type="text" name={val.id} disabled/>  
                
                return(
                    <div key={val.id} className="setbox pad1">
                        {label}
                        {field}
                    </div>
                )
            })
        }
        if(headerSection[3]['column_3'].length>0)
        {
           
            leftCol2 = headerSection[3]['column_3'].map((val,index)=>{              
                let label, field = null;
                if(val.labelEdit==='N')
                {
                    label = <label className="wid200">{val.label}:</label>
                }
                else
                {
                    label = <div className="wid200"><input type="text" name={val.id+"_label"} defaultValue={val.label} onChange={e => this.onTodoChange(e.target.value)}/></div>
                }
                field = <input type="text" name={val.id} disabled/>  
                
                return(
                    <div key={val.id} className="setbox pad1">
                        {label}
                        {field}
                    </div>
                )
            })
        }
        if(headerSection[4]['column_4'].length>0)
        {
           
            midCol2 = headerSection[4]['column_4'].map((val,index)=>{              
                let label, field = null;
                if(val.labelEdit==='N')
                {
                    label = <label className="wid200">{val.label}:</label>
                }
                else
                {
                    label = <div className="wid200"><input type="text" name={val.id+"_label"} defaultValue={val.label} onChange={e => this.onTodoChange(e.target.value)}/></div>
                }
                field = <input type="text" name={val.id} disabled/>  
                
                return(
                    <div key={val.id} className="setbox pad1">
                        {label}
                        {field}
                    </div>
                )
            })
        }
        if(headerSection[5]['column_5'].length>0)
        {
           
            rightCol2 = headerSection[5]['column_5'].map((val,index)=>{              
                let label, field = null;
                if(val.labelEdit==='N')
                {
                    label = <label className="wid200">{val.label}:</label>
                }
                else
                {
                    label = <div className="wid200"><input type="text" name={val.id+"_label"} defaultValue={val.label} onChange={e => this.onTodoChange(e.target.value)}/></div>
                }
                field = <input type="text" name={val.id} disabled/>  
                
                return(
                    <div key={val.id} className="setbox pad1">
                        {label}
                        {field}
                    </div>
                )
            })
        }
     
     
     

        

        

        return(
            <div className="fullw">
                <div className="txtc sethead">Tax Invoice</div>
                <div id="SenderDetails" className="mt5 bg1 dispt fullw setequal">                    
                    <div id="header_col_0" className="disptc vmid">{leftCol1}</div>
                    <div id="header_col_1" className="disptc vmid">{midCol1}</div>
                    <div id="header_col_2" className="disptc vmid">{rightCol1}</div>                
                </div>
                <div id="RecieverDetails" className="mt5 bg1 dispt fullw setequal">
                    <div id="header_col_3" className="disptc vmid">{leftCol2}</div>
                    <div id="header_col_4" className="disptc vmid">{midCol2}</div>
                    <div id="header_col_5" className="disptc vmid">{rightCol2}</div>                    
                </div>
            </div>
        );
    }
}