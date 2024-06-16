import React from 'react';
import {
  Drawer as PrimitiveDrawer,
  DrawerPortal as PrimitiveDrawerPortal,
  DrawerOverlay as PrimitiveDrawerOverlay,
  DrawerTrigger as PrimitiveDrawerTrigger,
  DrawerClose as PrimitiveDrawerClose,
  DrawerContent as PrimitiveDrawerContent,
  DrawerHeader as PrimitiveDrawerHeader,
  DrawerFooter as PrimitiveDrawerFooter,
  DrawerTitle as PrimitiveDrawerTitle,
  DrawerDescription as PrimitiveDrawerDescription
} from '../../primitives/drawer'

interface DrawerProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (val: boolean) => void;
}

export function Drawer ({
  children,
  open,
  onOpenChange,
}: DrawerProps) {
  const childrenArray = React.Children.toArray(children);
  const triggerChild = findChildWithSymbol(childrenArray, DrawerTriggerSymbol);
  const otherChildren = findOtherChildren(childrenArray, [DrawerTriggerSymbol]);
  console.log(triggerChild)

  return (
    <PrimitiveDrawer open={open} onOpenChange={onOpenChange}>
      {triggerChild}
      <PrimitiveDrawerContent>
        {otherChildren}
      </PrimitiveDrawerContent>
    </PrimitiveDrawer>
  );
}

Drawer.Trigger = function DrawerTrigger ({
  children
}) {
  return (
    <PrimitiveDrawerTrigger>
      {children}
    </PrimitiveDrawerTrigger>
  );
}

const DrawerTriggerSymbol = Symbol('Drawer.Trigger');

Object.assign(Drawer.Trigger, { [DrawerTriggerSymbol]: true })

function findChildWithSymbol (children: React.ReactNode | React.ReactNode[], symbol: symbol) {
  const stuff = Array.isArray(children) ? children : React.Children.toArray(children);
  console.log(stuff)
  return stuff.find((child) => hasSymbol(child, symbol));
}

function hasSymbol(child: React.ReactNode, symbol: symbol) {
  return symbol in child && child[symbol] === true;
}

function findOtherChildren(children: React.ReactNode | React.ReactNode[], symbols: symbol[]) {
  const stuff = Array.isArray(children) ? children : React.Children.toArray(children);
  return stuff.filter((child) => !symbols.find((symbol) => hasSymbol(child, symbol)));
}
