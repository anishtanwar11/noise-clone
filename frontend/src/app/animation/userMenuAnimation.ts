import { animate, query, sequence, stagger, style, transition, trigger } from "@angular/animations";

export const userMenuAnimation=trigger("userDropDownMenu",[
    transition(":enter",[
    style({right:"-500px"}),
    sequence([
        animate("200ms",style({right:0}))
    ])
    ]),

    transition(":leave",[
        style({right:0}),
        sequence([
            animate("200ms",style({right:"-500px"}))
        ])
        ]) 
]);