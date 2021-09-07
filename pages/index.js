import React from "react";
import Link from "next/Link";

function index() {
  return (
    <div>
      <h1>This is the Home Page</h1>
      <ul>
        <li>
          <Link href="/news/first-link">This is a first dynamic link</Link>
        </li>
        <li>
          <Link href="/news/second-link">This is a second dynamic link</Link>
        </li>
      </ul>
    </div>
  );
}

export default index;
