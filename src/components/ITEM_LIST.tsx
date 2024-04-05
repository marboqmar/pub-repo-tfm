import {ItemDetailsModel} from "../models/itemDetails.ts";

const ITEM_LIST: ItemDetailsModel[] = [
    {
        key: 1,
        name: `Knight's greatsword`,
        image: '/public/swords/knights-greatsword.png',
        price: 205,
        display: true,
    },
    {
        key: 2,
        name: `Godslayer's greatsword`,
        image: '/public/swords/godslayers-greatsword.png',
        price: 305,
        display: true,
    },
    {
        key: 3,
        name: `Flamberge`,
        image: '/public/swords/flamberge.png',
        price: 405,
        display: true,
    },
    {
        key: 4,
        name: `Crystal knife`,
        image: '/public/swords/crystal-knife.png',
        price: 95,
        display: true,
    },
    {
        key: 5,
        name: `Magma blade`,
        image: '/public/swords/magma-blade.png',
        price: 105,
        display: true,
    },
];

export default ITEM_LIST;