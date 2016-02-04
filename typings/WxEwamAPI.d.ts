/// <reference path="ewamex.d.ts" />
/// <reference path="ewam.d.ts" />
declare module MRS_IDEAPI {
   function FindEntityInDeliveriesBundle(thisDelBundle:aDeliveriesBundle, Entity:aEntity, CandidateRank:Number);
   function _SearchInBundles(entity:aEntity):string;
   function SaveToFile(entity:aEntity);
   function _WhereUsedReference(myMMViewer:aEntityMMViewer, theUIAgent:aUIAgent);
   function WhereUsed(entity:aEntity):string;
}
declare module MRS_Util {
   function Stringify(object:aLightObject);
   function StringifyEx(VarAddress:string, VarType:aType);
   function Parse(input:string);
   function Deserialize(input:string, object:aFullObject);
   function GetJsonValueByRank(body:string, jpath:string, rank:Number);
   function GetJsonValue(body:string, jpath:string);
   function ValueByKeyAsInt(body:string, key:string);
   function ValueByKeyAsBoolean(body:string, key:string);
   function ValueByKey(body:string, key:string):string;
}
declare module MRS_ClassOrModuleMaker {
   function CreateClassOrModuleWithText(ParentClass:aClassDef, ClassName:string, ClassText:string, ClassToGenerate:aModuleDef, SimulateGeneration:Boolean);
}
declare class aMRS_EwamDefaultMapping extends aWT_DefaultUrlMappingSettings{
   ReInit();
}
declare class aMRS_DocumentationAPI extends aWT_RestResource{
   GetSchema(OutJsonValue:aWT_JsonCollection, paramater:aType);
   AppendDefaultResponses(toMethod:aWT_JsonCollection, methodAsCstring:string, successParamType:aType, definitions:aListOfInstances);
   MethodInfoAsSwaggerPath(MethodLaunchInfo:string, definitions:aListOfInstances, theRouter:aWT_UrlDecorationServerRouter);
   GetAPIVersion():string;
   getAPIInfo();
   GetSwaggerDocumentation();
}
declare class aMRS_ModuleDefAPI extends aWT_RestResource{
   GetOutgoingURLMappingForScenario(object:aScenario, name:string, scenarioName:string);
   GetOutgoingURLMappingForCUImplem(object:aModuleImplem, name:string);
   GetOutgoingURLMapping(object:aModuleDef, name:string);
   GetMyScenario(name:aModuleDef, scenarioName:string);
   entityStatus(name:aModuleDef):string;
   GetScenarios(name:aModuleDef):string;
   GetDescendants(name:aModuleDef):string;
   CheckOut(name:aModuleDef);
   Deliver(name:aModuleDef);
   CheckIn(name:aModuleDef);
   ManageReimplem(name:aModuleDef);
   Get(name:aModuleDef):string;
   _ModifyImplem(name:aModuleDef, parseOnly:Boolean, body:string):string;
   Parse(name:aModuleDef, body:string):string;
   Modify(name:aModuleDef, body:string):string;
   getClassNameFromSource(src:string):string;
   getAncestorNameFromSource(src:string):string;
   Create(body:string);
}
declare class aMRS_EntityAPI extends aWT_RestResource{
   GetOutgoingURLMapping(object:aEntity, ownerName:string, name:string);
   _FindEntity(ownerName:string, name:string);
   DisplayIDEInfoViewer();
   CloseIDEInfoViewer();
   EditScenario(thescenario:aScenario);
   UIInteractEntity(ownerName:string, name:string);
   GetEntity(ownerName:string, name:string);
   GetDeliveries(ownerName:string, name:string):string;
   WhereUsed(ownerName:string, name:string):string;
   CheckOut(ownerName:string, name:string);
   Deliver(ownerName:string, name:string);
   CheckIn(ownerName:string, name:string);
}
declare class aMRS_MMBrowserAPI extends aWT_RestResource{
   GetBooleanParamValue(param:string);
   searchEntities(q:string, m:Number, _class:Boolean, _module:Boolean, _method:Boolean, _overrideMethod:Boolean, _variable:Boolean, _constant:Boolean, _scenario:Boolean, _parameter:Boolean, _other:Boolean):string;
}
declare class aMRS_Repository extends aWT_RestResource{
   Synchronize();
   Deliver();
   CheckinAll();
   DeliverAll();
   Status():string;
}
declare class aMRS_Bundle extends aWT_RestResource{
   install(body:string);
   GetTypeScriptType(forType:aType):string;
   WriteMethod(methodDesc:aMethodDesc, response:string);
   WriteTypeScriptDefs(theModule:aModuleDef, response:string);
   writeEntity(e:aClassDef, response:string);
   t();
   BundleAsTypeScript(bundleName:string);
}
