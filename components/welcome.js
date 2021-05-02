import React from "react";
import Link from "next/link";

function welcome() {
  return (
    <div>
      <h1 className="cursor-pointer text-6xl">
        <Link href="/results">
          <span className="no-underline font-serif">
            Start your adventure here...
          </span>
        </Link>
      </h1>
    </div>
  );
}

export default welcome;
