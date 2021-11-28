import React,{Component} from 'react'
import axios from 'axios'


 class PayGatewayScreen extends Component  {
    constructor(props){
        super(props)
        this.state={

        }
        // this.razorPayHandler=this.razorPayHandler(this);
    }
    async razorPayHandler(e){
        e.preventDefault();
        const orderUrl='http://localhost:9090/razorpay/order'
        const response=await axios.get(orderUrl);
        const{data}=response;

        const options={
            key:'rzp_test_JCtsiLCEBouhZu',
            name:'Noor',
            description:'xyz',
            order_id:data.id,
            handler:async(response)=>{
                try {
                   const paymentId=response.razor_payment_id;
                   const url=`http://localhost:9090/razorpay/capture${paymentId}`
                   const captureResponse=await axios.post(url,{})
                   const successObj=JSON.parse(captureResponse.data);
                   if(successObj.captured){
                       console.log('payment success');
                   }
                } 
                catch(err){
                    console.log(err);
                }
            }
        };
        const rzp1=new window.Razorpay(options);
        rzp1.open()

    }

 render(){
    return (
        <div>
            <button onClick={(e)=>this.razorPayHandler(e)
            } className='btn btn-primary'>
                Pay Now
            </button>
        </div>
    )
        }
 }
   export  default PayGatewayScreen

