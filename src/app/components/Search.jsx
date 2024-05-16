"use client"
import React, { useState } from 'react'
import { items } from '../category/page'
    

const Search =() => {
    const [searchTerm, setSearchTerm] = useState('')

    const SearchCategory = (items,SearchValue) =>{
    const SearchResult=items.filter(item => item.category = SearchValue)
    return SearchResult
    }

    const HandleSubmit = (event) => {
        event.preventDefault() 
        SearchCategory(items,searchTerm)
    }  
    console.log(searchTerm)
        return (
          <form onSubmit={HandleSubmit}>
              <input type="text" placeholder='Search' value={searchTerm} onChange={(event)=>{setSearchTerm(event.target.value)}} className='mt-4 rounded pt-4 pr-14 mr-8 '/>
              <button type="submit">Submit</button> 
          </form>
        )
      }
      


export default Search;