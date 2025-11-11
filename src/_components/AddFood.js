import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon, ImageIcon, PenIcon, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export const AddFood = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-[100%] w-9 h-9" variant="destructive">
            +
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              <p className="w-full">Add new Dish to Appetizers</p>
            </DialogTitle>
          </DialogHeader>
          <div className="flex justify-between items-center w-full h-15 text-lg font-bold">
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
          <div className="flex justify-between items-center w-full text-lg font-bold">
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
          <div className="w-full  gap-3 text-sm">
            <div className="w-full h-40 pb-2">
              <label className=" flex text-sm font-medium w-full pb-3">
                Food image
              </label>

              <Input
                type="File"
                placeholder="Choose a file or drag & drop it here"
                className="w- full h-full flex justify-center items-center bg-[rgba(37,_99,_235,0.20)] border-[1px] rounded-md"
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <div className="flex justify-end pt-10 items-center w-full text-lg font-bold ">
              <Button className="h-10 text-sm font-medium">Add Dish</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
