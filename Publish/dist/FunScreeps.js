 var Global=this,Runtime=this.IntelliFactory.Runtime,Screeps,Globals,String;
 Runtime.Define(Global,{
  FunScreeps:{
   MyModule:{
    main:function(a)
    {
     var b,copyOfStruct;
     b=Globals.COLOR_RED();
     copyOfStruct=0+a;
     return String(copyOfStruct)+b;
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  Screeps=Runtime.Safe(Global.Screeps);
  Globals=Runtime.Safe(Screeps.Globals);
  return String=Runtime.Safe(Global.String);
 });
 Runtime.OnLoad(function()
 {
  return;
 });
