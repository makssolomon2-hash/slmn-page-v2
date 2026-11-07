"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuLabel = DropdownMenuPrimitive.Label;

function DropdownMenuContent({
  className,
  sideOffset = 10,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className={cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] w-72 overflow-y-auto rounded-xl border border-white/15 bg-[#0b0b0c]/95 p-2 text-white shadow-2xl backdrop-blur-2xl data-[state=open]:animate-[menu-in_180ms_ease-out]", className)}
        sideOffset={sideOffset}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuItem({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Item>) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn("relative flex min-h-11 cursor-pointer select-none items-center gap-2 rounded-md px-3 text-sm text-slate-300 outline-none focus:bg-white/10 focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)}
      {...props}
    />
  );
}

function DropdownMenuSeparator(props: ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return <DropdownMenuPrimitive.Separator {...props} className={cn("-mx-2 my-2 h-px bg-white/10", props.className)} />;
}

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator };
