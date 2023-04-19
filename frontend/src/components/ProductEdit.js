import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
    let [details, setdetail] = useState("details");
    let [price, setprice] = useState("price");
    let [name, setname] = useState("name");
    let [discount, setdiscount] = useState("discount");
    let navigate = useNavigate();
    let { Prodid } = useParams();
    var Product;
    var ProductArr= JSON.parse(sessionStorage.getItem("Productdata"));
    let [productRes,setProductRes] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:8080/products"+"/"+Prodid).then((res)=>{
            setProductRes(res.data);
            console.log(productRes);
        })
    },[])
    

    const [productform, setproductform] = useState({ details: "", price: "" ,name:"",discount:""});
   
   



    const submitFun=(event)=>{
        event.preventDefault();

        if(ProductArr==null){
            ProductArr=[];
        }
        if(name=="name"){
            name=productRes.name;
        }
        if(price=="price"){
            price=productRes.price;
        }
        if(discount=="discount"){
            discount=productRes.discount;
        }
        if(details=="details"){
            details=productRes.details;
        }
        Product={id:Prodid,name:name,details:details,price:parseInt(price),discount:parseInt(discount)};     
        console.log(Product);
        ProductArr.push(Product);
        console.log(ProductArr);
        
       axios.put("http://localhost:8080/products",Product).then((res)=>{
        console.log(res.data);
       })

       navigate("/prodetails")
       window.location.reload();
    
       
    }
    
    return (
        <div classname="Registration">
            <form>

                <div>
                <label>name: </label>
                <input type="text"placeholder={productRes.name} onChange={e => setname(e.target.value)}></input>
                </div>
                <div>
                <label>detail: </label>
                <input type="text" placeholder={productRes.details} onChange={e => setdetail(e.target.value)}></input>
                </div>
                <div>
                <label>price: </label>
                <input type="number" placeholder={productRes.price} onChange={e => setprice(e.target.value)}></input>
                </div>
                <div>
                <label>discount: </label>
                <input type="number" placeholder={productRes.discount} onChange={e => setdiscount(e.target.value)}></input>
                </div>
                <div>
                <button type="submit" onClick={submitFun}>Submit</button>
                </div>
                
                
                
               
               
            </form>
        </div>
    )
}
export default ProductEdit;