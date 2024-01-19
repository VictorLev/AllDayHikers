"use client"

import Image from "next/image";
import { useState } from "react";


const Billboard = () => {

    return (
      <div className="display">
        <Image
          src="/home-billboard/leo_visions-6E6oMx-69Ns-unsplash.jpg"
          width={1000}
          height={1000}
          alt="billboard"
        />
      </div>
     );
}

export default Billboard;
