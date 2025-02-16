 "use client";
 import React from 'react'
  import { useState } from 'react';

import { Drawer,  DrawerContent,  DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';
 
 
 const CreateAccountDrawer = ({children}) => {
  const [open, setOpen] =  useState(false)
   return (
    <Drawer open={open} onOpenChange={setOpen}>   
  <DrawerTrigger asChild>{children}</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Create New Account</DrawerTitle>
    
    </DrawerHeader>
    
  </DrawerContent>
</Drawer>

   )
 }
 
 export default CreateAccountDrawer