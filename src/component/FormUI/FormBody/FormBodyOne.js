import React from 'react';

export default class FormBodyOne extends React.Component{

    constructor(props){
        super(props);
        this.state={
            valuesPrint: null
        }
    }

    componentDidMount(){
        
        if(localStorage.getItem('user'))
        {
            //console.log(JSON.parse(localStorage.getItem('user')));
            this.setState({
                valuesPrint: JSON.parse(localStorage.getItem('user'))
            })
        }
        else
        {
            this.setState({
                valuesPrint: this.props.bodySection
            },()=>{
                localStorage.setItem('user', JSON.stringify(this.props.bodySection));
            })
        }
    }

    render(){

        const {valuesPrint} = this.state;

       // console.log(valuesPrint);
       //console.log("[render]: FormBodyOne");

     



    

       


        let header,generateblank, bottomValues, lastgrp, lastgrpUI;

        

        if(valuesPrint)
        {
            lastgrp = valuesPrint[valuesPrint.length-1]["bcolumn_"+(valuesPrint.length-1)];

            // console.log(lastgrp);
            // console.log(lastgrp.length);
            // console.log(lastgrp[0]);

            header = valuesPrint.map((val,index)=>{              

                if(index<(valuesPrint.length-1) && val["bcolumn_"+index][0])
                {
                    let value = val["bcolumn_"+index][0]["id"]+"_label";
                    let label=val["bcolumn_"+index][0]["label"];
                    let idv= val["bcolumn_"+index][0]["id"];
                    
                    return(
                        <td key={index} className="setbg2 setg3 setbg2" >
                            <input 
                                type="text" 
                                name={value}  
                                defaultValue={label} 
                                className="widinp fp2_DIG"
                                data-grp={index}
                                data-id={idv}
                                data-caty="bodyTop" />
                        </td>
                    )
                }
            });

            generateblank= valuesPrint.map((val,index)=>{
                if(index<(valuesPrint.length-1) && val["bcolumn_"+index][0])
                {   
                    return(
                        <td key={index} className="setcel1 txtc setg3 setbg2" >
                            -
                        </td>
                    )
                }
            });

            lastgrpUI = lastgrp.map((val,index)=>{
                // console.log(index+"----");
                // console.log(val);
                let inpVal=val.label;
                let idv=val.id

                return(<tr key={index}>
                    {
                        valuesPrint.map((v,i)=>{
                           
                            if(i<(valuesPrint.length-1) && v["bcolumn_"+i][0])
                            {
                                if(i==1)
                                {
                                  
                                    return(
                                        <td key={i} className="setcel1 txtc setg3 setbg2" >
                                           <input 
                                                type="text" 
                                                name={inpVal} 
                                                id={idv}  
                                                defaultValue={inpVal} 
                                                className="wid70p fp2_DIG"
                                                data-caty="bodyBottom" />
                                        </td>
                                    )
                                }
                                else
                                {
                                    return(
                                        <td key={i} className="setcel1 txtc setg3 setbg2" >
                                            -
                                        </td>
                                    )
                                }
                              
                            }
                            

                           
                        })
                    }
                </tr>)               

            });


           // bottomValues = valuesPrint.map((val,index)=>{

                
               
                // if(index==0 && val["bcolumn_"+index][0])
                // {
                //     return(
                //         <td key={index} style={{"height":"100px","border":"1px solid #fff","width":"70px"}} >
                            
                //         </td>
                //     ) 
                // }
                // if(index==0 && val["bcolumn_"+index][0])
                // {
                //     let value = lastgrp[0]["id"]+"_label";
                //     let label=val["bcolumn_"+index][0]["label"];
                //     return(
                       
                //         <td key={index} >
                //             <input type="text" name={value}  defaultValue={label} className="widinp" />
                //         </td>
                //     );
                // }

                


            //});
        }

       

        return(
             <div className="mt5 bg1 fullw">                    
                    <table className="brcollap" cellPadding="0" cellSpacing="0" className="setbg2 setg1">
                        <tbody>
                            <tr>
                                <td className="setbg2 setg3 p_c">
                                    <table className="fullw setbg2 setg1" cellPadding="0" cellSpacing="0" id="borderTop">
                                        <tbody>
                                            <tr>
                                                {header}
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                               
                            </tr>
                            <tr>
                               <td className="setbg2 setg3 p_c">
                                    <table className="fullw setg1 setbg2" cellPadding="0" cellSpacing="0">
                                    <tbody>
                                        <tr>
                                            {generateblank}
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>                               
                            </tr>
                            <tr>
                                <td className="setbg2 setg3 p_c">
                                    <table className="fullw setg1 setbg2" cellPadding="0" cellSpacing="0" id="borderBottom">
                                        <tbody>
                                           
                                                {lastgrpUI}
                                           
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