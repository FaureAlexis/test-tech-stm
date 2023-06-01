import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";

function ItemDrawer({ isOpen, onClose, children }) {
    return (
        <>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Card details</DrawerHeader>
    
            <DrawerBody>{children}</DrawerBody>
    
            <DrawerFooter></DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    );
}

export default ItemDrawer;
