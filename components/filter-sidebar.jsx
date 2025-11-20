'use client';

import { redirect } from "next/navigation";
import { useState } from "react";


export default function Sidebar(){
    const [searchParam, updateSerachParam] = useState({
        input: "",
        age: "DESC",
        searchby: "title"
    });

    const updateInput = () => {
        updateSerachParam(prevData => ({
            ...prevData,
            input: document.getElementById("search").value
        }))
    };

    const updateAge = () => {
        updateSerachParam(prevData => ({
            ...prevData, 
            age: document.getElementById("age").value
        }))
    };
    
    const updateSearch = () => {
        updateSerachParam(prevData => ({
            ...prevData,
            searchby: document.getElementById("searchby").value
        }))
    };

    function Search(){
        let searchSlug = searchParam.input + "_" + searchParam.age + "_" + searchParam.searchby;
        redirect(`/posts/search/${searchSlug}`);
        
    }


    return(
        <div className="filterbox">
            <p>Search by Title or Creator</p>
            <input type="text" id="search" placeholder="Search for Posts" autoComplete="off" className="border bg-white w-full p-2 rounded-3xl"
            onChange={updateInput}></input>
            <label htmlFor="age" className="underline">Date Posted</label>
            <select id="age" name="age" className="bg-white rounded-full p-1 xlg:w-full" onChange={updateAge}>
                <option value="DESC">Newest first</option>
                <option value="ASC">Oldest first</option>
            </select>
            <label htmlFor="age" className="underline">Search By</label>
            <select id="searchby" name="searchby" className="bg-white rounded-full p-1 xlg:w-full" onChange={updateSearch}>
                <option value="title">Title</option>
                <option value="creator">Author</option>
            </select>
            <button className="submitButton w-full" onClick={() => (Search())}>Search</button>
        </div>
    )
}