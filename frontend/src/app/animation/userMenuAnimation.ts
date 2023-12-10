import { animate, query, sequence, stagger, style, transition, trigger } from "@angular/animations";

export const userMenuAnimation=trigger("userDropDownMenu",[
    transition(":enter",[
    style({height:0}),
    sequence([
        animate("200ms",style({height:"180px"}))
    ])
    ]),

    transition(":leave",[
        style({height:"180px"}),
        sequence([
            animate("200ms",style({height:"0px"}))
        ])
        ]) 
]);