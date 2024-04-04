import {ItemDetailsModel} from "../models/itemDetails.ts";

const ITEM_LIST: ItemDetailsModel[] = [
    {
        key: 1,
        name: `Knight's greatsword`,
        image: '/public/swords/knights-greatsword.png',
        price: 200,
    },
    {
        key: 2,
        name: `Godslayer's greatsword`,
        image: '/public/swords/godslayers-greatsword.png',
        price: 300,
    }
];

export default ITEM_LIST;