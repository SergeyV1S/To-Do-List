import { MoonIcon, PcCaseIcon, SunIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger
} from "@shared/ui";

import { useTheme } from "./ThemeProvider";
import type { TTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
  const { theme, setNewTheme } = useTheme();

  return (
    <Select value={theme} onValueChange={(value) => setNewTheme(value as TTheme)}>
      <SelectTrigger arrow={false}>
        {theme === "light" && (
          <SunIcon className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
        )}
        {theme === "dark" && (
          <MoonIcon className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
        )}
        {theme === "system" && (
          <PcCaseIcon className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
        )}
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Priority</SelectLabel>
          <SelectItem value='light'>Light</SelectItem>
          <SelectItem value='dark'>Dark</SelectItem>
          <SelectItem value='system'>System</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
