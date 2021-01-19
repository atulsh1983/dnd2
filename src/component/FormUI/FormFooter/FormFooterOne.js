import React from 'react';

export default class FormFooterOne extends React.Component{
    constructor(props){
        super(props);
        this.state={
            valuesPrint: null
        }
    }


    componentDidMount(){

       // console.log("[footer one ] did mount")
        
        if(localStorage.getItem('userfooter'))
        {
            //console.log(JSON.parse(localStorage.getItem('user')));
            this.setState({
                valuesPrint: JSON.parse(localStorage.getItem('userfooter'))
            })
        }
        else
        {
            this.setState({
                valuesPrint: this.props.footerSection
            },()=>{
                localStorage.setItem('userfooter', JSON.stringify(this.props.footerSection));
            })
        }
    }

    onTodoChange = (value) =>{
        this.setState({
             name: value
        });
    }


    render(){
        let printfooter;
        const {valuesPrint} = this.state;

        //console.log("[render] footer")

        

       
        
        if(valuesPrint)
        {
           

            printfooter= valuesPrint[0]["fcolumn_0"].map((v,i)=>{
               
                return(
                    <tr key={i}>
                        <td className="p_a">
                            <input 
                                type="text" 
                                name={v.id+"_label"} 
                                defaultValue={v.label} 
                                onChange={e => this.onTodoChange(e.target.value)}
                                data-id={v.id}
                                data-grp="0"/>
                        </td>
                        <td className="p_a">
                            <input type="text" name={v.id} disabled/> 
                        </td>
                    </tr>
                )
            })
        }

        return(
            <div className="mt5 bg1 fullw">
                <table className="brcollap" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td>
                                <table className="fullw" cellPadding="0" cellSpacing="0" id="footerblock">
                                    <tbody>
                                       
                                            {printfooter}
                                        
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
               
            </div>
        )
    }
}