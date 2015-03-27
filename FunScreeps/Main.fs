namespace FunScreeps

open WebSharper
open Screeps

[<JavaScript>]
module MyModule =
    let main a = 
        let b = Globals.COLOR_RED
        (0 + a).ToString() + b