"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon, ImageIcon, PenIcon, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer ",
  },
};

export const FoodData = ({ key, catId, categoriesData }) => {
  const [isShow, setIsShow] = useState(false);
  const [foods, setFoods] = useState([]);
  const getData = async () => {
    const data = await fetch("http://localhost:8000/foods", options);
    const jsonData = await data.json();

    setFoods(jsonData);
  };
  console.log(foods, "hooolooooo");
  const HandleAddCategoryButton = () => {
    setIsShow(true);
  };
  const HandleAddCategoryXButton = () => {
    setIsShow(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full relative justify-start bg-white p-4 rounded-[6px]">
      <div className="text-xl font-semibold">{categoriesData} (6)</div>
      <div className="flex h-full gap-3 w-full flex-wrap pt-4">
        <div className="flex justify-center items-center border-[1px] border-[#18181B] border-dashed rounded-[20px]">
          <div className="w-full h-full items-center flex-col justify-center pl-15 pr-15 pt-17 pb-17">
            <div className="w-full flex justify-center items-center">
              <Button
                className="rounded-[100%] w-10 h-10 flex items-center justify-center "
                variant="destructive"
                onClick={HandleAddCategoryButton}
              >
                +
              </Button>
            </div>
            <p className="text-sm w-[154px] pt-6 text-center text-[#18181B]">
              Add new Dish to Appetizers
            </p>
          </div>
        </div>
        {foods.map((cur) => (
          <div className="flex justify-center items-center border-[1px] border-[#E4E4E7] border-solid rounded-[20px]">
            <div className="w-[260px] h-full items-center flex-col justify-center p-3">
              <div className="w-full flex justify-end items-end">
                <img className="w-full h-[129px] relative" src="/globe.svg" />

                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-11 h-11 absolute text-[#EF4444]"
                >
                  <PenIcon />
                </Button>
              </div>
              <h1 className="flex text-sm text-[#EF4444] justify-between pt-5">
                {cur.foodName}
                <span className="text-[#09090B] text-xs">{cur.price}₮</span>
              </h1>
              <p className="text-xs w-full pt-2 text-start text-[#09090B]">
                {cur.ingredients}
              </p>
            </div>
          </div>
        ))}
      </div>
      {isShow && (
        <div className="w-[460px] bg-white border-[1px] rounded-md absolute z-10 left-[28%] top-[1%]">
          <div className="flex justify-between items-center w-full text-lg font-bold p-6">
            <p className="w-full">Add new Dish to Appetizers</p>
            <Button
              variant="outline"
              size="icon"
              onClick={HandleAddCategoryXButton}
              className="rounded-full w-9"
            >
              <XIcon />
            </Button>
          </div>
          <div className="flex justify-between items-center w-full h-15 text-lg font-bold p-6">
            <div className="grid w-[45%] text-sm items-center gap-3">
              <label className="text-sm font-medium" htmlFor="Food name">
                Food name
              </label>
              <Input
                className="font-light"
                type="Food name"
                id="Food name"
                placeholder="Type food name"
              />
            </div>
            <div className="grid w-[45%] text-sm items-center gap-3">
              <label className="text-sm font-medium" htmlFor="Food name">
                Food price
              </label>
              <Input
                className="font-light"
                type="Food price"
                id="Food price"
                placeholder="Enter price..."
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full text-lg font-bold  p-6">
            <div className="grid w-full h-[112px] gap-3 text-sm">
              <label
                className="text-sm font-light w-full"
                htmlFor="Ingredients"
              >
                Ingredients
              </label>
              <Input
                className="font-light h-[90px] w-full text-start"
                type="Ingredients"
                id="Ingredients"
                placeholder="List ingredients..."
              />
            </div>
          </div>

          <div className="w-full  gap-3 p-6 text-sm">
            <p className=" flex text-sm font-medium w-full pb-3">Food image</p>
            <div className="w- full h-full flex justify-center items-center bg-[rgba(37,_99,_235,0.20)] border-[1px] rounded-md">
              <div className="w-full h-full pt-[39px] pb-[39px] ">
                <div className="w-full flex justify-center pb-2 items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full "
                  >
                    <ImageIcon />
                  </Button>
                </div>
                <div className="w-full flex justify-center items-center text-sm">
                  Choose a file or drag & drop it here
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end p-6 items-center w-full text-lg font-bold ">
            <Button className="h-10 text-sm font-medium">Add Dish</Button>
          </div>
        </div>
      )}
    </div>
  );
};
