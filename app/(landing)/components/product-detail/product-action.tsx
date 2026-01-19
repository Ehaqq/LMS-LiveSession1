"use client";

import { FiArrowRight,  FiChevronDown, FiChevronUp, FiShoppingBag } from "react-icons/fi";
import Button from "../ui/button";
import React, { use } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { Product } from "@/app/types";

type TProductActionProps = {
    product: Product;
    stock: number;
}

const ProductAction = ({product, stock}: TProductActionProps) => {
    const {addItem} = useCartStore();

    const {push} = useRouter();

    const [qty, setQty] = React.useState(1);

    const handleAddToCart = () => {
        addItem(product, qty)
    };

    const handleCheckout = () => {
        push("/checkout")
    };

  return (
    <div className="flex gap-5">
        <div className="border border-gray-500 inline-flex w-fit min-w-20.5">
            <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center">
                <span>{qty}</span>
            </div>
            <div className="flex flex-col">
                <div className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex justify-center items-center"
                    onClick={() => setQty(qty < stock ? qty + 1 : qty)}
                >
                    <FiChevronUp/>
                </div>
                <div className="cursor-pointer h-1/2 aspect-square flex justify-center items-center"
                    onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
                >
                    <FiChevronDown/>
                </div>
            </div>
        </div>
        <Button className="px-20 w-full" onClick={handleAddToCart}><FiShoppingBag size={24}/>Add To Cart</Button>
        <Button variant="dark"className="px-20 w-full" onClick={handleCheckout}>Checkout Now <FiArrowRight size={24}/></Button>
    </div>
  )
}

export default ProductAction;