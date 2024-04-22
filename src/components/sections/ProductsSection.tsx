"use client";

import ProductCard from "../card/ProductCard";
import React from "react";
import SectionHeader from "../common/SectionHeader";
import SectionLayout from "../common/SectionLayout";
import { motion } from "framer-motion";
import { products } from "@/data/texts/products";

const ProductsSection = () => {
  return (
    <div id='products' >
      <SectionLayout bg>
    
    	  <SectionHeader
          name={"Our Products"}
          title={"We provide different services"}
          description={""}
        />

        <div className="mt-20 pb-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <motion.div
              key={item.key}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ProductCard
                
                icon={item.icon}
                title={item.title}
                description={item.description}
                descriptionSummary={item.descriptionSummary}
              />
            </motion.div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default ProductsSection;
