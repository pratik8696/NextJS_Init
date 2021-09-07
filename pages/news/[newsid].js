import React from 'react';
import {useRouter} from "next/router";

function newsdetails() {
    const route=useRouter();

    console.log(route.query.newsid);
    return (
        <div>
            <h1>This is a dynamically loaded page</h1> 
        </div>
    )
}

export default newsdetails;
