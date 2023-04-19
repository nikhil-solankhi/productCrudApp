import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
    let [details, setdetail] = useState("");
    let [price, setprice] = useState("");
    let [name, setname] = useState("");
    let [discount, setdiscount] = useState("");
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
    const handleChange = (event) => {
        console.log("In Handle Change Function");
        const { name, value } = event.target;
        setproductform({ ...productform, [name]: value })
        console.log("name: " + name + " value: " + value);
    }
   



    const submitFun=(event)=>{
        event.preventDefault();
        if(ProductArr==null){
            ProductArr=[];
        }
        Product={id:0,name:name,details:details,price:parseInt(price),discount:parseInt(discount)};     
        console.log(Product);
        ProductArr.push(Product);
        console.log(ProductArr);
        
       axios.post("http://localhost:8080/products",Product).then((res)=>{
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
                <input type="text"value={name} onChange={e => setname(e.target.value)}></input>
                </div>
                <div>
                <label>detail: </label>
                <input type="text" value={details} onChange={e => setdetail(e.target.value)}></input>
                </div>
                <div>
                <label>price: </label>
                <input type="number" value={price} onChange={e => setprice(e.target.value)}></input>
                </div>
                <div>
                <label>discount: </label>
                <input type="number" value={discount} onChange={e => setdiscount(e.target.value)}></input>
                </div>
                <div>
                <button type="submit" onClick={submitFun}>Submit</button>
                </div>
                
                
                
               
               
            </form>
        </div>
    )
}
export default ProductEdit;