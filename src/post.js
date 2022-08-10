import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './post.css'

const Post=()=>{

    const [allPost, setAllPost] = useState([]);
    const[searchTerm,setsearchTerm]=useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => {
            return res.json();
          })
          .then((postData) => {
            
            setAllPost(postData);
            
          });
      }, []);



    return(
      <>
      

      <div>
          
          <select className="select"  onChange={(e)=>{
      setsearchTerm(e.target.value);
    }} >
          <option>select</option>
              <option>men's clothing</option>
              <option>women's clothing</option>
              <option>jewelery</option>
              <option>electronics</option>
          </select>
      </div>

      <div>
      {allPost.filter((val)=>{
          
        if(searchTerm===""){
          return val;
        }else{
           return val.category.toLowerCase().includes(searchTerm.toLowerCase()) 

        }
      }).map((ele,i)=>{
        const renderDesc=()=>{
                  alert(ele.description)
        }
        return (
                      <div className="post" key={i}>
                      <img alt="img" className="i4" src={ele.image} onMouseOver={renderDesc}></img>
                      <div> 
                      <span>itemvalue={ele.price}</span>
                      </div>
                      <div> 
                      <span>itemcategory={ele.category}</span>
                      </div>
                      </div>
                  )
              })
          };
      </div>

      </>
    );
};

export default  Post;