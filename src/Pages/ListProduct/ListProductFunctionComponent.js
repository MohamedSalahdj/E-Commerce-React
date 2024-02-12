import axios from "axios";
import { useEffect, useState } from "react";
import ProductCardComponent from "../../Components/ProductCardComponent";



function ListProductFunctionComponent() {

    const [productList, setProductList] = useState([])
    const [skipItem, setSkipItem] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(()=>{
            axios.get(`https://dummyjson.com/products?limit=25&skip=${skipItem}`)
            .then((res) => setProductList(res.data.products))
            .catch((err) => console.log("err"))
    },[pageNumber,skipItem])
    
    const previousPage = (pagNum) =>{
        setPageNumber(--pagNum)
        if(pagNum == 1) {
            setSkipItem(0)
        }
        else if(pagNum == 2) {
            setSkipItem(25)
        }
        else if(pagNum == 3) {
            setSkipItem(50)
        }
        else if(pagNum == 4) {
            setSkipItem(75)
        }

    }

    const nextPage = (pagNum) => {
        setPageNumber(++pagNum)
        if(pagNum == 1) {
            setSkipItem(0)
        }
        else if(pagNum == 2) {
            console.log("yes in page 2")
            setSkipItem(25)
        }
        else if(pagNum == 3) {
            setSkipItem(50)
        }
        else if(pagNum == 4) {
            setSkipItem(75)
        }
    }




    

    //here





    
 


    return (
        <>  
            <h1 className="text-center mt-5">ALL products</h1>
            <div className="container">
                <div className="row">
                {productList.map((product,index)=> {
                     const truncatedDescription = product.description.length > 50 ?
                     product.description.substring(0, 50) + " ..." :
                     product.description;
                    return (
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <ProductCardComponent productId={product.id} productImage={product.thumbnail} productTitle={product.title} productDescription={truncatedDescription} productPrice={product.price}/>
                        </div>
                        )
                    })}
        <nav aria-label="Page navigation example mt-5 ">
            <ul class="pagination d-flex justify-content-center ">
                {pageNumber >1 ? <li className="page-item"><button onClick={()=> previousPage(pageNumber)} className='page-link'>Previous</button></li> 
                :   <li className="page-item"><button onClick={()=> previousPage(pageNumber)} className='page-link disabled'>Previous</button></li>}
                {pageNumber >=1 && pageNumber <=3 ? <li className="page-item"> <button onClick={()=> nextPage(pageNumber)} className='page-link'>Next</button></li> 
                : <li className="page-item"> <button onClick={()=> nextPage(pageNumber)} className='page-link disabled'>Next</button></li> }
                
            </ul>
            </nav>
                </div>
            </div>


        </>
    )
}

export default ListProductFunctionComponent;