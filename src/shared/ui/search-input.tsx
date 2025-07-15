import { SearchIcon } from "lucide-react";
import { useRef } from "react";

import { cn } from "@shared/lib";

import { Input } from "./input";

export const SearchInput = ({ className, ...props }: React.ComponentProps<"input">) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => searchInputRef.current?.focus();

  return (
    <div
      className={cn(
        "group border-input flex cursor-text items-center rounded-sm border px-3 max-sm:pr-0 max-sm:pl-2",
        "transition-all duration-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500",
        className
      )}
    >
      <SearchIcon
        className='text-ring size-5 group-focus-within:text-blue-500'
        onClick={handleClick}
      />
      <Input
        ref={searchInputRef}
        className='border-0 py-0 focus-visible:!border-0 focus-visible:!ring-0'
        {...props}
      />
    </div>
  );
};
