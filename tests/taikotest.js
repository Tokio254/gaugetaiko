/* globals gauge*/
"use strict"

const path = require('path');
const {  
    goto, 
    write, 
    press, 
    click, 
    $,
    closeBrowser 
} = require('taiko');
const assert = require("assert");

step("odpalamy", async function() {

    await goto("google.com/maps");
});

step("lecimy do <miejsce_do>", async function(miejsce_do) {  
    await write(miejsce_do);
    await press("Enter");
    await click("Wyznacz tra");
});

step("lecimy z <miejsce_z>", async function(miejsce_z) {  
await write(miejsce_z);
await press("Enter");
});

step("lecimy z buta", async function(){
    await click($('//*[@id="omnibox-directions"]/div/div[2]/div/div/div/div[4]'));
    await click("przez ");
});

step("koniec", async function(){

    await closeBrowser();
});