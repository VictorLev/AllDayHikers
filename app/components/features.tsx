"use client"

import Section from "./ui/section";
import ProductList from "./product-list";


const Features = () => {

    return (
      <div>
        <Section title={"REDUCE THE BURDEN WITH LIGHTER GEAR"}>
          <div className="flex flex-row justify-center  ">
            <div className="border-2 border-black mt-8 px-4 py-2 tracking-widest">
              VIEW ALL
            </div>
          </div>
          <ProductList />

        </Section>
      </div>
     );
}

export default Features;
