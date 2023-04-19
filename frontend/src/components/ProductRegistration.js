import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductRegistration = () => {
    const [details, setdetail] = useState("");
    const [price, setprice] = useState("");
    const [name, setname] = useState("");
    const [discount, setdiscount] = useState("");
    const navigate = useNavigate();
    var Product;
    var ProductArr= JSON.parse(sessionStorage.getItem("Productdata"));



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
                <label>Name: </label>
                <input type="text"value={name} onChange={e => setname(e.target.value)} required></input>
                </div>
                <div>
                <label>Details: </label>
                <input type="text" value={details} onChange={e => setdetail(e.target.value)} required></input>
                </div>
                <div>
                <label>Price: </label>
                <input type="number" value={price} onChange={e => setprice(e.target.value)} required></input>
                </div>
                <div>
                <label>Discount: </label>
                <input type="number" value={discount} onChange={e => setdiscount(e.target.value)} required></input>
                </div>
                <div>
                <button type="submit" onClick={submitFun}>Submit</button>
                </div>
                
                
                
               
               
            </form>
        </div>
    )
}
export default ProductRegistration;