import {animate,query,sequence,style,transition,trigger} from "@angular/animations";

export const searchBarAnimation=trigger("placeHolderAnimation",[
    transition(":enter",[
    sequence([
        query("search-placholder::placeholder",[
            animate('300ms',style({fontSize:"0.5rem"}))
        ]) 
    ])
    ]),
    transition(":leave",[
        sequence([
            query("search-placholder::placeholder",[
                animate('300ms',style({fontSize:"5rem"}))
            ]) 
        ])
        ]) 
]);