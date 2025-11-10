"use client";
import { DeliveryIkon } from "@/app/FoodIkon/deliveryIkon";
import { MenuIkon } from "@/app/FoodIkon/menuikon";
import { NomNom } from "@/app/FoodIkon/nomnom";
import { FoodData } from "./FoodData";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import { ArrowUpRightIcon, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer ",
  },
};

export const AdminFood = () => {
  const [categories, setCategories] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const UPLOAD_PRESET = "foodDelivery";

  const CLOUD_NAME = "didfxzpn3";

  const getData = async () => {
    const data = await fetch("http://localhost:8000/food-category", options);
    const jsonData = await data.json();

    setCategories(jsonData);
  };
  const HandleAddCategoryButton = () => {
    setIsShow(true);
  };
  const HandleAddCategoryXButton = () => {
    setIsShow(false);
  };

  // console.log(categories, "categories");

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-full flex relative">
      <div className="h-full w-[20%] bg-white ">
        <div className="flex justify-center items-center w-full pl-5 pr-5 pt-9">
          <NomNom />

          <p className="text-sm pl-2 pr-9 text-[#71717A]">
            <span className="text-xl font-black text-[#09090B] flex">
              NomNom
            </span>
            Swift delivery
          </p>
        </div>
        <div className="flex justify-center items-center w-full pl-5 pr-5 pt-10">
          <MenuIkon />
          <h1 className="text-sm text-[#09090B] pl-2">Food menu</h1>
        </div>
        <div className="flex w-full pl-14 pr-14 pt-6">
          <button className="flex justify-center items-center gap-2 w-full text-white bg-[#18181B] rounded-[999] h-10">
            <DeliveryIkon />
            <p className="text-sm">Orders</p>
          </button>
        </div>
      </div>
      <div className="h-full w-[80%] pl-6 pt-6 pr-10 pb-13 bg-[#E4E4E7]">
        <div className="w-full flex justify-end pb-6">
          <div className="w-9 h-9 rounded-[999]  bg-black"></div>
        </div>

        <div className="w-full justify-start bg-white p-4 rounded-[6px]">
          <div className="text-xl font-semibold">Dishes category</div>
          <div className="flex flex-wrap gap-3 w-full">
            {categories.map((cur) => (
              <Button className={"rounded-[999]"} variant="outline">
                {cur.categoryName}
                <p className="text-white text-xs rounded-[9999] pl-2 pr-2 bg-black">
                  12
                </p>
              </Button>
            ))}

            <Button
              className="rounded-[100%] w-9 h-9"
              onClick={HandleAddCategoryButton}
              variant="destructive"
            >
              +
            </Button>
          </div>
        </div>

        <div className="w-full pt-6">
          {categories.map((cur) => (
            <div className="w-full pt-4">
              <FoodData
                key={cur.id}
                catId={cur.id}
                categoriesData={cur.categoryName}
              />
            </div>
          ))}
        </div>
      </div>
      {isShow && (
        <div className="w-[460px] bg-white border-[1px] rounded-md absolute z-10 left-[40%] top-[5%]">
          <div className="flex justify-between items-center w-full text-lg font-bold p-6">
            <p className="w-full">Add new category</p>

            <Button
              variant="outline"
              size="icon"
              onClick={HandleAddCategoryXButton}
              className="rounded-full w-9"
            >
              <XIcon />
            </Button>
          </div>
          <div className="flex justify-between items-center w-full text-lg font-bold  p-6">
            <div className="grid w-full text-sm items-center gap-3">
              <label className="text-sm font-light" htmlFor="email">
                Category name
              </label>
              <Input
                className="font-light"
                type="Category name"
                id="Category name"
                placeholder="Type category name..."
              />
            </div>
          </div>
          <div className="flex justify-end p-6 items-center w-full text-lg font-bold ">
            <Button className="h-10 text-sm font-medium">Add category</Button>
          </div>
        </div>
      )}
    </div>
  );
};
