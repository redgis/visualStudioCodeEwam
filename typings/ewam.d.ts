/**
*
*/
declare class aLightObject {
   StringExtract(Kind:string, Param:Number, MaxSize:Number):string;
   ClassName():string;
   ClassId():Number;
   ClassVersion();
   Init();
   Terminate();
   VarAgent();
   UIRefresh();
   UIRefreshVar(theVar:string);
   UIRefreshFromMM(theIdentifierDesc:aIdentifierDesc);
   Next(theUIAgent:aUIAgent);
   Prev(theUIAgent:aUIAgent);
   ActionValid(theUIAgent:aUIAgent);
   ActionCancel(theUIAgent:aUIAgent);
   Save(mustAskConfirmation:Boolean, mustRefresh:Boolean, mustForceSave:Boolean);
   ActionNew(theUIAgent:aUIAgent);
   ActionOpen(theUIAgent:aUIAgent);
   ActionSave(theUIAgent:aUIAgent);
   ActionSaveAndClose(theUIAgent:aUIAgent);
   ActionSaveAll(theUIAgent:aUIAgent);
   ActionClose(theUIAgent:aUIAgent);
   ActionCloseAll(theUIAgent:aUIAgent);
   ActionQuit(theUIAgent:aUIAgent);
   Accept();
   IsSystemCloseAccepted(theUIAgent:string);
   IsAcceptable(VarAddressInError:string, Message:string, MessageDisplayed:Boolean, MessageCanBeDisplayed:Boolean);
   IsValid(VarAddressInError:string, Message:string, MessageDisplayed:Boolean, MessageCanBeDisplayed:Boolean);
   AlertOnValid(Message:string);
   Kill(mySelf:string);
   ClassDef();
   CancelObject(mySelf:string);
   CloneVarsFrom(thisObject:string);
   ClassIdFromData():Number;
   CloneVarsOnRecast(thisObject:string);
   RecastToClassId(mySelf:aLightObject, theNewClassId:Number);
   InitVariables();
   ParamInteract(theScenario:string, ExecMode:string, InModalMode:Boolean, UseDefaultScenario:Boolean, theFatherUIAgent:string, BuildingKind:string, X:Number, Y:Number, Width:Number, Height:Number, BuiltUIAgent:string):string;
   NoModalInteract(theScenarioName:string, ExecMode:string, MustSetFocus:Boolean);
   InteractFromName(theScenarioName:string, ExecMode:string, InModalMode:Boolean):string;
   InteractAsChild(theScenarioName:string, ExecMode:string, Secondary:Boolean, theFatherUIAgent:aUIAgent);
   CurrentUIStringOf(thisVar:string, RelativeToThisUIAgent:string):string;
   GetBitmap(theBMPKind:string, theBMPparam:Number);
   ScenarioFrom(thisName:string);
   GetUIAgentFromName(thisName:string);
   HasBeenStored();
   ReportError(fromModule:string, fromProcedure:string, comment:string, seriousness:string);
   ProduceText(Where:string, Options:string);
   InitFromText(FromWhere:string);
   SizeOfInstance();
   Interact(theScenario:string, ExecMode:string, InModalMode:Boolean):string;
   MotorClass();
   Store(PP:string);
   EnableVariableOrMethod(VarOrMeth:string, Enable:Boolean);
   ShowVariableOrMethod(VarOrMeth:string, Show:Boolean);
   Clone();
   __HIDDENINIT();
   Browse();
   CantBeSeen();
   IsWConfidential();
   KillVariables();
   ActionAcceptAndClose(theUIAgent:aUIAgent);
   SaveEx(mustAskConfirmation:Boolean, mustRefresh:Boolean, mustForceSave:Boolean, MakeNewVersion:Boolean);
   AllocatedSize();
   CantBeSeenFrom(thisUIAgent:aUIAgent);
}
/**
*
*/
declare class aFullObject extends aLightObject {
   NSId:Number;
   Id:Number;
   Version:Number;
   myImageM:string;
  
   ClassName();
   ClassId();
   VarAgent();
   ActionValid();
   ActionCancel();
   Save();
   ActionSaveAndClose();
   Accept();
   IsAcceptable();
   Kill();
   CancelObject();
   RecastToClassId();
   HasBeenStored();
   Store();
   Clone();
   Browse();
   SaveEx();
   ActionSuspend(theUIAgent:aUIAgent);
   ActionUndo(theUIAgent:aUIAgent);
   ActionFormer(theUIAgent:aUIAgent);
   ShowTransaction(theUIAgent:aUIAgent);
   IdNameSpaceId();
   NameNameSpaceId();
   HasChanged();
   BeforeAccept();
   AfterAccept();
   AfterStore();
   AfterDelete();
   AfterPhantom(Phantomized:Boolean);
   AfterAppendInTransaction();
   BeforeCommitStore();
   BeforeCommitPhantom(Phantomize:Boolean);
   BeforeCommitDelete();
   NewVersion();
   Project();
   InitAfterLoad();
   InitAfterNewVersion();
   BuildFullId();
   AllocateFullId();
   Freeze(unFreeze:Boolean);
   Versionning(Freezingstyle:string, forThisDBDef:string);
   RemoteServiceName():string;
   isDistributable();
   SwitchUIToLastVersion();
   myNameSpace();
   LockKind():string;
   NewPB();
   getMainAccessPlans(forThisDBDef:string);
   InitTransientVars(OfThisPerspectiveId:Number);
   OneVersionHasBeenStored();
   Authorize(ActionKind:string);
   MainTransaction();
   MustBeSharedBetweenThreads();
   NewTransaction();
}
/**
*
*/
declare class aEntity extends aFullObject {
   Segs:Number;
   myOwner:string;
   Name:string;
   myText:string;
   Visibility:Number;
   Comment:string;
   IREntity:string;
   IRStatus:Boolean;
   LanguageSpecific:Number;
   Modifiers:string;
   IsMultiLang:string;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   ActionNew();
   ActionOpen();
   IsValid();
   GetBitmap();
   CantBeSeen();
   IsWConfidential();
   IdNameSpaceId();
   InitAfterLoad();
   BuildFullId();
   Versionning();
   getMainAccessPlans();
   Authorize();
   GetRootClassDef();
   ShowHistory(theUIAgent:aUIAgent);
   ShowApplicativeClassesContainer();
   ShowApplicativeRootsContainer();
   ShowApplicativeClasses();
   ShowLightClasses();
   ShowModulesList();
   ShowGraphsList();
   ShowToolBox();
   ShowAboutWide();
   IsConsistent(canDisplayMessage:Boolean);
   ShowClassesDispatcher();
   ShowMetaModelBrowser();
   ShowDataBaseBrowser();
   SetupRunningContext();
   SetupDebuggingContext();
   SetupGeneralConfig();
   PurgeTestDataBase();
   DefineDataBase();
   DefineDataBaseDefinitions();
   ExecuteApplication();
   GetIde();
   ShowExportManager();
   ShowHelpManager();
   ShowHelpContent();
   AppendComment(thisText:string);
   myModuleDef();
   UIConsult();
   UIModalConsult();
   UIModify();
   UIModalModify();
   UICreate(mySelf:aEntity);
   CanBeModified();
   GetIDAllocater();
   getNewOwnedId();
   GetNsIdAndIdforOwnedEntity(theNsId:Number, theId:Number, theOwnedEntity:aEntity);
   AppendOwnedObjectInList(theList:string);
   isAlive();
   GetToolBarFolder();
   ShowTutorial();
   DynamicMenu(theUIAgent:aUIAgent);
   IsAnExportableEntity();
   IsAnInOutSyncEntity();
   InOutSyncCategory(:string);
   RegisterYourselfInIDE(theTransaction:aTransaction);
   DeleteMyself();
   GetEntityFromNameInThisLevel(Name:string, ExceptingEntity:aEntity, Where:aEntity);
   GetEntityFromNameInSubLevels(Name:string, ExceptingEntity:aEntity, Where:aEntity);
   GetEntityFromNameInAllLevels(Name:string, ExceptingEntity:aEntity, Where:aEntity);
   GetEntityFromNameFromOwner(Name:string, ExceptingEntity:aEntity, Where:aEntity);
   ProduceCPP(PtrTo_Where:string, PtrTo_Options:string);
   CloneForInOutSync(EntityInReferenceBase:aEntity);
   CheckDeletion(theTransaction:aTransaction);
   NotifyDeletion(theTransaction:aTransaction);
   ResetIREntity();
   RefreshAfterSynchronization();
   ShowHelpIndex();
   GetEntityAsWhereUsed();
   Produce(PtrTo_Where:string, PtrTo_Options:string);
   RefDevFullID(NsIdContext:Number):string;
   GetGlobalVersion();
   IsModifiableInIDEExecutionMode(Message:string);
   GetFieldsListBeginningWith(theList:aListOfInstances, theBeginning:string, IncludingInherited:Boolean);
   ModalBrowseMM();
   ScenarioToConsultMyOwner();
   CPPName(PtrTo_Where:string, PtrTo_Options:string):string;
   ShowWhereDefinedInIDE();
   ProduceIRPass1(PtrTo_Where:string, PtrTo_Options:string);
   ProduceIRPass2(PtrTo_Where:string, PtrTo_Options:string);
   UpdateIR();
   IsNameValid(Message:string);
   ProduceGold(Where:string, Options:string);
   LeftDock(theUIAgent:aUIAgent);
   Undock(theUIAgent:aUIAgent);
   RightDock(theUIAgent:aUIAgent);
   IsDocked(theUIAgent:aUIAgent);
   Popup(theUIAgent:aUIAgent);
   GetTranslatedText():string;
   IsReimplementing();
   getAnnotation(theClass:aClassDef);
}
/**
*
*/
declare class aType extends aEntity {
   AvailableScenarios:string;
   DoesNotInitVar:Boolean;
   IsInLine:Boolean;
   ClassName();
   ClassId();
   IsValid();
   GetBitmap();
   IdNameSpaceId();
   NameNameSpaceId();
   InitAfterLoad();
   IsConsistent();
   isAlive();
   DeleteMyself();
   ProduceCPP();
   CheckDeletion();
   NotifyDeletion();
   GetEntityAsWhereUsed();
   IsModifiableInIDEExecutionMode();
   CPPName();
   ProduceIRPass2();
   IsNameValid();
   ProduceGold();
   KindofType():string;
   InitVar(OfThisObject:aLightObject, theVarLink:string, VarAddress:string);
   KillVar(OfThisObject:aLightObject, VarAddress:string);
   CloneVar(theCloneObject:aLightObject, FromTheVar:string, toTheVar:string);
   AssignVar(FromTheVar:string, ToTheVar:string);
   GarbageMarkFrom(FromThisObject:aLightObject, theVar:string, pVarLink:string, gc:string);
   VarSize();
   SizeAllocatedFor(VarAddress:string);
   CountSize();
   IsPushedByAddress();
   ReturnOnStack();
   BuildDefaultScenario(onArchetype:string);
   BuildNewClassScenario(OfThisClassId:Number, onArchetype:string, withThisId:Number);
   BuildClassDefaultScenarios(onArchetype:string);
   BuildScenarioWithAWizard();
   GetDefaultScenario(ExecMode:string);
   DefaultScenario(ExecMode:string);
   ScenarioFromName(theName:string);
   GetScenarioFromName(theName:string);
   GetVarAddress(InVarOfAddress:string, theIdentifierDesc:aIdentifierDesc);
   GetVarType(InVarOfAddress:string, theIdentifierDesc:aIdentifierDesc);
   CreateVarAgent(VarAddress:string);
   FindOrCreateVarAgent(HostVarAgent:string, VarAddress:string);
   AsCString(VarAddress:string):string;
   AsWatchCString(VarAddress:string):string;
   ConvertFromCString(theCString:string, VarAddress:string);
   AsStringMaxLength();
   AsText(theText:string, VarAddress:string);
   ConvertFromText(theText:string, VarAddress:string);
   AsOrder(VarAddress:string);
   ConvertFromOrder(Order:Number, VarAddress:string);
   IsIn(Order:Number, VarAddress:string);
   AddTo(Order:Number, VarAddress:string);
   SubTo(Order:Number, VarAddress:string);
   Toggle(Order:Number, VarAddress:string);
   AssignBound(LowBound:Boolean, VarAddress:string);
   compare(ThisObj:string, ThatObj:string);
   AsInt4(VarAddress:string);
   ConvertFromInt4(Value:Number, VarAddress:string);
   CaresForNull();
   SetToNull(VarAddress:string);
   IsNull(VarAddress:string);
   Check(VarAddress:string);
   AcceptVar(VarAddress:string);
   PutVariablesIn(theUIAgent:aUIAgent);
   PutMethodsIn(theUIAgent:aUIAgent);
   PutControlsIn(theUIAgent:aUIAgent);
   SetDragableEntitysTo(theUIAgent:aUIAgent);
   IsASystemType();
   GenerateScenarios(theUIAgent:string, CompileScenarios:Boolean);
   GenScen(theUIAgent:aUIAgent);
   IRTypeIndex();
   BuildAndPlugScenario(theUIAgent:aUIAgent);
   PrepareBeforeStore(FromThisObject:aFullObject, VarAddress:string);
   MarkOwned(FromThisObject:aFullObject, VarAddress:string);
   AsInt8(VarAddress:string):Number;
   AsNum(VarAddress:string):string;
   AsDecimal(VarAddress:string):string;
   FirstValue();
   LastValue();
   SuccValue(VarAddress:string);
   PredValue(VarAddress:string);
   OrdValue(VarAddress:string);
   UpdateIdentifiersGenTimeOffset();
   BuildDBRepresentation(forThisDBDef:aDBDef, forOwner:string, forVarDesc:aVarDesc);
   GoodOne();
   AspCString(VarAddress:string, theCStringAddress:string, maxLen:Number);
   ConvertFromNum10(Value:string, VarAddress:string);
   ConvertFromDecimal(Value:string, VarAddress:string);
   SizeInMem(VarAddress:string, theClassVersion:Number);
   BehavesAs();
   LoadVarForIt(IntoAddr:string, theTGVSelectorIterator:string);
   ConvertVar(theCloneObject:aLightObject, FromTheVar:string, ToTheVar:string, FromThisObject:aLightObject, FromTheType:aType, theVarLink:string);
   DependantEntitiesForMinimalInstallation(inList:aListOfInstances);
   NumOfElements();
   SwapVar(VarAddress:string);
   ParamCompare(ThisObj:string, ThatObj:string, Param:Number);
   FillHighPriorityScenarioList(List:aListOfInstances);
   BestFitDBType(forThisDBDef:aDBDef, TypeData:string);
   ConvertFrompCString(theCStringAddress:string, VarAddress:string);
   CanBeDisplayedByThisScenario(thisScenario:string);
   SetDefaultValue(VarAddress:string);
   AsPointer(VarAddress:string);
   GoodForIDEOne();
   IsInBounds(Value:Number);
   ElementAddressAt(rank:Number, VarAddress:string);
}
/**
*
*/
declare class aRecordDesc extends aType {
   myVars:string;
   DerivesFrom:string;
   GenTimeVarsSize:Number;
   isPacked:Boolean;
   ClassName();
   ClassId();
   IsValid();
   BeforeAccept();
   InitAfterLoad();
   IsConsistent();
   GetEntityFromNameInThisLevel();
   GetEntityFromNameInAllLevels();
   ProduceCPP();
   CheckDeletion();
   IsModifiableInIDEExecutionMode();
   GetFieldsListBeginningWith();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   ProduceGold();
   VarSize();
   IsPushedByAddress();
   ReturnOnStack();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   DefaultScenario();
   ScenarioFromName();
   GetScenarioFromName();
   GetVarAddress();
   GetVarType();
   AsCString();
   AsWatchCString();
   ConvertFromCString();
   AsStringMaxLength();
   compare();
   AsInt4();
   Check();
   PutVariablesIn();
   IRTypeIndex();
   UpdateIdentifiersGenTimeOffset();
   BuildDBRepresentation();
   LoadVarForIt();
   ConvertVar();
   DependantEntitiesForMinimalInstallation();
   SwapVar();
   CanBeDisplayedByThisScenario();
   AsPointer();
   IsADescendantOf(thisRecord:aRecordDesc);
   GetEntityFromNameInParentLevel(Name:string, ExceptingEntity:aEntity, Where:aEntity);
   VarOrMethodDescFromName(theName:string);
   CommonAncestor(withCousin:aRecordDesc);
   AppendFlatListOfVars(thisList:aListOfInstances);
}
/**
*
*/
declare class aCUDef extends aRecordDesc {
   myConsts:string;
   myClasses:string;
   myTypes:string;
   myMethods:string;
   myCurImplem:string;
   myUses:string;
   LastMotorId:Number;
   LastOwnedId:Number;
   ParsingSyntax:string;
   ExtDefRefIds:string;
   ViewingSyntax:string;
   ClassName();
   ClassId();
   IsValid();
   InitAfterLoad();
   IsConsistent();
   InOutSyncCategory();
   GetEntityFromNameInThisLevel();
   ProduceCPP();
   CheckDeletion();
   NotifyDeletion();
   ResetIREntity();
   IsModifiableInIDEExecutionMode();
   GetFieldsListBeginningWith();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   ProduceGold();
   BuildClassDefaultScenarios();
   UpdateIdentifiersGenTimeOffset();
   CanBeDisplayedByThisScenario();
   VarOrMethodDescFromName();
   GetVarsCascade(theObject:aFullObject, theList:aListOfRefTos, theType:aType);
   GetMethodsCascade(theObject:aFullObject, theList:aListOfRefTos, theType:aType);
   GetScenariosCascade(theObject:aFullObject, theList:aListOfRefTos, theType:aType);
   GetConstsCascade(theObject:aFullObject, theList:aListOfRefTos, theType:aType);
   GetTypesCascade(theObject:aFullObject, theList:aListOfRefTos, theType:aType);
   GetUsesCascade(theObject:aFullObject, theList:aListOfRefTos, theType:aType);
   SyntaxCheck(theUIAgent:aUIAgent);
   SetOrRemoveStopPoint(theUIAgent:aUIAgent);
   GenerateCPP();
   GetClassDefList(theObject:aFullObject, theVar:string, theType:aType);
   SetToNotParsed();
   PatchSystemCPPFromGold();
   MethodDescFromName(MethodName:string);
   BuildOrPatchFullReimplem(CanPatch:Boolean);
   myAncestorDeforImplem();
}
/**
*
*/
declare class aModuleDef extends aCUDef {
   IsSyntaxOk:Boolean;
   ModuleStatus:string;
   IRMemoryVersion:Number;
   StringExtract();
   ClassName();
   ClassId();
   IsSystemCloseAccepted();
   Kill();
   GetBitmap();
   IdNameSpaceId();
   NameNameSpaceId();
   BeforeAccept();
   NewVersion();
   BuildFullId();
   Versionning();
   Authorize();
   myModuleDef();
   UIConsult();
   UIModalConsult();
   UIModify();
   UIModalModify();
   CanBeModified();
   GetIDAllocater();
   GetNsIdAndIdforOwnedEntity();
   isAlive();
   IsAnExportableEntity();
   RegisterYourselfInIDE();
   DeleteMyself();
   ProduceCPP();
   CloneForInOutSync();
   NotifyDeletion();
   GetEntityAsWhereUsed();
   RefDevFullID();
   GetFieldsListBeginningWith();
   CPPName();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   IsNameValid();
   GetVarAddress();
   GetVarType();
   FindOrCreateVarAgent();
   UpdateIdentifiersGenTimeOffset();
   GoodForIDEOne();
   BuildOrPatchFullReimplem();
   GetClassDefMethods(theObject:aFullObject, theVar:string, theType:aType);
   GenerateOFM(ToBeGeneratedList:aListOfInstances, theSortedList:aListOfInstances);
   mustBeVisibleInRefList();
   PartlyReimplementedBy();
}
/**
*
*/
declare class aClassDef extends aModuleDef {
   myClassInstance:string;
   VarDefaultAccessPlanDesc:string;
   IsLight:Boolean;
   isForAScenario:Boolean;
   isInAModule:Boolean;
   VarDefaultCreateScenario:string;
   VarDefaultModifyScenario:string;
   VarDefaultConsultScenario:string;
   VarDefaultPickerClassDef:string;
   VarDefaultPickerScenario:string;
   UseAncestorScenario:Boolean;
   Descendants:string;
   AccessPlanDescs:string;
   StringExtract();
   ClassName();
   ClassId();
   IsValid();
   GetBitmap();
   IsWConfidential();
   IdNameSpaceId();
   AllocateFullId();
   Versionning();
   IsConsistent();
   UIConsult();
   UIModalConsult();
   UIModify();
   CanBeModified();
   isAlive();
   DeleteMyself();
   GetEntityFromNameInSubLevels();
   ProduceCPP();
   CloneForInOutSync();
   CheckDeletion();
   NotifyDeletion();
   IsModifiableInIDEExecutionMode();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   KindofType();
   InitVar();
   KillVar();
   CloneVar();
   AssignVar();
   GarbageMarkFrom();
   VarSize();
   IsPushedByAddress();
   ReturnOnStack();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   GetDefaultScenario();
   DefaultScenario();
   GetScenarioFromName();
   GetVarAddress();
   GetVarType();
   CreateVarAgent();
   FindOrCreateVarAgent();
   AsCString();
   AsWatchCString();
   AsStringMaxLength();
   AsText();
   ConvertFromText();
   compare();
   AsInt4();
   ConvertFromInt4();
   Check();
   AcceptVar();
   PutVariablesIn();
   PutMethodsIn();
   SetDragableEntitysTo();
   IsASystemType();
   GenerateScenarios();
   IRTypeIndex();
   LoadVarForIt();
   ConvertVar();
   DependantEntitiesForMinimalInstallation();
   AsPointer();
   GoodForIDEOne();
   PatchSystemCPPFromGold();
   BuildOrPatchFullReimplem();
   myAncestorDeforImplem();
   mustBeVisibleInRefList();
   PartlyReimplementedBy();
   GetClassDefTree(theObject:aFullObject, theVar:string, theType:aType);
   GenPascalDef(theUIAgent:aUIAgent);
   PrintTree(theUIAgent:aUIAgent);
   ChangeAncestor();
   GetLevel();
   PatchFromIntrinsicSystemDeclaration();
   GetOverridingScenarioOf(thisScenario:aScenario);
   SelfIfSystemClassDefElseNil();
   DBRepresentation(forThisDBDef:aEntity, atThisLevelOnly:Boolean);
   GetAPDCascade(theObject:aFullObject, theList:aListOfRefTos, theType:aType);
   DefaultAccessPlanDesc();
   BuildImplemForGoldification();
   DefaultPickerClassDef();
}
/**
*
*/
declare class aReimplemClassDef extends aClassDef {
   Reimplementing:string;
   FullReimplementation:string;
   IsActive:Boolean;
   AuthorisedReimplemKind:string;
   HasPriorityConflict:Boolean;
   Priority:Number;
   LastCheckedReimplementedVersion:Number;
   LastCheckedReimplementedImplemVersion:Number;
   StringExtract();
   ClassName();
   ClassId();
   IsValid();
   GetBitmap();
   CantBeSeenFrom();
   NameNameSpaceId();
   InitAfterLoad();
   InitAfterNewVersion();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   IsReimplementing();
   GoodForIDEOne();
   BuildOrPatchFullReimplem();
   myAncestorDeforImplem();
   PartlyReimplementedBy();
   ChangeAncestor();
}
/**
*
*/
declare class aReimplemModuleDef extends aModuleDef {
   Reimplementing:string;
   FullReimplementation:string;
   IsActive:Boolean;
   AuthorisedReimplemKind:string;
   HasPriorityConflict:Boolean;
   Priority:Number;
   LastCheckedReimplementedVersion:Number;
   LastCheckedReimplementedImplemVersion:Number;
   StringExtract();
   ClassName();
   ClassId();
   IsValid();
   GetBitmap();
   CantBeSeenFrom();
   NameNameSpaceId();
   InitAfterLoad();
   InitAfterNewVersion();
   CPPName();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   IsReimplementing();
   GoodForIDEOne();
   BuildOrPatchFullReimplem();
   myAncestorDeforImplem();
   PartlyReimplementedBy();
}
/**
*
*/
declare class aCUImplem extends aCUDef {
   myClassImplems:string;
   myMethodImplems:string;
   myExtReferencedIds:string;
   myOwnReferencedIds:string;
   IrIsReady:Boolean;
   myTextFromMM:string;
   myOriginalText:string;
   IRStatements:string;
   StatementLines:string;
   ParseErrors:string;
   IdentifierOrigin:string;
   ParsingStatus:string;
   InstallableIsInProgress:Boolean;
   Spare1:Number;
   Spare2:Number;
   Spare3:Number;
   myIDLText:string;
   SaveSourceAnyway:Boolean;
   IRFormatVersion:Number;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   NameNameSpaceId();
   HasChanged();
   BeforeAccept();
   getMainAccessPlans();
   IsConsistent();
   ShowHelpManager();
   isAlive();
   GetEntityFromNameInAllLevels();
   CloneForInOutSync();
   GetEntityAsWhereUsed();
   IsModifiableInIDEExecutionMode();
   SyntaxCheck();
   SetToNotParsed();
   LoadFromFile();
   SaveToFile();
   LoadInterfaceFromFile();
   FirstIRStatement();
   GetTextSearcher();
   ParseText();
   RegenerateTextFromIr();
   FlattenStatements();
   GetSelectedIdentifier(theTextUIAgent:aUIAgent);
}
/**
*
*/
declare class aModuleImplem extends aCUImplem {
   GlobalVersion:Number;
   ClassName();
   ClassId();
   ActionCancel();
   ActionSave();
   ActionSaveAndClose();
   IsSystemCloseAccepted();
   IsValid();
   ParamInteract();
   SaveEx();
   ActionUndo();
   ActionFormer();
   IdNameSpaceId();
   InitAfterLoad();
   BuildFullId();
   Versionning();
   myModuleDef();
   UIConsult();
   GetIDAllocater();
   GetNsIdAndIdforOwnedEntity();
   ProduceCPP();
   RefDevFullID();
   ProduceGold();
   SetOrRemoveStopPoint();
   GenerateCPP();
   GenerateNSPascal();
   GenerateIDL();
   CodeAsFile();
   KeepThisVersion();
   ShowAllUsedModuleOrClasses();
   ParseMySelf(Rebuild:Boolean, DisplayBubble:Boolean);
   RegenerateText(DestroyTextIfBadParsed:Boolean);
   FullCodeFileName():string;
   FullDllFileName():string;
   GetMDIScenario();
   UnKeepThisVersion();
   CodeFileName(:string);
   ShowVersionAnalyser(theUIAgent:aUIAgent);
   RegisterInMotor(theVersion:Number);
   UITest(theUIAgent:aUIAgent);
   UITestObject(theObject:aEntity, theUIAgent:aUIAgent);
   UICanTestObject(theObject:aEntity);
}
/**
*
*/
declare class aClassImplem extends aModuleImplem {
   ClassName();
   ClassId();
   IdNameSpaceId();
   myAncestorDeforImplem();
   GetMDIScenario();
   RegisterInMotor();
   TryAndDebugIt(theUIAgent:aUIAgent);
   ParseTextExcluding(theBannedAscendant:aEntity);
}
/**
*
*/
declare class aMethodImplem extends aCUImplem {
   Dummy_myMethodBody:string;
   ClassName();
   ClassId();
   IsValid();
   IdNameSpaceId();
   IsConsistent();
   ProduceCPP();
   CPPName();
   ProduceGold();
   SetToNotParsed();
   RegenerateTextFromIr();
   TryAndDebugIt(theUIAgent:aUIAgent);
   SetStopPointToContext(theUIAgent:aUIAgent);
   HasStopPoint();
   SetOrRemoveBreakPoint(theUIAgent:aUIAgent);
   ProduceCPPDeclForImplem(PtrTo_Where:string, PtrTo_Options:string);
   SetInvisiblePointToContext(theUIAgent:aUIAgent);
}
/**
*
*/
declare class aNativeRecordDesc extends aRecordDesc {
   ClassName();
   ClassId();
   VarSize();
   IRTypeIndex();
   UpdateIdentifiersGenTimeOffset();
}
/**
*
*/
declare class aVariantRecordDesc extends aRecordDesc {
   myVariants:string;
   HasSelector:Boolean;
   ClassName();
   ClassId();
   IsConsistent();
   isAlive();
   ProduceCPP();
   ProduceIRPass1();
   ProduceIRPass2();
   ProduceGold();
   VarSize();
   UpdateIdentifiersGenTimeOffset();
}
/**
*
*/
declare class aReferenceType extends aType {
   theRole:string;
   InTransaction:Boolean;
   LoadRefThings:Boolean;
   isOwner:Boolean;
   isIntegral:Boolean;
   isActiveSide:Boolean;
   pointsToVersion:Boolean;
   usesCurrentProject:Boolean;
   stillsOnFreeze:Boolean;
   FreezeRefObject:Boolean;
   StoreExtract:Boolean;
   theExtractKind:string;
   theExtractParam:Number;
   theExtractMaxSize:Number;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   IsValid();
   IsConsistent();
   IsModifiableInIDEExecutionMode();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   ProduceGold();
   VarSize();
   AsCString();
   AsInt4();
   PrepareBeforeStore();
   AsPointer();
   CreateLink(toThisObject:aFullObject, atThisRank:Number, varAddress:string);
   CreateFullId(toThisObject:aFullObject, theFullId:string);
   IsRefEmpty(varAddress:string);
   RemoveLink(toThisObject:aFullObject, varAddress:string);
   AuthorizeAction(fromThisUIAgent:aUIAgent, ActionKind:string, FromThisExecMode:string, theRefThing:aLightObject, FromThisObject:aLightObject, VarAddress:string);
   SearchAndPick(fromThisUIAgent:aUIAgent, FromThisObject:aFullObject, varAddress:string, atThisRank:Number);
   PrepareNestedObject(FromThisObject:aLightObject, theObject:aLightObject, ExecMode:string, AtThisRank:Number, VarAddress:string);
   IsFloating();
   GetRunTimeRole();
   ReceiveAndUseDroppedObject(FromThisObject:aFullObject, DroppedObject:aFullObject, varAddress:string);
   CanReceiveDroppedObject(FromThisObject:aFullObject, DroppedObject:aFullObject, varAddress:string);
   BuildListOfCandidates(List:aListOfInstances, MaxNumber:Number, fromThisUIAgent:aUIAgent, FromThisObject:aFullObject, varAddress:string);
}
/**
*
*/
declare class aListofReftosType extends aReferenceType {
   CanMove:Boolean;
   Sorted:Boolean;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   ProduceCPP();
   CPPName();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   ProduceGold();
   KindofType();
   InitVar();
   KillVar();
   CloneVar();
   GarbageMarkFrom();
   VarSize();
   SizeAllocatedFor();
   IsPushedByAddress();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   AsCString();
   AsWatchCString();
   AsStringMaxLength();
   compare();
   IsNull();
   IRTypeIndex();
   PrepareBeforeStore();
   MarkOwned();
   BuildDBRepresentation();
   ConvertVar();
   CanBeDisplayedByThisScenario();
   ElementAddressAt();
   CreateLink();
   IsRefEmpty();
   RemoveLink();
   AuthorizeAction();
   PrepareNestedObject();
   ReceiveAndUseDroppedObject();
   CanReceiveDroppedObject();
   AppendNewAction(theUIAgent:aUIAgent);
   AppendExistingAction(theUIAgent:aUIAgent);
   ConsultAction(theUIAgent:aUIAgent);
   ModifyAction(theUIAgent:aUIAgent);
   InsertNewAction(theUIAgent:aUIAgent);
   InsertExistingAction(theUIAgent:aUIAgent);
   DeleteAction(theUIAgent:aUIAgent);
   DeleteAllAction(theUIAgent:aUIAgent);
   Actions(theUIAgent:aUIAgent);
   UpdateLink(ToThisObject:aFullObject, AtThisRank:Number, VarAddress:string);
   ModifyAt(FromThisUIAgent:aUIAgent, FromThisObject:aLightObject, AtThisRank:Number, VarAddress:string);
   ConsultAt(FromThisUIAgent:aUIAgent, FromThisObject:aLightObject, AtThisRank:Number, VarAddress:string);
   AppendNew(FromThisUIAgent:aUIAgent, FromThisObject:aLightObject, VarAddress:string);
   InsertNew(FromThisUIAgent:aUIAgent, FromThisObject:aLightObject, AtThisRank:Number, varAddress:string);
   AppendExisting(FromThisUIAgent:aUIAgent, FromThisObject:aLightObject, VarAddress:string);
   InsertExisting(FromThisUIAgent:aUIAgent, FromThisObject:aLightObject, AtThisRank:Number, VarAddress:string);
   DeleteAt(FromThisUIAgent:aUIAgent, FromThisObject:aLightObject, AtThisRank:Number, VarAddress:string);
   DeleteAll(FromThisUIAgent:aUIAgent, FromThisObject:aLightObject, VarAddress:string);
   RefObjectStringExtract(FromThisObject:aLightObject, atThisRank:Number, varAddress:string):string;
   InitializeList(thisList:aListOfInstances);
   AppendFullId(theFullId:string, varAddress:string);
   ListCount(varAddress:string);
   ListGet(atThisRank:Number, varAddress:string);
   LoadAllRefObjects(fromThisObject:aFullObject, varAddress:string, BatchSize:Number);
   ParamActions(theUIAgent:aUIAgent, FromObject:aFullObject, SelectRank:Number, ptheVar:string);
   MoveUp(fromThisObject:aLightObject, atThisRank:Number, varAddress:string);
   MoveDown(fromThisObject:aLightObject, atThisRank:Number, varAddress:string);
}
/**
*
*/
declare class aListOfTypedType extends aListofReftosType {
   ListElementType:string;
   ClassName();
   ClassId();
   ProduceCPP();
   ProduceIRPass1();
   ProduceIRPass2();
   ProduceGold();
   KindofType();
   InitVar();
   KillVar();
   CloneVar();
   AssignVar();
   VarSize();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   compare();
   PrepareBeforeStore();
   AuthorizeAction();
   PrepareNestedObject();
   CanReceiveDroppedObject();
   ConsultAt();
   DeleteAt();
   RefObjectStringExtract();
}
/**
*
*/
declare class aListOfInstancesType extends aListofReftosType {
   SizeOfRecord:Number;
   ClassName();
   ClassId();
   ProduceCPP();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   ProduceGold();
   KindofType();
   InitVar();
   KillVar();
   CloneVar();
   AssignVar();
   GarbageMarkFrom();
   VarSize();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   compare();
   PrepareBeforeStore();
   AuthorizeAction();
   PrepareNestedObject();
   CanReceiveDroppedObject();
   ConsultAt();
   DeleteAt();
   RefObjectStringExtract();
}
/**
*
*/
declare class aWatchListType extends aListOfInstancesType {
   ClassName();
   ClassId();
   BuildClassDefaultScenarios();
   AuthorizeAction();
   ModifyAt();
   InsertNew();
   DeleteAt();
   RefObjectStringExtract();
}
/**
*
*/
declare class aListofDisksType extends aListOfInstancesType {
   ClassName();
   ClassId();
   ConsultAt();
   RefObjectStringExtract();
}
/**
*
*/
declare class aListofDirectoriesType extends aListOfInstancesType {
   ClassName();
   ClassId();
   ConsultAt();
   RefObjectStringExtract();
}
/**
*
*/
declare class aListofCurDirFilesType extends aListOfInstancesType {
   ClassName();
   ClassId();
   ConsultAt();
   RefObjectStringExtract();
}
/**
*
*/
declare class aListOfParseErrorsType extends aListOfInstancesType {
   ClassName();
   ClassId();
   BuildClassDefaultScenarios();
}
/**
*
*/
declare class aListOfThingsType extends aListOfInstancesType {
   ClassName();
   ClassId();
   InitVar();
}
/**
*
*/
declare class aListofPickableItemType extends aListOfInstancesType {
   ClassName();
   ClassId();
   AuthorizeAction();
   ConsultAt();
}
/**
*
*/
declare class aModuleClassesListToDispatchType extends aListOfInstancesType {
   ClassName();
   ClassId();
   AuthorizeAction();
   ReceiveAndUseDroppedObject();
   CanReceiveDroppedObject();
}
/**
*
*/
declare class aModulesListToDispatchType extends aListOfInstancesType {
   ClassName();
   ClassId();
   AuthorizeAction();
   ConsultAt();
}
/**
*
*/
declare class aClassesListToDispatchType extends aListOfInstancesType {
   ClassName();
   ClassId();
   AuthorizeAction();
   ReceiveAndUseDroppedObject();
   CanReceiveDroppedObject();
}
/**
*
*/
declare class aBrowsedEntitysListType extends aListOfInstancesType {
   ClassName();
   ClassId();
   ConsultAt();
}
/**
*
*/
declare class aListOfEventsType extends aListofReftosType {
   ClassName();
   ClassId();
   RefObjectStringExtract();
}
/**
*
*/
declare class aFloatingListofReftosType extends aListofReftosType {
   StringExtract();
   ClassName();
   ClassId();
   Init();
   KindofType();
   InitVar();
   KillVar();
   CloneVar();
   VarSize();
   SizeAllocatedFor();
   PrepareBeforeStore();
   AuthorizeAction();
   IsFloating();
   ModifyAt();
   DeleteAt();
   MoveUp();
   MoveDown();
}
/**
*
*/
declare class aReftoType extends aReferenceType {
   StringExtract();
   ClassName();
   ClassId();
   ProduceCPP();
   CPPName();
   KindofType();
   InitVar();
   CloneVar();
   GarbageMarkFrom();
   VarSize();
   IsPushedByAddress();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   AsCString();
   AsWatchCString();
   AsStringMaxLength();
   AssignBound();
   compare();
   IsNull();
   IRTypeIndex();
   PrepareBeforeStore();
   MarkOwned();
   BuildDBRepresentation();
   ConvertVar();
   CanBeDisplayedByThisScenario();
   CreateLink();
   IsRefEmpty();
   RemoveLink();
   PrepareNestedObject();
   ReceiveAndUseDroppedObject();
   CanReceiveDroppedObject();
   ConsultAction(theUIAgent:aUIAgent);
   ModifyAction(theUIAgent:aUIAgent);
   SearchAction(theUIAgent:aUIAgent);
   CreateAction(theUIAgent:aUIAgent);
   ClearAction(theUIAgent:aUIAgent);
   Actions(theUIAgent:aUIAgent);
   Create(FromThisUIAgent:aUIAgent, FromThisObject:aFullObject, VarAddress:string);
   Search(FromThisUIAgent:aUIAgent, FromThisObject:aFullObject, VarAddress:string);
   Consult(FromThisUIAgent:aUIAgent, FromThisObject:aFullObject, VarAddress:string);
   Modify(FromThisUIAgent:aUIAgent, FromThisObject:aFullObject, VarAddress:string);
   Clear(FromThisUIAgent:aUIAgent, FromThisObject:aFullObject, VarAddress:string);
   RefPutFullId(theFullId:string, varAddress:string);
   RefGet(FromThisObject:aFullObject, varAddress:string);
   Refput(FromThisObject:aFullObject, toThisObject:aFullObject, varAddress:string);
}
/**
*
*/
declare class aBasicType extends aType {
   RawVarSize:Number;
   ClassName();
   ClassId();
   ProduceIRPass1();
   InitVar();
   VarSize();
   CountSize();
   BuildClassDefaultScenarios();
}
/**
*
*/
declare class aBooleanType extends aBasicType {
   ClassName();
   ClassId();
   Init();
   ProduceCPP();
   GetFieldsListBeginningWith();
   ProduceGold();
   VarSize();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   AsCString();
   ConvertFromCString();
   AsStringMaxLength();
   AssignBound();
   compare();
   AsInt4();
   ConvertFromInt4();
   IRTypeIndex();
   FirstValue();
   LastValue();
   SuccValue();
   PredValue();
   OrdValue();
   ConvertFromNum10();
   ConvertVar();
}
/**
*
*/
declare class aBooleanEnumType extends aBooleanType {
   ClassName();
   ClassId();
   ProduceCPP();
   ProduceGold();
   AsCString();
   compare();
   AsInt4();
   OrdValue();
}
/**
*
*/
declare class aSetType extends aBasicType {
   BaseEnumType:string;
   ClassName();
   ClassId();
   IsValid();
   BeforeAccept();
   ProduceCPP();
   IsModifiableInIDEExecutionMode();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   ProduceGold();
   VarSize();
   IsPushedByAddress();
   ReturnOnStack();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   AsCString();
   ConvertFromCString();
   AsStringMaxLength();
   IsIn();
   AddTo();
   SubTo();
   compare();
   AsInt4();
   ConvertFromInt4();
   Check();
   IRTypeIndex();
   AsInt8();
   ConvertVar();
   DependantEntitiesForMinimalInstallation();
   NumOfElements();
}
/**
*
*/
declare class aFancySetType extends aSetType {
   ClassName();
   ClassId();
   ProduceIRPass1();
   InitVar();
   VarSize();
   IsPushedByAddress();
   AsCString();
   ConvertFromCString();
   AsStringMaxLength();
   IsIn();
   AddTo();
   SubTo();
   compare();
   IRTypeIndex();
}
/**
*
*/
declare class aSubRangeType extends aBasicType {
   MinRange:string;
   MaxRange:string;
   BaseType:string;
   ClassName();
   ClassId();
   BeforeAccept();
   ProduceCPP();
   IsModifiableInIDEExecutionMode();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   ProduceGold();
   InitVar();
   VarSize();
   IsPushedByAddress();
   ReturnOnStack();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   AsCString();
   ConvertFromCString();
   AsStringMaxLength();
   AsOrder();
   ConvertFromOrder();
   AssignBound();
   compare();
   AsInt4();
   ConvertFromInt4();
   IRTypeIndex();
   FirstValue();
   LastValue();
   SuccValue();
   PredValue();
   OrdValue();
   ConvertVar();
   DependantEntitiesForMinimalInstallation();
   NumOfElements();
   SetDefaultValue();
   IsInBounds();
}
/**
*
*/
declare class aEnumType extends aSubRangeType {
   DerivesFrom:string;
   Choices:string;
   ClassName();
   ClassId();
   IsConsistent();
   GetEntityFromNameInThisLevel();
   GetEntityFromNameInAllLevels();
   GetEntityFromNameFromOwner();
   ProduceCPP();
   IsModifiableInIDEExecutionMode();
   GetFieldsListBeginningWith();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   ProduceGold();
   InitVar();
   VarSize();
   IsPushedByAddress();
   ReturnOnStack();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   AsCString();
   ConvertFromCString();
   AsStringMaxLength();
   AsOrder();
   ConvertFromOrder();
   AssignBound();
   compare();
   AsInt4();
   ConvertFromInt4();
   Check();
   IRTypeIndex();
   FirstValue();
   LastValue();
   SuccValue();
   PredValue();
   OrdValue();
   ConvertVar();
   DependantEntitiesForMinimalInstallation();
   NumOfElements();
   GetEnumsCascade(theObject:aFullObject, theList:aListOfRefTos, theType:aType);
}
/**
*
*/
declare class aEnumSetType extends aEnumType {
   WithNullChoice:Boolean;
   ClassName();
   ClassId();
   InitVar();
   IsPushedByAddress();
   ReturnOnStack();
   AsCString();
   ConvertFromCString();
   AsOrder();
   ConvertFromOrder();
   IsIn();
   AddTo();
   SubTo();
}
/**
*
*/
declare class aPointerType extends aBasicType {
   MyPointedType:string;
   ClassName();
   ClassId();
   Init();
   ProduceCPP();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   ProduceGold();
   KindofType();
   VarSize();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   AsCString();
   AsWatchCString();
   ConvertFromCString();
   AsStringMaxLength();
   compare();
   AsInt4();
   ConvertFromInt4();
   IRTypeIndex();
   AsInt8();
   AsNum();
   SizeInMem();
   ConvertVar();
   DependantEntitiesForMinimalInstallation();
   CanBeDisplayedByThisScenario();
   AsPointer();
   PointedVarSize(varAddress:string);
   Allocate(varAddress:string);
   DeAllocate(varAddress:string);
}
/**
*
*/
declare class aIRFlatPointerType extends aPointerType {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aResizablePointerType extends aPointerType {
   increment:Number;
   ClassName();
   ClassId();
   Init();
   KindofType();
   InitVar();
   KillVar();
   CloneVar();
   AssignVar();
   VarSize();
   SizeAllocatedFor();
   CountSize();
   compare();
   BuildDBRepresentation();
   SizeInMem();
   ConvertVar();
   PointedVarSize();
   AdjustVarSize(NewUsedSize:Number, VarAddress:string);
   Length(varAddress:string);
   OptimizeVarSize(VarAddress:string);
}
/**
*
*/
declare class aTextType extends aResizablePointerType {
   ClassName();
   ClassId();
   ProduceCPP();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   BuildClassDefaultScenarios();
   CreateVarAgent();
   AsCString();
   AsWatchCString();
   ConvertFromCString();
   AsStringMaxLength();
   compare();
   AspCString();
   ConvertVar();
   ConvertFrompCString();
   BeginOfLine(fromPosition:Number, VarAddress:string);
   EndOfLine(fromPosition:Number, varAddress:string);
   PositionOfXY(Column:Number, LineNumber:Number, varAddress:string);
   GetLineNumber(ofPos:Number, varAddress:string);
   GetColumnNumber(ofPos:Number, varAddress:string);
   GetXY(Column:Number, Line:Number, ofPos:Number, varAddress:string);
   LineLength(ofPos:Number, varAddress:string);
   NbLines(varAddress:string);
   Position(theString:string, MinPos:Number, MaxPos:Number, varAddress:string);
   Pos(theString:string, varAddress:string);
   ReadChar(theChar:Number, curPos:Number, varAddress:string);
   Readln(theString:string, curPos:Number, varAddress:string);
   Copy(StringLength:Number, atPos:Number, varAddress:string):string;
   CopyText(fromHere:Number, toThere:Number, varAddress:string);
   CopyLines(fromLine:Number, toLine:Number, varAddress:string);
   WriteChar(thisChar:Number, varAddress:string);
   WriteCharAt(thisChar:Number, Column:Number, Line:Number, varAddress:string);
   Write(thisString:string, varAddress:string);
   WriteLn(thisString:string, varAddress:string);
   ConcatText(anotherText:string, DestroyingTheOtherText:Boolean, varAddress:string);
   InsertText(anotherText:string, DestroyingTheOtherText:Boolean, atPos:Number, varAddress:string);
   InsertLineAt(theLine:string, LineNumber:Number, varAddress:string);
   InsertStringAt(theString:string, atPos:Number, varAddress:string);
   Blank(varAddress:string);
   Delete(ThatManyChars:Number, atPos:Number, varAddress:string);
   DeleteLineAt(LineNumber:Number, varAddress:string);
   WriteAsFile(FileName:string, varAddress:string);
   LoadFromFile(FileName:string, varAddress:string);
   CurColumn(varAddress:string);
   CurRow(varAddress:string);
   IsBlank(varAddress:string);
   BlankThenWrite(thisString:string, varAddress:string);
   WritePChar(pChar:string, varAddress:string);
   ReversePosition(theString:string, MinPos:Number, MaxPos:Number, varAddress:string);
}
/**
*
*/
declare class aIndentedTextType extends aTextType {
   indentSize:Number;
   unused:Boolean;
   ClassName();
   ClassId();
   Init();
   WriteLn();
   Indent(varAddress:string);
   unIndent(varAddress:string);
}
/**
*
*/
declare class aCUimplemCodeType extends aIndentedTextType {
   ClassName();
   ClassId();
   BuildClassDefaultScenarios();
}
/**
*
*/
declare class aIRStatementsType extends aResizablePointerType {
   ClassName();
   ClassId();
   PrepareBeforeStore();
}
/**
*
*/
declare class aFileType extends aPointerType {
   ClassName();
   ClassId();
   Init();
   ProduceCPP();
   ProduceIRPass1();
   ProduceGold();
   KindofType();
   VarSize();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   AsCString();
   ConvertFromCString();
   AsStringMaxLength();
   compare();
   AsInt4();
   ConvertFromInt4();
   IRTypeIndex();
   AsInt8();
   AsNum();
   Allocate();
   DeAllocate();
}
/**
*
*/
declare class aNumType extends aBasicType {
   ClassName();
   ClassId();
   Init();
   ProduceCPP();
   ProduceGold();
   VarSize();
   IsPushedByAddress();
   ReturnOnStack();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   AsCString();
   ConvertFromCString();
   AsStringMaxLength();
   AssignBound();
   compare();
   AsInt4();
   ConvertFromInt4();
   IRTypeIndex();
   AsInt8();
   AsNum();
   ConvertFromNum10();
   ConvertVar();
}
/**
*
*/
declare class aDateType extends aNumType {
   ClassName();
   ClassId();
   Init();
   VarSize();
   IsPushedByAddress();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   AsCString();
   ConvertFromCString();
   AsStringMaxLength();
   AssignBound();
   compare();
   AsInt4();
   ConvertFromInt4();
   Check();
   IRTypeIndex();
   ConvertVar();
   AsYearMonthDay(Year:Number, Month:Number, Day:Number, VarAddress:string);
   ConvertFromYearMonthDay(Year:Number, Month:Number, Day:Number, VarAddress:string);
}
/**
*
*/
declare class aDecimalType extends aBasicType {
   ClassName();
   ClassId();
   Init();
   ProduceCPP();
   ProduceGold();
   VarSize();
   IsPushedByAddress();
   ReturnOnStack();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   AsCString();
   ConvertFromCString();
   AsStringMaxLength();
   AssignBound();
   compare();
   AsInt4();
   ConvertFromInt4();
   IRTypeIndex();
   AsNum();
   AsDecimal();
   ConvertFromNum10();
   ConvertFromDecimal();
   ConvertVar();
}
/**
*
*/
declare class aIntType extends aBasicType {
   ClassName();
   ClassId();
   Init();
   ProduceCPP();
   ProduceGold();
   VarSize();
   IsPushedByAddress();
   ReturnOnStack();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   AsCString();
   ConvertFromCString();
   AsStringMaxLength();
   AssignBound();
   compare();
   AsInt4();
   ConvertFromInt4();
   IRTypeIndex();
   AsInt8();
   AsNum();
   FirstValue();
   LastValue();
   SuccValue();
   PredValue();
   OrdValue();
   ConvertFromNum10();
   ConvertVar();
   SwapVar();
}
/**
*
*/
declare class aDBCharType extends aIntType {
   ClassName();
   ClassId();
   Init();
   ProduceCPP();
   ProduceGold();
   VarSize();
   ReturnOnStack();
   AsCString();
   ConvertFromCString();
   AsStringMaxLength();
   IRTypeIndex();
   ConvertVar();
}
/**
*
*/
declare class aCharType extends aIntType {
   ClassName();
   ClassId();
   Init();
   ProduceCPP();
   ProduceGold();
   VarSize();
   ReturnOnStack();
   AsCString();
   ConvertFromCString();
   AsStringMaxLength();
   IRTypeIndex();
   ConvertVar();
}
/**
*
*/
declare class aReversIntType extends aIntType {
   ClassName();
   ClassId();
   InitVar();
   AsCString();
   ConvertFromCString();
}
/**
*
*/
declare class aCStringType extends aBasicType {
   ClassName();
   ClassId();
   ProduceCPP();
   ProduceGold();
   AssignVar();
   VarSize();
   CountSize();
   IsPushedByAddress();
   ReturnOnStack();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   AsCString();
   AsWatchCString();
   ConvertFromCString();
   AsStringMaxLength();
   AssignBound();
   compare();
   IRTypeIndex();
   AsInt8();
   ConvertFromNum10();
   SizeInMem();
   ConvertVar();
   ParamCompare();
   IsInBounds();
}
/**
*
*/
declare class aStringType extends aCStringType {
   ClassName();
   ClassId();
   ProduceCPP();
   ProduceGold();
   AssignVar();
   CountSize();
   BuildClassDefaultScenarios();
   AsCString();
   ConvertFromCString();
   AssignBound();
   compare();
   IRTypeIndex();
   ConvertFromNum10();
   SizeInMem();
   ParamCompare();
}
/**
*
*/
declare class aDllFileNameType extends aCStringType {
   ClassName();
   ClassId();
   InitVar();
   CloneVar();
   compare();
   PrepareBeforeStore();
}
/**
*
*/
declare class aDynDBStringType extends aBasicType {
   ClassName();
   ClassId();
   ProduceGold();
   VarSize();
   ReturnOnStack();
   AsCString();
   AsStringMaxLength();
   compare();
   IRTypeIndex();
}
/**
*
*/
declare class aDBStringType extends aBasicType {
   ClassName();
   ClassId();
   ProduceGold();
   VarSize();
   ReturnOnStack();
   AsCString();
   AsStringMaxLength();
   compare();
   IRTypeIndex();
}
/**
*
*/
declare class aArrayType extends aType {
   myElementType:string;
   myIndexType:string;
   isPacked:Boolean;
   Spare:Boolean;
   ClassName();
   ClassId();
   ProduceCPP();
   IsModifiableInIDEExecutionMode();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   ProduceGold();
   KindofType();
   InitVar();
   VarSize();
   IsPushedByAddress();
   ReturnOnStack();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   AsCString();
   ConvertFromCString();
   AsStringMaxLength();
   compare();
   IRTypeIndex();
   ConvertVar();
   DependantEntitiesForMinimalInstallation();
   SwapVar();
   CanBeDisplayedByThisScenario();
   IsInBounds();
   ElementAddressAt();
}
/**
*
*/
declare class aSequenceType extends aArrayType {
   ClassName();
   ClassId();
   ProduceCPP();
   ProduceGold();
   KindofType();
   InitVar();
   KillVar();
   CloneVar();
   AssignVar();
   GarbageMarkFrom();
   VarSize();
   BuildClassDefaultScenarios();
   AsCString();
   ConvertFromCString();
   AsStringMaxLength();
   compare();
   IRTypeIndex();
   IsInBounds();
   ElementAddressAt();
   AdjustLength(Initializing:Boolean, NewLen:Number, VarAddress:string);
   InsertAt(NewItem:string, Rank:Number, VarAddress:string);
   DeleteAt(KillingItem:Boolean, Rank:Number, VarAddress:string);
   Length(varAddress:string);
   PurgeAndKillInstances(varAddress:string);
}
/**
*
*/
declare class aRenamingType extends aType {
   RenamedType:string;
   ClassName();
   ClassId();
   IsValid();
   IsConsistent();
   ProduceCPP();
   IsModifiableInIDEExecutionMode();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   ProduceGold();
   KindofType();
   InitVar();
   KillVar();
   CloneVar();
   AssignVar();
   GarbageMarkFrom();
   VarSize();
   SizeAllocatedFor();
   CountSize();
   IsPushedByAddress();
   ReturnOnStack();
   BuildDefaultScenario();
   BuildNewClassScenario();
   BuildClassDefaultScenarios();
   BuildScenarioWithAWizard();
   GetDefaultScenario();
   DefaultScenario();
   GetScenarioFromName();
   GetVarAddress();
   GetVarType();
   CreateVarAgent();
   FindOrCreateVarAgent();
   AsCString();
   AsWatchCString();
   ConvertFromCString();
   AsStringMaxLength();
   AsText();
   ConvertFromText();
   AsOrder();
   ConvertFromOrder();
   IsIn();
   AddTo();
   SubTo();
   Toggle();
   AssignBound();
   compare();
   AsInt4();
   ConvertFromInt4();
   CaresForNull();
   SetToNull();
   IsNull();
   Check();
   AcceptVar();
   PutVariablesIn();
   PutMethodsIn();
   PutControlsIn();
   SetDragableEntitysTo();
   GenerateScenarios();
   GenScen();
   IRTypeIndex();
   BuildAndPlugScenario();
   PrepareBeforeStore();
   AsInt8();
   AsNum();
   AsDecimal();
   FirstValue();
   LastValue();
   SuccValue();
   PredValue();
   OrdValue();
   UpdateIdentifiersGenTimeOffset();
   BuildDBRepresentation();
   GoodOne();
   AspCString();
   ConvertFromNum10();
   ConvertFromDecimal();
   SizeInMem();
   ConvertVar();
   DependantEntitiesForMinimalInstallation();
   NumOfElements();
   ParamCompare();
   BestFitDBType();
   ConvertFrompCString();
   CanBeDisplayedByThisScenario();
   SetDefaultValue();
   AsPointer();
   GoodForIDEOne();
   IsInBounds();
}
/**
*
*/
declare class aMethodType extends aType {
   ReturnType:string;
   myParameters:string;
   GenTimeParametersSize:Number;
   ClassName();
   ClassId();
   BeforeAccept();
   InitAfterLoad();
   IsConsistent();
   isAlive();
   GetEntityFromNameInAllLevels();
   ProduceCPP();
   IsModifiableInIDEExecutionMode();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   ProduceGold();
   VarSize();
   IsPushedByAddress();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   GetVarAddress();
   GetVarType();
   AsCString();
   compare();
   AsInt4();
   IRTypeIndex();
   UpdateIdentifiersGenTimeOffset();
   CanBeDisplayedByThisScenario();
   AsPointer();
}
/**
*
*/
declare class aAnyType extends aType {
   ClassName();
   ClassId();
   ProduceCPP();
   ProduceIRPass1();
   ProduceIRPass2();
   ProduceGold();
   VarSize();
   IsPushedByAddress();
   ReturnOnStack();
   BuildClassDefaultScenarios();
   AsCString();
   AsStringMaxLength();
   AsInt4();
   IRTypeIndex();
   AsPointer();
}
/**
*
*/
declare class aVoidType extends aType {
   ClassName();
   ClassId();
   Init();
   VarSize();
   BuildDefaultScenario();
   BuildClassDefaultScenarios();
   FindOrCreateVarAgent();
}
/**
*
*/
declare class aScenario extends aEntity {
   myType:string;
   DefaultX:Number;
   DefaultY:Number;
   DefaultWidth:Number;
   DefaultHeight:Number;
   DefaultXFactor:string;
   DefaultYFactor:string;
   DefaultWidthFactor:string;
   DefaultHeightFactor:string;
   DefaultFont:string;
   DefaultForeColor:string;
   DefaultBackColor:string;
   DefaultKinds:Number;
   Border:string;
   Style:string;
   WindowPosition:string;
   DefaultStoreMode:string;
   DefaultExecMode:string;
   DefaultTitleKind:string;
   DefaultTitleExtractKind:string;
   DefaultTitleExtractParam:Number;
   IsVirtual:Boolean;
   IsKillOnUIAgentKill:Boolean;
   IconName:string;
   DerivesFrom:string;
   myCodeAndDefOrImplem:string;
   SubComponents:string;
   myMenus:string;
   myAvailableEvents:string;
   HelpText:string;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   ActionValid();
   IsSystemCloseAccepted();
   IsValid();
   CancelObject();
   GetBitmap();
   SaveEx();
   IdNameSpaceId();
   NameNameSpaceId();
   BeforeAccept();
   IsConsistent();
   isAlive();
   InOutSyncCategory();
   DeleteMyself();
   CheckDeletion();
   NotifyDeletion();
   GetEntityAsWhereUsed();
   IsNameValid();
   IsReimplementing();
   DefaultUIAgentClassId():Number;
   DefaultUIComponentClassId():Number;
   GetUIAgentClassId():Number;
   GetUIComponentClassId():Number;
   BuildClassDef();
   MakeNewVersionOftheCode();
   AddNewVarFor(thisQVarPresentor:aQVarPresentor);
   IsQVPNamePossible(thisVar:aIdentifierDesc, thisName:string);
   GetQVPVar(thisName:string);
   GetANewQVPName(thisName:string):string;
   Paint(theWindow:string, ps:string, AbsX:Number, AbsY:Number, Dw:Number, Dh:Number, x:Number, y:Number, Width:Number, Height:Number, theQVarPresentor:aQVarPresentor);
   GetChar(Ch:Number, VKey:string, CharCount:Number, Flags:Number, theQVarPresentor:aQVarPresentor);
   WillMofifyThisQVPOnGetChar(Ch:Number, VKey:string, CharCount:Number, Flags:Number, theQVarPresentor:aQVarPresentor);
   GetQVarPresentor(forThisVar:aIdentifierDesc, forThisType:aType);
   GetQVarPresentorOnDrop(forThisVar:aIdentifierDesc, forThisType:aType);
   NewQVarPresentor();
   GetLabelForThisQVarPresentor(theQVarPresentor:aQVarPresentor);
   InitEvents();
   InitFor(thisType:aType);
   BuildVarAgent(VarAddress:string, forThisType:aType, HostVarAgent:aVarAgent);
   BuildUIAgent(HostUIAgent:aUIAgent, BuildingKind:string);
   BuildSubAgentsFrom(theList:aListOfRefTos, thisVarAgent:aVarAgent, thisUIAgent:aUIAgent, dw:Number, dh:Number);
   BuildSubComponents(thisVarAgent:aVarAgent, thisUIAgent:aUIAgent, dw:Number, dh:Number);
   BuildSubMenus(thisVarAgent:aVarAgent, thisUIAgent:aUIAgent);
   AssociateVarAndUIAgent(thisVarAgent:aVarAgent, thisUIAgent:aUIAgent);
   GetOverridingScenarioFor(VarAddress:string, forThisType:aType);
   BuildAgents(VarAddress:string, ForThisType:aType, HostVarAgent:aVarAgent, HostUIAgent:aUIAgent, BuildingKind:string, thisVarAgent:aVarAgent, thisUIAgent:aUIAgent);
   BuildAgentsForArchetype(thisVarAgent:aVarAgent, thisUIAgent:aUIAgent, dw:Number, dh:Number);
   ChangeParam(theQVarPresentor:aQVarPresentor, ExecMode:string):string;
   Modify(IsModal:Boolean):string;
   ModifyKinds(theUIAgent:aUIAgent);
   CloneAndMakeItAvailable();
   Adjust(theQVarPresentor:aQVarPresentor);
   IsASystemScenario();
   CalcNbLevels(Level:Number, MaxLevel:Number);
   TryItOnAEmptyInstance(theUIAgent:aUIAgent);
   AuthorizedDxFor(thisQVarPresentor:aQVarPresentor, Dx:Number);
   AuthorizedDyFor(thisQVarPresentor:aQVarPresentor, Dy:Number);
   AuthorizedDwFor(thisQVarPresentor:aQVarPresentor, Dw:Number);
   AuthorizedDhFor(thisQVarPresentor:aQVarPresentor, Dh:Number);
   CanChangeWidth(thisQVarPresentor:aQVarPresentor);
   CanChangeHeight(thisQVarPresentor:aQVarPresentor);
   AddMenuItems(theDesignedScenario:aScenario, theScenarioAsDesignWindowAgent:aUIAgent, theTopMenu:string, InthisMenu:string, Locked:Boolean);
   AddMenuItemsForArchetype(theDesignedScenario:aScenario, theScenarioAsDesignWindowAgent:aUIAgent, theTopMenu:string, InthisMenu:string);
   AddFrames(theDesignedScenario:aScenario, theScenarioAsDesignWindowAgent:aUIAgent, theOwnerQVPAsFrameAgent:aUIAgent, ForArchetype:Boolean);
   HasMenus();
   GetDefaultWidthFor(thisQVarPresentor:aQVarPresentor);
   GetDefaultHeightFor(thisQVarPresentor:aQVarPresentor);
   QVPHasBeenSelected(thisQVarPresentor:aQVarPresentor);
   SetDragableEntitysTo(theUIAgent:aUIAgent);
   KillDragableEntitys(theUIAgent:aUIAgent);
   PutVariablesIn(theUIAgent:aUIAgent);
   PutMethodsIn(theUIAgent:aUIAgent);
   PutControlsIn(theUIAgent:aUIAgent);
   AppendThisScenario(thisScenario:aScenario);
   DoesNotContain(thisScenario:aScenario);
   CanBeArchetypeOf(thisScenario:aScenario);
   CheckKinds(ForThisQVarPresentor:aQVarPresentor);
   AlignLeft(theUIAgent:aUIAgent);
   AlignRight(theUIAgent:aUIAgent);
   AlignTop(theUIAgent:aUIAgent);
   AlignBottom(theUIAgent:aUIAgent);
   AlignWidth(theUIAgent:aUIAgent);
   AlignHeight(theUIAgent:aUIAgent);
   AlignInterWidth(theUIAgent:aUIAgent);
   AlignInterHeight(theUIAgent:aUIAgent);
   AlignHorzCenter(theUIAgent:aUIAgent);
   AlignVertCenter(theUIAgent:aUIAgent);
   AlignGroup(theUIAgent:aUIAgent);
   AlignUnGroup(theUIAgent:aUIAgent);
   EnableOrDisableArrows(theUIAgent:aUIAgent);
   EnableOrDisableDT(theUIAgent:aUIAgent);
   GetDraggableObjectPresentor();
   ScenarioKindSet():string;
   CanBeUseIn(ScenarioKind:string);
   CanUse(ScenarioKindSet:string);
   CloneAll();
   IsToBeCloneAll();
   GetDesignUIAgent();
   OwnerScenario();
   MainTypeScenario();
   CanReceiveDropObject(thisQVarPresentor:aQVarPresentor, theQVPAsFrameAgent:aUIAgent, theDesignedScenario:aScenario, theScenarioAsDesignWindowAgent:aUIAgent, x:Number, y:Number, thisObject:string);
   ReceiveDropObject(thisQVarPresentor:aQVarPresentor, theQVPAsFrameAgent:aUIAgent, theDesignedScenario:aScenario, theScenarioAsDesignWindowAgent:aUIAgent, x:Number, y:Number, thisObject:string);
   ShowFont(theUIAgent:aUIAgent);
   ShowIcon(theUIAgent:aUIAgent);
   IsMemoryVarScenario();
   AgentClassDef();
   AgentClassImplem();
   CanDisplayThisType(thisType:aType);
   IsMain();
   HTMLAgentAccepted();
   NotifyDelete(thisQVP:aQVarPresentor);
   IsGraph();
   IsXMLorXSLSelfProduced(ForXSLProd:Boolean);
   CanOverride(thisScenario:aScenario);
   LockSelectedFrames(theUIAgent:aUIAgent);
   UnLockSelectedFrames(theUIAgent:aUIAgent);
   GetTextSearcher();
   GetLabelForThisOwnedQVarPresentor(theQVarPresentor:aQVarPresentor);
}
/**
*
*/
declare class aToolBarScenario extends aScenario {
   ToolBarKinds:string;
   WindowChildKinds:string;
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   BuildUIAgent();
   BuildSubComponents();
}
/**
*
*/
declare class aWideIdeScenario extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aOpenWhereClosedScenario extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aScenarioAsDesignWindow extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   BuildUIAgent();
}
/**
*
*/
declare class aSimpleButFastScenario extends aScenario {
   ClassName();
   ClassId();
   GetQVarPresentor();
   BuildUIAgent();
   ScenarioKindSet();
   HTMLAgentAccepted();
}
/**
*
*/
declare class aXXXAsListBox extends aSimpleButFastScenario {
   DefaultShadow:string;
   DefaultSeparators:string;
   DefaultTabulations:string;
   DefaultFormat:string;
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetQVarPresentor();
   NewQVarPresentor();
   GetLabelForThisQVarPresentor();
   InitEvents();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aListOfParseErrors extends aXXXAsListBox {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aListOfInstancesAsListBox extends aXXXAsListBox {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aArrayTypeAsListBox extends aXXXAsListBox {
   DefaultWithIndex:Boolean;
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   GetQVarPresentor();
   NewQVarPresentor();
}
/**
*
*/
declare class aSubRangeTypeAsListBox extends aXXXAsListBox {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aSetAsListBox extends aXXXAsListBox {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aEnumAsListBox extends aXXXAsListBox {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aXXXAsListTreeCtrl extends aXXXAsListBox {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetQVarPresentor();
   NewQVarPresentor();
   InitEvents();
}
/**
*
*/
declare class aXXXAsListCtrl extends aXXXAsListBox {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetQVarPresentor();
   NewQVarPresentor();
   InitEvents();
}
/**
*
*/
declare class aVoidAsListBox extends aXXXAsListBox {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   GetLabelForThisQVarPresentor();
}
/**
*
*/
declare class aXXXAsMonthCalCtrl extends aSimpleButFastScenario {
   DefaultBetweenMonthBackColor:string;
   DefaultMonthBackColor:string;
   DefaultMonthTextColor:string;
   DefaultTitleBackColor:string;
   DefaultTitleTextColor:string;
   DefaultTrailingTextColor:string;
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetQVarPresentor();
   NewQVarPresentor();
   InitEvents();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aXXXAsDateTimeCtrl extends aSimpleButFastScenario {
   DefaultBetweenMonthBackColor:string;
   DefaultMonthBackColor:string;
   DefaultMonthTextColor:string;
   DefaultTitleBackColor:string;
   DefaultTitleTextColor:string;
   DefaultTrailingTextColor:string;
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetQVarPresentor();
   NewQVarPresentor();
   InitEvents();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeHeight();
}
/**
*
*/
declare class aXXXAsOleControl extends aSimpleButFastScenario {
   DefaultControlName:string;
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetQVarPresentor();
   NewQVarPresentor();
   InitEvents();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aXXXAsBitMap extends aSimpleButFastScenario {
   DefaultType:string;
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetQVarPresentor();
   NewQVarPresentor();
   GetLabelForThisQVarPresentor();
   InitEvents();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aDraggableObjectAsBitMap extends aXXXAsBitMap {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aMethodTypeAsBitMap extends aXXXAsBitMap {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   BuildSubComponents();
}
/**
*
*/
declare class aHelpButtonScenario extends aXXXAsBitMap {
   ClassName();
   ClassId();
   GetBitmap();
   DefaultUIAgentClassId();
   GetQVarPresentor();
}
/**
*
*/
declare class aVoidAsBitMap extends aXXXAsBitMap {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   GetLabelForThisQVarPresentor();
}
/**
*
*/
declare class aXXXAsMLE extends aSimpleButFastScenario {
   DefaultShadow:string;
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetQVarPresentor();
   NewQVarPresentor();
   InitEvents();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aTextTypeAsMLE extends aXXXAsMLE {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   GetQVarPresentor();
}
/**
*
*/
declare class aCUimplemCodeScenario extends aTextTypeAsMLE {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aVoidAsMLE extends aXXXAsMLE {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   GetLabelForThisQVarPresentor();
}
/**
*
*/
declare class aXXXAsFolder extends aSimpleButFastScenario {
   DistanceLeft:Number;
   DistanceRight:Number;
   DistanceTop:Number;
   DistanceBottom:Number;
   FolderDimension:Number;
   PushButtonKinds:string;
   Position:string;
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetQVarPresentor();
   NewQVarPresentor();
   InitEvents();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aListOfFolderScenario extends aXXXAsFolder {
   myDefaultRefScenario:string;
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   Paint();
   GetQVarPresentor();
   NewQVarPresentor();
   GetLabelForThisQVarPresentor();
   Adjust();
   CalcNbLevels();
   GetDefaultWidthFor();
   GetDefaultHeightFor();
   HTMLAgentAccepted();
   IsXMLorXSLSelfProduced();
   GetRefScenario(forThisClassDef:aClassDef, theExecMode:string);
}
/**
*
*/
declare class aXXXAsMenuItem extends aSimpleButFastScenario {
   ClassName();
   ClassId();
   Init();
   isAlive();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   GetChar();
   WillMofifyThisQVPOnGetChar();
   NewQVarPresentor();
   InitEvents();
   BuildUIAgent();
   CanReceiveDropObject();
   ReceiveDropObject();
}
/**
*
*/
declare class aListofReftosAsMenuItem extends aXXXAsMenuItem {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
}
/**
*
*/
declare class aEnumAsMenuItem extends aXXXAsMenuItem {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   BuildSubMenus();
}
/**
*
*/
declare class aSetAsMenuItem extends aEnumAsMenuItem {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aSetAsStaticMenuItem extends aSetAsMenuItem {
   ClassName();
   ClassId();
   BuildSubMenus();
}
/**
*
*/
declare class aEnumAsStaticMenuItem extends aEnumAsMenuItem {
   ClassName();
   ClassId();
   BuildSubMenus();
}
/**
*
*/
declare class aBooleanAsMenuItem extends aXXXAsMenuItem {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   GetQVarPresentor();
}
/**
*
*/
declare class aMethodAsMenuItem extends aXXXAsMenuItem {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   GetQVarPresentor();
   BuildSubComponents();
}
/**
*
*/
declare class aVoidAsMenuItem extends aXXXAsMenuItem {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aVoidAsMDIWindowMenuItem extends aVoidAsMenuItem {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aXXXAsTreeBox extends aSimpleButFastScenario {
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetLabelForThisQVarPresentor();
   InitEvents();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aListOfCascadeScenario extends aXXXAsTreeBox {
   DefaultCascadedInsertAtEnd:Boolean;
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   NewQVarPresentor();
}
/**
*
*/
declare class aListOfTreeScenario extends aXXXAsTreeBox {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   NewQVarPresentor();
}
/**
*
*/
declare class aVoidAsTreeBox extends aXXXAsTreeBox {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   NewQVarPresentor();
   GetLabelForThisQVarPresentor();
}
/**
*
*/
declare class aXXXAsEF extends aSimpleButFastScenario {
   DefaultFormat:string;
   DefaultJustification:string;
   DefaultShadow:string;
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   NewQVarPresentor();
   InitEvents();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeHeight();
}
/**
*
*/
declare class aSubRangeTypeAsGauge extends aXXXAsEF {
   ClassName();
   ClassId();
   Init();
   GetQVarPresentor();
   NewQVarPresentor();
   BuildUIAgent();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeHeight();
}
/**
*
*/
declare class aSetAsEF extends aXXXAsEF {
   ClassName();
   ClassId();
   GetQVarPresentor();
}
/**
*
*/
declare class aPointerTypeAsAddress extends aXXXAsEF {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
}
/**
*
*/
declare class aVoidAsEntryField extends aXXXAsEF {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   GetLabelForThisQVarPresentor();
}
/**
*
*/
declare class aXXXAsHScrollBar extends aSimpleButFastScenario {
   DefaultShadow:string;
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   NewQVarPresentor();
   GetLabelForThisQVarPresentor();
   InitEvents();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aSubRangeTypeAsHScrollBar extends aXXXAsHScrollBar {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aIntTypeAsHScrollBar extends aXXXAsHScrollBar {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aVoidAsHScrollBar extends aXXXAsHScrollBar {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aXXXAsVScrollBar extends aSimpleButFastScenario {
   DefaultShadow:string;
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   NewQVarPresentor();
   GetLabelForThisQVarPresentor();
   InitEvents();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aSubRangeTypeAsVScrollBar extends aXXXAsVScrollBar {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aIntTypeAsVScrollBar extends aXXXAsVScrollBar {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aVoidAsVScrollBar extends aXXXAsVScrollBar {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aXXXAsComboBoxEntry extends aSimpleButFastScenario {
   DefaultFormat:string;
   DefaultJustification:string;
   DefaultShadow:string;
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   NewQVarPresentor();
   InitEvents();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeHeight();
}
/**
*
*/
declare class aEnumAsComboBoxEntry extends aXXXAsComboBoxEntry {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aVoidAsComboBoxEntry extends aXXXAsComboBoxEntry {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   GetLabelForThisQVarPresentor();
}
/**
*
*/
declare class aXXXAsComboBox extends aSimpleButFastScenario {
   DefaultShadow:string;
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   NewQVarPresentor();
   InitEvents();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeHeight();
}
/**
*
*/
declare class aEnumAsComboBox extends aXXXAsComboBox {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aVoidAsComboBox extends aXXXAsComboBox {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   GetLabelForThisQVarPresentor();
}
/**
*
*/
declare class aXXXAsCheckBox extends aSimpleButFastScenario {
   DefaultShadow:string;
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetChar();
   WillMofifyThisQVPOnGetChar();
   NewQVarPresentor();
   GetLabelForThisQVarPresentor();
   InitEvents();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aBooleanTypeAsCheckBox extends aXXXAsCheckBox {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   GetQVarPresentor();
}
/**
*
*/
declare class aVoidAsCheckBox extends aXXXAsCheckBox {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   GetLabelForThisQVarPresentor();
}
/**
*
*/
declare class aXXXAsPushButton extends aSimpleButFastScenario {
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetChar();
   WillMofifyThisQVPOnGetChar();
   GetQVarPresentor();
   NewQVarPresentor();
   GetLabelForThisQVarPresentor();
   InitEvents();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aMethodTypeAsPushButton extends aXXXAsPushButton {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   BuildSubComponents();
}
/**
*
*/
declare class aVoidAsBroadCastPushButton extends aXXXAsPushButton {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aVoidAsPushButton extends aXXXAsPushButton {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   GetLabelForThisQVarPresentor();
}
/**
*
*/
declare class aXXXAsRadioButton extends aSimpleButFastScenario {
   DefaultShadow:string;
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetChar();
   WillMofifyThisQVPOnGetChar();
   NewQVarPresentor();
   InitEvents();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aVoidAsRadioButton extends aXXXAsRadioButton {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   GetLabelForThisQVarPresentor();
}
/**
*
*/
declare class aXXXAsGroupBox extends aSimpleButFastScenario {
   DefaultShadow:string;
   DefaultJustification:string;
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetChar();
   WillMofifyThisQVPOnGetChar();
   NewQVarPresentor();
   InitEvents();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aVoidAsGroupBox extends aXXXAsGroupBox {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   GetLabelForThisQVarPresentor();
}
/**
*
*/
declare class aXXXAsStaticText extends aSimpleButFastScenario {
   DefaultJustification:string;
   DefaultShadow:string;
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetChar();
   WillMofifyThisQVPOnGetChar();
   NewQVarPresentor();
   GetLabelForThisQVarPresentor();
   InitEvents();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aVoidAsStaticText extends aXXXAsStaticText {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   GetLabelForThisQVarPresentor();
}
/**
*
*/
declare class aBuildInTypeScenario extends aScenario {
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   Paint();
   GetQVarPresentorOnDrop();
   NewQVarPresentor();
   GetLabelForThisQVarPresentor();
   BuildSubComponents();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
   AddFrames();
   QVPHasBeenSelected();
   CanReceiveDropObject();
   ReceiveDropObject();
   IsMain();
   HTMLAgentAccepted();
   IsXMLorXSLSelfProduced();
}
/**
*
*/
declare class aPathThruScenario extends aScenario {
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   Paint();
   GetQVarPresentorOnDrop();
   GetLabelForThisQVarPresentor();
   BuildSubComponents();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
   QVPHasBeenSelected();
   IsMain();
   HTMLAgentAccepted();
   IsXMLorXSLSelfProduced();
}
/**
*
*/
declare class aBuildInPointerTypeScenario extends aPathThruScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   GetQVarPresentorOnDrop();
   BuildSubComponents();
   AddFrames();
   QVPHasBeenSelected();
   CanReceiveDropObject();
   ReceiveDropObject();
}
/**
*
*/
declare class aObjectVarScenario extends aBuildInPointerTypeScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   BuildVarAgent();
   BuildSubComponents();
   IsMemoryVarScenario();
}
/**
*
*/
declare class aIndexedBuildInListScenario extends aPathThruScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   GetQVarPresentorOnDrop();
   NewQVarPresentor();
   BuildSubComponents();
   AddFrames();
   QVPHasBeenSelected();
   CanReceiveDropObject();
   ReceiveDropObject();
}
/**
*
*/
declare class aBuildInListOfTypeScenario extends aPathThruScenario {
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetQVarPresentorOnDrop();
   NewQVarPresentor();
   GetLabelForThisQVarPresentor();
   InitEvents();
   BuildUIAgent();
   BuildSubComponents();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
   AddFrames();
   QVPHasBeenSelected();
   CanReceiveDropObject();
   ReceiveDropObject();
}
/**
*
*/
declare class aBuildInArrayTypeScenario extends aPathThruScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   BuildUIAgent();
   BuildSubComponents();
   CanReceiveDropObject();
   ReceiveDropObject();
}
/**
*
*/
declare class aBuildInMethodTypeScenario extends aPathThruScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   NewQVarPresentor();
   BuildSubComponents();
   CanReceiveDropObject();
   ReceiveDropObject();
}
/**
*
*/
declare class aDataTemplateScenario extends aPathThruScenario {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   GetQVarPresentorOnDrop();
   NewQVarPresentor();
   BuildSubComponents();
   AddFrames();
   QVPHasBeenSelected();
   CanReceiveDropObject();
   ReceiveDropObject();
}
/**
*
*/
declare class aBuildInRefScenario extends aScenario {
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   Paint();
   GetQVarPresentorOnDrop();
   NewQVarPresentor();
   GetLabelForThisQVarPresentor();
   BuildSubComponents();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
   AddFrames();
   QVPHasBeenSelected();
   CanReceiveDropObject();
   ReceiveDropObject();
   IsMain();
   HTMLAgentAccepted();
   IsXMLorXSLSelfProduced();
}
/**
*
*/
declare class aRefScenario extends aScenario {
   myDefaultRefScenario:string;
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   Paint();
   GetQVarPresentor();
   NewQVarPresentor();
   GetLabelForThisQVarPresentor();
   Adjust();
   CalcNbLevels();
   AddMenuItems();
   GetDefaultWidthFor();
   GetDefaultHeightFor();
   HTMLAgentAccepted();
}
/**
*
*/
declare class aPickerScenario extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aXAMLScenario extends aScenario {
   lazySubAgentFinalizationMode:string;
   xamlTechnology:string;
   ClassName();
   ClassId();
   GetBitmap();
   DefaultUIAgentClassId();
   Paint();
   NewQVarPresentor();
   BuildUIAgent();
   BuildSubAgentsFrom();
   BuildSubComponents();
   ScenarioKindSet();
   HTMLAgentAccepted();
   ProduceXAML(container:aXAMLContainer, context:aXAMLProductionContext);
   AcceptVisitor(visitor:aXAMLEntityVisitor);
}
/**
*
*/
declare class aXAMLTemplateScen extends aXAMLScenario {
   items:string;
   boundAttributeQVPs:string;
   ClassName();
   ClassId();
   Init();
   IsConsistent();
   DefaultUIAgentClassId();
   ProduceXAML();
   AcceptVisitor();
   ParseText(theText:string, parseErrorMessage:string, parseErrorLine:Number, parseErrorPosition:Number);
}
/**
*
*/
declare class aXAMLScenarioGenInfo extends aScenario {
   ClassName();
   ClassId();
   GetUIAgentClassId();
   AgentClassDef();
}
/**
*
*/
declare class aXXXAsShellIcon extends aScenario {
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   Paint();
   NewQVarPresentor();
   BuildUIAgent();
}
/**
*
*/
declare class aRefClassDefScenario extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   GetLabelForThisQVarPresentor();
   InitFor();
   BuildVarAgent();
   IsMemoryVarScenario();
}
/**
*
*/
declare class aClassAsView extends aScenario {
   OneWindowVisible:Boolean;
   ClassName();
   ClassId();
   Init();
   IsValid();
   DefaultUIAgentClassId();
   NewQVarPresentor();
   BuildUIAgent();
   BuildSubComponents();
   TryItOnAEmptyInstance();
   CanBeArchetypeOf();
   ScenarioKindSet();
   CanUse();
   CanOverride();
}
/**
*
*/
declare class aClassAsFolderView extends aClassAsView {
   FinalizeAtRunTime:Boolean;
   DistanceLeft:Number;
   DistanceRight:Number;
   DistanceTop:Number;
   DistanceBottom:Number;
   FolderDimension:Number;
   PushButtonKinds:string;
   Position:string;
   ClassName();
   ClassId();
   Init();
   IsValid();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   GetQVarPresentor();
   NewQVarPresentor();
   InitEvents();
   BuildUIAgent();
   BuildSubComponents();
   TryItOnAEmptyInstance();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
   CanBeArchetypeOf();
   ScenarioKindSet();
   CanOverride();
}
/**
*
*/
declare class aClassAsSplitView extends aClassAsFolderView {
   IsHorizontal:Boolean;
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   InitEvents();
   BuildUIAgent();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aMDIChildWindowScenario extends aScenario {
   myMDIMotherScenario:string;
   ClassName();
   ClassId();
   BuildSubComponents();
   AddMenuItems();
   AddMenuItemsForArchetype();
   CanBeArchetypeOf();
   CanOverride();
}
/**
*
*/
declare class aPainterScenario extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   DefaultUIComponentClassId();
   Paint();
   BuildUIAgent();
}
/**
*
*/
declare class aGenericListOfScenario extends aScenario {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   Paint();
   GetQVarPresentor();
   NewQVarPresentor();
   InitEvents();
   InitFor();
   BuildAgents();
   HTMLAgentAccepted();
   IsXMLorXSLSelfProduced();
}
/**
*
*/
declare class aGenericRefToScenario extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   Paint();
   GetQVarPresentor();
   GetLabelForThisQVarPresentor();
   InitFor();
   BuildAgents();
   HTMLAgentAccepted();
   IsXMLorXSLSelfProduced();
}
/**
*
*/
declare class aSetAsGroupOfCheckBox extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   InitEvents();
   BuildSubComponents();
   HTMLAgentAccepted();
}
/**
*
*/
declare class aSetAsStaticGCB extends aSetAsGroupOfCheckBox {
   Vertical:Boolean;
   InterWidth:Number;
   ClassName();
   ClassId();
   Init();
   Paint();
   GetQVarPresentor();
   NewQVarPresentor();
   GetLabelForThisQVarPresentor();
   InitEvents();
   BuildSubComponents();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aEnumAsGroupOfRadioButton extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   InitEvents();
   BuildSubComponents();
   HTMLAgentAccepted();
}
/**
*
*/
declare class aEnumAsStaticGRB extends aEnumAsGroupOfRadioButton {
   Vertical:Boolean;
   InterWidth:Number;
   ClassName();
   ClassId();
   Init();
   Paint();
   GetQVarPresentor();
   NewQVarPresentor();
   GetLabelForThisQVarPresentor();
   InitEvents();
   BuildSubComponents();
   Adjust();
   AuthorizedDwFor();
   AuthorizedDhFor();
   CanChangeWidth();
   CanChangeHeight();
}
/**
*
*/
declare class aPointerTypeScenario extends aScenario {
   MyPointedScenario:string;
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   Paint();
   GetQVarPresentor();
   BuildSubComponents();
}
/**
*
*/
declare class aDBClassDefReprScen extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aReturnTypeScenario extends aScenario {
   ClassName();
   ClassId();
   Init();
   DefaultUIAgentClassId();
   Paint();
   GetQVarPresentor();
   NewQVarPresentor();
   GetLabelForThisQVarPresentor();
   BuildSubComponents();
   Adjust();
   CalcNbLevels();
   GetDefaultWidthFor();
   GetDefaultHeightFor();
   HTMLAgentAccepted();
}
/**
*
*/
declare class aReimplemClassDefScenario extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aCUDefScenario extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aMethodImplemScenario extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aSystemScenario extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aWatchScenario extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aMethodInvocationScenario extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
}
/**
*
*/
declare class aScenarioReimplem extends aScenario {
   ReimplemWith:string;
   Reimplementing:string;
   ClassName();
   ClassId();
   IsValid();
   IsReimplementing();
}
/**
*
*/
declare class aBiPathThruScenario extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   Paint();
   HTMLAgentAccepted();
}
/**
*
*/
declare class aMethodTypeScenario extends aScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   BuildSubComponents();
}
/**
*
*/
declare class aReturnScenarioMethodTypeScenario extends aMethodTypeScenario {
   ClassName();
   ClassId();
   DefaultUIAgentClassId();
   Paint();
   HTMLAgentAccepted();
   IsXMLorXSLSelfProduced();
}
/**
*
*/
declare class aIdentifierDesc extends aEntity {
   myType:string;
   MotorId:Number;
   ClassName();
   ClassId();
   IsValid();
   IdNameSpaceId();
   NameNameSpaceId();
   UpdateIR();
   IsNameValid();
   GetIdentifierType();
   GetResultingType();
   InstalledId():Number;
   GetInstalledType(InVarOfAddress:string);
   GetAddress(InVarOfAddress:string);
   InterpVarAddress(LocalsBaseAddress:string);
   EvaluateAsCString(InVarOfAddress:string):string;
   RootIdentifierDesc();
}
/**
*
*/
declare class aMethodDesc extends aIdentifierDesc {
   OnlyInModification:Boolean;
   myCurImplem:string;
   Dummy_myMethodBody:string;
   IsForwarded:Boolean;
   ExecutionMode:string;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   IdNameSpaceId();
   NameNameSpaceId();
   BeforeAccept();
   IsConsistent();
   UIConsult();
   isAlive();
   DeleteMyself();
   ProduceCPP();
   NotifyDeletion();
   ResetIREntity();
   GetEntityAsWhereUsed();
   CPPName();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   ProduceGold();
   GetResultingType();
   GetInstalledType();
   GetAddress();
   EvaluateAsCString();
   ActualMethodForInstance(forThisInstance:string);
   CodeSize();
}
/**
*
*/
declare class aExternalMethodDesc extends aMethodDesc {
   DllName:string;
   DllRoutineName:string;
   ClassName();
   ClassId();
   IsConsistent();
   ProduceCPP();
   CPPName();
   ProduceGold();
}
/**
*
*/
declare class aReimplemMethodDesc extends aMethodDesc {
   ReimplemMethod:string;
   StringExtract();
   ClassName();
   ClassId();
   IsValid();
   GetBitmap();
   BeforeAccept();
   IsConsistent();
   ProduceGold();
   IsReimplementing();
   GetIdentifierType();
   InstalledId();
   RootIdentifierDesc();
}
/**
*
*/
declare class aClassMethodDesc extends aMethodDesc {
   ClassName();
   ClassId();
   GetBitmap();
}
/**
*
*/
declare class aThrowClassMethodDesc extends aClassMethodDesc {
   ThrowsClasses:string;
   ClassName();
   ClassId();
   ProduceIRPass2();
   ProduceGold();
}
/**
*
*/
declare class aThrowMethodDesc extends aMethodDesc {
   ThrowsClasses:string;
   ClassName();
   ClassId();
   ProduceIRPass2();
   ProduceGold();
}
/**
*
*/
declare class aOverrideMethodDesc extends aMethodDesc {
   OverridenMethod:string;
   StringExtract();
   ClassName();
   ClassId();
   IsValid();
   GetBitmap();
   BeforeAccept();
   IsConsistent();
   ProduceIRPass1();
   ProduceIRPass2();
   ProduceGold();
   GetIdentifierType();
   InstalledId();
   RootIdentifierDesc();
}
/**
*
*/
declare class aReUsingMethodDesc extends aMethodDesc {
   ClassName();
   ClassId();
   ResetIREntity();
   UpdateIR();
}
/**
*
*/
declare class aVarDesc extends aIdentifierDesc {
   GenTimeOffset:Number;
   myVarLink:string;
   StringExtract();
   ClassName();
   ClassId();
   GetBitmap();
   IdNameSpaceId();
   IsConsistent();
   isAlive();
   DeleteMyself();
   ProduceCPP();
   ProduceIRPass1();
   ProduceIRPass2();
   ProduceGold();
   GetInstalledType();
   GetAddress();
   InterpVarAddress();
   EvaluateAsCString();
   GetVarPossibleScenarios(theObject:aFullObject, theList:aListOfRefTos, theType:aType);
   GetInterpVarAddress(LocalsBaseAddress:string);
}
/**
*
*/
declare class aInstanceVarDesc extends aVarDesc {
   SegNumber:Number;
   IsTransient:Boolean;
   ClassName();
   ClassId();
   BeforeAccept();
   IsModifiableInIDEExecutionMode();
   ProduceGold();
   InterpVarAddress();
}
/**
*
*/
declare class aModuleVarDesc extends aInstanceVarDesc {
   ClassName();
   ClassId();
   CPPName();
   InterpVarAddress();
}
/**
*
*/
declare class aAbsoluteModuleVarDesc extends aModuleVarDesc {
   theRefVardesc:string;
   StringExtract();
   ClassName();
   ClassId();
   IsConsistent();
   ProduceCPP();
   CPPName();
   ProduceIRPass1();
   ProduceIRPass2();
   ProduceGold();
}
/**
*
*/
declare class aClassVarDesc extends aInstanceVarDesc {
   ClassName();
   ClassId();
   GetBitmap();
   ProduceIRPass1();
   ProduceGold();
   InterpVarAddress();
}
/**
*
*/
declare class aReimplemInstanceVarDesc extends aInstanceVarDesc {
   ReimplemVar:string;
   ClassName();
   ClassId();
   IsValid();
   BeforeAccept();
   IsConsistent();
   isAlive();
   ProduceCPP();
   CPPName();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   IsNameValid();
   ProduceGold();
   IsReimplementing();
   GetIdentifierType();
   InstalledId();
   RootIdentifierDesc();
}
/**
*
*/
declare class aOverrideInstanceVarDesc extends aInstanceVarDesc {
   OverridenVar:string;
   ClassName();
   ClassId();
   IsValid();
   BeforeAccept();
   IsConsistent();
   ProduceCPP();
   CPPName();
   ProduceIRPass1();
   ProduceIRPass2();
   UpdateIR();
   IsNameValid();
   ProduceGold();
   GetIdentifierType();
   InstalledId();
   RootIdentifierDesc();
}
/**
*
*/
declare class aAbsoluteInstanceVarDesc extends aInstanceVarDesc {
   theRefVarDesc:string;
   StringExtract();
   ClassName();
   ClassId();
   IsConsistent();
   ProduceCPP();
   CPPName();
   ProduceIRPass1();
   ProduceIRPass2();
   ProduceGold();
}
/**
*
*/
declare class aLocalVarDesc extends aVarDesc {
   ClassName();
   ClassId();
   getMainAccessPlans();
   ProduceGold();
   InterpVarAddress();
}
/**
*
*/
declare class aAbsoluteSelfVarDesc extends aLocalVarDesc {
   ClassName();
   ClassId();
   ProduceCPP();
   ProduceIRPass2();
   ProduceGold();
   InterpVarAddress();
}
/**
*
*/
declare class aAbsoluteResultVarDesc extends aLocalVarDesc {
   ClassName();
   ClassId();
   ProduceCPP();
   ProduceIRPass2();
   ProduceGold();
   InterpVarAddress();
}
/**
*
*/
declare class aAbsoluteVarDesc extends aLocalVarDesc {
   theRefVarDesc:string;
   ClassName();
   ClassId();
   IsConsistent();
   ProduceCPP();
   ProduceIRPass1();
   ProduceIRPass2();
   ProduceGold();
   InterpVarAddress();
}
/**
*
*/
declare class aImplicitLocalVarDesc extends aLocalVarDesc {
   ClassName();
   ClassId();
   ProduceIRPass1();
}
/**
*
*/
declare class aOQLImplicitLocalVarDesc extends aImplicitLocalVarDesc {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aRecordVarDesc extends aVarDesc {
   ClassName();
   ClassId();
   IsModifiableInIDEExecutionMode();
   InstalledId();
   InterpVarAddress();
}
/**
*
*/
declare class aAbsoluteRecordVarDesc extends aRecordVarDesc {
   theRefVarDesc:string;
   ClassName();
   ClassId();
   IsConsistent();
   ProduceCPP();
   ProduceIRPass1();
   ProduceIRPass2();
   ProduceGold();
   InterpVarAddress();
}
/**
*
*/
declare class aParameterDesc extends aVarDesc {
   byAddress:string;
   ClassName();
   ClassId();
   ClassIdFromData();
   BeforeAccept();
   getMainAccessPlans();
   IsConsistent();
   isAlive();
   ProduceCPP();
   ProduceIRPass1();
   ProduceIRPass2();
   ProduceGold();
   GetAddress();
   InterpVarAddress();
   SizeInStack();
}
/**
*
*/
declare class aByAddressParameterDesc extends aParameterDesc {
   ClassName();
   ClassId();
   Init();
   ProduceCPP();
   ProduceIRPass1();
   ProduceGold();
   GetAddress();
   InterpVarAddress();
   SizeInStack();
}
/**
*
*/
declare class aResultParameterDesc extends aParameterDesc {
   ClassName();
   ClassId();
   IsConsistent();
   isAlive();
   IsNameValid();
   GetAddress();
   InterpVarAddress();
}
/**
*
*/
declare class aConstDesc extends aIdentifierDesc {
   IsInLine:Boolean;
   ClassName();
   ClassId();
   GetBitmap();
   IdNameSpaceId();
   NameNameSpaceId();
   isAlive();
   DeleteMyself();
   ProduceCPP();
   IsModifiableInIDEExecutionMode();
   CPPName();
   ProduceIRPass2();
   UpdateIR();
   ProduceGold();
   GetIdentifierType();
   InterpVarAddress();
   AsInt8():Number;
}
/**
*
*/
declare class aConstStructured extends aConstDesc {
   Value:string;
   ClassName();
   ClassId();
   ProduceCPP();
   ProduceIRPass1();
   ProduceGold();
   GetIdentifierType();
}
/**
*
*/
declare class aConstText extends aConstStructured {
   ClassName();
   ClassId();
   ProduceCPP();
   CPPName();
   ProduceIRPass1();
   ProduceGold();
   GetIdentifierType();
   AsInt8();
}
/**
*
*/
declare class aConstPointer extends aConstDesc {
   Value:string;
   ClassName();
   ClassId();
   ProduceIRPass1();
   GetIdentifierType();
}
/**
*
*/
declare class aConstDBString extends aConstDesc {
   Value:string;
   ClassName();
   ClassId();
   ProduceCPP();
   ProduceIRPass1();
   GetIdentifierType();
}
/**
*
*/
declare class aConstString extends aConstDesc {
   Value:string;
   ClassName();
   ClassId();
   ProduceCPP();
   CPPName();
   ProduceIRPass1();
   GetIdentifierType();
   GetTranslatedValue(:string);
}
/**
*
*/
declare class aConstReal extends aConstDesc {
   Value:string;
   ClassName();
   ClassId();
   ProduceIRPass1();
   GetIdentifierType();
}
/**
*
*/
declare class aConstBoolean extends aConstDesc {
   Value:Boolean;
   ClassName();
   ClassId();
   ProduceIRPass1();
   GetIdentifierType();
   AsInt8();
}
/**
*
*/
declare class aConstDBChar extends aConstDesc {
   Value:Number;
   ClassName();
   ClassId();
   ProduceIRPass1();
   GetIdentifierType();
}
/**
*
*/
declare class aConstChar extends aConstDesc {
   Value:Number;
   ClassName();
   ClassId();
   ProduceIRPass1();
   GetIdentifierType();
   AsInt8();
}
/**
*
*/
declare class aConstInt8 extends aConstDesc {
   Value:Number;
   ClassName();
   ClassId();
   ProduceCPP();
   ProduceIRPass1();
   GetIdentifierType();
   AsInt8();
}
/**
*
*/
declare class aConstEnum extends aConstDesc {
   Value:Number;
   ClassName();
   ClassId();
   Init();
   IsValid();
   BeforeAccept();
   isAlive();
   ProduceCPP();
   ProduceIRPass1();
   IsNameValid();
   ProduceGold();
   GetIdentifierType();
   AsInt8();
}
/**
*
*/
declare class aConstInt2 extends aConstDesc {
   Value:Number;
   ClassName();
   ClassId();
   ProduceIRPass1();
   GetIdentifierType();
   AsInt8();
}
/**
*
*/
declare class aConstInt4 extends aConstDesc {
   Value:Number;
   ClassName();
   ClassId();
   ProduceIRPass1();
   GetIdentifierType();
   AsInt8();
}
/**
*
*/
declare class aConstInt1 extends aConstDesc {
   Value:Number;
   ClassName();
   ClassId();
   ProduceIRPass1();
   GetIdentifierType();
   AsInt8();
}
/**
*
*/
declare class aDBEntity extends aEntity {
   Presenting:string;
   StringExtract();
   ClassName();
   ClassId();
   IsValid();
   IdNameSpaceId();
   NameNameSpaceId();
   getMainAccessPlans();
   IsConsistent();
   IsModifiableInIDEExecutionMode();
   AnalyseMapping(message:string);
   CheckCompatibilityWithDB(thisDBMgr:aDBMgr);
   CloneYourSelfInNewDBDef(TheDBDef:aDBDef, RestrictToClasses:aListOfInstances);
   GetDBDef();
   GetTable();
   FindRepresentation(ForThis:aEntity);
   FindRepresentationFromName(ForThisName:string);
}
/**
*
*/
declare class aDBRepresentation extends aDBEntity {
   StringExtract();
   ClassName();
   ClassId();
   BeforeAccept();
}
/**
*
*/
declare class aDBClassDefRepresentation extends aDBRepresentation {
   NbrversionsKept:Number;
   Reserve:Number;
   myAccessPlanDescs:string;
   UseClassDefAPDescs:Boolean;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   ClassIdFromData();
   IdNameSpaceId();
   BuildFullId();
   IsConsistent();
   IsMonoVersioned();
}
/**
*
*/
declare class aSqlClassDefRepresentation extends aDBClassDefRepresentation {
   ClassTable:string;
   AccessPlansSQLDescs:string;
   myDDL:string;
   myTableKind:string;
   DescriptionReady:Boolean;
   hasIdAccessPlan:Boolean;
   PersistencyKind:string;
   IsMappingOK:Boolean;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   ActionValid();
   ActionCancel();
   IsSystemCloseAccepted();
   IsValid();
   ClassIdFromData();
   GetBitmap();
   BeforeAccept();
   IsConsistent();
   isAlive();
   AnalyseMapping();
   CheckCompatibilityWithDB();
   CloneYourSelfInNewDBDef();
   GetTable();
   FindRepresentation();
   FindRepresentationFromName();
   IsMonoVersioned();
   BuildOnlyOneTable();
   BuildTableForThisLevel();
   CreateTables(WithCheck:Boolean);
   DropTables();
   PurgeTables();
   DeleteAllTableDesc();
   BuildTableDescription();
   UpdateDDL();
   CreateTablesWithCheck();
   GetMainTable();
   GenerateDDL(Where:string, Options:string);
   getSqlAPDescFrom(theAPDesc:aAccessPlanDesc);
   GetTableAt(Rank:Number);
   InitPB(thePB:aPB);
   CompleteVarToUpdateList(theList:aListOfInstances, motorClass:string);
   PrimaryKeyColumns();
   ProduceSQLSelectVars(Where:string, Options:string, ClassRepresented:aClassDef, SqlVarName:string, NumIndexColsToIgnore:Number, onlyForClassDef:aClassDef);
   InsertNewDBVarDescInTable(curVarDesc:aInstanceVarDesc, InTable:aDBEntity, Position:Number);
   DBRepresentationForThisVar(theVar:aVarDesc, forThisDBDef:aEntity, atThisLevelOnly:Boolean);
   UpdateTableDescription(Adding:Boolean, Removing:Boolean, Renaming:Boolean, TypeChanging:Boolean);
   ActionUpdateTableDescription();
   UpdateDDLFromDB();
}
/**
*
*/
declare class aTGVClassDefRepresentation extends aDBClassDefRepresentation {
   StringExtract();
   ClassName();
   ClassId();
   GetBitmap();
}
/**
*
*/
declare class aSqlDesc extends aDBEntity {
   ClassName();
   ClassId();
   IsValid();
   CPPName();
   CloneYourSelfInNewDBDef();
   CreateYourself(WithCheck:Boolean);
   DropYourself(WithCheck:Boolean);
   CreateYourselfNoErrors();
   DropYourselfNoErrors();
   CheckYourselfInBase();
   GenerateDDL(Where:string, Options:string);
   ProduceDDL(Where:string, Options:string);
   getAddress(InThisVarOfAddress:string, forDB:Boolean, SqlVar:string);
   GetInstalledVarType(theObject:aFullObject, thisClassVersion:Number);
   ProduceSQLInsert(Where:string, Options:string, theObject:aFullObject, theDBMgr:aDBMgr, theClassDBDef:aSqlClassDefRepresentation, forClassDef:aClassDef);
   ProduceSQLUpdate(Where:string, Options:string, theObject:aFullObject, theDBMgr:aDBMgr, theClassDBDef:aSqlClassDefRepresentation, theDBDef:aDBDef, changedVars:aListOfInstances, forFreezeUnFreeze:Boolean);
   ProduceSQLLoad(Where:string, Options:string, theObject:aFullObject, theDBMgr:aDBMgr, theClassDBDef:aSqlClassDefRepresentation, List:aListOfInstances, NumIndexColsToIgnore:Number, NumColsWritten:Number);
   ProduceSQLJoin(Where:string, Options:string, theObject:aFullObject);
   ProduceSQLSelectVars(Where:string, Options:string, ClassRepresented:aClassDef, SqlVarName:string, NumIndexColsToIgnore:Number, forSelectClause:Boolean, onlyForClassDef:aClassDef);
   BindInsertColumns(forDBMgr:aDBMgr, theObject:aFullObject, withThisAddress:string, myPB:aPB, ParamCount:Number, WorkBuffer:string, MMType:aType);
   BindUpdateColumns(forDBMgr:aDBMgr, theObject:aFullObject, withThisAddress:string, myPB:aPB, ParamCount:Number, WorkBuffer:string, MMType:aType, changedVars:aListOfInstances, forFreezeUnFreeze:Boolean);
   FreeBufferAfterBind(forDBMgr:aDBMgr, theObject:aFullObject, WorkBuffer:string);
   FreeBufferAfterUpdateBind(forDBMgr:aDBMgr, theObject:aFullObject, WorkBuffer:string, changedVars:aListOfInstances);
   ConvertFetchedDataWithIt(It:string, IntoAddr:string, ConversionType:aType);
   BindDataForFetch(forDBMgr:aDBMgr, theObject:aFullObject, InhStmt:string, IntoThisAddress:string, ParamCount:Number, Buffer:string, MMType:aType, NumIndexColsToIgnore:Number);
   ConvertDataAfterFetch(forDBMgr:aDBMgr, theObject:aFullObject, IntoThisAddress:string, forPB:aPB, Buffer:string, NumIndexColsToIgnore:Number, IsCurrent:Number, NoConversionToo:Boolean);
   GetAddressInOwner(theObject:aFullObject, OwnerAddress:string, forDBMgr:aDBMgr);
   IsAnExistingColumnFor(thisObject:aFullObject, andClassDef:aClassDef);
   ZapMainFor(thisObject:aFullObject, FromThisId:string, myPB:aPB, theDBMgr:aODBCDBMgr);
   IsMainIndexColumn();
   IsColumnToBeUpdated(theObject:aFullObject, changedVars:aListOfInstances);
   FillListWithExternalTables(List:aListOfInstances);
   FillListWithExternalColumns(List:aListOfInstances);
   BufferSizeForFetch(forDBDef:aDBDef, theObject:aFullObject, MMType:aType, NumIndexColsToIgnore:Number, onlyForClassDef:aClassDef);
   HasLongCols();
   IsPresentingOverridenVar(forThisLevel:aRecordDesc, theOverridingVar:aEntity, theOverridingLevel:aRecordDesc, theDefinitionLevel:aRecordDesc);
   HasCryptedCol();
}
/**
*
*/
declare class aSqlIndexDesc extends aSqlDesc {
   Primary:Boolean;
   Unique:Boolean;
   myColumns:string;
   Clustered:Boolean;
   StringExtract();
   ClassName();
   ClassId();
   GetBitmap();
   IsConsistent();
   CloneYourSelfInNewDBDef();
   DropYourself();
   ProduceDDL();
}
/**
*
*/
declare class aSqlColumnSetDesc extends aSqlDesc {
   myColumns:string;
   StringExtract();
   ClassName();
   ClassId();
   GetBitmap();
   IsConsistent();
   AnalyseMapping();
   CheckCompatibilityWithDB();
   CloneYourSelfInNewDBDef();
   FindRepresentation();
   FindRepresentationFromName();
   CheckYourselfInBase();
   GenerateDDL();
   ProduceDDL();
   ProduceSQLInsert();
   ProduceSQLUpdate();
   ProduceSQLLoad();
   ProduceSQLJoin();
   ProduceSQLSelectVars();
   BindInsertColumns();
   BindUpdateColumns();
   FreeBufferAfterBind();
   FreeBufferAfterUpdateBind();
   ConvertFetchedDataWithIt();
   BindDataForFetch();
   ConvertDataAfterFetch();
   ZapMainFor();
   IsColumnToBeUpdated();
   FillListWithExternalTables();
   FillListWithExternalColumns();
   BufferSizeForFetch();
   HasLongCols();
   HasCryptedCol();
   BuildSubElementName(forThisDBDef:aDBDef, theName:string, forEntity:aDBEntity):string;
}
/**
*
*/
declare class aSqlTableDesc extends aSqlColumnSetDesc {
   myIndexes:string;
   dummyHasClassId:Boolean;
   dummyHasClassVersion:Boolean;
   dummyHasRefCount:Boolean;
   dummyHasThingRefCount:Boolean;
   dummyHasNoVersion:Boolean;
   dummyHasIsCurrentVersion:Boolean;
   dummyHasIsFinal:Boolean;
   ClassName();
   ClassId();
   BeforeAccept();
   IsConsistent();
   AnalyseMapping();
   CloneYourSelfInNewDBDef();
   GetTable();
   CreateYourself();
   DropYourself();
   CheckYourselfInBase();
   GenerateDDL();
   ProduceDDL();
   getAddress();
   ProduceSQLInsert();
   ProduceSQLUpdate();
   ProduceSQLLoad();
   ProduceSQLSelectVars();
   BindUpdateColumns();
   ZapMainFor();
   BuildSubElementName();
   getPresentedClassDef();
   PurgeYourself(WithCheck:Boolean);
   PurgeYourselfNoErrors();
   AddColumn(ColName:string, forMMType:aType, inIndex:aSqlIndexDesc);
   AddIndex(IndexName:string, IsUnique:Boolean, IsPrimary:Boolean);
   AddNotNullColumn(ColName:string, forMMType:aType, inIndex:aSqlIndexDesc);
   DoesExistInBase();
   ProduceJoinTableSQLUpdate(Where:string, Options:string, theObject:aFullObject, theDBMgr:aDBMgr, theClassDBDef:aSqlClassDefRepresentation);
   ProduceJoinTableSQLDelete(Where:string);
   BindJoinTableDeleteColumns(forDBMgr:aDBMgr, withThisAddress:string, myPB:aPB, ParamCount:Number, WorkBuffer:string, MMType:aType);
   BindJoinTableUpdateColumns(forDBMgr:aDBMgr, withThisAddress:string, myPB:aPB, ParamCount:Number, WorkBuffer:string, MMType:aType);
}
/**
*
*/
declare class aSqlRecordDesc extends aSqlColumnSetDesc {
   ClassName();
   ClassId();
   GetInstalledVarType();
   BindInsertColumns();
   BindUpdateColumns();
   FreeBufferAfterBind();
   FreeBufferAfterUpdateBind();
   GetAddressInOwner();
}
/**
*
*/
declare class aSqlRefToColumnSetDesc extends aSqlRecordDesc {
   LoadRefWithMain:Boolean;
   ClassName();
   ClassId();
   GetBitmap();
   AnalyseMapping();
   CloneYourSelfInNewDBDef();
   FindRepresentation();
   ProduceSQLLoad();
   ProduceSQLJoin();
   BindInsertColumns();
   BindDataForFetch();
   ConvertDataAfterFetch();
   IsColumnToBeUpdated();
   BufferSizeForFetch();
}
/**
*
*/
declare class aSqlListOfColumnSetDesc extends aSqlRecordDesc {
   FastLoadOptimizationRequired:Boolean;
   InterTable:string;
   StoredAsBinary:Boolean;
   NoInterTable:Boolean;
   ClassName();
   ClassId();
   IsValid();
   ClassIdFromData();
   GetBitmap();
   IsConsistent();
   AnalyseMapping();
   CheckCompatibilityWithDB();
   CloneYourSelfInNewDBDef();
   CreateYourself();
   GenerateDDL();
   ProduceSQLSelectVars();
   BindInsertColumns();
   BindUpdateColumns();
   BindDataForFetch();
   ConvertDataAfterFetch();
   ZapMainFor();
   IsColumnToBeUpdated();
   BufferSizeForFetch();
}
/**
*
*/
declare class aSqlClassInfoColumnSetDesc extends aSqlColumnSetDesc {
   ClassName();
   ClassId();
   IsConsistent();
   ProduceSQLUpdate();
   ProduceSQLSelectVars();
   BindInsertColumns();
   BindUpdateColumns();
   FreeBufferAfterBind();
   FreeBufferAfterUpdateBind();
   BindDataForFetch();
   ConvertDataAfterFetch();
   IsColumnToBeUpdated();
   BufferSizeForFetch();
}
/**
*
*/
declare class aSqlColumnDesc extends aSqlDesc {
   myType:string;
   myData:string;
   Existing:Boolean;
   PrimaryKey:Boolean;
   StringExtract();
   ClassName();
   ClassId();
   IsValid();
   ClassIdFromData();
   GetBitmap();
   IsConsistent();
   AnalyseMapping();
   CheckCompatibilityWithDB();
   CloneYourSelfInNewDBDef();
   CheckYourselfInBase();
   ProduceDDL();
   GetInstalledVarType();
   ProduceSQLInsert();
   ProduceSQLUpdate();
   ProduceSQLLoad();
   ProduceSQLSelectVars();
   BindInsertColumns();
   FreeBufferAfterBind();
   ConvertFetchedDataWithIt();
   BindDataForFetch();
   ConvertDataAfterFetch();
   GetAddressInOwner();
   IsMainIndexColumn();
   IsColumnToBeUpdated();
   BufferSizeForFetch();
   HasCryptedCol();
   GetType();
   GetData();
   GetColumnName(:string);
   EnableEncryption();
   DisableEncryption();
}
/**
*
*/
declare class aSqlTextColumnDesc extends aSqlColumnDesc {
   TextStorageKind:string;
   ClassName();
   ClassId();
   GetBitmap();
   CloneYourSelfInNewDBDef();
   ProduceSQLLoad();
   ProduceSQLJoin();
   ProduceSQLSelectVars();
   BindInsertColumns();
   FreeBufferAfterBind();
   ConvertFetchedDataWithIt();
   BindDataForFetch();
   ConvertDataAfterFetch();
   BufferSizeForFetch();
   HasLongCols();
}
/**
*
*/
declare class aSqlAPDesc extends aSqlDesc {
   myIndexes:string;
   WhereColumns:string;
   IsKilledColumn:string;
   IsCurrentColumn:string;
   LoadedColumns:string;
   ClassName();
   ClassId();
   GetBitmap();
   IsConsistent();
   CloneYourSelfInNewDBDef();
   CreateYourself();
   GenerateDDL();
   ProduceDDL();
}
/**
*
*/
declare class aXAMLEntity extends aEntity {
   StringExtract();
   ClassName();
   ClassId();
   AddResourceDescriptorsToSequence(requiredTraits:string, excludedTraits:string, resDescSeq:string, usingThisIndexer:aXAMLResourceIndexer);
   AcceptVisitor(visitor:aXAMLEntityVisitor);
   AddQVPsToSequence(qvpSeq:string);
}
/**
*
*/
declare class aXAMLTemplateItem extends aXAMLEntity {
   syntax:string;
   ClassName();
   ClassId();
   AcceptVisitor();
   ProduceXAML(container:aXAMLContainer, context:aXAMLProductionContext);
}
/**
*
*/
declare class aXTEventDesc extends aXAMLTemplateItem {
   eventName:string;
   method:string;
   alias:string;
   serializer:string;
   StringExtract();
   ClassName();
   ClassId();
   AcceptVisitor();
   ProduceXAML();
   GetFullEventName():string;
}
/**
*
*/
declare class aXAMLTemplateVarBinding extends aXAMLTemplateItem {
   attributesText:string;
   ClassName();
   ClassId();
   ProduceXAML();
}
/**
*
*/
declare class aXTVBForAttribute extends aXAMLTemplateVarBinding {
   qvp:string;
   StringExtract();
   ClassName();
   ClassId();
   AddResourceDescriptorsToSequence();
   AcceptVisitor();
   AddQVPsToSequence();
   ProduceXAML();
}
/**
*
*/
declare class aXTVBWithScen extends aXAMLTemplateVarBinding {
   qvp:string;
   StringExtract();
   ClassName();
   ClassId();
   AcceptVisitor();
   AddQVPsToSequence();
   ProduceXAML();
   ComputeMatch(otherItem:aXTVBWithScen):string;
}
/**
*
*/
declare class aXTImageSource extends aXAMLTemplateItem {
   path:string;
   noPreload:Boolean;
   StringExtract();
   ClassName();
   ClassId();
   AddResourceDescriptorsToSequence();
   AcceptVisitor();
   ProduceXAML();
}
/**
*
*/
declare class aXTComponentEventsDesc extends aXAMLTemplateItem {
   source:string;
   eventDescs:string;
   StringExtract();
   ClassName();
   ClassId();
   AcceptVisitor();
   ProduceXAML();
}
/**
*
*/
declare class aXTMLText extends aXAMLTemplateItem {
   StringExtract();
   ClassName();
   ClassId();
   Init();
   AddResourceDescriptorsToSequence();
   AcceptVisitor();
   ProduceXAML();
   ComputeMatch(otherItem:aXTMLText):string;
}
/**
*
*/
declare class aXTInsertionPoint extends aXAMLTemplateItem {
   idString:string;
   data:string;
   StringExtract();
   ClassName();
   ClassId();
   AcceptVisitor();
   ProduceXAML();
}
/**
*
*/
declare class aXAMLTemplateFragment extends aXAMLTemplateItem {
   fragmentText:string;
   followingTabLevel:Number;
   StringExtract();
   ClassName();
   ClassId();
   AcceptVisitor();
   ProduceXAML();
}
/**
*
*/
declare class aListIBBParameterList extends aXAMLEntity {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aLOIExtractIBBParameterList extends aListIBBParameterList {
   extractKind:string;
   extractParam:Number;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aBAConverterParameterList extends aXAMLEntity {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aListAsBAConverterParameterList extends aBAConverterParameterList {
   itemBindingBrokerClass:string;
   ibbParams:string;
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aQVarPresentor extends aEntity {
   X:Number;
   Y:Number;
   Width:Number;
   Height:Number;
   XFactor:string;
   YFactor:string;
   WidthFactor:string;
   HeightFactor:string;
   Len:Number;
   ForeColor:string;
   BackColor:string;
   Kinds:Number;
   Border:string;
   Style:string;
   WindowPosition:string;
   FontName:string;
   Font:string;
   FontSize:Number;
   FontSels:string;
   ExecMask:string;
   StoreMode:string;
   ExecMode:string;
   UserData:string;
   IsClassDiscriminant:Boolean;
   IsForTheType:string;
   ActiveWhenDebugging:Boolean;
   IsKillOnUIAgentKill:Boolean;
   myVar:string;
   myScenario:string;
   myOwnedScenario:string;
   HelpText:string;
   StringExtract();
   ClassName();
   ClassId();
   IdNameSpaceId();
   getMainAccessPlans();
   IsConsistent();
   AppendOwnedObjectInList();
   isAlive();
   IsIn(xpos:Number, ypos:Number);
   Paint(theWindow:string, ps:string, AbsX:Number, AbsY:Number, dw:Number, dh:Number, xPaint:Number, yPaint:Number, WidthPaint:Number, HeightPaint:Number);
   GetChar(Ch:Number, VKey:string, CharCount:Number, Flags:Number);
   WillBeModifyOnGetChar(Ch:Number, VKey:string, CharCount:Number, Flags:Number);
   Adjust();
   RealX(dw:Number);
   RealY(dh:Number);
   RealWidth(dw:Number);
   RealHeight(dh:Number);
   AuthorizedDx(Dx:Number);
   AuthorizedDy(Dy:Number);
   AuthorizedDw(Dw:Number);
   AuthorizedDh(Dh:Number);
   CanChangeWidth();
   CanChangeHeight();
   IncX(Dx:Number);
   IncY(Dy:Number);
   IncWidth(Dw:Number);
   IncHeight(Dh:Number);
   DefaultWidth();
   DefaultHeight();
   GetSubMenus(theObject:aFullObject, theList:aListOfRefTos, theType:aType);
   ShowEvents(theUIAgent:aUIAgent);
   ShowFont(theUIAgent:aUIAgent);
   InitForCreation(Text:string, Name:string, X:Number, Y:Number, Width:Number, Height:Number, XFactor:string, YFactor:string, WidthFactor:string, HeightFactor:string, Len:Number, Kinds:Number, ForeColor:string, BackColor:string);
   OwnerScenario();
   MainTypeScenario();
   CanDrawOutSide();
   ScenarioKindSet():string;
   CloneAll();
   SetToFullScreen();
   BuildAgents(VarAddress:string, ForThisType:aType, HostVarAgent:aVarAgent, HostUIAgent:aUIAgent, BuildingKind:string, thisVarAgent:aVarAgent, thisUIAgent:aUIAgent);
}
/**
*
*/
declare class aQVPRefScenario extends aQVarPresentor {
   myRefScenario:string;
   AdjustKind:Boolean;
   ClassName();
   ClassId();
   Init();
   IsConsistent();
   ScenarioKindSet();
   CloneAll();
}
/**
*
*/
declare class aBoundAttributeQVP extends aQVarPresentor {
   converterClassDef:string;
   targetType:string;
   parameterList:string;
   ClassName();
   ClassId();
   IsValid();
   IsConsistent();
   BuildAgents();
   IsBindableType(inputType:aType);
   AddConvertersToList(inputType:aType, list:aListOfInstances);
}
/**
*
*/
declare class aXAMLScenarioQVP extends aQVarPresentor {
   lazySubAgentFinalizationMode:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsShellIcon extends aQVarPresentor {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPWithExplanation extends aQVarPresentor {
   ExplanationText:string;
   ExplanationForeColor:string;
   ExplanationBackColor:string;
   ExplanationKinds:Number;
   ExplanationFont:string;
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aQVPXXXAsMonthCalCtrl extends aQVPWithExplanation {
   BetweenMonthBackColor:string;
   MonthBackColor:string;
   MonthTextColor:string;
   TitleBackColor:string;
   TitleTextColor:string;
   TrailingTextColor:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsDateTimeCtrl extends aQVPWithExplanation {
   BetweenMonthBackColor:string;
   MonthBackColor:string;
   MonthTextColor:string;
   TitleBackColor:string;
   TitleTextColor:string;
   TrailingTextColor:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsListBox extends aQVPWithExplanation {
   Shadow:string;
   Separators:string;
   Tabulations:string;
   Format:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsListTreeCtrl extends aQVPXXXAsListBox {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsListCtrl extends aQVPXXXAsListBox {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPBuildInListOfTypeScenario extends aQVPXXXAsListBox {
   myColumns:string;
   TitleDisplayed:Boolean;
   LastColumnAutoSize:Boolean;
   ClassName();
   ClassId();
   Init();
   IsConsistent();
   ProduceGlobalFormat(:string);
   ProduceTitle(:string);
   ProduceTabs(pNbTabs:string, pTabs:string, ListWidth:Number);
   PaintScenario(theWindow:string, ps:string, AbsX:Number, AbsY:Number, Dw:Number, Dh:Number, x:Number, y:Number, Width:Number, Height:Number, theScenario:aScenario);
   InsertNewColumn(thisVar:aIdentifierDesc, x:Number, y:Number);
   NewColumnQualifier();
}
/**
*
*/
declare class aQVPArrayTypeAsListBox extends aQVPXXXAsListBox {
   WithIndex:Boolean;
   ClassName();
   ClassId();
   BeforeAccept();
}
/**
*
*/
declare class aQVPXXXAsEF extends aQVPWithExplanation {
   Format:string;
   Justification:string;
   Shadow:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsGauge extends aQVPXXXAsEF {
   IsHorizontal:Boolean;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsExecutableControl extends aQVPWithExplanation {
   CallKinds:string;
   ActiveInExecMode:string;
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aQVPXXXAsBitMap extends aQVPXXXAsExecutableControl {
   BmpType:string;
   PressedBitMap:string;
   ReleasedBitMap:string;
   DisabledBitMap:string;
   ClassName();
   ClassId();
   EditPressedBitMap(theUIAgent:aUIAgent);
   EditReleasedBitMap(theUIAgent:aUIAgent);
   EditDisabledBitMap(theUIAgent:aUIAgent);
}
/**
*
*/
declare class aQVPXXXAsPushButton extends aQVPXXXAsExecutableControl {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsRadioButton extends aQVPWithExplanation {
   Shadow:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsGroupBox extends aQVPWithExplanation {
   Shadow:string;
   Justification:string;
   ClassName();
   ClassId();
   IsValid();
}
/**
*
*/
declare class aQVPXXXAsStaticText extends aQVPWithExplanation {
   Justification:string;
   Shadow:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsVScrollBar extends aQVPWithExplanation {
   Shadow:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsHScrollBar extends aQVPWithExplanation {
   Shadow:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsCheckBox extends aQVPWithExplanation {
   Shadow:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsComboBoxEntry extends aQVPWithExplanation {
   Format:string;
   Justification:string;
   Shadow:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsComboBox extends aQVPWithExplanation {
   Shadow:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsMLE extends aQVPWithExplanation {
   Shadow:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsOleControl extends aQVarPresentor {
   PropertiesText:string;
   ClassName();
   ClassId();
   Init();
   ShowProperties(theUIAgent:aUIAgent);
}
/**
*
*/
declare class aQVPXXXAsMenuItem extends aQVarPresentor {
   ActiveInExecMode:string;
   PrevOrNextQVarPresentor:string;
   PlaceNext:Boolean;
   HidePrevOrNextQVarPresentor:Boolean;
   ClassName();
   ClassId();
   Init();
   IsConsistent();
}
/**
*
*/
declare class aQVPXXXAsWindow extends aQVarPresentor {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPIndexedBuildInListScenario extends aQVarPresentor {
   ChosenRank:Number;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPXXXAsFolder extends aQVarPresentor {
   DistanceLeft:Number;
   DistanceRight:Number;
   DistanceTop:Number;
   DistanceBottom:Number;
   FolderDimension:Number;
   PushButtonKinds:string;
   Position:string;
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aQVPListOfFolderScenario extends aQVPXXXAsFolder {
   myRefScenario:string;
   AdjustKind:Boolean;
   ClassName();
   ClassId();
   Init();
   IsConsistent();
}
/**
*
*/
declare class aQVPListof extends aQVarPresentor {
   StringExtractKind:string;
   StringExtractParam:Number;
   theEmptyBMPKind:string;
   theMinusBMPKind:string;
   thePlusBMPKind:string;
   theBMPParam:Number;
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aQVPListOfCascade extends aQVPListof {
   theCascadeMethodDesc:string;
   CascadedInsertAtEnd:Boolean;
   LevelDescription:string;
   ClassName();
   ClassId();
   Init();
   IsConsistent();
}
/**
*
*/
declare class aQVPListOfTree extends aQVPListof {
   theTreeMethodDesc:string;
   mustNotDisplayRootNode:Boolean;
   ClassName();
   ClassId();
   IsConsistent();
}
/**
*
*/
declare class aQVPGenericListOfScenario extends aQVarPresentor {
   RealTimeLoading:Boolean;
   Separators:string;
   Tabulations:string;
   Format:string;
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aQVPDataTemplateScenario extends aQVarPresentor {
   myPresentedClassDef:string;
   BuildPresentedObject:Boolean;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPVoidAsTreeBox extends aQVarPresentor {
   LoadValueMethodDesc:string;
   KillValueMethodDesc:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aQVPReturnTypeScenario extends aQVarPresentor {
   theReturnScenario:string;
   AdjustKind:Boolean;
   ClassName();
   ClassId();
   Init();
   GetReturnScenario();
}
/**
*
*/
declare class aQVPBuildInMethodTypeScenario extends aQVarPresentor {
   AutoTriggered:Boolean;
   CallOnLoadValue:Boolean;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aAccessPlanDesc extends aEntity {
   Kind:string;
   DerivesFrom:string;
   ClassName();
   ClassId();
   IdNameSpaceId();
   NameNameSpaceId();
   Versionning();
   isAlive();
   IsModifiableInIDEExecutionMode();
   IsNameValid();
   IsReimplementing();
   newSelector();
   FindAccessPlanFor(theDBMgr:aDBMgr);
   newPickableList();
   indexAsString(formated:Boolean, thisIndex:string):string;
   indexAsFullid(thisIndex:string):string;
   indexAsClassid(thisIndex:string);
   generate(theDBMgr:aDBMgr);
   IndexLen();
   BuildDefaultTableDesc(theDBDef:aDBDef, TableName:string);
   NewIterator();
   BuildIndex(FromThisObject:aFullObject, ResultingIndex:string);
   compareIndexes(ThisIndex:string, ThatIndex:string);
   sameThing(PtrTo_ThisObj:string, PtrTo_ThatObj:string);
   indexAsText(ThisIndex:string, theText:string);
   indexFromText(ThisIndex:string, theText:string, curPos:Number);
}
/**
*
*/
declare class aIdAccessPlanDesc extends aAccessPlanDesc {
   StringExtract();
   ClassName();
   ClassId();
   newSelector();
   indexAsString();
   indexAsFullid();
   generate();
   IndexLen();
   BuildDefaultTableDesc();
   NewIterator();
   BuildIndex();
   compareIndexes();
   sameThing();
   BuildHighestIndex(PtrTo_theHighestIndex:string);
}
/**
*
*/
declare class aVarDependantAccessPlanDesc extends aIdAccessPlanDesc {
   Components:string;
   Separator:Number;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   IsValid();
   IsConsistent();
   newSelector();
   indexAsString();
   indexAsFullid();
   indexAsClassid();
   generate();
   IndexLen();
   BuildDefaultTableDesc();
   NewIterator();
   BuildIndex();
   compareIndexes();
   sameThing();
   indexAsText();
   indexFromText();
   BuildHighestIndex();
}
/**
*
*/
declare class aExtVarDependantAccessPlanDesc extends aVarDependantAccessPlanDesc {
   BasedOn:string;
   ClassName();
   ClassId();
   NameNameSpaceId();
}
/**
*
*/
declare class aClassIdAPDesc extends aIdAccessPlanDesc {
   StringExtract();
   ClassName();
   ClassId();
   newSelector();
   indexAsString();
   indexAsFullid();
   indexAsClassid();
   generate();
   IndexLen();
   BuildDefaultTableDesc();
   NewIterator();
   BuildIndex();
   compareIndexes();
   sameThing();
   BuildHighestIndex();
}
/**
*
*/
declare class aClassifiedNameAPdesc extends aIdAccessPlanDesc {
   StringExtract();
   ClassName();
   ClassId();
   newSelector();
   indexAsString();
   indexAsFullid();
   indexAsClassid();
   generate();
   IndexLen();
   BuildDefaultTableDesc();
   NewIterator();
   BuildIndex();
   compareIndexes();
   sameThing();
   BuildHighestIndex();
}
/**
*
*/
declare class aApplication extends aEntity {
   myContext:string;
   ClassName();
   ClassId();
   IsSystemCloseAccepted();
   TryToCloseAll();
   SaveAll();
   Run();
   About();
   SetText(theText:string);
   Context();
   DisplayObject(thisObject:string, WithThisScenario:aScenario, WithThisScenarioName:string, FromThisExecMode:string, inModalMode:Boolean):string;
   NotifyScenarioClosed(thisUIAgent:aUIAgent);
   Tutorial();
}
/**
*
*/
declare class aWideIde extends aApplication {
   theMetaModelBrowser:string;
   theDataBaseBrowser:string;
   theTextSearcher:string;
   theFilePicker:string;
   theExportManager:string;
   theHelpManager:string;
   GraphsCatalogue:string;
   ModulesCatalogue:string;
   GeneralComment:string;
   ParsingComment:string;
   RunningComment:string;
   IAmDebugging:Boolean;
   theDebuggingContext:string;
   theTutorialManager:string;
   theDataBaseDesigner:string;
   PopUpExtensions:string;
   EntitiesToRefresh:string;
   LB:string;
   WAMExecutionMode:Number;
   NoRefDevDBWaiting:Boolean;
   LeftDockedTools:string;
   RightDockedTools:string;
   StringExtract();
   ClassName();
   ClassId();
   ActionSave();
   IsSystemCloseAccepted();
   Kill();
   ShowApplicativeClassesContainer();
   ShowApplicativeRootsContainer();
   ShowApplicativeClasses();
   ShowLightClasses();
   ShowModulesList();
   ShowGraphsList();
   ShowToolBox();
   SetupRunningContext();
   SetupDebuggingContext();
   DefineDataBase();
   DefineDataBaseDefinitions();
   ExecuteApplication();
   RefreshAfterSynchronization();
   TryToCloseAll();
   SaveAll();
   Run();
   About();
   Tutorial();
   DeleteApplicativeClasses(theUIAgent:aUIAgent);
   ModifyaFullObject(theUIAgent:aUIAgent);
   BackupDataBases(theUIAgent:aUIAgent);
   InstallModule(theUIAgent:aUIAgent);
   Configure();
   Parameter();
   GoToCodeView(theUIAgent:aUIAgent);
   Generate(theUIAgent:aUIAgent);
   SystemInfo(theUIAgent:aUIAgent);
   DisplayLocalConfig(theUIAgent:aUIAgent);
   ManageUsersList();
   GetPrinter();
   ReleasePrinter();
   AllClassesModulesAreAccepted();
   OpenTestDataBases();
   CloseTestDataBases();
   LoggedUserOwnedThisEntity(thisEntity:string);
   GetWideCompileVersion(:string);
   GetRegistryInfo(:string);
   StopAllProcesses();
   PurgeTestDataBases();
   ExecuteOtherProcess(ClassName:string, MethodName:string, ScenarioName:string, GlobalRunningContextId:Number, CmdLine:string);
   WideRootPath(:string);
   ExecuteServer(GlobalRunningContextId:Number);
   PrepareForExternalTest();
   NotifyNewGraphCreated(theGraph:aEntity);
   NotifyNewModuleOrClassHasBeenCreated(theModule:aModuleDef);
   HelpOn(thisText:string);
   LogOut();
   ShowLocalConfig();
   SendMessage();
   GetMessages();
   WydeOption();
   GetOptionOf(thisClassId:Number);
   AppendCommentInDBDesigner(theComment:string);
   AppendWideComment(thisText:string, WideCommentKind:string, mustShowInfoViewer:Boolean);
   RegisterNewEntity(thisEntity:aEntity, theTransaction:aTransaction);
   EntityIsOwnedByLoggedUser(thisEntity:aEntity);
   MustRefreshAfterSynchronization(thisEntity:aEntity);
   GetMetaModelBrowser();
   BrowseMetaModel();
   CheckLoggedUserIsADeveloper();
   AppendTextCommentInDBDesigner(theComment:string);
   LaunchProcess(givenCmdLine:string, MinimizeWAM:Boolean, DisableWAM:Boolean, Msg:string, Aborted:Boolean);
   PrepareBeforeTest();
   RestoreAfterTest();
   NotifyEntityModified(theEntity:aEntity);
   DisplayWideComment();
   IgnoreClassFromDBDesigner(theClass:aModuleDef);
}
/**
*
*/
declare class aRoleType extends aEntity {
   theRoleClassDef:string;
   myRunTimeClone:string;
   ClassName();
   ClassId();
   IsValid();
   IdNameSpaceId();
   NewVersion();
   getMainAccessPlans();
   IsConsistent();
   isAlive();
   CloneForInOutSync();
   Accepts(FromThisObject:aFullObject, toThisObject:aFullObject);
   NewInstanceFromDroppedObject(FromThisObject:aFullObject, FromThisVar:string, DroppedObject:aFullObject, ObjectUsed:Boolean);
   IsDroppedObjectUsable(FromThisObject:aFullObject, FromThisVar:string, DroppedObject:aFullObject);
   NewAcceptedInstance(FromThisObject:aFullObject, FromThisVar:string, fromThisUIAgent:aUIAgent, atThisRank:Number);
   SearchAndPick(FromThisObject:aFullObject, FromThisVar:string, fromThisUIAgent:aUIAgent, TheCriterium:string, TheArgument:string, atThisRank:Number);
   ConsultThisObject(FromThisObject:aFullObject, toThisObject:aFullObject, fromThisUIAgent:aUIAgent);
   ModifyThisObject(FromThisObject:aFullObject, toThisObject:aFullObject, fromThisUIAgent:aUIAgent, theNewVersion:aFullObject, FromThisVar:string, atThisRank:Number):string;
   AuthorizeAction(FromThisObject:aFullObject, toThisObject:aFullObject, fromThisUIAgent:aUIAgent, ActionKind:string, FromThisExecMode:string);
   OnChange(FromThisObject:aFullObject, FromThisVar:string);
   canBreakLinkBetween(FromThisObject:aFullObject, toThisObject:aFullObject, fromThisVar:string);
   SingleRoleOf(FromThisObject:aFullObject, toThisObject:aFullObject);
   theBackRefVarLink(FromThisObject:aFullObject, toThisObject:aFullObject);
   UpdateBackRef(FromThisObject:aFullObject, toThisObject:aFullObject);
   RemoveBackRef(FromThisObject:aFullObject, toThisObject:aFullObject);
   WillModifyRefObjectwhenConnect(FromThisObject:aFullObject, toThisObject:aFullObject);
   GetAcceptedClassDef();
   BeforeMoveUpOrDown(fromThisObject:aFullObject, FromThisList:aListOfRefTos);
   AfterMoveUpOrDown(fromThisObject:aFullObject, FromThisList:aListOfRefTos);
   PrepareNestedObject(FromThisObject:aFullObject, toThisObject:aFullObject, FromThisVar:string, ExecMode:string, atThisRank:Number);
   HasBackRef(FromThisObject:aFullObject, toThisObject:aFullObject);
   GetMyRunTimeClone();
   AskForActions(ActionsDescriptionList:aListOfInstances, atX:Number, atY:Number, FromThisObject:aFullObject, fromThisUIAgent:aUIAgent, PtrTo_FromThisVar:string);
   TransactionRefusedOf(FromThisObject:aFullObject, FromThisVar:string, thisNewVersion:aFullObject);
   AcceptsClassDef(thisClassDef:aClassDef);
   CommonAncestorOfAcceptedClasses(theCommonAncestor:aClassDef);
   CanReceiveDuplicates(FromThisObject:aFullObject, FromThisVar:string, DroppedObject:aFullObject);
   WillModifyRefObjectWhenDisconnect(FromThisObject:aFullObject, ToThisObject:aFullObject, ReferenceType:aReferenceType);
}
/**
*
*/
declare class aSingleRoleType extends aRoleType {
   AcceptedClassDef:string;
   BackRefVarDesc:string;
   ConsultModal:Boolean;
   theConsultScenario:string;
   theCreateScenario:string;
   theModifyScenario:string;
   thePickerClassDef:string;
   thePickerScenario:string;
   WhatCanIDo:string;
   AcceptDescendant:Boolean;
   CreateDescendants:Boolean;
   OnlyDescendants:Boolean;
   InChargeOfDeletingBackRef:Boolean;
   AccessPlanDescForSearch:string;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   IsValid();
   NameNameSpaceId();
   IsConsistent();
   ProduceIRPass1();
   ProduceGold();
   Accepts();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
   NewAcceptedInstance();
   SearchAndPick();
   ConsultThisObject();
   ModifyThisObject();
   AuthorizeAction();
   canBreakLinkBetween();
   SingleRoleOf();
   theBackRefVarLink();
   GetAcceptedClassDef();
   HasBackRef();
   AskForActions();
   AcceptsClassDef();
   CommonAncestorOfAcceptedClasses();
   WillModifyRefObjectWhenDisconnect();
   CreateNewInstance(FromThisObject:aFullObject);
   InteractWithCreatedInstance(FromThisObject:aFullObject, ForThisVar:string, fromThisUIAgent:aUIAgent, atThisRank:Number, theNewInstance:aFullObject);
   theAcceptedClass();
   theAcceptedClassId():Number;
   MustAccept(thisClassId:Number);
   findDefaultSelector();
   findPicker(usingSelectionScenario:aScenario);
   pickInMemOnly(inThis:aListOfInstances, checkObjects:Boolean, FromThisObject:aFullObject, pFromThisVar:string);
   ScenarioFor(thisObject:aFullObject, ExecMode:string);
   InitPickerForSearch(FromThisObject:aFullObject, FromThisVar:string, thePicker:aPicker);
}
/**
*
*/
declare class aWideIDERole extends aSingleRoleType {
   ClassName();
   ClassId();
   AuthorizeAction();
   findPicker();
}
/**
*
*/
declare class aWideIDECatalogRole extends aWideIDERole {
   ClassName();
   ClassId();
   AuthorizeAction();
}
/**
*
*/
declare class aReftoContextRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewAcceptedInstance();
}
/**
*
*/
declare class aVersionPickerRole extends aWideIDERole {
   ClassName();
   ClassId();
   pickInMemOnly();
}
/**
*
*/
declare class aMemPickerRole extends aWideIDERole {
   ClassName();
   ClassId();
   pickInMemOnly();
}
/**
*
*/
declare class aInitializedScenarioRole extends aWideIDERole {
   StringExtract();
   ClassName();
   ClassId();
   NewAcceptedInstance();
}
/**
*
*/
declare class aMessageUserDestRole extends aWideIDERole {
   ClassName();
   ClassId();
   pickInMemOnly();
}
/**
*
*/
declare class aRefConfigModulesAndClassesRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
}
/**
*
*/
declare class aFreeModulesRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
}
/**
*
*/
declare class aRefScenarioRole extends aWideIDERole {
   ClassName();
   ClassId();
   pickInMemOnly();
}
/**
*
*/
declare class aReftoLoadValueMethodDescRole extends aWideIDERole {
   ClassName();
   ClassId();
   pickInMemOnly();
}
/**
*
*/
declare class aTreeMethodDescRole extends aWideIDERole {
   ClassName();
   ClassId();
   pickInMemOnly();
}
/**
*
*/
declare class aCascadeMethodDescRole extends aWideIDERole {
   ClassName();
   ClassId();
   pickInMemOnly();
}
/**
*
*/
declare class aCurImplemRoleType extends aWideIDERole {
   ClassName();
   ClassId();
   PrepareNestedObject();
}
/**
*
*/
declare class aListOfEventsRole extends aWideIDERole {
   ClassName();
   ClassId();
   ConsultThisObject();
   ModifyThisObject();
}
/**
*
*/
declare class aRunningMethodDescRole extends aWideIDERole {
   ClassName();
   ClassId();
   pickInMemOnly();
}
/**
*
*/
declare class aListofInterpClassRunContextRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
   canBreakLinkBetween();
}
/**
*
*/
declare class aReftoRunningChoiceRole extends aWideIDERole {
   ClassName();
   ClassId();
   SearchAndPick();
}
/**
*
*/
declare class aListOfBreakOrStopPointsRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
   canBreakLinkBetween();
}
/**
*
*/
declare class aIndexColumnsRole extends aWideIDERole {
   ClassName();
   ClassId();
   pickInMemOnly();
}
/**
*
*/
declare class aRefToDBTypeRole extends aWideIDERole {
   ClassName();
   ClassId();
   SearchAndPick();
   canBreakLinkBetween();
   pickInMemOnly();
}
/**
*
*/
declare class aOwnedListOfAPDRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
}
/**
*
*/
declare class aListOfAPDComponentRole extends aWideIDERole {
   ClassName();
   ClassId();
   Accepts();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
}
/**
*
*/
declare class aApplicativeRootsRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
   ConsultThisObject();
   ModifyThisObject();
   AuthorizeAction();
   AskForActions();
}
/**
*
*/
declare class aApplicativeClassesRole extends aWideIDERole {
   ClassName();
   ClassId();
   ConsultThisObject();
   ModifyThisObject();
   AuthorizeAction();
   AskForActions();
}
/**
*
*/
declare class aRunningContextRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
   NewAcceptedInstance();
   SearchAndPick();
   canBreakLinkBetween();
}
/**
*
*/
declare class aLoggedUserRole extends aWideIDERole {
   ClassName();
   ClassId();
   SearchAndPick();
   pickInMemOnly();
}
/**
*
*/
declare class aScenarioListForViewRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
   NewAcceptedInstance();
}
/**
*
*/
declare class aReftoArchetypeRole extends aWideIDERole {
   ClassName();
   ClassId();
   SearchAndPick();
   AuthorizeAction();
   OnChange();
   canBreakLinkBetween();
   findPicker();
   pickInMemOnly();
}
/**
*
*/
declare class aDerivesFromMethodDescRole extends aWideIDERole {
   ClassName();
   ClassId();
   ModifyThisObject();
   AuthorizeAction();
}
/**
*
*/
declare class aExportEntitiesRole extends aWideIDERole {
   ClassName();
   ClassId();
   IsDroppedObjectUsable();
}
/**
*
*/
declare class aReturnScenarioRole extends aWideIDERole {
   ClassName();
   ClassId();
   pickInMemOnly();
}
/**
*
*/
declare class aUserModulesRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
   pickInMemOnly();
}
/**
*
*/
declare class aDefaultAPDInClassDefRole extends aWideIDERole {
   ClassName();
   ClassId();
   Accepts();
   pickInMemOnly();
}
/**
*
*/
declare class aDefScenarioInClassDefRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
   pickInMemOnly();
}
/**
*
*/
declare class aListOfAvailableScenariosRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewAcceptedInstance();
   ConsultThisObject();
   ModifyThisObject();
   AuthorizeAction();
   OnChange();
   canBreakLinkBetween();
   AskForActions();
}
/**
*
*/
declare class aListOfAvailableScenariosRole1 extends aListOfAvailableScenariosRole {
   ClassName();
   ClassId();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
   NewAcceptedInstance();
   ModifyThisObject();
   CanReceiveDuplicates();
   InteractWithCreatedInstance();
}
/**
*
*/
declare class aTransientModuleListRole extends aWideIDERole {
   ClassName();
   ClassId();
   ConsultThisObject();
   ModifyThisObject();
   AuthorizeAction();
   canBreakLinkBetween();
   AskForActions();
   CreateNewInstance();
   InteractWithCreatedInstance();
}
/**
*
*/
declare class aClassDefAsDescendantRole extends aTransientModuleListRole {
   ClassName();
   ClassId();
   OnChange();
   CreateNewInstance();
}
/**
*
*/
declare class aCUDefOnChangeVarSingleRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
   ModifyThisObject();
   AuthorizeAction();
   OnChange();
}
/**
*
*/
declare class aListofClassDefRole extends aCUDefOnChangeVarSingleRole {
   ClassName();
   ClassId();
   NewAcceptedInstance();
   ConsultThisObject();
   ModifyThisObject();
   AuthorizeAction();
   OnChange();
}
/**
*
*/
declare class aOwnedListofMethodDescRole extends aCUDefOnChangeVarSingleRole {
   ClassName();
   ClassId();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
   NewAcceptedInstance();
   ConsultThisObject();
   ModifyThisObject();
   canBreakLinkBetween();
   AskForActions();
}
/**
*
*/
declare class aAllGraphsRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewAcceptedInstance();
   ConsultThisObject();
   ModifyThisObject();
   AuthorizeAction();
   canBreakLinkBetween();
}
/**
*
*/
declare class aReftoOverridingMethodTypeRole extends aWideIDERole {
   ClassName();
   ClassId();
   pickInMemOnly();
}
/**
*
*/
declare class aOverridenMethodDescTypeRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewAcceptedInstance();
}
/**
*
*/
declare class aOverrideInstanceVarDescRole extends aWideIDERole {
   ClassName();
   ClassId();
   pickInMemOnly();
}
/**
*
*/
declare class aReftoVarTypeRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewAcceptedInstance();
   ModifyThisObject();
   AuthorizeAction();
   findPicker();
}
/**
*
*/
declare class aPresentedClassDefRole extends aWideIDERole {
   ClassName();
   ClassId();
   AuthorizeAction();
   OnChange();
}
/**
*
*/
declare class aReftoRoleDefaultScenarioRole extends aWideIDERole {
   ClassName();
   ClassId();
   pickInMemOnly();
}
/**
*
*/
declare class aTypeReftoDBMgrClassDefRole extends aWideIDERole {
   ClassName();
   ClassId();
   pickInMemOnly();
}
/**
*
*/
declare class aReftoPickerScenarioRole extends aWideIDERole {
   ClassName();
   ClassId();
   Accepts();
   pickInMemOnly();
}
/**
*
*/
declare class aReftoPickerClassDefRole extends aWideIDERole {
   ClassName();
   ClassId();
   Accepts();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
   pickInMemOnly();
}
/**
*
*/
declare class aBackRefRole extends aWideIDERole {
   ClassName();
   ClassId();
   pickInMemOnly();
}
/**
*
*/
declare class aTheRoleClassDefRole extends aWideIDERole {
   ClassName();
   ClassId();
   NewAcceptedInstance();
   ConsultThisObject();
   ModifyThisObject();
}
/**
*
*/
declare class aInstalledConfigRole extends aSingleRoleType {
/**
*
*/
   NewAcceptedInstance();
/**
*
*/
   canBreakLinkBetween();
/**
*
*/
   ModifyThisObject();
/**
*
*/
   AuthorizeAction();
}
/**
*
*/
declare class aDeliveryPreparerRole extends aSingleRoleType {
/**
*
*/
   NewInstanceFromDroppedObject();
/**
*
*/
   canBreakLinkBetween();
/**
*
*/
   AskForActions();
/**
*
*/
   IsDroppedObjectUsable();
}
/**
*
*/
declare class aInstallableDeliveryRole extends aSingleRoleType {
/**
*
*/
   NewInstanceFromDroppedObject();
}
/**
*
*/
declare class aDeliveryToInstallRole extends aSingleRoleType {
/**
*
*/
   NewInstanceFromDroppedObject();
/**
*
*/
   IsDroppedObjectUsable();
}
/**
*
*/
declare class aConfigPreparerCatalogRole extends aSingleRoleType {
/**
*
*/
   InteractWithCreatedInstance();
/**
*
*/
   ModifyThisObject(FromThisObject:aFullObject, toThisObject:aDeliveriesBundlePreparer, fromThisUIAgent:aUIAgent, theNewVersion:aFullObject, FromThisVar:string, atThisRank:Number):string;
/**
*
*/
   canBreakLinkBetween();
/**
*
*/
   NewInstanceFromDroppedObject();
/**
*
*/
   IsDroppedObjectUsable();
/**
*
*/
   ConsultThisObject(FromThisObject:aFullObject, toThisObject:aDeliveriesBundlePreparer, fromThisUIAgent:aUIAgent);
/**
*
*/
   pickInMemOnly();
/**
*
*/
   SearchAndPick();
/**
*
*/
   AuthorizeAction();
/**
*
*/
   CreateNewInstance();
}
/**
*
*/
declare class RequiredForInstallationRole extends aSingleRoleType {
/**
*
*/
   pickInMemOnly();
/**
*
*/
   OnChange();
/**
*
*/
   canBreakLinkBetween();
}
/**
*
*/
declare class aDeliveriesThatCanBeUpdatedRole extends aSingleRoleType {
/**
*
*/
   IsDroppedObjectUsable();
/**
*
*/
   removeDeliveryPreparer(theConfig:aDeliveriesBundlePreparer, theDelivery:aDeliveryPreparer);
/**
*
*/
   NewInstanceFromDroppedObject();
}
/**
*
*/
declare class DeliveryPreparersToUpdateRole extends aSingleRoleType {
/**
*
*/
   IsDroppedObjectUsable();
/**
*
*/
   appendDeliveryPreparer(theConfig:aDeliveriesBundlePreparer, theDelivery:aDeliveryPreparer);
/**
*
*/
   NewInstanceFromDroppedObject();
}
/**
*
*/
declare class HiddenBundlePreparesRole extends aSingleRoleType {
/**
*
*/
   appendInexistingSignature(list:aListOfInstances, signature:string, name:string, theDelBPreparer:aDeliveriesBundlePreparer);
/**
*
*/
   pickInMemOnly();
/**
*
*/
   OnChange();
}
/**
*
*/
declare class HiddenBundlesRole extends HiddenBundlePreparesRole {
/**
*
*/
   pickInMemOnly();
}
/**
*
*/
declare class aRequiredDelBRefRole extends aSingleRoleType {
/**
*
*/
   appendInexistingSignature(list:aListOfInstances, signature:string, name:string, theDelBPreparer:aDeliveriesBundlePreparer);
/**
*
*/
   pickInMemOnly(inThis:aListOfInstances, checkObjects:Boolean, FromThisObject:aDeliveriesBundlePreparer, pFromThisVar:string);
/**
*
*/
   OnChange(FromThisObject:aDeliveriesBundlePreparer, FromThisVar:string);
/**
*
*/
   AuthorizeAction(FromThisObject:aDeliveriesBundlePreparer, toThisObject:aFullObject, fromThisUIAgent:aUIAgent, ActionKind:string, FromThisExecMode:string);
/**
*
*/
   canBreakLinkBetween(FromThisObject:aDeliveriesBundlePreparer, toThisObject:aFullObject, fromThisVar:string);
/**
*
*/
   SearchAndPick(FromThisObject:aDeliveriesBundlePreparer, FromThisVar:string, fromThisUIAgent:aUIAgent, TheCriterium:string, TheArgument:string, atThisRank:Number);
}
/**
*
*/
declare class aMultiRoleType extends aRoleType {
   theSingleRoleList:string;
   StringExtract();
   ClassName();
   ClassId();
   IsValid();
   NameNameSpaceId();
   IsConsistent();
   ProduceIRPass1();
   ProduceGold();
   Accepts();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
   NewAcceptedInstance();
   SearchAndPick();
   ConsultThisObject();
   ModifyThisObject();
   AuthorizeAction();
   OnChange();
   canBreakLinkBetween();
   SingleRoleOf();
   theBackRefVarLink();
   GetAcceptedClassDef();
   BeforeMoveUpOrDown();
   AfterMoveUpOrDown();
   PrepareNestedObject();
   HasBackRef();
   AskForActions();
   AcceptsClassDef();
   CommonAncestorOfAcceptedClasses();
   CanReceiveDuplicates();
   WillModifyRefObjectWhenDisconnect();
   PickASingleRole(fromThisObject:aLightObject, ActionKind:string);
}
/**
*
*/
declare class aListOfSqlColumnsRole extends aMultiRoleType {
   ClassName();
   ClassId();
   NewInstanceFromDroppedObject();
   IsDroppedObjectUsable();
}
/**
*
*/
declare class aCUDefOnChangeVarMultiRole extends aMultiRoleType {
   ClassName();
   ClassId();
   ModifyThisObject();
   AuthorizeAction();
   OnChange();
}
/**
*
*/
declare class aOption extends aEntity {
   ClassName();
   ClassId();
   IsVirtual();
}
/**
*
*/
declare class aSqlOptions extends aOption {
   Trace:Boolean;
   TraceStmt:Boolean;
   TraceBind:Boolean;
   TraceFetch:Boolean;
   TraceFree:Boolean;
   WriteInFile:Boolean;
   FileName:string;
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aUIBuilderOption extends aOption {
   DefaultFontName:string;
   DefaultFontSize:Number;
   DefaultFontSels:string;
   AskToBuildUIAgentClass:Boolean;
   ExtendedScenarioDesign:Boolean;
   ClassName();
   ClassId();
   Init();
   ChangeFont(theUIAgent:aUIAgent);
}
/**
*
*/
declare class aWydeOption extends aOption {
   ScenarioForClassVertical:Boolean;
   AskContextSavingConfirmation:Boolean;
   FullTestChecking:Boolean;
   FullTestCheckingBeforeTest:Boolean;
   FullSafeTesting:Boolean;
   KeywordColor:string;
   CommentColor:string;
   StringColor:string;
   TextColor:string;
   NumberColor:string;
   BackGroundBMP:string;
   NoColor:Boolean;
   FontName:string;
   FontSize:Number;
   FontSels:string;
   RemoveUnnecessaryUses:Boolean;
   ParamsInColumns:Boolean;
   OneParamByColumn:Boolean;
   IndentLength:string;
   LineLength:string;
   DontCheckExternals:Boolean;
   TextBackColor:string;
   SeverityLevel:string;
   CppTolerant:Boolean;
   MinimizeWAMInSafeTesting:Boolean;
   Spare1:Boolean;
   GenerateVarCommentInText:Boolean;
   GenerateMethCommentInText:Boolean;
   GenerateClassCommentInText:Boolean;
   TraceInterpOQLInTGV:Boolean;
   OpenDeBugOnInterpOQLInTGV:Boolean;
   myUIExecMode:string;
   RollOverButtons:Boolean;
   MultiThreadSafeTesting:Boolean;
   GoldParserClassName:string;
   UseNameSuggestion:Boolean;
   CodeAgentClassName:string;
   InsertWhenSingleInList:Boolean;
   MethodInsertion:string;
   ExpandReferenceAttributes:Boolean;
   TraceDisposeMem:Boolean;
   SystemPopup:Boolean;
   SelectNodeWhenJustCreated:Boolean;
   SmallBitmapsInIdeToolbar:Boolean;
   UseExternalHelpBrowser:Boolean;
   LookForFieldAlsoInAncestorsAtFirst:Boolean;
   AddEndLoopComment:Boolean;
   AddEndLoopCommentOnlyAfterNbLines:Number;
   FormatOQLStatements:Boolean;
   DontAskForRefDevComment:Boolean;
   ParseOQLEvenIfCppOrSqlGenerationImpossible:Boolean;
   eWAMThemeKinds:string;
   ReplaceSystemFont:Boolean;
   eWAMExecutionAndDesignThemeKinds:string;
   StandardMouse:Boolean;
   GenerateOtherEntitiesCommentInText:Boolean;
   eWAMStringEncodingUnicodeUTF8:Boolean;
   eWAMExecutionStringEncodingUnicodeUTF8:Boolean;
   ErrTraceCsvFormat:Boolean;
   ErrTraceRecycled:Boolean;
   ErrTraceRecyclingDays:Number;
   RejectNonPortableOverrides:Boolean;
   IDEWindowTitle:string;
   AutoAcceptSyncByDefault:Boolean;
   wExtAnnotationsEnabled:Boolean;
   ShowModelAnnotation:Boolean;
   MinimizeModelAnnotation:Boolean;
   ClassName();
   ClassId();
   Init();
   IsValid();
   GetBitmapFile();
   ChangeFont(theUIAgent:aUIAgent);
}
/**
*
*/
declare class aInterpreterOptions extends aOption {
   WarningOnOverflow:Boolean;
   WarningOnNonProjectAssign:Boolean;
   AlertOnWarnings:Boolean;
   WarningOnStringOverflow:Boolean;
   ClassName();
   ClassId();
   Init();
   BeforeAccept();
}
/**
*
*/
declare class aSqlTypeData extends aEntity {
   NotNull:Boolean;
   ConversionKind:string;
   StringExtract();
   ClassName();
   ClassId();
   getMainAccessPlans();
   GetPrecision();
   GetScale();
   CloneYourSelfInNewDBDef(TheDBDef:aDBDef, RestrictToClasses:aListOfInstances);
   GetEncryptionBrokerClassId();
   GetEncryptionBrokerData();
   SetEncryption(EncryptionBrokerClassDef:aClassDef, EncryptionBrokerData:aDBEntity);
   SetPrecision(thePrecision:Number);
   GetTmpEncryptionBrokerAndData(forDBDef:aDBDef, EncryptionBroker:aSqlEncryptionBroker, EncryptionBrokerData:aDBEntity);
}
/**
*
*/
declare class aSqlType extends aEntity {
   CStringConversionSize:Number;
   TypeKind:Number;
   FixedPrecision:Number;
   ClassName();
   ClassId();
   DBRepresentationFor(inThisDBDef:aDBDef, forThisVar:aVarDesc, TypeData:aSqlTypeData);
   ColumnTypeDDL(TypeData:aSqlTypeData):string;
   BindValue(forDBMgr:aDBMgr, hStmt:string, ParamCount:Number, BindAddr:string, theVarAddress:string, MemSize:Number, MMType:aType, TypeData:aSqlTypeData, Buffer:string);
   BindDataForFetchForCol(forDBMgr:aDBMgr, hStmt:string, ParamCount:Number, BindAddr:string, MemSize:Number, MMType:aType, TypeData:aSqlTypeData, Buffer:string);
   ConvertDataAfterFetchForCol(forDBMgr:aDBMgr, WhereToLoad:string, Buffer:string, MMType:aType, TypeData:aSqlTypeData, NoConversionToo:Boolean);
   GetPrecision(TypeData:aSqlTypeData);
   GetNewTypeData();
   GetScale(TypeData:aSqlTypeData);
   FreeBufferAfterBind(forDBMgr:aDBMgr, TypeData:aSqlTypeData, WorkBuffer:string);
   BufferSizeForFetch(forDBDef:aDBDef, MemSize:Number, MMType:aType, TypeData:aSqlTypeData);
   BindDataForArrayFetch(forDBMgr:aDBMgr, hStmt:string, ParamCount:Number, BindAddr:string, MemSize:Number, MMType:aType, TypeData:aSqlTypeData, Buffer:string, ArraySize:Number, pIndicator:string);
   IsUserDefinedSqlType();
   GetCTypeKind(forDBDef:aODBCDBDef, forType:aType, TypeData:aSqlTypeData);
   IsCompatibleWithMMType(forDBDef:aODBCDBDef, TypeData:aSqlTypeData, MMType:aType);
   ColumnTypeDDLProducedAtEnd(TypeData:aSqlTypeData);
   InlinedValue(forDBDef:aDBDef, theVarAddress:string, MMType:aType, TypeData:aSqlTypeData, theValue:string);
   IsPrecisionVariable();
}
/**
*
*/
declare class aDBDef extends aEntity {
   DataSetId:Number;
   DataSetVersion:Number;
   StaticPRBTable:string;
   StaticCritSection:string;
   StaticMultiThreadedDB:Boolean;
   OpenedByApplication:Boolean;
   StaticStmtsKept:Number;
   StaticMultiThreadDBRank:Number;
   MaxConnections:Number;
   dummyInt5:Number;
   fromNSId:Number;
   toNsId:Number;
   fromNSIdContext:string;
   toNSIdContext:string;
   ClosedDBAtInit:Boolean;
   APDs:string;
   myDBMgr:string;
   Shared:Boolean;
   myClassDBDefs:string;
   AccessPlanDescriptors:aListOfInstances;
   LastOwnedId:Number;
   DBMgrClassDef:string;
   StringExtract();
   ClassName();
   ClassId();
   IsValid();
   Kill();
   GetBitmap();
   IdNameSpaceId();
   NameNameSpaceId();
   IsConsistent();
   GetIDAllocater();
   GetNsIdAndIdforOwnedEntity();
   IsAnExportableEntity();
   IsAnInOutSyncEntity();
   InOutSyncCategory();
   RegisterYourselfInIDE();
   NotifyDeletion();
   IsModifiableInIDEExecutionMode();
   IsNameValid();
   OpenDB(ReadWrite:Boolean);
   CloseDB();
   DBCreated();
   PurgeDB();
   CreateDB();
   DropDB();
   ClassDefRepresentationClassId():Number;
   GetLegalNameFrom(theName:string, forEntity:aDBEntity):string;
   NewDBMgr();
   InitAccessPlanDescriptorsList();
   PrepareMappingOf(theClassDef:aClassDef, x:Number, y:Number, theUIAgent:aUIAgent);
   AnalyseMapping(theUIAgent:aUIAgent);
   CheckConsistency(theUIAgent:aUIAgent);
   CheckCompatibilityWithDB(theUIAgent:aUIAgent);
   ActionDropDB(theUIAgent:aUIAgent);
   ActionPurgeDB(theUIAgent:aUIAgent);
   IsDBOpen();
   BuildNsIdAndIdForClassDBRep(theClassDef:aClassDef, theNsId:Number, theId:Number);
   CreateClassDBRepFor(theClassDef:aClassDef);
   PrepareCloneForAnOtherThread();
   ProduceCPPExternalPredefinitions(OQLOpSelect:aOQLOpSelect, PtrTo_Where:string, PtrTo_Options:string, MultiTableProduced:aProdCPP, theTemporaryProduced:aProdCPP, IncludeProduced:aProdCPP, MultiBrokerClassName:string);
   OpenDBForManagement();
   GetDBMgrForManagement();
   ClassDBRepFromClassId(FromId:Number);
   GoodOne();
   AnalyseMappingImpactOnOQL(theUIAgent:aUIAgent);
   IsSupportingClassVersioning();
}
/**
*
*/
declare class aODBCDBDef extends aDBDef {
   ODBCDBDefModifiers:string;
   UserName:string;
   PassWord:string;
   DefaultTableDescs:string;
   NameSpaceId:Number;
   DBId:Number;
   LastAllocatedId:Number;
   DDL:string;
   hasIdAccessPlan:Boolean;
   AvailableTypes:string;
   ReservedWords:string;
   DDLFileName:string;
   DataBaseName:string;
   ExistingTableDescs:string;
   ClassName();
   ClassId();
   Init();
   IsValid();
   BeforeAccept();
   IsConsistent();
   IsModifiableInIDEExecutionMode();
   OpenDB();
   DBCreated();
   PurgeDB();
   DropDB();
   ClassDefRepresentationClassId();
   GetLegalNameFrom();
   NewDBMgr();
   InitAccessPlanDescriptorsList();
   PrepareMappingOf();
   AnalyseMapping();
   ActionDropDB();
   ActionPurgeDB();
   ProduceCPPExternalPredefinitions();
   OpenDBForManagement();
   AnalyseMappingImpactOnOQL();
   IsSupportingClassVersioning();
   CreateDefaultTableDescs();
   CreateDefaultTablesInDB();
   CheckDefaultTables();
   NewInstanceId(ForNSId:Number):Number;
   WriteTitle();
   DeleteAllTableDesc();
   ProduceIndexDDL(PtrTo_Where:string, PtrTo_Options:string, theIndexDesc:aSqlIndexDesc);
   UpdateDDL();
   InitTypes();
   BestFitDBType(theMMType:aType, TypeData:aSqlTypeData);
   AddReservedNames();
   SqlTypeIsCompatibleWithMMType(theSqlType:aSqlType, TypeData:aSqlTypeData, MMType:aType);
   SqlTypeAndDataFromDBValues(ColumnName:string, theColType:Number, theColDesc:string, Precision:Number, Length:Number, Scale:Number, Nullable:Number, theSqlType:aSqlType, TypeData:aSqlTypeData);
   LoadDDLFromFile();
   SaveDDLToFile();
   ExecuteDDL();
   PickaDDLFile();
   _OpenDBForManagement_Deprecated();
   _GetDBMgrForManagement_Deprecated();
   FindDBClassDefRepresentation(theClassdef:aClassDef);
   ActionCreateDefaultTableDescs(theUIAgent:aUIAgent);
   ActionCreateDefaultTablesInDB(theUIAgent:aUIAgent);
   ActionDeleteAllTableDesc(theUIAgent:aUIAgent);
   GetSqlLikeWildCard(:string);
   SqlPlaceHolderString(ColsCount:Number):string;
   ColumnDescription(theDBMgr:aODBCDBMgr, TableName:string, ColumnName:string, theType:aSqlType, TypeData:aSqlTypeData);
   ExternalType(theMMType:aType);
   BestMMTypeForData(theData:aSqlTypeData, theType:aSqlType);
   DBMSVersion(majorVers:string, minorVersion:string, releaseVersion:string);
   OpenDBWithUser(thisUserName:string, thisPassWord:string, ReadWrite:Boolean);
   PRBGeneratorClassName(:string);
   GetDDLEndLineCharsForDDLSript(:string);
   MaxDBEntitiesNameLength(forEntity:aDBEntity);
   ProduceSqlUpcaseKeyWord(Where:string, Options:string);
   GetStoragePropertyDDL(forEntity:aDBEntity, Where:string, Options:string);
   ColumnTypeDDLProducedAtEnd(ForType:aSqlType, ForTypeData:aSqlTypeData);
   ProduceSQLTop(AtBeginning:Boolean, TopOp:aIROpNode, Where:string, Options:string);
   CanBindSmallInt8ToInt();
   PRBClassNameFor(forThisClassName:string, HashClassnameMinLen:Number, PRBExtension:string):string;
   ActionUpdateTableDescription();
   GenerateDDL(theDDL:string);
   GenerateDDLForUpdateFromDB(theDDL:string);
   SqlNestedRequestOnTupleMayUseIN();
   ProduceSQLDistinctAfterTop();
   GetEncryptionBrokerClassId();
   BestFitDBTypeForEncryption(EncryptionBrokerClassId:Number, theMMType:aType, TypeData:aSqlTypeData);
   GetListOfSqlEncryptionData();
   GetTheXMLProducer();
   IsAccentSensitive();
   IndexAccentCaseSensitivity(:string);
   IsCaseSensitive();
   HasVirtualPrecision(ForType:aSqlType);
}
/**
*
*/
declare class aTGVDBDef extends aDBDef {
   FullName:string;
   NoKrunchListOfs:Boolean;
   ClassName();
   ClassId();
   Init();
   IsValid();
   OpenDB();
   DBCreated();
   PurgeDB();
   CreateDB();
   ClassDefRepresentationClassId();
   NewDBMgr();
   ActionPurgeDB();
   ProduceCPPExternalPredefinitions();
   FullFileName(:string);
}
/**
*
*/
declare class aBundleDBDef extends aTGVDBDef {
/**
*
*/
   NewDBMgr();
}
/**
*
*/
declare class aExportManager extends aEntity {
   ClassesToExport:string;
   ImportTargets:string;
   theCatalogue:string;
   theTransaction:string;
   FileName:string;
   curDBDef:string;
   ClassOrModuleCreatedNumber:Number;
   ClassOrModuleUpdatedNumber:Number;
   CorrespondingList:string;
   OriginalList:string;
   fromThisContext:Number;
   toThisContext:Number;
   IntermediateContext:Number;
   AlertConsistencyErrors:Boolean;
   mustImportDirectlyWithNoIdExpansion:Boolean;
   mustCompareOnlyVersions:Boolean;
   MustNotSpecifyTarget:Boolean;
   JobDone:string;
   ClassTreatedNumber:Number;
   mustUseATranslator:Boolean;
   MustHideSource:Boolean;
   ImportingWydeExtension:Boolean;
   QuitWithoutCleaning:Boolean;
   isExporting:Boolean;
   noInteraction:Boolean;
   OldVersionCompatible:Boolean;
   ClassName();
   ClassId();
   IsValid();
   Export();
   Import();
   PickAfileNameForImport();
   PickAfileNameForExport();
   ViewCatalogueOfExportFile();
   InitClassesToExportFromCatalogue();
   ClearComment();
   BuildExportTransaction();
   BuildImportTransaction();
   AllIsConsistentForImport();
   AllIsConsistentForExport();
   UpdateLocalConfigAndModulesList();
   RecastEntitysFromData();
   ExpandIds();
   OpenExportTGV();
   AllIsConsistent();
   MustTreatThisEntity(thisObject:aEntity);
   UpdateOriginalListWith(thisObject:aEntity);
   BuildOriginalListFrom(thisList:aListOfInstances);
   CreateCorrespondingEntityOf(thisObject:aEntity, theCorrespondingEntity:aEntity, CorrespondingFullId:string);
   UpdateCorrespondingEntityOf(thisObject:aEntity, theCorrespondingEntity:aEntity);
   PrepareForWorking();
   GetCorrespondingEntityOf(thisObject:aEntity);
   UpdateCorrespondingEntity(thisObject:aEntity);
   BuildCorrespondingList();
   CreateOrUpdateCatalogue();
   SetExportNsIdContexts();
   SetImportNsIdContexts();
   CanOpenExportTGV();
   CloseExportTGV();
   ExportTGVNsIdContext();
   ExportTGVDataSetId();
   doExport();
   CleanAll();
   MustPropagateOn(thisEntity:aEntity, thisVar:string);
   AppendInOriginalList(thisObject:aEntity);
   RecastEntitysWhenClassExportedOrImported();
   UpdateReftoIfNecessary(FromThisObject:aEntity, VarAddress:string, curType:aReftoType);
   UpdateListofIfNecessary(FromThisObject:aEntity, VarAddress:string, curType:aListofReftosType);
   FindCorrespondingEntityOf(thisObject:aEntity);
   BuildCorrespondingFullIdOf(thisObject:aEntity, theFullIdAddress:string);
   CatalogueNsId();
   AcceptTransaction();
   CanOpenTGVForImport();
   PrefixeAll();
   UseTranslator();
   BatchImport();
   BatchImportWamExtension();
   mustUpdateObject(theObject:aEntity, theReference:aEntity);
   InitTargets();
   ManageThisObjectToBeSaved(thisEntity:aEntity);
   SetDefaultPickableDirectory();
   SetJobDoneTo(thisValue:Number);
   LoadCatalog();
   cleanAfterWork();
   MustUpdateConfigWithStationaryEntities();
   GetAllClasses();
}
/**
*
*/
declare class aMetaModelBrowser extends aEntity {
   BrowseAbleEntitys:string;
   FoundEntities:string;
   Criterium:string;
   CurrentEntity:string;
   theReference:string;
   InImplem:Boolean;
   InDef:Boolean;
   Laps:string;
   ClassName();
   ClassId();
   Init();
   ExecuteSelection();
   GetCurrentEntity();
   FoundEntitiesNumber();
   WhereUsedReference();
}
/**
*
*/
declare class aLocalIdDistributor extends aEntity {
   IdDistributer:string;
   LocalDistributedId:Number;
   WydeExtensionId:Number;
   ClassName();
   ClassId();
   UpDateAllIdDistributersWithExisting();
}
/**
*
*/
declare class aLocalConfig extends aEntity {
   allModules:string;
   allClasses:string;
   allGraphs:string;
   allDBDefs:string;
   allOthers:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aRefConfig extends aEntity {
   ModulesAndClasses:string;
   FreeModulesAndClasses:string;
   Users:string;
   FreeUsers:string;
   loggedRefUser:string;
   IdDistributerOut:string;
   IdDistributerCount:string;
   OtherEntities:string;
   FreeOtherEntities:string;
   DeltaWithPrevVersion:string;
   RefGlobalVersion:Number;
   ActionInProgress:Number;
   KeyInProgress:string;
   TeamName:string;
   TeamKey:string;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   NewVersion();
   Versionning();
   GetLoggedUser();
   FreezetheAppli();
   deleteSelectedClassOrModule();
   FreeSelectedUserAsLastDitchHope(theUIAgent:aUIAgent);
   GetNewGlobalVersion();
   GetTeamStatus(:string);
}
/**
*
*/
declare class aRunningChoice extends aEntity {
   theRunningApplicationClassOrModule:string;
   theRunningMethodDesc:string;
   StringExtract();
   ClassName();
   ClassId();
}
/**
*
*/
declare class aInterpretedClassRunningContext extends aEntity {
   InDllMode:Boolean;
   theClassImplem:string;
   theStopPointsList:string;
   theInvisibleList:string;
   StringExtract();
   ClassName();
   ClassId();
   IdNameSpaceId();
   BuildFullId();
}
/**
*
*/
declare class aSampleApplication extends aEntity {
   theGuineaPig:string;
   ClassName();
   ClassId();
   Run();
}
/**
*
*/
declare class aDebuggingContext extends aEntity {
   theInterpretedClassesList:string;
   ClassName();
   ClassId();
   GetContext();
   GetaFullObjectClassDef();
}
/**
*
*/
declare class aRunningContext extends aEntity {
   theRunningChoice:string;
   theTestDBDefs:string;
   theRoot:string;
   AlertClassDef:string;
   allTraductions:string;
   CmdLine:string;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   GetBitmap();
   IdNameSpaceId();
   NameNameSpaceId();
   IsAnExportableEntity();
   Execute();
   ExecuteInIDE();
   GetNewAddressManager();
   DBDefForRemoteModule(thisModuleImplem:aModuleImplem);
   GetDataSet();
   GetDefaultNsIdContext();
   TerminateExecution();
   SetAppliToLaunch(theClassOrModuleName:string, theMethodName:string);
   RTRaiseError(fromModule:string, fromProcedure:string, comment:string, seriousness:string);
   MUECTransactionTimeOut();
   ChangeLangIfNecessaryOf(thisModuleImplem:aModuleImplem);
   TestInMultiLangMode();
   CheckTestDBs();
   GetLanguageCount();
   NewDynamicMultiLangBroker();
   TestInDynamicMultiLangMode();
   GetLanguageOptionFromName(theLanguageName:string);
}
/**
*
*/
declare class aContext extends aEntity {
   latestDisplayedObjects:string;
   ObjectsToRestore:string;
   RestoreOpenedWindow:Boolean;
   DoNotDisplayWelcomeScreen:Boolean;
   ClassName();
   ClassId();
   Init();
   getlastScenarioConfig(theObject:aLightObject, theScenario:aScenario, x:Number, y:Number, w:Number, h:Number, WindowKind:string);
   NotifyScenarioClosed(thisUIAgent:aUIAgent);
   RestoreObject(theObject:aLightObject, ExecMode:string, theScenario:aScenario);
   DisplayObjectsAtBegining();
   notifyWindowMustBeRestored(thisUIAgent:aUIAgent);
}
/**
*
*/
declare class aWideContext extends aContext {
   theRoot:string;
   ApplicativeRoots:string;
   ApplicativeClasses:string;
   theLoggedUser:string;
   LoggedPassWord:string;
   theNSIdContext:string;
   theDBDefs:string;
   myRunningContext:string;
   RefConfig:string;
   theLocalConfig:string;
   theLocalIdDistributor:string;
   allModules:string;
   theGenerator:string;
   WideExtensions:string;
   WideEnvExtensions:string;
   WideToolsExtensions:string;
   WideConfigExtensions:string;
   WideDeploymentExtensions:string;
   WideDataBaseExtensions:string;
   theRefDevDBDef:string;
   WydeOptions:string;
   WideModelingExtensions:string;
   WideExternalCompoExtensions:string;
   SystemBaseVersion:string;
   ProductionApplicationVersion:Number;
   WideMUserExtensions:string;
   WideRunExtensions:string;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   IsValid();
   Kill();
   BeforeAccept();
   Versionning();
   RestoreObject();
   DisplayObjectsAtBegining();
   BuildClassesAndModulesList(theUIAgent:aUIAgent);
   SetUp(theUIAgent:aUIAgent);
   Execute(theUIAgent:aUIAgent);
   LogOut();
   SendMessage();
   GetMessages();
   ShowOptions();
   ShowLocalConfig();
   GetLogo();
   GetAppliDesc(:string);
   RemainingTime(:string);
   OpenRefDevDB();
   CloseRefDevDB();
   GetRefConfig();
   CheckLoggedUser();
   ShowWydeIncWWW();
   GeteWAMPainterScenario();
   GeteWAMPainterAboutScenario();
}
/**
*
*/
declare class aMessage extends aEntity {
   StringExtract();
   ClassName();
   ClassId();
   IsValid();
   BuildFullId();
}
/**
*
*/
declare class aUser extends aEntity {
   UserPassWord:string;
   UserPassWordConfirmation:string;
   userGroup:string;
   myModulesAndClasses:string;
   Messages:string;
   LocalDistributedId:Number;
   hasPredefinedDistributedId:Boolean;
   myOtherEntities:string;
   allNonCheckedOutButModifyable:string;
   myRefModulesAndClasses:string;
   myRefOtherEntities:string;
   ClassName();
   ClassId();
   Init();
   IsValid();
   IdNameSpaceId();
   SynchronizeAll();
   UIOutSelectedClass();
   UIInSelectedClass();
   DeliverAll();
   UISyncSelectedClass();
   UIDeliverSelectedClass();
   CheckInAll();
   IsInUse();
   CheckOutAll();
   CheckIn(EntityToCheckIn:aEntity);
   CheckOut(EntityToCheckOut:aEntity);
   Sync(EntityToSync:aEntity);
   Deliver(EntityToDeliver:aEntity);
   DeliverList(theList:aListOfInstances);
   CheckInList(theList:aListOfInstances);
   GetTree(FromObject:aUser, pList:string, ListType:aType);
   SyncList(theList:aListOfInstances);
   CheckOutList(theList:aListOfInstances);
   ShowSyncReport();
   IsADevelopper();
   IsAIntegrator();
   IsASeniorDeveloper();
}
/**
*
*/
declare class aAPDescComponent extends aEntity {
   VarOrMethodDesc:string;
   IsDescending:Boolean;
   unVisible:Boolean;
   Len:Number;
   Justification:string;
   Grid:string;
   Resizable:Boolean;
   AutoSize:Boolean;
   BuildingCritRole:string;
   StringExtract();
   ClassName();
   ClassId();
   IdNameSpaceId();
}
/**
*
*/
declare class aColumnQualifier extends aEntity {
   myVar:string;
   Width:Number;
   Fraction:string;
   Resizable:Boolean;
   RelativeWidth:Boolean;
   TitleForeColor:string;
   TitleBackColor:string;
   TitleGridSet:string;
   TitleJustification:string;
   LineForeColor:string;
   LineBackColor:string;
   LineGridSet:string;
   LineJustification:string;
   ClassName();
   ClassId();
   Init();
   getMainAccessPlans();
   IsConsistent();
}
/**
*
*/
declare class aCompilerOptions extends aEntity {
   Syntax:Number;
   KWHasher:string;
   ClassName();
   ClassId();
   LoadHasher();
   LoadDefaults();
   GetColors(theWord:string, ForeColor:string, BackColor:string, FontSels:string);
}
/**
*
*/
declare class aGOLDCompilerOptions extends aCompilerOptions {
   RemoveUnnecessaryUses:Boolean;
   DontCheckExternals:Boolean;
   CppTolerant:Boolean;
   Spare1:Boolean;
   RejectNonPortableOverrides:Boolean;
   ClassName();
   ClassId();
   Init();
   LoadHasher();
   LoadDefaults();
   GetColors();
}
/**
*
*/
declare class aDeliveriesBundlePreparer extends aEntity {
   AlreadyCreatedDelB:string;
   OwnedDeliveries:string;
   RequiredDelBForInstallation:string;
   Signature:string;
   LastDeliveryLowId:Number;
   GenerationDirectory:string;
   SameIds:Boolean;
   WamExtension:Boolean;
   HideSource:Boolean;
   ReadMe:string;
   IsASystemBundle:Boolean;
   HiddenDelBContent:string;
   Candidates:aListOfInstances;
   PresentableCandidates:string;
   DeliveriesThatCanBeUpdated:string;
   DeliveriesToUpdate:string;
   EntitiesToClone:aListOfInstances;
   EntitiesToSave:aListOfInstances;
   Clones:aListOfInstances;
   Gauge:aGauge;
   ClosureOK:Boolean;
   HiddenDelBPreparerContent:string;
   ownedId:Number;
   RequiredDelBReferences:string;
   ExternalClasses:aListOfInstances;
   ContentsLocked:Boolean;
   XMLFormat:Boolean;
   WellGenerated:Boolean;
   CodeAsText:Boolean;
   ConfidentialBundle:Boolean;
/**
*
*/
   AppendEntityToBeSetPrivateForPatch(thisEntity:aEntity);
/**
*
*/
   SetNewEntityInPatchToPrivate(thisCloneEntity:aEntity);
/**
*
*/
   SetNewEntitiesClonesInPatchesAsPrivate(newConfig:aDeliveriesBundle);
/**
*
*/
   FindEntity(Entity:aEntity, CandidateRank:Number);
/**
*
*/
   AppendRequiredDelBInList(HashTable:aDataByStringHashTable, DelB:aDeliveriesBundle);
/**
*
*/
   CheckRequiredDelBForInstallation();
/**
*
*/
   InitRequiredDelBForInstallation();
/**
*
*/
   InitRequiredDelBForInstallationFromGeneratedBundle(theDelB:aDeliveriesBundle);
/**
*
*/
   getCategoryFromName(CatName:string);
/**
*
*/
   initPresentableCandidates();
/**
*
*/
   RefreshCandidates();
/**
*
*/
   getGauge();
/**
*
*/
   getAllDeliveriesToUpdate();
/**
*
*/
   removeAllDeliveriesToUpdate();
/**
*
*/
   CleanAll();
/**
*
*/
   initForCreation();
/**
*
*/
   RefreshDeliveries();
/**
*
*/
   RemoveOwnedDelivery(thisDelivery:aDeliveryPreparer);
/**
*
*/
   Contains(thisEntity:aEntity);
/**
*
*/
   RemoveCandidate(thisCandidate:aEntity);
/**
*
*/
   AppendCandidate(thisCandidate:aEntity);
/**
*
*/
   FlagThings();
/**
*
*/
   unFlagThings();
/**
*
*/
   UpdateCandidatesFromRequiredConfigurations();
/**
*
*/
   UpdateCandidatesFromHiddenBundlePreparers();
/**
*
*/
   CleanDeletedBundles();
/**
*
*/
   InitCandidates();
/**
*
*/
   NewDelivery();
/**
*
*/
   TryToAppendThisEntityTo(thisDelivery:aDeliveryPreparer, theEntity:aEntity);
/**
*
*/
   AppendAllCandidatesTo(thisDelivery:aDeliveryPreparer);
/**
*
*/
   RemoveAllCandidatesFrom(thisDelivery:aDeliveryPreparer);
/**
*
*/
   TreatReferencedCandidatesOf(thisEntity:aEntity, theCandidates:aListOfInstances, theSelectedOnes:aListOfInstances);
/**
*
*/
   BuildListOfReferencedCandidates();
/**
*
*/
   BuildListOfReferencedCandidatesOfDelivery(theDelivery:aDeliveryPreparer);
/**
*
*/
   IsGeneratingFileForFirstVersion();
/**
*
*/
   LastGeneratedConfig();
/**
*
*/
   PrevLastGeneratedConfig();
/**
*
*/
   DeliveryHasChangedFromLastGeneration(theDelivery:aDeliveryPreparer);
/**
*
*/
   reinitInterdependancies();
/**
*
*/
   InterdependenciesInitialized();
/**
*
*/
   initInterdependancies();
/**
*
*/
   UpdateDeliveriesThatCanBeUpdated();
/**
*
*/
   CalculatedIdOf(thisEntity:aEntity, newBundle:aDeliveriesBundle);
/**
*
*/
   getCloneFullIdOf(curEntity:aEntity, newConfig:aDeliveriesBundle):string;
/**
*
*/
   RecastEntitysWhenClassExported();
/**
*
*/
   TreatSourceOf(thisEntity:aEntity);
/**
*
*/
   TreatRightsOf(thisEntity:aEntity);
/**
*
*/
   SetNewEntitiesAsPrivateIfPatch(newBundle:aDeliveriesBundle);
/**
*
*/
   CreateClones(newConfig:aDeliveriesBundle);
/**
*
*/
   AdjustExternalClasses(newConfig:aDeliveriesBundle);
/**
*
*/
   GenerateUpdateFileForLastConfig();
/**
*
*/
   InitAfterNewVersion();
/**
*
*/
   InitForEdition();
/**
*
*/
   CleanEdition();
/**
*
*/
   updateDeliveriesInterDependanciesOf(thisConfig:aDeliveriesBundle);
/**
*
*/
   AllIsFullyConsistent(theBundle:aDeliveriesBundle);
/**
*
*/
   GenerateNewBundle();
/**
*
*/
   GetDeliveryPreparerFromId(Id:Number);
/**
*
*/
   reGenerateLastBundle();
/**
*
*/
   CheckNewIdIsForPrivate(ClassOrModuleDef:aModuleDef, theId:Number);
/**
*
*/
   GetLastNonPatchGenerateConfig();
/**
*
*/
   NoUpdateReport();
/**
*
*/
   UpdateReport();
/**
*
*/
   GeneratePatchBundle();
/**
*
*/
   Import(thisFileName:string, FixedIds:Boolean);
/**
*
*/
   ImportAll();
/**
*
*/
   initFromInstalledConfig(theConfigInstaller:aDeliveriesBundleInstaller);
/**
*
*/
   StringExtract();
/**
*
*/
   GetIDAllocater();
/**
*
*/
   GetNsIdAndIdforOwnedEntity();
/**
*
*/
   IdNameSpaceId();
/**
*
*/
   InOutSyncCategory();
/**
*
*/
   Versionning();
/**
*
*/
   IsAnInOutSyncEntity();
/**
*
*/
   RegisterYourselfInIDE();
/**
*
*/
   NotifyDeletion();
/**
*
*/
   DeleteMyself();
/**
*
*/
   CloneForInOutSync();
/**
*
*/
   getAllOtherDelBPreparer();
/**
*
*/
   SaveAsFile();
/**
*
*/
   LoadFromFile();
/**
*
*/
   BundleOfVersion(theVersion:Number);
/**
*
*/
   DelBAndDeliveryOfThisDeliveryVersion(lowId:Number, version:Number, Bundle:aDeliveriesBundle, Delivery:aDelivery);
/**
*
*/
   DeliveryOfThisDeliveryVersion(lowId:Number, version:Number);
/**
*
*/
   DelBVersionOfThisDeliveryVersion(lowId:Number, version:Number);
/**
*
*/
   GetBitmap();
/**
*
*/
   IsConsistent();
/**
*
*/
   IsValid();
/**
*
*/
   UIConsult();
/**
*
*/
   UIModify();
/**
*
*/
   UIModalConsult();
/**
*
*/
   UIModalModify();
/**
*
*/
   Terminate();
}
/**
*
*/
declare class aRedesignDeliveriesBundlePreparer extends aDeliveriesBundlePreparer {
   RedesignReferences:string;
/**
*
*/
   CreateClones();
}
/**
*
*/
declare class aDeliveriesBundle extends aEntity {
   Catalog:string;
   PredefinedIds:string;
   RequiredDelBsForPreparation:string;
   RequiredDelBsForInstallation:string;
   Signature:string;
   MyVersion:Number;
   OwnedDeliveries:string;
   CreationDate:Number;
   CreationTime:Number;
   OwnedId:Number;
   WillBeAutomaticalyReinstalledInWamExtensionContext:Boolean;
   IsASystemBundle:Boolean;
   myInstaller:aDeliveriesBundleInstaller;
   BundleGlobalVersion:Number;
   IsAPatch:Boolean;
   ConfidentialBundle:Boolean;
/**
*
*/
   FlagEntities();
/**
*
*/
   unFlagEntities();
/**
*
*/
   FlagThings();
/**
*
*/
   unFlagThings();
/**
*
*/
   reInitVersion();
/**
*
*/
   getDate():string;
/**
*
*/
   InitCreationDateTime();
/**
*
*/
   getDeliveryFromLowId(theLowId:Number);
/**
*
*/
   FreezeIdsFrom(OriginalConfig:aDeliveriesBundle);
/**
*
*/
   DeliveryFromId(thisId:Number);
/**
*
*/
   ContainsVersionOf(thisEntity:aEntity);
/**
*
*/
   UpdateCatalogWith(thisDelivery:aDelivery);
/**
*
*/
   StringExtract();
/**
*
*/
   positionOf(thisEntity:aEntity);
/**
*
*/
   GetIDAllocater();
/**
*
*/
   GetNsIdAndIdforOwnedEntity();
/**
*
*/
   IdNameSpaceId();
/**
*
*/
   appendInexistingRequiredBundleReference(DelBSignature:string, DelBVersion:Number);
/**
*
*/
   initFromBundle(thisBundle:aDeliveriesBundle, maxr:Number);
/**
*
*/
   requiresThisBundleSignature(theSignature:string);
/**
*
*/
   IsAnInOutSyncEntity();
/**
*
*/
   RegisterYourselfInIDE();
/**
*
*/
   NotifyDeletion();
/**
*
*/
   DeleteMyself();
/**
*
*/
   InOutSyncCategory();
/**
*
*/
   Versionning();
/**
*
*/
   initFromFile();
/**
*
*/
   GetBitmap();
/**
*
*/
   InitBundleRefVersion(ThisRef:aDeliveriesBundleReference);
/**
*
*/
   InitBundleRefVersions();
/**
*
*/
   InitBundleRefVersionIfZero(ThisRef:aDeliveriesBundleReference);
/**
*
*/
   BeforeAccept();
/**
*
*/
   InifBundleRefVersionsIfZero();
/**
*
*/
   InitAfterLoad();
/**
*
*/
   RequiresThisBundle(BundleRef:aDeliveriesBundleReference, AlreadyChecked:aDataByStringHashTable);
/**
*
*/
   AddNeededBundleVersions(ToList:aListOfInstances, ToHash:aDataByStringHashTable);
/**
*
*/
   IsModifiableInIDEExecutionMode();
}
/**
*
*/
declare class aDelivery extends aEntity {
   Catalog:string;
   DeliveryLowId:Number;
   DeliveryVersion:Number;
   DelBSignature:string;
   DefinedInDelBVersion:Number;
   NeededDeliveries:string;
   NonInstalled:Boolean;
   Installable:Boolean;
   InstallationState:string;
   DeletedEntities:string;
/**
*
*/
   initFrom(otherDelivery:aDelivery);
/**
*
*/
   StringExtract();
/**
*
*/
   MarkCurentEntity(curEntity:aEntity);
/**
*
*/
   UnMarkCurentEntity(curEntity:aEntity);
/**
*
*/
   MarkEntities();
/**
*
*/
   UnMarkEntities();
/**
*
*/
   BuildListOfOwnedEntities();
/**
*
*/
   MarkOwnedVersions();
/**
*
*/
   UnMarkOwnedVersions();
/**
*
*/
   IsModifiableInIDEExecutionMode();
}
/**
*
*/
declare class aDeliveryReference extends aEntity {
   DelBSignature:string;
   DefinedInDelBVersion:Number;
   DeliveryLowId:Number;
   DeliveryVersion:Number;
   Ref:string;
/**
*
*/
   getCurrentDelivery();
/**
*
*/
   SetReferenceTo(thisDelivery:aDelivery);
/**
*
*/
   InitFrom(otherDeliveryReference:aDeliveryReference);
/**
*
*/
   StringExtract();
/**
*
*/
   GetBitmap();
/**
*
*/
   IsModifiableInIDEExecutionMode();
}
/**
*
*/
declare class aInstalledDeliveriesBundleList extends aEntity {
   DelBInstallers:string;
   fileToInstall:string;
   batchInstall:Boolean;
/**
*
*/
   incVersionOfFileToInstall();
/**
*
*/
   initMyCommentFromBundleToInstallCOmment();
/**
*
*/
   prepareForConsult(thisDelB:aDeliveriesBundle);
/**
*
*/
   viewBundleToInstall();
/**
*
*/
   installIt();
/**
*
*/
   pickAFileToInstall();
/**
*
*/
   BundleInstallerFromSignature(theSignature:string);
/**
*
*/
   RefreshAfterSynchronization();
/**
*
*/
   GetBitmap();
/**
*
*/
   InstallBundleFileAndMoveNext(curFileToInstall:string, forceBatch:Boolean);
/**
*
*/
   installAllVersions();
}
/**
*
*/
declare class aPreparedDeliveriesBundleList extends aEntity {
   DelBPreparers:string;
   EntityToFind:string;
/**
*
*/
   FindEntity(DeliveryRank:Number, CandidateRank:Number);
/**
*
*/
   BundlePreparerFromSignature(theSignature:string);
/**
*
*/
   RefreshAfterSynchronization();
/**
*
*/
   InitAfterLoad();
/**
*
*/
   GetBitmap();
}
/**
*
*/
declare class aDeliveryPreparer extends aEntity {
   DeliveryCatalog:string;
   DeliveryLowId:Number;
   Signature:string;
   neededDeliveriePreparers:string;
   neededDeliveriePreparersOK:Boolean;
   PresentedList:aListOfInstances;
/**
*
*/
   appendUIAgentClassImplemsOf(thisType:aType, inThisList:aListOfInstances);
/**
*
*/
   appendUIAgentClassImplemsOfScenario(thisScenario:aScenario, inThisList:aListOfInstances);
/**
*
*/
   AppendDescendants(thisClassDef:aClassDef);
/**
*
*/
   InitWithIR();
/**
*
*/
   InitForEdition();
/**
*
*/
   buildMyCatalog(Catalog:aListOfInstances);
/**
*
*/
   MarkEntities();
/**
*
*/
   UnMarkEntities();
/**
*
*/
   FlagThings();
/**
*
*/
   UnFlagThings();
/**
*
*/
   BuildListOfOwnedEntities();
/**
*
*/
   DependanciesList();
/**
*
*/
   DisplayInterdependancies();
/**
*
*/
   UpdateNeededDeliveriePreparer();
/**
*
*/
   Contains(thisEntity:aEntity);
/**
*
*/
   RemoveMyself();
/**
*
*/
   getAllCandidates();
/**
*
*/
   removeAllCandidates();
/**
*
*/
   PropagateTryToAppendDescendantsOf(thisClassDef:aClassDef);
/**
*
*/
   TryToAppendDescendantsOf(thisClassDef:aClassDef);
/**
*
*/
   PropagateTryToAppendUsesOf(thisCUDef:aCUDef);
/**
*
*/
   TryToAppendUsesOf(thisCUDef:aCUDef);
/**
*
*/
   GetClosure();
/**
*
*/
   GetClosureofmyself();
/**
*
*/
   InitFromExportCatalogueOfName(theFileName:string);
/**
*
*/
   OnlyWamInitFromExportCatalogueOfName(theFileName:string);
/**
*
*/
   InitFromExportCatalogue();
/**
*
*/
   InitFromDelivery(theDelivery:aDelivery);
/**
*
*/
   StringExtract();
/**
*
*/
   GetBitmap();
/**
*
*/
   IsConsistent();
/**
*
*/
   IsValid();
}
/**
*
*/
declare class aCandidateCategory extends aEntity {
   Candidates:string;
}
/**
*
*/
declare class aDeliveriesBundleInstallerOption extends aEntity {
   InstallableDeliveries:string;
   DeliveriesToInstall:string;
   newDelB:aDeliveriesBundle;
/**
*
*/
   getAllDeliveries();
/**
*
*/
   UnGetAllDeliveries();
/**
*
*/
   getThisDelivery(theDelivery:aDelivery);
/**
*
*/
   UnGetThisDelivery(theDelivery:aDelivery);
/**
*
*/
   IsValid();
}
/**
*
*/
declare class aDeliveriesBundleReference extends aEntity {
   Signature:string;
   MyVersion:Number;
   Ref:aDeliveriesBundle;
   File:string;
/**
*
*/
   initFrom(thisConfigReference:aDeliveriesBundleReference);
/**
*
*/
   getCurrentDeliveriesBundle();
/**
*
*/
   getDeliveryBundle();
/**
*
*/
   GetBitmap();
/**
*
*/
   GetDeliveriesBundleFromPreparedOrInstalled();
/**
*
*/
   RequiresThisBundle(BundleRef:aDeliveriesBundleReference, AlreadyChecked:aDataByStringHashTable);
/**
*
*/
   MustBeInstalledBefore(OtherRef:aDeliveriesBundleReference);
/**
*
*/
   AddNeededBundleVersions(ToList:aListOfInstances, ToHash:aDataByStringHashTable);
/**
*
*/
   IsModifiableInIDEExecutionMode();
}
/**
*
*/
declare class aDeliveriesBundleInstaller extends aEntity {
   alreadyInstalledDelB:string;
   FileName:string;
   Signature:string;
   EntitiesToClone:aListOfInstances;
   Clones:aListOfInstances;
   newDelB:aDeliveriesBundle;
   newDelBClone:aDeliveriesBundle;
   existingDelB:aDeliveriesBundle;
   IdPredefined:Boolean;
   firstEntityToUpdate:Number;
   FreezeIds:Boolean;
   IsAWamExtension:Boolean;
   IsASystemBundle:Boolean;
   WAMBundleContentsCanBeModified:Boolean;
   DeliveriesToInstall:string;
   Gauge:aGauge;
   pickAll:Boolean;
   RefDevDBOpened:Boolean;
   WantToRedistributeIds:Boolean;
   InstallComment:string;
   DeliveriesRefToInstall:aListOfInstances;
   noInteract:Boolean;
   BatchInstallInDevContext:Boolean;
   WithoutImplems:Boolean;
   WithoutMapping:Boolean;
   RegisterSystemClassesInIDE:Boolean;
   DBDef:aTGVDBDef;
   ContentsLocked:Boolean;
   ContentsMustBeUnLocked:Boolean;
   EntitiesToDelete:aListOfInstances;
   ConfidentialBundle:Boolean;
   MatchNewEntitiesByName:Boolean;
/**
*function OldFindExistingEntity(Entity : aEntity, System : Boolean, NewDelB : aDeliveriesBundle, ExistingDelB : aDeliveriesBundle) return aEntity
   var Owner : aEntity
   var Id : Int8
   var NSId : Int4
   
   Owner = ConfigOwnerOf(Entity)
   if System
      ;for system modules :wUtil,wMotor,... and goldified classes : aPB
      CalculateIdFromSystemOwner(Owner, Entity, NSId, Id)
      _Result = MotorThingFromId(NSId, Id, CurrentVersion)
   else
      _Result = GetExistingOwner(Entity, NewDelB, ExistingDelB, Owner)
      if Owner <> Entity
         ;Otherwise it is a system scenario, a class implem, a module implem, aC++ project, agraph, ...
         CalculateIdFromOwner(_Result, Entity, System, NewDelB, ExistingDelB, NSId, Id)
         _Result = MotorThingFromId(NSId, Id, CurrentVersion)
      endIf
   endIf
endFunc 

*/
   findExistingEntityOf(thisNewEntity:aEntity);
/**
*
*/
   GetBitmap();
/**
*
*/
   AppendBundle(thisDeliveriesBundle:aDeliveriesBundle);
/**
*
*/
   getGauge();
/**
*
*/
   LastInstalledDeliveryOf(thisDeliveryLowId:Number);
/**
*
*/
   UpdateInstallationState(thisDelivery:aDelivery, thisDeliveryOfRank:Number, theMessage:string);
/**
*
*/
   AuthorizedDeliveriesIds(thelist:aListOfInstances, allIsAuthorized:Boolean);
/**
*
*/
   PickDeliveriesToInstall(Canceled:Boolean);
/**
*
*/
   NoClassModifiedByHand();
/**
*
*/
   RankInNewDelBCatalogOf(pFullId:string);
/**
*
*/
   WarnIfNameCollision(Name:string);
/**
*
*/
   MatchNewEntity(forEntity:aEntity);
/**
*
*/
   ClassAndModuleNameAreValid();
/**
*
*/
   RestoreClassId(theMotorClass:string);
/**
*
*/
   CleanAll();
/**
*
*/
   LastInstalledDelB();
/**
*
*/
   CurrentExistingClassDef(curClassDef:aClassDef);
/**
*
*/
   CurrentExistingEntity(curEntity:aEntity);
/**
*
*/
   AdjustClassVarIdsOf(theClass:string);
/**
*
*/
   RecastEntitysWhenClassImported();
/**
*
*/
   InitBundleRefVersions();
/**
*
*/
   canInstallDelB();
/**
*
*/
   CreateEntitiesToDelete();
/**
*
*/
   ManageDeletedEntities(T:aTransaction);
/**
*
*/
   AppendInObjectToClone(Entity:aEntity);
/**
*
*/
   AppendOwnedObjectToClone(Entity:aEntity);
/**
*
*/
   buildListOfEntitiesToClone();
/**
*
*/
   WamUser();
/**
*
*/
   TreatSourceOf(thisEntity:aEntity);
/**
*
*/
   TreatRightsOf(thisEntity:aEntity);
/**
*
*/
   UpdateReftoIfNecessary(FromThisObject:aEntity, VarAddress:string, curType:aType);
/**
*
*/
   UpdateListofIfNecessary(FromThisObject:aEntity, VarAddress:string, curType:aType);
/**
*
*/
   UpdateReferencesOfClone(thisObject:aEntity);
/**
*
*/
   UpdateExistingEntityOf(newEntity:aEntity, ExistingEntity:aEntity);
/**
*
*/
   CreateEntityFrom(newEntity:aEntity);
/**
*
*/
   ModifyingTheSameConfigVersion();
/**
*
*/
   DeliveryBeingUpdated(thisDeliveryClone:aDelivery);
/**
*
*/
   BuildListOfClones(T:aTransaction);
/**
*
*/
   BatchInstallation();
/**
*
*/
   RegisterInWamAllNewEntities(T:aTransaction);
/**
*
*/
   UpdateIdDistributors(T:aTransaction);
/**
*
*/
   TurnAllocator17toAllocator255(TheId:Number);
/**
*
*/
   ExpandIds(T:aTransaction);
/**
*
*/
   pickAFile();
/**
*
*/
   ParseImplems();
/**
*
*/
   ConfidentializeEntities();
/**
*
*/
   ChangeNames(Prefix:string, Suffix:string, OverrideName:Boolean);
/**
*
*/
   InstallIt();
/**
*
*/
   ViewReadMe();
/**
*
*/
   Install(DeliveriesRefList:aListOfInstances);
/**
*
*/
   IsInstalled(DeliveriesRefList:aListOfInstances);
/**
*
*/
   DelBAndDeliveryOfThisDeliveryVersion(lowId:Number, version:Number, Bundle:aDeliveriesBundle, Delivery:aDelivery);
/**
*
*/
   BundleOfVersion(theVersion:Number);
/**
*
*/
   DeliveryOfThisDeliveryVersion(lowId:Number, version:Number);
/**
*
*/
   DelBOfThisDeliveryVersion(lowId:Number, version:Number);
/**
*
*/
   DelBVersionOfThisDeliveryVersion(lowId:Number, version:Number);
/**
*
*/
   CanBePrepared();
/**
*
*/
   removeContents();
}
/**
*
*/
declare class aRedesignDeliveriesBundleInstaller extends aDeliveriesBundleInstaller {
/**
*
*/
   findExistingEntityOf();
/**
*
*/
   UpdateRedesign();
/**
*
*/
   ClassAndModuleNameAreValid();
}
/**
*
*/
declare class aBundleRedesign extends aEntity {
   Bundles:string;
   Redesign:string;
   OwnedId:Number;
/**
*
*/
   GetIDAllocater();
/**
*
*/
   GetNsIdAndIdforOwnedEntity();
/**
*
*/
   IdNameSpaceId();
}
/**
*
*/
declare class aMotorStatus extends aFullObject {
   GlobalClassesVersion:Number;
   ClassName();
   ClassId();
   Versionning();
}
/**
*
*/
declare class aNameSpaceGenerator extends aFullObject {
   Segs:Number;
   maxId:Number;
   Slice:Number;
   ClassName();
   ClassId();
   Versionning();
   NextId():Number;
   IsAvailable(thisId:Number);
   Allocate(thisId:Number);
   getNsId();
}
/**
*
*/
declare class aODBCNameSpace extends aNameSpaceGenerator {
   myDBMgr:string;
   lastMemId:Number;
   IsANewDistributor:Boolean;
   ClassName();
   ClassId();
   NextId();
}
/**
*
*/
declare class aAPNS extends aNameSpaceGenerator {
   myAP:string;
   LastGivenId:Number;
   ClassName();
   ClassId();
   LockKind();
   NextId();
   IsAvailable();
   Allocate();
}
/**
*
*/
declare class aNSNS extends aNameSpaceGenerator {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aImportTarget extends aFullObject {
   theModule:string;
   theCorrespondingModule:string;
   NewModuleName:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aExportCatalogue extends aFullObject {
   Entities:string;
   ClassName();
   ClassId();
   GetRunningContext();
}
/**
*
*/
declare class aApplicativeRoot extends aFullObject {
   ClassName();
   ClassId();
   IdNameSpaceId();
   NameNameSpaceId();
}
/**
*
*/
declare class aNamedObject extends aApplicativeRoot {
   Name:string;
  
   ClassName();
   ClassId();
}
/**
*class comment

*/
declare class aTestSeb extends aApplicativeRoot {
   V:string;
}
/**
*
*/
declare class aWideExtension extends aFullObject {
   ClassName();
   ClassId();
   DoYourJob(theUIAgent:aUIAgent);
   RegisterYourselfInIDE();
   FolderParentName(:string);
   MenuText(:string);
   ButtonBMPName(:string);
}
/**
*
*/
declare class aPreparedDeliveriesBundleExtension extends aWideExtension {
/**
*
*/
   FolderParentName();
/**
*
*/
   DoYourJob();
/**
*
*/
   MenuText();
/**
*
*/
   ButtonBMPName();
}
/**
*
*/
declare class aInstalledDeliveriesBundleExtension extends aWideExtension {
/**
*
*/
   FolderParentName();
/**
*
*/
   DoYourJob();
/**
*
*/
   MenuText();
/**
*
*/
   ButtonBMPName();
}
/**
*
*/
declare class aDraggableObjectPresentor extends aFullObject {
   thePresentedEntity:string;
   thePresentedEntityHandle:string;
   NbUIVarsShown:Number;
   NbUIMethsShown:Number;
   NbUIScensShown:Number;
   StringExtract();
   ClassName();
   ClassId();
   PresentDraggableEntitiesFor(thisEntity:aEntity);
   PutVars(theUIAgent:aUIAgent);
   PutMeths(theUIAgent:aUIAgent);
   PutScens(theUIAgent:aUIAgent);
   PutConts(theUIAgent:aUIAgent);
   PutMods(theUIAgent:aUIAgent);
   FreeVars(theUIAgent:aUIAgent);
   FreeMeths(theUIAgent:aUIAgent);
   FreeScens(theUIAgent:aUIAgent);
   FreeConts(theUIAgent:aUIAgent);
   FreeMods(theUIAgent:aUIAgent);
   PutUIVars(theUIAgent:aUIAgent);
   PutUIMeths(theUIAgent:aUIAgent);
   PutUIScens(theUIAgent:aUIAgent);
   FreeUIVars(theUIAgent:aUIAgent);
   FreeUIMeths(theUIAgent:aUIAgent);
   FreeUIScens(theUIAgent:aUIAgent);
   PutTypeVars(theUIAgent:aUIAgent);
   PutTypeMeths(theUIAgent:aUIAgent);
   PutTypeScens(theUIAgent:aUIAgent);
   FreeTypeVars(theUIAgent:aUIAgent);
   FreeTypeMeths(theUIAgent:aUIAgent);
   FreeTypeScens(theUIAgent:aUIAgent);
   GetToolScenario();
}
/**
*
*/
declare class aEventsContainer extends aFullObject {
   myEvents:string;
   myClassDef:string;
   myQVarPresentor:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aXAMLContainer extends aFullObject {
   body:string;
   stateFlags:Number;
   currentTabLevel:Number;
   ClassName();
   ClassId();
   Kill();
   InitForProduction();
   AppendTextToBodyWithTabs(textToAppend:string);
   AppendStringToBodyWithTabs(stringToAppend:string);
   AppendTextToBody(textToAppend:string);
   AppendStringToBody(stringToAppend:string);
   ProduceXAMLText(context:aXAMLProductionContext, VarAddress:string);
   AppendRootResource(resourceDescriptor:string);
}
/**
*
*/
declare class aDBAccessPlan extends aFullObject {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aInterpreter extends aFullObject {
   MemLightObjects:Boolean;
   MemFullObjects:Boolean;
   MemInternalSpaces:Boolean;
   MemGoldSpaces:Boolean;
   MemBlocksCount:Number;
   MemBlocksSum:Number;
   MemPresentedList:string;
   Laps:string;
   ShowTimings:Boolean;
   Stats:string;
   TimingsThreshold:Number;
   BindIt:aListIterator;
   BindBuffer:string;
   ClassName();
   ClassId();
   Kill();
   PleaseDisplayMemoryInfo(theUIAgent:aUIAgent);
   GetCurrentMethodInvocation();
}
/**
*
*/
declare class aVarPresentor extends aFullObject {
   myVar:string;
   myScenario:string;
   StringExtract();
   ClassName();
   ClassId();
   IdNameSpaceId();
}
/**
*
*/
declare class aFloatingListOfRefTos extends aFullObject {
   ClassName();
   ClassId();
   ClassVersion();
   Kill();
   CloneVarsFrom();
   InitVariables();
   Store();
   AllocatedSize();
   IdNameSpaceId();
   NewVersion();
   Versionning();
}
/**
*
*/
declare class aUIAgent extends aLightObject {
   absX:Number;
   absY:Number;
   dwFather:Number;
   dhFather:Number;
   BuildingKind:Number;
   Finalized:Boolean;
   Filled:Boolean;
   InitDone:Boolean;
   Terminating:Boolean;
   IMustNotifyHost:Boolean;
   IsMain:Boolean;
   DisabledByDebugging:Number;
   LockedByDebugging:Number;
   myStoreMode:string;
   myExecMode:string;
   PropagateToFather:Boolean;
   myScenario:aLightObject;
   myQVarPresentor:aLightObject;
   myVarAgent:aLightObject;
   HostUIAgent:aLightObject;
   TopUIAgent:aLightObject;
   UIComponents:string;
   SubUIAgents:string;
   SubQualifiers:string;
   Thing:aLightObject;
   Terminator:aLightObject;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   Kill();
   GetBitmap();
   ProduceText();
   myWindow();
   myWindowAgent();
   MainWindow();
   MainWindowAgent();
   GetObject();
   ContainsThisSubUIAgent(theUIAgent:aUIAgent);
   FindUIAgent(VarAddress:string);
   FindFirstControl(VarAddress:string);
   PropagateLoadValue(VarAddress:string, theVarType:aType);
   LoadValue(VarAddress:string, theVarType:aType);
   StoreValue(VarAddress:string, theVarType:aType);
   LoadFromVar();
   StoreToVar();
   VarAddressHasChanged();
   SubUIAgentVarAddressHasChanged(SubUIAgent:aUIAgent);
   NotifyVarAddressHasChanged();
   ChangeVarAgent(theNewVarAgent:aVarAgent);
   ChangeSubUIAgent(SubUIAgent:aUIAgent, theNewVarAgent:aVarAgent);
   ChangeAddress(theNewVarAddress:string, theNewVarType:aType, theNewHostVarAgent:aVarAgent);
   RefreshStoreToVar();
   NotifyStoreToVar(theSubUIAgent:aUIAgent);
   EnableNotifyHost(Value:Boolean);
   AddUIAgent(theUIAgent:aUIAgent, Qualifier:aQVarPresentor);
   Finalize(Qualifier:aQVarPresentor);
   SetExecMode(FromThisQVarPresentor:aQVarPresentor, AndThisExecMode:string);
   InteractWithUser(ExecMode:string, IsModal:Boolean):string;
   SetModal():string;
   KillSubUIAgent(thisUIAgent:aUIAgent);
   UIAgentFromQVPName(theName:string);
   CallSubTerminate();
   NotifyInit();
   NotifyTerminate();
   NotifyValueChanged(theUIComponent:string);
   NotifyGetFocus(theUIComponent:string);
   NotifyOutControlGetFocus(theControlUIAgent:aUIAgent);
   NotifyGridEnter(theControlUIAgent:aUIAgent, Shift:Boolean);
   NotifyLoseFocus(theUIComponent:string);
   NotifySelected(theUIComponent:string, Value:Number);
   NotifyExecuted(theUIComponent:string, Sel:Number, Option:Number);
   NotifyCheck(theUIComponent:string);
   NotifyRangeHasChanged(theUIComponent:string, OldWidth:Number, OldHeight:Number, NewWidth:Number, NewHeight:Number);
   NotifyGetChar(theUIComponent:string, Ch:Number, VKey:string, theCount:Number, Flags:string);
   NotifyHostRangeHasChanged(OldWidth:Number, OldHeight:Number, NewWidth:Number, NewHeight:Number);
   NotifyUser(theUIComponent:string, NoUser:Number, Param1:Number, Param2:Number);
   NotifyDroppedObject(theUIComponent:string, X:Number, Y:Number, thisObject:string);
   NotifyCanReceiveDroppedObject(theUIComponent:string, X:Number, Y:Number, thisObject:string);
   NotifyWantToDrop(theUIComponent:string, X:Number, Y:Number);
   NotifyCanDrop(theUIComponent:string, X:Number, Y:Number);
   NotifyButtonDown(theUIComponent:string, no:Number, x:Number, y:Number);
   NotifyButtonUp(theUIComponent:string, no:Number, x:Number, y:Number);
   NotifyButtonDblClk(theUIComponent:string, no:Number, x:Number, y:Number);
   NotifyMouseMove(theUIComponent:string, x:Number, y:Number);
   NotifyPopup(theUIComponent:string, Param1:string);
   NotifyPaint(theUIComponent:string, ps:string, x:Number, y:Number, Width:Number, Height:Number);
   NotifyScrollBar(Horz:Boolean, Value:Number, Kind:string);
   NotifyGetLineText(theUIComponent:string, Line:Number, LineText:string);
   NotifyConsoleMessage(theConsoleWindow:string, Param1:Number, Param2:Number);
   NotifyHostGetFocus();
   NotifyHostLoseFocus();
   NotifySubUIAgentInit(ThisSubUIAgent:aUIAgent);
   NotifySubUIAgentValueChanged(theUIAgent:aUIAgent);
   NotifySubUIAgentGetFocus(theUIAgent:aUIAgent);
   NotifySubUIAgentLoseFocus(theUIAgent:aUIAgent);
   NotifySubUIAgentSelected(theUIAgent:aUIAgent, Value:Number);
   NotifySubUIAgentExecuted(theUIAgent:aUIAgent, Sel:Number, Option:Number);
   NotifySubUIAgentCheck(theUIAgent:aUIAgent);
   NotifySubUIAgentDroppedObject(theUIAgent:aUIAgent, X:Number, Y:Number, thisObject:string);
   NotifySubUIAgentCanReceiveDroppedObject(theUIAgent:aUIAgent, X:Number, Y:Number, thisObject:string);
   NotifySubUIAgentButtonUp(theUIAgent:aUIAgent, no:Number, x:Number, y:Number);
   NotifyLoadValue(theUIAgent:aUIAgent);
   OwnerOfCode();
   GetMainControl();
   Show();
   Hide();
   IsHidden();
   Maximize();
   Minimize();
   Restore();
   IsMinimized();
   IsMaximized();
   GetXPos();
   GetYPos();
   GetWidth();
   GetHeight();
   GetClientX();
   GetClientY();
   GetClientWidth();
   GetClientHeight();
   GetAbsoluteXPos();
   GetAbsoluteYPos();
   ChangePos(X:Number, Y:Number, Width:Number, Height:Number);
   SetRange(Value:Number, Min:Number, Max:Number);
   GetCursor(X:Number, Y:Number);
   SetCursor(X:Number, Y:Number);
   Lock();
   UnLock();
   IsLocked();
   Enable();
   Disable();
   IsDisabled();
   Close(WithConfirmation:Boolean);
   SetFocus();
   CurrentString():string;
   GetValue():string;
   SetValue(theValue:string);
   SetAllowedChars(AllowedChars:string);
   GetAllowedChars():string;
   SetForeColor(ForeColor:string);
   GetForeColor():string;
   SetBackColor(BackColor:string);
   GetBackColor():string;
   SetButtonBackColor(BackColor:string);
   GetButtonBackColor():string;
   GetTitle():string;
   SetTitle(theValue:string);
   SetAt(Text:string, pos:Number);
   GetAt(pos:Number):string;
   InsertAt(Text:string, pos:Number, Ascending:Boolean);
   InsertAtEnd(Text:string);
   DeleteAt(pos:Number);
   DeleteAll();
   UpDate();
   NoUpDate();
   Select(Pos:Number);
   UnSelect(Pos:Number);
   IsSelected(Pos:Number);
   Selection();
   Count();
   ShowAt(Pos:Number);
   HideAt(Pos:Number);
   IsHiddenAt(Pos:Number);
   EnableAt(Pos:Number);
   DisableAt(Pos:Number);
   IsDisabledAt(Pos:Number);
   SetForeColorAt(Pos:Number, ForeColor:string);
   GetForeColorAt(Pos:Number):string;
   SetBackColorAt(Pos:Number, ForeColor:string);
   GetBackColorAt(Pos:Number):string;
   SetFontAt(Pos:Number, FontName:string, FontSize:Number, FontSels:string);
   GetFontNameAt(Pos:Number):string;
   GetFontSizeAt(Pos:Number);
   GetFontSelsAt(Pos:Number):string;
   UpdateTitle();
   SetRelief(ReliefKind:string);
   GetRelief():string;
   SetExplanation(Text:string, ForeColor:string, BackColor:string, Font:string, ExplanationKinds:Number);
   SetIcon(IconName:string);
   SetTabulations(NbTabs:Number, Tabs:string);
   GetNbTabulations();
   GetTabulations(NbMaxTabs:Number, Tabs:string);
   SetSeparators(Separators:string);
   GetSeparators(Separators:string);
   EnableMessageOnClose();
   DisableMessageOnClose();
   SetQuitStatus(Status:string);
   GetQuitStatus():string;
   Paint(theDlgWindow:string, Ps:string, XPaint:Number, YPaint:Number, WidthPaint:Number, HeightPaint:Number);
   AutoWidth();
   AutoHeight();
   CalcAutoWidthHeight(Ps:string, Width:Number, Height:Number, ForceRecalc:Boolean);
   OpenPs();
   ClosePs(PS:string);
   ScenarioWidth(ForThisQVarPresentor:aQVarPresentor);
   ScenarioHeight(ForThisQVarPresentor:aQVarPresentor);
   IncXY(Dx:Number, Dy:Number);
   CaptureMouse();
   ReleaseMouse();
   DropObject(X:Number, Y:Number, thisObject:aLightObject);
   CanDropObject(X:Number, Y:Number, thisObject:aLightObject);
   GiveNewVersionOfThisQVarPresentor(thisQVarPresentor:aQVarPresentor);
   GiveNewVersionOfThisScenario(thisScenario:aScenario);
   NotifyTimer(IdTimer:Number);
   StartTimer(IdTimer:Number, Pulsation:Number);
   KillTimer(IdTimer:Number);
   NotifyHelp();
   ProcessMessages();
   Modalize(Time:Number);
   UnModalize(Id:Number);
   Invalidate(X:Number, Y:Number, Width:Number, Height:Number);
   SetFont(FontName:string, FontSize:Number, FontSels:string);
   GetFontName():string;
   GetFontSize();
   GetFontSels():string;
   ClipboardCut();
   ClipboardCopy();
   ClipboardPaste();
   SetScroll(Horz:Boolean, Value:Number, Min:Number, Max:Number);
   ScrollWindow(X:Number, Y:Number, Width:Number, Height:Number, Dx:Number, Dy:Number);
   SetShortKey(VKey:string, Flags:string, Ch:Number);
   GetShortKey(VKey:string, Flags:string, Ch:Number);
   NotifyShortKey(theUIComponent:string, Ch:Number, VKey:string, theCount:Number, Flags:string);
   SetNextTab(NextTab:aUIAgent);
   Produce(PtrTo_Where:string, PtrTo_Options:string);
   GetSubUIAgentsTree(theObject:aFullObject, theVar:string, theType:aType);
   Popup(no:Number, x:Number, y:Number);
   OwnerOfEvent();
   SetOwnerOfEvent(UIAgent:aUIAgent);
   ChangeClientWidthHeight(Width:Number, Height:Number);
   eWEDProducer();
   DropObjectEx(X:Number, Y:Number, thisObject:aLightObject, Target:aUIAgent);
   CanDropObjectEx(X:Number, Y:Number, thisObject:aLightObject, Target:aUIAgent);
   GiverOfNewVersionsOfThisScenario(ThisScenario:aScenario);
   SetNeededEvents(UserEventSet:string);
   GetNeededEvents():string;
   GetSelectedObject();
   RefreshTranslation();
   GetDesignTimeChildRect(childX:Number, childY:Number, childWidth:Number, childHeight:Number, currentParentWidth:Number, currentParentHeight:Number);
   AdjustBoundingRectFor(childAgent:aUIAgent, x:Number, y:Number, width:Number, height:Number);
   UseMyRectForChildDesignTimeRect();
   GetScenarioMinWidthHeight(minWidth:Number, minHeight:Number);
   AllowClipping();
}
/**
*
*/
declare class aToolBarUIAgent extends aUIAgent {
   HostToolBarUIAgent:aUIAgent;
   SubToolBarUIAgents:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   myWindow();
   Finalize();
   NotifyRangeHasChanged();
   NotifyHostRangeHasChanged();
   NotifyButtonDown();
   NotifyHostGetFocus();
   NotifyHostLoseFocus();
   UpdateTitle();
   AllowClipping();
   NotifyHostToolBarRangeHasChanged(OldWidth:Number, OldHeight:Number, NewWidth:Number, NewHeight:Number);
   ShowSubToolBarUIAgent(theSubToolBarUIAgent:aToolBarUIAgent);
   KillSubToolBarUIAgent(theSubToolBarUIAgent:aToolBarUIAgent);
   SetToolBarKind(Resizeable:Boolean);
   IsToolBarResizeable();
   SetToolBarSize(Size:Number);
   GetToolBarSize();
}
/**
*
*/
declare class aViewAgent extends aUIAgent {
   CurrentWindowRank:Number;
   theMother:string;
   ClassName();
   ClassId();
   myWindow();
   Finalize();
   InteractWithUser();
   KillSubUIAgent();
}
/**
*
*/
declare class aFolderViewAgent extends aViewAgent {
   FinalizeAtRunTime:Boolean;
   ClassName();
   ClassId();
   Init();
   myWindow();
   Finalize();
   InteractWithUser();
   NotifySelected();
   NotifyRangeHasChanged();
   Show();
   Hide();
   ChangePos();
   eWEDProducer();
   RefreshTranslation();
}
/**
*
*/
declare class aWamToolBarFolderViewAgent extends aFolderViewAgent {
   ClassName();
   ClassId();
   Init();
   Kill();
   Finalize();
   NotifySelected();
}
/**
*
*/
declare class aSplitViewAgent extends aFolderViewAgent {
   ClassName();
   ClassId();
   Init();
   AddUIAgent();
   Finalize();
   NotifySelected();
   NotifyRangeHasChanged();
   ChangePos();
   eWEDProducer();
   SetSeparatorPosition(SeparatorRank:Number, Percent:string);
}
/**
*
*/
declare class aInstalledDeliveriesBundleList001Agent extends aSplitViewAgent {
}
/**
*
*/
declare class aConfigInstallerOption002Agent extends aSplitViewAgent {
}
/**
*
*/
declare class ConfigPreparerPartitionMakerAgent extends aSplitViewAgent {
}
/**
*
*/
declare class aConfigPreparer002Agent extends aSplitViewAgent {
}
/**
*
*/
declare class GenerationAndCommentAgent extends aSplitViewAgent {
}
/**
*
*/
declare class ConfigPreparerMainAgent extends aFolderViewAgent {
/**
*
*/
   NotifySelected();
}
/**
*
*/
declare class ConfigPreparerMainForaRedesignDeliveriesBundlePreparerAgent extends ConfigPreparerMainAgent {
}
/**
*
*/
declare class aNewConfiguration003Agent extends aFolderViewAgent {
}
/**
*
*/
declare class MainDeliveryAgent extends aFolderViewAgent {
}
/**
*
*/
declare class aDeliveryPreparerContentsReadMeAgent extends aFolderViewAgent {
}
/**
*
*/
declare class CandidatesAndHiddenAgent extends aFolderViewAgent {
}
/**
*
*/
declare class aWideIdeUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   DropBitMap_Executed(:aUIAgent, SelectedRank:Number, Option:Number);
   DropBitMap_Received(:aUIAgent, X:Number, Y:Number, Object:aFullObject);
   DropBitMap_CanReceive(:aUIAgent, X:Number, Y:Number, Object:aFullObject);
}
/**
*
*/
declare class aOpenWhereClosedUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   NotifyTerminate();
}
/**
*
*/
declare class PreparedConfigListMainAgent extends aOpenWhereClosedUIAgent {
   ConfigPreparers:aListOfTreeUIAgent;
/**
*
*/
   ConfigPreparers_Executed(:aUIAgent, SelectedRank:Number, Option:Number);
/**
*
*/
   ConfigPreparers_ValueLoaded(:aUIAgent);
}
/**
*
*/
declare class MainForMDIPresentationAgent extends aOpenWhereClosedUIAgent {
   aInstalledDeliveriesBundleList001:aInstalledDeliveriesBundleList001Agent;
}
/**
*
*/
declare class aXXXAsMenuAgent extends aUIAgent {
   ClassName();
   ClassId();
   Init();
   Kill();
}
/**
*
*/
declare class aScenarioAsMenuAgent extends aXXXAsMenuAgent {
   ClassName();
   ClassId();
   Init();
   NotifyGetChar();
   NotifyDroppedObject();
   NotifyCanReceiveDroppedObject();
   NotifyWantToDrop();
   NotifyCanDrop();
}
/**
*
*/
declare class aXXXAsMenuItemAgent extends aUIAgent {
   ClassName();
   ClassId();
   Init();
   Kill();
}
/**
*
*/
declare class aQVPAsMenuItemAgent extends aXXXAsMenuItemAgent {
   ClassName();
   ClassId();
   Init();
   LoadValue();
   StoreValue();
   NotifyGetChar();
   NotifyLoadValue();
}
/**
*
*/
declare class aXXXAsFrameAgent extends aUIAgent {
   ClassName();
   ClassId();
   AuthorizedDx(Dx:Number);
   AuthorizedDy(Dy:Number);
   AuthorizedDw(Dw:Number);
   AuthorizedDh(Dh:Number);
   CanChangeWidth();
   CanChangeHeight();
   IncX(Dx:Number);
   IncY(Dy:Number);
   IncWidth(Dw:Number);
   IncHeight(Dh:Number);
   NotifyDblClk(no:Number, x:Number, y:Number, IsShift:Boolean, IsCtrl:Boolean, IsAlt:Boolean);
   MoreInfo();
   NotifyDelete();
   NotifyDeleteOnlyDesign();
   RecalcPos(OldTopX:Number, OldTopY:Number, OldZoomFactor:string, OldRulerWidth:Number, OldRulerHeight:Number, NewTopX:Number, NewTopY:Number, NewZoomFactor:string, NewRulerWidth:Number, NewRulerHeight:Number);
   DrawBackLinks(Ps:string, xPaint:Number, yPaint:Number, WidthPaint:Number, HeightPaint:Number);
   DrawWhenFastDrag(Ps:string, OldDX:Number, OldDY:Number, OldDW:Number, OldDH:Number, NewDX:Number, NewDY:Number, NewDW:Number, NewDH:Number);
   PrepareDrag(Ps:string);
   FinishDrag(Ps:string);
   CalcRectFromPos(xMin:Number, yMin:Number, xMax:Number, yMax:Number);
   CalcRectFromLinks(xMin:Number, yMin:Number, xMax:Number, yMax:Number);
   CanBeDeleted();
   DeleteFrameLinkedToMe(ThisFrame:aFrame);
   DeleteFrameLinkedFromMe(ThisFrame:aFrame);
   HasBeenSentToFront();
   HasBeenSentToBack();
   CalcAuthorizedDxDyDwDh(Dx:Number, Dy:Number, Dw:Number, Dh:Number, DxAuthorized:Number, DyAuthorized:Number, DwAuthorized:Number, DhAuthorized:Number);
   CalcAuthorizedDxDyDwDhFor(thisPoint:aFrame, Dx:Number, Dy:Number, Dw:Number, Dh:Number, DxAuthorized:Number, DyAuthorized:Number, DwAuthorized:Number, DhAuthorized:Number);
   ReposPoints(OldX:Number, OldY:Number, OldWidth:Number, OldHeight:Number);
   DrawLinks(Ps:string, xPaint:Number, yPaint:Number, WidthPaint:Number, HeightPaint:Number, Fore:Boolean);
   DrawForeLinks(Ps:string, xPaint:Number, yPaint:Number, WidthPaint:Number, HeightPaint:Number);
   CanBeSelected();
   ReposPoint(CurPoint:aFrame, OldX:Number, OldY:Number, OldWidth:Number, OldHeight:Number, Dx:Number, Dy:Number, Dw:Number, Dh:Number);
   MarkLinksToDestroy();
   PutMyFrameToMoveList(MoveList:aListOfInstances);
   MovingOperation(x:Number, y:Number);
   CalcExpectedPosFromMaster();
   GiveForm();
   CalcExpectedPos();
   RestoreForm();
   CalcExpectedReposFromMaster();
   CalcExpectedPosForFrame(thisFrame:aFrame);
   CalcExpectedReposForAttachedFrames();
   CalcExpectedReposForFrame(thisFrame:aFrame);
}
/**
*
*/
declare class aQVPAsFrameAgent extends aXXXAsFrameAgent {
   ClassName();
   ClassId();
   Init();
   LoadValue();
   StoreValue();
   NotifyGetChar();
   NotifyHostRangeHasChanged();
   NotifyLoadValue();
   Paint();
   AuthorizedDx();
   AuthorizedDy();
   AuthorizedDw();
   AuthorizedDh();
   CanChangeWidth();
   CanChangeHeight();
   IncX();
   IncY();
   IncWidth();
   IncHeight();
   NotifyDblClk();
   MoreInfo();
   NotifyDelete();
   NotifyDeleteOnlyDesign();
   CanBeDeleted();
   MakeNewVersionOfTheQVP();
}
/**
*
*/
declare class aXXXAsDesignWindowAgent extends aUIAgent {
   ClassName();
   ClassId();
   KillSubUIAgent();
   Lock();
   SetBackColor();
   Paint();
   AlignSelectedFrames(AlignKind:Number);
   NotifySelectedFramesChanged();
   DrawRulers(Ps:string, X:Number, Y:Number, Width:Number, Height:Number);
   FindXXXAsFrameAgentFor(thisObject:string);
   UpDateOnDelete(xMin:Number, yMin:Number, xMax:Number, yMax:Number);
   SendToFront();
   SendToBack();
   SortedListOfFrames(Frames:aListOfInstances);
   GetMovingKind(dx:Number, dy:Number);
   MaxDist();
}
/**
*
*/
declare class aScenarioAsDesignWindowAgent extends aXXXAsDesignWindowAgent {
   ClassName();
   ClassId();
   Init();
   Kill();
   myWindow();
   LoadValue();
   StoreValue();
   LoadFromVar();
   Finalize();
   InteractWithUser();
   NotifyTerminate();
   NotifyGetFocus();
   NotifyRangeHasChanged();
   NotifyDroppedObject();
   NotifyCanReceiveDroppedObject();
   NotifyButtonUp();
   NotifyButtonDblClk();
   NotifyHostGetFocus();
   NotifyLoadValue();
   ChangePos();
   Paint();
   NotifySelectedFramesChanged();
}
/**
*
*/
declare class aControlAgent extends aUIAgent {
   ClassName();
   ClassId();
   VarAddressHasChanged();
   InteractWithUser();
   ChangePos();
   CaptureMouse();
   ReleaseMouse();
   DelayedSetFocus(WithBeep:Boolean);
   SetSelectionForeColor(Color:string);
   SetSelectionFontName(FontName:string);
   SetSelectionFontSize(FontSize:Number);
   SetSelectionFontSels(FontSels:string);
   SetSelectionParaFormat(ParaFormat:Number);
   GetSelectionForeColor():string;
   GetSelectionFontName():string;
   GetSelectionFontSize();
   GetSelectionFontSels():string;
   GetSelectionParaFormat();
   GetSelectionPos(TopX:Number, TopY:Number, BottomX:Number, BottomY:Number);
   GetLineIndexFromPos(X:Number, Y:Number, Line:Number, Row:Number);
   GetPosFromLineIndex(Line:Number, Row:Number, X:Number, Y:Number);
   SetExecuteOnEnter();
   SetExecuteOnEscape();
   SetSelectionPosition(TestPositionKinds:Number);
   GetSelectionPosition();
}
/**
*
*/
declare class aListBoxUIAgent extends aControlAgent {
   ClassName();
   ClassId();
   Finalize();
}
/**
*
*/
declare class aListOfInstancesAsListBoxAgent extends aListBoxUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   NotifySelected();
   NotifyExecuted();
}
/**
*
*/
declare class aListofParseErrorsAgent extends aListOfInstancesAsListBoxAgent {
   ClassName();
   ClassId();
   NotifySelected();
   NotifyExecuted();
}
/**
*
*/
declare class aListCtrlUIAgent extends aListBoxUIAgent {
   ExtendedKinds:Number;
   ExtendedKinds_G:string;
   ZebraDarkColor:string;
   ZebraLightColor:string;
   CustomRowHeight:Number;
   HeaderBackColor:string;
   HeaderTextColor:string;
   ClassName();
   ClassId();
   Finalize();
   GetColumn(Column:Number, Format:Number, ColumnWidth:Number, Text:string, IndexSubItem:Number);
   SetColumn(Column:Number, Format:Number, ColumnWidth:Number, Text:string, IndexSubItem:Number);
   InsertColumn(Column:Number, Format:Number, ColumnWidth:Number, Text:string, IndexSubItem:Number);
   DeleteColumn(Column:Number);
   GetStringWidth(Text:string);
   GetTopIndex();
   GetCountPerPage();
   InsertItem(Item:Number, Text:string, bmp:Number);
   InsertItemEx(Item:Number, Text:string, BigBmp:Number, SmallBmp:Number);
   SetItemPosition(Item:Number, X:Number, Y:Number);
   GetItemPosition(Item:Number, X:Number, Y:Number);
   SetItemText(Item:Number, SubItem:Number, Text:string);
   GetItemText(Item:Number, SubItem:Number, Text:string);
   SetItemBitmap(Item:Number, SubItem:Number, BigBmp:Number, SmallBmp:Number);
   SetItemStates(Item:Number, ItemStatesSet:string);
   GetItemStates(Item:Number):string;
   DeleteItem(Item:Number);
   DeleteAllItems();
   SortItems(CompareFunc:string, Data:Number);
   SortItems_P(CompareFunc:string, Data:string);
   ChangeStyle(Kinds:string);
   SetItemData(Item:Number, Data:Number);
   GetItemData(Item:Number);
   SetTextBackColor(Color:string);
   GetTextBackColor():string;
   NotifyColumnExecuted(Column:Number);
   NotifyBeginLabelEdit(Item:Number);
   NotifyEndLabelEdit(Item:Number, NewText:string);
   NotifyItemChecked(Item:Number, Checked:Boolean);
   GetItemFromPosition(X:Number, Y:Number);
   SetItemTextColor(Item:Number, SubItem:Number, Color:string);
   UnsetItemTextColor(Item:Number, SubItem:Number);
}
/**
*
*/
declare class aListTreeCtrlUIAgent extends aListCtrlUIAgent {
   ClassName();
   ClassId();
   Finalize();
   CreateNode(ParentNode:string, Data:string, ForceChild:Boolean, Name:string);
   InsertNode(BeforeNode:string, Data:string, ForceChild:Boolean, Name:string);
   MoveNode(ThisNode:string, ToThisParent:string, BeforeThisNode:string);
   DeleteNode(Node:string);
   DeleteAllNodes();
   DeleteChildNodesOf(ParentNode:string);
   Contains(Node:string, GrandParent:string);
   ChildNode(Node:string);
   LastChildNode(Node:string);
   PrevNode(Node:string);
   NextNode(Node:string);
   FatherNode(Node:string);
   IterateBegin();
   IterateNext(Node:string);
   IterateEnd(Node:string);
   ExpandBranch(Node:string);
   Expand(Node:string);
   CollapseBranch(Node:string);
   Collapse(Node:string);
   IsExpanded(Node:string);
   ExecuteNode(Node:string, Recursive:Boolean, Direction:Number);
   SetForceChild(Node:string, ForceChild:Boolean);
   IsForceChild(Node:string);
   SelectNode(Node:string);
   UnSelectNode(Node:string);
   IsNodeSelected(Node:string);
   SelectedNode();
   SelectAll(Node:string, ShouldBeSelected:Boolean);
   CheckNode(Node:string, ShouldBeChecked:Boolean);
   LockNode(Node:string, ShouldBeLocked:Boolean);
   IsNodeChecked(Node:string);
   ChooseNode(Node:string);
   GetChosenNode(Node:string);
   SetText(Node:string, Column:Number, Text:string);
   GetText(Node:string, Column:Number, Text:string);
   SetNodeBitmap(Node:string, Column:Number, Bmp:Number);
   GetNodeBitmap(Node:string, Column:Number);
   SetNodeData(Node:string, Data:string);
   GetNodeData(Node:string);
   SetNodeForeColor(Node:string, ForeColor:string);
   GetNodeForeColor(Node:string):string;
   SetNodeBackColor(Node:string, BackColor:string);
   GetNodeBackColor(Node:string):string;
   SetSubNodeForeColor(Node:string, Column:Number, ForeColor:string);
   GetSubNodeForeColor(Node:string, Column:Number):string;
   SetSubNodeBackColor(Node:string, Column:Number, BackColor:string);
   GetSubNodeBackColor(Node:string, Column:Number):string;
   SetNodeFont(Node:string, FontName:string, FontSize:Number, FontSels:string);
   GetNodeFont(Node:string, FontName:string, FontSize:Number, FontSels:string);
   SetNodeHasCheck(Node:string, ShouldHaveOne:Boolean);
   SetNodeHasRadio(Node:string, ShouldHaveOne:Boolean);
   GetNodeHasCheck(Node:string);
   GetNodeHasRadio(Node:string);
   SetNodeKinds(Node:string, Kinds:string);
   GetNodeKinds(Node:string):string;
   GetNodeGeometry(Node:string, X:Number, Y:Number, Width:Number, Height:Number);
   GetNodeUnder(X:Number, Y:Number);
   GetNodeAtRank(Rank:Number);
   GetNodeRankInParent(Node:string);
   GetNodeRankInList(Node:string);
}
/**
*
*/
declare class aArrayTypeAsListBoxUIAgent extends aListBoxUIAgent {
   ClassName();
   ClassId();
   LoadValue();
}
/**
*
*/
declare class aSubRangeAsListBoxUIAgent extends aListBoxUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   InteractWithUser();
   NotifyLoseFocus();
   NotifySelected();
}
/**
*
*/
declare class aCStringControlAgent extends aControlAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   Finalize();
   NotifyValueChanged();
   NotifyLoseFocus();
   NotifySelected();
   NotifyCheck();
   CurrentString();
   RefreshTranslation();
}
/**
*
*/
declare class aMenuItemControlAgent extends aCStringControlAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   Finalize();
   InteractWithUser();
   OwnerOfCode();
   Show();
   Hide();
   AllowClipping();
}
/**
*
*/
declare class aListOfInstancesAsTreeMenuItemAgent extends aMenuItemControlAgent {
   SelectedMenuItem:string;
   ClassName();
   ClassId();
   LoadValue();
   NotifyExecuted();
   Selection();
   RootNode(VarAddress:string, VarType:aType);
   GetList(Node:string);
   NodeExtract(Node:string):string;
   SelectedNode();
}
/**
*
*/
declare class aListofReftosAsMenuItemAgent extends aMenuItemControlAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   Finalize();
   NotifyExecuted();
}
/**
*
*/
declare class aVoidAsMenuItemControlAgent extends aMenuItemControlAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   RefreshTranslation();
}
/**
*
*/
declare class aMDIWindowMenuItemAgent extends aVoidAsMenuItemControlAgent {
   ClassName();
   ClassId();
   Finalize();
}
/**
*
*/
declare class aEnumAsMenuItemAgent extends aMenuItemControlAgent {
   TheSelectedMenuItemControl:string;
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   Finalize();
   NotifyExecuted();
}
/**
*
*/
declare class aSetAsMenuItemAgent extends aEnumAsMenuItemAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   NotifyExecuted();
}
/**
*
*/
declare class aBooleanAsMenuItemAgent extends aMenuItemControlAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   Finalize();
   NotifyExecuted();
}
/**
*
*/
declare class aMonthCalCtrlUIAgent extends aCStringControlAgent {
   ClassName();
   ClassId();
   Finalize();
   GetMinReqRect(Width:Number, Height:Number);
   SetMonthDelta(Delta:Number);
   GetMonthDelta();
   SetFirstDayOfWeek(Day:Number);
   GetFirstDayOfWeek();
   SetColor(CalArea:string, Color:string);
   GetColor(CalArea:string):string;
   SetToday(Today:Number);
   GetToday();
   SetCurSel(CurSel:Number);
   GetCurSel();
   SetDayState(Months:Number, pDayStates:string);
   SetMaxSelCount(MaxSelCount:Number);
   GetMaxSelCount();
   SetDateRange(MinRangeDate:Number, NoMin:Boolean, MaxRangeDate:Number, NoMax:Boolean);
   GetDateRange(MinRangeDate:Number, NoMin:Boolean, MaxRangeDate:Number, NoMax:Boolean);
   GetMonthRange(MinRangeDate:Number, MaxRangeDate:Number, OnlyEntirelyDisplayed:Boolean);
   SetSelRange(MinRangeDate:Number, MaxRangeDate:Number);
   GetSelRange(MinRangeDate:Number, MaxRangeDate:Number);
   HitTest(X:Number, Y:Number, HitDate:Number, PosKinds:string);
}
/**
*
*/
declare class aDateTimeCtrlUIAgent extends aCStringControlAgent {
   ClassName();
   ClassId();
   Finalize();
   SetMonthCalColor(CalArea:string, Color:string);
   GetMonthCalColor(CalArea:string):string;
   SetFormat(Format:string);
   SetMonthCalFont(FontName:string, FontSize:Number, FontSels:string);
   GetMonthCalFont(FontName:string, FontSize:Number, FontSels:string);
   SetDateTimeRange(MinRangeDate:Number, MinRangeTime:Number, NoMin:Boolean, MaxRangeDate:Number, MaxRangeTime:Number, NoMax:Boolean);
   GetDateTimeRange(MinRangeDate:Number, MinRangeTime:Number, NoMin:Boolean, MaxRangeDate:Number, MaxRangeTime:Number, NoMax:Boolean);
   SetTime(Time:Number);
   GetTime(Time:Number);
   SetDate(Date:Number);
   GetDate(Date:Number);
}
/**
*
*/
declare class aXXXAsVScrollBarUIAgent extends aCStringControlAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   NotifyValueChanged();
}
/**
*
*/
declare class aXXXAsHScrollBarUIAgent extends aCStringControlAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   NotifyValueChanged();
}
/**
*
*/
declare class aInt4ControlAgent extends aCStringControlAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
}
/**
*
*/
declare class aMLEAgent extends aCStringControlAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   SetText(Text:string, theTextSize:Number);
   TextSize();
   GetText(Text:string, MaxTextSize:Number, theTextSize:Number);
   SetRTFText(Text:string, theTextSize:Number);
   RTFTextSize();
   GetRTFText(Text:string, MaxTextSize:Number, theTextSize:Number);
   SetSel(StartChar:Number, EndChar:Number);
   GetSel(StartChar:Number, EndChar:Number);
   SelectBlock(OX:Number, OY:Number, NX:Number, NY:Number);
   SetCharAt(thisChar:Number, Column:Number, Line:Number);
   HideSelection(Hide:Boolean, Permanent:Boolean);
   ReplaceSel(ThisText:string, CanUndo:Boolean);
   InsertImage(PathName:string);
}
/**
*
*/
declare class aTextUIAgent extends aMLEAgent {
   TextChangedByUser:Boolean;
   TextRTF:Boolean;
   AcceptImage:Boolean;
   ClassName();
   ClassId();
   Init();
   LoadValue();
   StoreValue();
   Finalize();
   NotifyInit();
   NotifyValueChanged();
   NotifyDroppedObject();
   NotifyCanReceiveDroppedObject();
}
/**
*
*/
declare class aCUimplemCodeAgent extends aTextUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   Finalize();
   NotifyValueChanged();
   NotifyGetChar();
   NotifyButtonDblClk();
   NotifyMouseMove();
}
/**
*
*/
declare class aVoidAsMLEAgent extends aMLEAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   NotifyValueChanged();
   NotifyLoseFocus();
   NotifySelected();
   NotifyExecuted();
   NotifyDroppedObject();
   NotifyCanReceiveDroppedObject();
}
/**
*
*/
declare class aSubRangeGaugeUIAgent extends aCStringControlAgent {
   MaxWidth:Number;
   IsHorizontal:Boolean;
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   Finalize();
   InteractWithUser();
   NotifyValueChanged();
   NotifyGetFocus();
   ChangePos();
}
/**
*
*/
declare class aSubRangeHScrollBarUIAgent extends aCStringControlAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
}
/**
*
*/
declare class aSubRangeVScrollBarUIAgent extends aCStringControlAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
}
/**
*
*/
declare class aBooleanUIAgent extends aCStringControlAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   NotifySelected();
}
/**
*
*/
declare class aPointerTypeAsAddressUIAgent extends aCStringControlAgent {
   ClassName();
   ClassId();
   InteractWithUser();
}
/**
*
*/
declare class aBitMapControlAgent extends aControlAgent {
   ClassName();
   ClassId();
   LoadValue();
   Finalize();
   InteractWithUser();
}
/**
*
*/
declare class aDraggableObjectAsBitMapUIAgent extends aBitMapControlAgent {
   ClassName();
   ClassId();
   InteractWithUser();
   NotifyExecuted();
   NotifyButtonDown();
   NotifyButtonUp();
   NotifyMouseMove();
}
/**
*
*/
declare class aHelpButtonUIAgent extends aBitMapControlAgent {
   ClassName();
   ClassId();
   InteractWithUser();
   NotifyExecuted();
   NotifyButtonDown();
   NotifyButtonUp();
   NotifyMouseMove();
}
/**
*
*/
declare class aExecutableControlAgent extends aControlAgent {
   ClassName();
   ClassId();
   Finalize();
}
/**
*
*/
declare class aSetAsListBoxAgent extends aControlAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   Finalize();
   NotifyLoseFocus();
   NotifySelected();
   RefreshTranslation();
}
/**
*
*/
declare class aEnumAsListBoxAgent extends aControlAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   Finalize();
   NotifyLoseFocus();
   NotifySelected();
   RefreshTranslation();
}
/**
*
*/
declare class aEnumAsComboBoxEntryAgent extends aEnumAsListBoxAgent {
   ClassName();
   ClassId();
   NotifyLoseFocus();
   NotifySelected();
}
/**
*
*/
declare class aEnumAsComboBoxAgent extends aEnumAsListBoxAgent {
   ClassName();
   ClassId();
   NotifyLoseFocus();
   NotifySelected();
}
/**
*
*/
declare class aBuildInTypeUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   LoadFromVar();
   ChangeVarAgent();
   Finalize();
   NotifyHostRangeHasChanged();
   OwnerOfCode();
   CalcAutoWidthHeight();
   ScenarioWidth();
   ScenarioHeight();
   CreateTypeUIAgent(ForThisType:aType);
}
/**
*
*/
declare class aBuildInRefUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   LoadFromVar();
   ChangeVarAgent();
   Finalize();
   NotifyHostRangeHasChanged();
   OwnerOfCode();
   CalcAutoWidthHeight();
   ScenarioWidth();
   ScenarioHeight();
   GetDesignTimeChildRect();
   CreateRefUIAgent(ForThisObject:aFullObject);
}
/**
*
*/
declare class aRefUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   LoadFromVar();
   ChangeVarAgent();
   Finalize();
   NotifyHostRangeHasChanged();
   AutoWidth();
   AutoHeight();
   CalcAutoWidthHeight();
   ScenarioWidth();
   ScenarioHeight();
   CreateRefUIAgent(ForThisObject:aFullObject);
}
/**
*
*/
declare class aPathThruUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   NotifyHostRangeHasChanged();
   OwnerOfCode();
   CalcAutoWidthHeight();
   ScenarioWidth();
   ScenarioHeight();
   GetDesignTimeChildRect();
}
/**
*
*/
declare class aBuildInPointerTypeUIAgent extends aPathThruUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   ChangeVarAgent();
   Finalize();
}
/**
*
*/
declare class aObjectVarUIAgent extends aBuildInPointerTypeUIAgent {
   ClassName();
   ClassId();
   Init();
   LoadValue();
   StoreValue();
   LoadFromVar();
   ChangeVarAgent();
   Finalize();
   NotifyHostRangeHasChanged();
   OwnerOfCode();
   AutoWidth();
   AutoHeight();
   CalcAutoWidthHeight();
   ScenarioWidth();
   ScenarioHeight();
}
/**
*
*/
declare class aBuildInListOfTypeUIAgent extends aPathThruUIAgent {
   ClassName();
   ClassId();
   Init();
   Kill();
   LoadValue();
   StoreValue();
   StoreToVar();
   ChangeVarAgent();
   NotifyStoreToVar();
   Finalize();
   NotifySelected();
   NotifyExecuted();
   NotifyGetChar();
   NotifyHostRangeHasChanged();
   NotifyGetLineText();
   ChangePos();
   GetSelectedObject();
}
/**
*
*/
declare class aDataTemplateUIAgent extends aPathThruUIAgent {
   ClassName();
   ClassId();
   GetObject();
   LoadValue();
   StoreValue();
   ChangeVarAgent();
   Finalize();
   InteractWithUser();
   SetObject(theObject:aLightObject);
}
/**
*
*/
declare class aBuildInArrayTypeUIAgent extends aPathThruUIAgent {
   ClassName();
   ClassId();
   ChangeVarAgent();
   NotifyStoreToVar();
}
/**
*
*/
declare class aBuildInMethodTypeUIAgent extends aPathThruUIAgent {
   ClassName();
   ClassId();
   Kill();
   LoadValue();
   VarAddressHasChanged();
   NotifyStoreToVar();
   CallIt();
}
/**
*
*/
declare class aPickerUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   Candidates_GetLineText(:aUIAgent, Line:Number, LineText:string);
   Candidates_Executed(:aUIAgent, SelectedRank:Number, Option:Number);
}
/**
*
*/
declare class aXAMLChildUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   LazyFinalize(qvp:aQVarPresentor, subComponentHandle:string);
}
/**
*
*/
declare class aWPFWrapperUIAgent extends aXAMLChildUIAgent {
   ClassName();
   ClassId();
   Finalize();
   OwnerOfCode();
   ScenarioWidth();
   ScenarioHeight();
   LazyFinalize();
}
/**
*
*/
declare class aXAMLUIAgent extends aXAMLChildUIAgent {
   ClassName();
   ClassId();
   Init();
   Kill();
   Finalize();
   InteractWithUser();
   NotifyRangeHasChanged();
   Maximize();
   Restore();
   ChangePos();
   RefreshTranslation();
   LazyFinalize();
   ProduceXAML(container:aXAMLContainer, context:aXAMLProductionContext);
   FinalizeXAML();
   FinalizeSubUIAgents();
   FinalizeEvents();
   GetXAMLControl();
   NotifySubComponentCreated(qvpIndex:Number, subComponentHandle:string);
   NotifySubAgentResourceChanged(name:string, value:string);
   NotifySubAgentEvent(eventName:string, serializedEvent:string);
   NotifyResourceChanged(name:string, value:string);
   NotifyEvent(eventName:string, serializedEvent:string);
   ManagesWindow();
   IsEmbedded();
   RegisterResourceAgent(resourceName:string, agent:aXAMLRuntimeAgent);
   DeregisterResourceAgent(resourceName:string);
   RegisterEventAgent(eventName:string, agent:aXAMLRuntimeAgent);
   DeregisterEventAgent(eventName:string);
   CastToXAMLRuntimeAgent();
}
/**
*
*/
declare class aXAMLTemplateScenUIAgent extends aXAMLUIAgent {
   ClassName();
   ClassId();
   Init();
   Kill();
   FinalizeEvents();
}
/**
*
*/
declare class aBoundAttributeUIAgent extends aUIAgent {
   converter:aBoundAttributeConverter;
   ClassName();
   ClassId();
   Init();
   Kill();
   LoadValue();
   StoreValue();
   Finalize();
   InteractWithUser();
   FinalizeBinding(qvp:aBoundAttributeQVP, resourceName:string, resourceCategory:string);
   NotifyResourceChanged(name:string, value:string);
   NotifyEvent(eventName:string, serializedEvent:string);
   CastToXAMLRuntimeAgent();
}
/**
*
*/
declare class aXAMLScenarioGenInfoAgent extends aUIAgent {
   xamlKind:string;
   mlMod:string;
   encoding:string;
   context:aXAMLProductionContext;
   xamlText:string;
   resourceList:string;
   qvp:aQVarPresentor;
   dummyVarDesc:aVarDesc;
   ClassName();
   ClassId();
   Init();
   NotifyInit();
   xamlKindCombo_Selected(Value:Number);
   mlModCombo_Selected(Value:Number);
   encodingCombo_Selected(Value:Number);
   EditQVP();
}
/**
*
*/
declare class aXXXAsShellIconUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   Finalize();
}
/**
*
*/
declare class aXXXAsOleControlUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   VarAddressHasChanged();
   Finalize();
   InteractWithUser();
   ChangePos();
   CaptureMouse();
   ReleaseMouse();
   Invoke(MethodID:Number, Flags:Number, ResultType:Number, ResultAddr:string, ParamInfo:string, Parameters:string);
   SetProperty(PropertyID:Number, PropertyType:Number, Property:string);
   GetProperty(PropertyID:Number, PropertyType:Number, Property:string);
   LoadFromBuffer(pIID:string, pBuffer:string, BufferSize:Number);
   StoreToBuffer(pIID:string, pBuffer:string, BufferSize:Number);
   GetControlIUnknown();
   SetEventHook(EventId:Number, ParamInfo:string, MethodAddr:string, theSelf:string);
   SetEventNeeded(EventId:Number);
   SetEventNotNeeded(EventId:Number);
}
/**
*
*/
declare class aRefClassDefUIAgent extends aUIAgent {
   EntryField:string;
   PushButton:string;
   ClassName();
   ClassId();
   LoadValue();
   PushButton_Executed(:aUIAgent, SelectedRank:Number, Option:Number);
   EntryField_ButtonDown(:aUIAgent, No:Number, X:Number, Y:Number);
   EntryField_ButtonUp(:aUIAgent, No:Number, X:Number, Y:Number);
   EntryField_MouseMove(:aUIAgent, X:Number, Y:Number);
   EntryField_Help(:aUIAgent);
   PushButton_Help(:aUIAgent);
}
/**
*
*/
declare class aWindowAgent extends aUIAgent {
   ClassName();
   ClassId();
   myWindow();
   Finalize();
   InteractWithUser();
   NotifyHostRangeHasChanged();
   Show();
   Hide();
   ChangePos();
}
/**
*
*/
declare class aPainterAgent extends aUIAgent {
   ClassName();
   ClassId();
   myWindow();
   LoadValue();
   Finalize();
   NotifyInit();
   NotifyTerminate();
   ChangePos();
}
/**
*
*/
declare class aIndexedBuildInListUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   LoadFromVar();
   StoreToVar();
   ChangeVarAgent();
   NotifyStoreToVar();
   Finalize();
   NotifyHostRangeHasChanged();
   Select();
   IsSelected();
   Selection();
   Count();
   CalcAutoWidthHeight();
   CreateRefUIAgent(ForThisObject:aFullObject);
}
/**
*
*/
declare class aXXXAsFolderUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   Finalize();
   NotifyExecuted();
   NotifyButtonUp();
   ChangePos();
}
/**
*
*/
declare class aListOfFolderUIAgent extends aXXXAsFolderUIAgent {
   RankOfPresentedObject:Number;
   KeepRefUIAgents:Boolean;
   ClassName();
   ClassId();
   Init();
   LoadValue();
   Finalize();
   NotifySelected();
   NotifyRangeHasChanged();
   NotifyHostRangeHasChanged();
   Select();
   GetSelectedObject();
   CreateRefUIAgent(forThisObject:aLightObject);
   KillRefUIAgent(RefUIAgent:aUIAgent);
   PresentedUIAgent(PresentedObject:aFullObject);
   PresentedObject();
}
/**
*
*/
declare class aXXXAsTreeBoxUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   Finalize();
   NotifyExecuted();
   NotifyWantToDrop();
   NotifyCanDrop();
   NotifyButtonUp();
   ChangePos();
   GetSelectedObject();
   SelectedObject();
   ObjectFromNode(thisNode:string);
   NodeFromObject(thisObject:aLightObject);
   ObjectFromNodeEqualTo(thisNode:string, thisObject:aLightObject);
   SetObjectToNode(thisNode:string, thisObject:aLightObject);
   DataWhenSettingObjectToNode(thisObject:aLightObject);
   CreateNewNode(FatherNode:string, Data:string, ForceChild:Boolean, TextOfNode:string);
   InsertNewNode(BeforeNode:string, Data:string, ForceChild:Boolean, TextOfNode:string);
   DisposeNode(thisNode:string);
   DisposeChildNodeOf(thisNode:string);
   Purge();
   SelectNode(thisNode:string);
   MakeNodeVisible(thisNode:string);
   ExpandNode(thisNode:string);
   ExpandBranch(thisNode:string);
   CollapseBranch(thisNode:string);
   SetTextTo(thisNode:string, thisText:string);
   SetDataTo(thisNode:string, thisData:string);
   SetInfoTo(thisNode:string, ForceChild:Boolean, Data:string);
   SetBitmapsTo(thisNode:string, BmpEmpty:Number, BmpPlus:Number, BmpMinus:Number);
   GetDataOf(thisNode:string);
   GetTextOf(thisNode:string):string;
   GetInfoOf(thisNode:string, Expanded:Boolean, ForceChild:Boolean, FatherNode:string, ChildNode:string, PreviousNode:string, NextNode:string, Text:string, Data:string);
   GetNodeGeometryOf(thisNode:string, X:Number, Y:Number, Width:Number, Height:Number);
   FatherNodeOf(thisNode:string);
   ChildNodeOf(thisNode:string);
   PrevNodeOf(thisNode:string);
   NextNodeOf(thisNode:string);
   RootNode();
   LastNode();
   DraggedNode();
   SelectedNode();
   NodeFromData(thisData:string);
   NodeExist(thisNode:string);
   NotifyBeginLabelEdit(Node:string);
   NotifyEndLabelEdit(Node:string, NewText:string);
   NodeFromXY(X:Number, Y:Number);
   IterateNextNodeOf(thisNode:string);
   GetChildIndex(Father:string, Child:string);
   GetIndexedChild(Father:string, Index:Number);
}
/**
*
*/
declare class aListOfCascadeUIAgent extends aXXXAsTreeBoxUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   NotifyExecuted();
   NotifyGetChar();
   NotifyDroppedObject();
   NotifyCanReceiveDroppedObject();
   NotifyButtonUp();
   NotifyPopup();
   Selection();
}
/**
*
*/
declare class aListOfTreeUIAgent extends aXXXAsTreeBoxUIAgent {
   NameForSelect:string;
   ClassName();
   ClassId();
   LoadValue();
   Finalize();
   NotifyExecuted();
   NotifyGetChar();
   NotifyDroppedObject();
   NotifyCanReceiveDroppedObject();
   NotifyButtonUp();
   NotifyPopup();
   Selection();
   ExpandNode();
   SelectFromName();
}
/**
*
*/
declare class aVoidAsTreeBoxUIAgent extends aXXXAsTreeBoxUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   Finalize();
   NotifyTerminate();
   NotifyExecuted();
   SelectedObject();
   ObjectFromNode();
}
/**
*
*/
declare class aRootListOfTypeUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   Finalize();
   GetMainControl();
   InsertAt();
   InsertAtEnd();
   DeleteAt();
   DeleteAll();
   UpDate();
   NoUpDate();
   Select();
   UnSelect();
   IsSelected();
   Selection();
   GetSelectedObject();
}
/**
*
*/
declare class aGenericListOfTypeUIAgent extends aRootListOfTypeUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   Finalize();
   NotifyPopup();
   NotifySubUIAgentSelected();
   NotifySubUIAgentExecuted();
   NotifySubUIAgentDroppedObject();
   NotifySubUIAgentCanReceiveDroppedObject();
   GetMainControl();
   ChangePos();
   Enable();
   Disable();
   InsertAt();
   InsertAtEnd();
   DeleteAt();
   DeleteAll();
   UpDate();
   NoUpDate();
   Select();
   UnSelect();
   IsSelected();
   Selection();
   ListOfListBox_ButtonDown(:aUIAgent, No:Number, X:Number, Y:Number);
   ListOfListBox_ButtonUp(:aUIAgent, No:Number, X:Number, Y:Number);
   ListOfListBox_MouseMove(:aUIAgent, X:Number, Y:Number);
   ListOfListBox_Help(:aUIAgent);
   Actions_Help(:aUIAgent);
   ListOfListBox_GetLineText(:aUIAgent, Line:Number, LineText:string);
   ListOfListBox_Popup(:aUIAgent, Param1:aFullObject);
}
/**
*
*/
declare class aGenericRefToTypeUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   Finalize();
   NotifySubUIAgentValueChanged();
   NotifySubUIAgentDroppedObject();
   NotifySubUIAgentCanReceiveDroppedObject();
   GetMainControl();
   ChangePos();
   Enable();
   Disable();
   CurrentString();
   GetValue();
   SetValue();
   RefToEntryField_ButtonDown(:aUIAgent, No:Number, X:Number, Y:Number);
   RefToEntryField_ButtonUp(:aUIAgent, No:Number, X:Number, Y:Number);
   RefToEntryField_MouseMove(:aUIAgent, X:Number, Y:Number);
   RefToEntryField_Help(:aUIAgent);
   Actions_Help(:aUIAgent);
}
/**
*
*/
declare class aVoidAsXXXAgent extends aUIAgent {
   ClassName();
   ClassId();
   Finalize();
   NotifyInit();
   NotifyTerminate();
   NotifyValueChanged();
   NotifyLoseFocus();
   NotifySelected();
   NotifyExecuted();
   NotifyDroppedObject();
   NotifyCanReceiveDroppedObject();
   ChangePos();
   RefreshTranslation();
   SetExecuteOnEnter();
   SetExecuteOnEscape();
}
/**
*
*/
declare class aBroadCastAgent extends aVoidAsXXXAgent {
   ClassName();
   ClassId();
   NotifyExecuted();
}
/**
*
*/
declare class aVoidAsBitMapAgent extends aVoidAsXXXAgent {
   ClassName();
   ClassId();
   LoadValue();
   Finalize();
   RefreshTranslation();
}
/**
*
*/
declare class aVoidAsListBoxAgent extends aVoidAsXXXAgent {
   Title:string;
   ClassName();
   ClassId();
   Finalize();
   TitleLine():string;
}
/**
*
*/
declare class aSetAsGroupOfCBAgent extends aUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   Finalize();
   InteractWithUser();
   NotifyLoseFocus();
   NotifySelected();
   ChangePos();
   ShowAt();
   HideAt();
   IsHiddenAt();
   EnableAt();
   DisableAt();
   IsDisabledAt();
   SetForeColorAt();
   GetForeColorAt();
   SetBackColorAt();
   GetBackColorAt();
   SetFontAt();
   GetFontNameAt();
   GetFontSizeAt();
   GetFontSelsAt();
   RefreshTranslation();
}
/**
*
*/
declare class aEnumAsGroupOfRBAgent extends aUIAgent {
   TheSelectedRadioButton:string;
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   Finalize();
   InteractWithUser();
   NotifyLoseFocus();
   NotifySelected();
   ChangePos();
   ShowAt();
   HideAt();
   IsHiddenAt();
   EnableAt();
   DisableAt();
   IsDisabledAt();
   SetForeColorAt();
   GetForeColorAt();
   SetBackColorAt();
   GetBackColorAt();
   SetFontAt();
   GetFontNameAt();
   GetFontSizeAt();
   GetFontSelsAt();
   RefreshTranslation();
}
/**
*
*/
declare class aSubRangeUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   Finalize();
   InteractWithUser();
   NotifyLoseFocus();
   NotifySelected();
}
/**
*
*/
declare class aPointerUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   Finalize();
   NotifyHostRangeHasChanged();
}
/**
*
*/
declare class aDBClassDefReprUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   NotifyHostGetFocus();
}
/**
*
*/
declare class aMethodTypeUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   Init();
   Kill();
   VarAddressHasChanged();
   Finalize();
   InteractWithUser();
   NotifyExecuted();
   NotifyButtonUp();
   RefreshTranslation();
   CallButton_Executed(:aUIAgent, SelectedRank:Number, Option:Number);
}
/**
*
*/
declare class aReturnScenarioMethodTypeUIAgent extends aMethodTypeUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   LoadFromVar();
   VarAddressHasChanged();
   ChangeVarAgent();
   Finalize();
   NotifyHostRangeHasChanged();
   ScenarioWidth();
   ScenarioHeight();
   GetDesignTimeChildRect();
   UseMyRectForChildDesignTimeRect();
}
/**
*
*/
declare class aReturnTypeUIAgent extends aMethodTypeUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   LoadFromVar();
   VarAddressHasChanged();
   ChangeVarAgent();
   Finalize();
   NotifyHostRangeHasChanged();
   ScenarioWidth();
   ScenarioHeight();
   GetDesignTimeChildRect();
   UseMyRectForChildDesignTimeRect();
}
/**
*
*/
declare class aMethodAsMenuItemAgent extends aMethodTypeUIAgent {
   ClassName();
   ClassId();
   Finalize();
   InteractWithUser();
   Show();
   Hide();
   RefreshTranslation();
}
/**
*
*/
declare class aMethodTypeAsControlAgent extends aMethodTypeUIAgent {
   ClassName();
   ClassId();
   Finalize();
   InteractWithUser();
   ChangePos();
}
/**
*
*/
declare class aMethodTypeAsBitMapAgent extends aMethodTypeAsControlAgent {
   ClassName();
   ClassId();
   LoadValue();
   Finalize();
   NotifyExecuted();
}
/**
*
*/
declare class aReimplemClassDefUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   IsActive_Selected(:aUIAgent, SelectedRank:Number);
   IsActive_Init(:aUIAgent);
}
/**
*
*/
declare class aCUDefUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   myMethods_Selected(:aUIAgent, SelectedRank:Number);
   myClasses_Selected(:aUIAgent, SelectedRank:Number);
   myConsts_Selected(:aUIAgent, SelectedRank:Number);
   myTypes_Selected(:aUIAgent, SelectedRank:Number);
   myVars_Selected(:aUIAgent, SelectedRank:Number);
}
/**
*
*/
declare class aMethodImplemUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   StopPointButton_Executed(:aUIAgent, SelectedRank:Number, Option:Number);
   StopPointButton_Init(:aUIAgent);
   InvisiblePointButton_Executed(:aUIAgent, SelectedRank:Number, Option:Number);
   InvisiblePointButton_Init(:aUIAgent);
}
/**
*
*/
declare class aSystemUIAgent extends aUIAgent {
   DescendantsInDBDef:string;
   theDBDefs:string;
   FromC:string;
   ToC:string;
   ST1:string;
   ST2:string;
   ClassName();
   ClassId();
   LoadFromVar();
   NotifyInit();
   DropBitMap_Executed(:aUIAgent, SelectedRank:Number, Option:Number);
   DropBitMap_Received(:aUIAgent, X:Number, Y:Number, Object:aFullObject);
   DropBitMap_CanReceive(:aUIAgent, X:Number, Y:Number, Object:aFullObject);
   StopPointBitMap_Init(:aUIAgent);
   StopPointBitMap_Executed(:aUIAgent, SelectedRank:Number, Option:Number);
   StopPointBitMap_Received(:aUIAgent, X:Number, Y:Number, Object:aFullObject);
   StopPointBitMap_CanReceive(:aUIAgent, X:Number, Y:Number, Object:aFullObject);
   IsOwner_Selected(:aUIAgent, SelectedRank:Number);
   PointsToVersion_Selected(:aUIAgent, SelectedRank:Number);
   InTransaction_Selected(:aUIAgent, SelectedRank:Number);
   LoadRefThings_Selected(:aUIAgent, SelectedRank:Number);
   StoreExtract_Selected(:aUIAgent, SelectedRank:Number);
   IsActiveSide_Selected(:aUIAgent, SelectedRank:Number);
   UsesCurrentProject_Selected(:aUIAgent, SelectedRank:Number);
   IsIntegral_Selected(:aUIAgent, SelectedRank:Number);
   StillsOnFreeze_Selected(:aUIAgent, SelectedRank:Number);
   FreezeRefObject_Selected(:aUIAgent, SelectedRank:Number);
   DescendantsInDBDef_Selected(:aUIAgent, SelectedRank:Number);
   ShowHelpManager_Received(:aUIAgent, X:Number, Y:Number, Object:aFullObject);
   ShowHelpManager_CanReceive(:aUIAgent, X:Number, Y:Number, Object:aFullObject);
   IsOwner_Init(:aUIAgent);
   FromC_ValueStored(:aUIAgent);
   ToC_ValueStored(:aUIAgent);
}
/**
*
*/
declare class aWatchUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   NotifyStoreToVar();
   NotifyTerminate();
   UpdateTitle();
}
/**
*
*/
declare class aMethodInvocationUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   StopPointButton_Executed(:aUIAgent, SelectedRank:Number, Option:Number);
   StopPointButton_Init(:aUIAgent);
   InvisiblePointButton_Executed(:aUIAgent, SelectedRank:Number, Option:Number);
   InvisiblePointButton_Init(:aUIAgent);
}
/**
*
*/
declare class aBiPathThruUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   NotifyHostRangeHasChanged();
   OwnerOfCode();
   ScenarioWidth();
   ScenarioHeight();
   GetDesignTimeChildRect();
}
/**
*
*/
declare class aNotifierUIAgent extends aUIAgent {
   ClassName();
   ClassId();
   LoadValue();
   StoreValue();
   Finalize();
}
/**
*
*/
declare class onlyGeneralInfoAgent extends aUIAgent {
   ConfigSignature:aCStringControlAgent;
   ConfigSignatureStaticText:aVoidAsXXXAgent;
   CreationDateStaticText:aVoidAsXXXAgent;
   OwnedDeliveries:aListOfTreeUIAgent;
   getDate:aReturnTypeUIAgent;
   StaticText:aVoidAsXXXAgent;
   myText:aCStringControlAgent;
   myTextStaticText:aVoidAsXXXAgent;
}
/**
*
*/
declare class OnlyDeliveryCatalogAgent extends aUIAgent {
   DeliveryCatalog:aListOfTreeUIAgent;
}
/**
*
*/
declare class onlyNeededDeliveriesAgent extends aUIAgent {
   NeededDeliveries:aListOfTreeUIAgent;
}
/**
*
*/
declare class aDeliveryReference001Agent extends aUIAgent {
   Name:aCStringControlAgent;
   NameStaticText:aVoidAsXXXAgent;
   ConfigSignature:aCStringControlAgent;
   ConfigSignatureStaticText:aVoidAsXXXAgent;
   DeliveryVersion:aCStringControlAgent;
   DeliveryVersionStaticText:aVoidAsXXXAgent;
}
/**
*
*/
declare class onlyDelBInstallersAgent extends aUIAgent {
   DelBInstallers:aListOfTreeUIAgent;
}
/**
*
*/
declare class DeliveryPreparerAgent extends aUIAgent {
   DeliveryCatalog:aListOfTreeUIAgent;
   RemoveMyself:aMethodTypeAsControlAgent;
   GetClosure:aMethodTypeAsControlAgent;
   InitFromExportCatalogue:aMethodTypeAsControlAgent;
   GetClosure001:aMethodTypeAsControlAgent;
   GetClosureofmyself:aMethodTypeAsControlAgent;
   getAllCandidates:aMethodTypeAsControlAgent;
   removeAllCandidates:aMethodTypeAsControlAgent;
   Name:aCStringControlAgent;
   OnlyWamInitFromExportCatalogueOfName:aMethodTypeAsControlAgent;
   InitWithIR:aMethodTypeAsControlAgent;
   DisplayInterdependancies:aMethodTypeAsControlAgent;
   NameBackup:string;
/**
*
*/
   Name_ValueStored(:aUIAgent);
/**
*
*/
   OnlyWamInitFromExportCatalogueOfName_Init();
/**
*
*/
   InitWithIR_Init();
}
/**
*
*/
declare class aCandidateCategory001Agent extends aUIAgent {
   Candidates:aListOfTreeUIAgent;
}
/**
*
*/
declare class aConfigInstallerOption001Agent extends aUIAgent {
   InstallableDeliveries:aListOfTreeUIAgent;
   InstallableDeliveriesStaticText:aVoidAsXXXAgent;
   DeliveriesToInstall:aListOfTreeUIAgent;
   DeliveriesToInstallStaticText:aVoidAsXXXAgent;
   getAllDeliveries:aMethodTypeAsControlAgent;
   UnGetAllDeliveries:aMethodTypeAsControlAgent;
}
/**
*
*/
declare class aConfigurationReference001Agent extends aUIAgent {
   ConfigSignature:aCStringControlAgent;
   ConfigSignatureStaticText:aVoidAsXXXAgent;
   configVersion:aCStringControlAgent;
   configVersionStaticText:aVoidAsXXXAgent;
   Name:aCStringControlAgent;
   NameStaticText:aVoidAsXXXAgent;
}
/**
*
*/
declare class mainConfigInstallerAgent extends aUIAgent {
   FileName:aCStringControlAgent;
   StaticText:aVoidAsXXXAgent;
   alreadyInstalledDelB:aBuildInRefUIAgent;
   aNewConfiguration003:aNewConfiguration003Agent;
}
/**
*
*/
declare class InstallScenarioAgent extends aUIAgent {
   WantToRedistributeIds:aBooleanUIAgent;
   InstallComment:aCStringControlAgent;
   WAMBundleContentsCanBeModified:aBooleanUIAgent;
   ContentsLocked:aBooleanUIAgent;
   ContentsMustBeUnLocked:aBooleanUIAgent;
/**
*
*/
   WAMBundleContentsCanBeModified_ValueStored();
/**
*
*/
   WAMBundleContentsCanBeModified_Init(:aUIAgent);
/**
*
*/
   ContentsMustBeUnLocked_Init(:aUIAgent);
}
/**
*
*/
declare class StandardInstallScenarioAgent extends aUIAgent {
   InstallComment:aCStringControlAgent;
   FreezeIds:aBooleanUIAgent;
   ContentsLocked:aBooleanUIAgent;
}
/**
*
*/
declare class PassiveInstallationAgent extends aUIAgent {
   Comment:aTextUIAgent;
   getGauge:aReturnTypeUIAgent;
   FileName:aCStringControlAgent;
}
/**
*
*/
declare class LockedInstallScenarioAgent extends aUIAgent {
   WantToRedistributeIds:aBooleanUIAgent;
   InstallComment:aCStringControlAgent;
   WAMBundleContentsCanBeModified:aBooleanUIAgent;
   ContentsLocked:aBooleanUIAgent;
/**
*
*/
   WAMBundleContentsCanBeModified_Init();
/**
*
*/
   WAMBundleContentsCanBeModified_ValueStored();
}
/**
*
*/
declare class DeliveriesBundleInstallerAlertAgent extends aUIAgent {
   Comment:aTextUIAgent;
   ActionClose001:aMethodTypeAsBitMapAgent;
}
/**
*
*/
declare class aIncrementalExportExtension001Agent extends aUIAgent {
   DoYourJob:aMethodTypeAsBitMapAgent;
}
/**
*
*/
declare class aIncrementalImportExtension001Agent extends aUIAgent {
   DoYourJob:aMethodTypeAsBitMapAgent;
}
/**
*
*/
declare class ClosureCandidatesAgent extends aUIAgent {
   PresentedList:aPathThruUIAgent;
   theList:aListOfTreeUIAgent;
}
/**
*
*/
declare class DeliveryPreparerOnlyCatalogAgent extends aUIAgent {
   DeliveryCatalog:aListOfTreeUIAgent;
}
/**
*
*/
declare class aPreparedDeliveriesBundleListClassToFindAgent extends aUIAgent {
   EntityToFind:aGenericRefToTypeUIAgent;
}
/**
*
*/
declare class FilePickerForInstallationofaBundleAgent extends aUIAgent {
   fileToInstall:aCStringControlAgent;
   StaticText:aVoidAsXXXAgent;
   pickAFileToInstall:aMethodTypeAsBitMapAgent;
   installIt:aMethodTypeAsBitMapAgent;
   viewBundleToInstall:aMethodTypeAsBitMapAgent;
   Comment:aTextUIAgent;
   StaticText001:aVoidAsXXXAgent;
   installAllVersions:aMethodTypeAsBitMapAgent;
}
/**
*
*/
declare class onlyDeletedEntitiesAgent extends aUIAgent {
   DeletedEntities:aListOfTreeUIAgent;
}
/**
*
*/
declare class onlyConfigCatalogAgent extends aUIAgent {
   onlyConfigCatalog:aListOfTreeUIAgent;
}
/**
*
*/
declare class onlyRequiredConfigForInstallAgent extends aUIAgent {
   RequiredConfigurationsForInstallation:aListOfTreeUIAgent;
}
/**
*
*/
declare class ConfiginterdependanciesAgent extends aUIAgent {
   selectedDeliveries:aListOfInstances;
   FieldWidth:Number;
   FieldHeight:Number;
   buttonDown:Boolean;
   CheckBox:aVoidAsXXXAgent;
/**
*
*/
   drawRect(ps:string, x:Number, y:Number, w:Number, h:Number);
/**
*
*/
   NotifyPaint();
/**
*
*/
   appendDelivery(inList:aListOfInstances, theDelivery:aDelivery);
/**
*
*/
   NotifyButtonDown();
/**
*
*/
   NotifyButtonUp();
/**
*
*/
   NotifyInit();
/**
*
*/
   NotifyTerminate();
/**
*
*/
   NotifyMouseMove();
}
/**
*
*/
declare class bugPatchAgent extends aUIAgent {
   initFromFile:aMethodTypeAsControlAgent;
}
/**
*
*/
declare class ReadMeAndDescriptionModificationAgent extends aUIAgent {
   myText:aCStringControlAgent;
   myTextStaticText:aVoidAsXXXAgent;
   Comment:aTextUIAgent;
}
/**
*
*/
declare class DeliveriesBundlePreparerCandidateCategoriesAgent extends aUIAgent {
   PresentableCandidates:aListOfFolderUIAgent;
}
/**
*
*/
declare class onlyHiddenPreparersAgent extends aUIAgent {
   HiddenDelBPreparerContent:aListOfCascadeUIAgent;
   getAllOtherDelBPreparer:aMethodTypeAsControlAgent;
}
/**
*
*/
declare class FolderBisOfPreparedDeliveriesAgent extends aUIAgent {
   OwnedDeliveries:aListOfFolderUIAgent;
}
/**
*
*/
declare class FolderOfPreparedDeliveriesAgent extends aUIAgent {
   OwnedDeliveries:aListOfFolderUIAgent;
   NewDelivery:aMethodTypeAsControlAgent;
   SaveAsFile:aMethodTypeAsBitMapAgent;
   LoadFromFile:aMethodTypeAsBitMapAgent;
}
/**
*
*/
declare class RequiredForInstallationAgent extends aUIAgent {
   RequiredDelBReferences:aListOfCascadeUIAgent;
/**
*
*/
   LoadValue();
}
/**
*
*/
declare class BundleGenerationAgent extends aUIAgent {
   DeliveriesToUpdate:aListOfTreeUIAgent;
   DeliveriesToUpdateStaticText:aVoidAsXXXAgent;
   StaticText:aVoidAsXXXAgent;
   DeliveriesThatCanBeUpdated:aListOfTreeUIAgent;
   GenerateNewConfig:aMethodTypeAsControlAgent;
   SameIds:aBooleanUIAgent;
   GenerationDirectory:aCStringControlAgent;
   GenerationDirectoryStaticText:aVoidAsXXXAgent;
   getAllDeliveriesToUpdate:aMethodTypeAsControlAgent;
   removeAllDeliveriesToUpdate:aMethodTypeAsControlAgent;
   HideSource:aBooleanUIAgent;
   ContentsLocked:aBooleanUIAgent;
   DeliveriesBundlePreparerWydeOptions:DeliveriesBundlePreparerWydeOptionsAgent;
   XMLFormat:aBooleanUIAgent;
   CodeAsText:aBooleanUIAgent;
/**
*
*/
   DisableCodeAsText();
/**
*
*/
   XMLFormat_ValueLoaded(:aUIAgent);
/**
*
*/
   XMLFormat_ValueStored(:aUIAgent);
}
/**
*
*/
declare class DeliveriesBundlePreparerWydeOptionsAgent extends aUIAgent {
   WamExtension:aBooleanUIAgent;
   IsASystemBundle:aBooleanUIAgent;
   ConfidentialBundle:aBooleanUIAgent;
/**
*
*/
   NotifyInit();
}
/**
*
*/
declare class onlyAlreadyExinstingConfigAgent extends aUIAgent {
   AlreadyCreatedConfig:aListOfTreeUIAgent;
   ReGenerateLastBundle:aMethodTypeAsControlAgent;
   GenerateUpdateFileForLastConfig:aMethodTypeAsControlAgent;
}
/**
*
*/
declare class ReportAgent extends aUIAgent {
   OnlyComment:aUIAgent;
}
/**
*
*/
declare class InterdependanciesAgent extends aUIAgent {
   selectedDeliveries:aListOfInstances;
   FieldWidth:Number;
   FieldHeight:Number;
   CheckBox:aVoidAsXXXAgent;
   buttonDown:Boolean;
   PushButton:aVoidAsXXXAgent;
/**
*
*/
   drawRect(ps:string, x:Number, y:Number, w:Number, h:Number);
/**
*
*/
   NotifyPaint();
/**
*
*/
   appendDelivery(inList:aListOfInstances, theDelivery:aDeliveryPreparer);
/**
*
*/
   NotifyButtonDown();
/**
*
*/
   NotifyButtonUp();
/**
*
*/
   NotifyInit();
/**
*
*/
   NotifyTerminate();
/**
*
*/
   NotifyMouseMove();
/**
*
*/
   PushButton_Executed(:aUIAgent, SelectedRank:Number, Option:Number);
}
/**
*
*/
declare class InterdependanciesExAgent extends InterdependanciesAgent {
   Flags:aListOfInstances;
   RequiredDelBForInstallation:aListOfInstances;
   Propagate:Boolean;
/**
*
*/
   Flag(Entity:aEntity);
/**
*
*/
   Unflag();
/**
*
*/
   AppendRequiredBundle(Bundle:aDeliveriesBundle);
/**
*
*/
   InitRequiredDelBForInstallation();
/**
*
*/
   DrawItem(ps:string, w:Number, i:Number, j:Number, eh:Number, ElementColor:Number, theString:string);
/**
*
*/
   DrawRequiredBundles(ps:string, w:Number, i:Number, eh:Number, FromDelivery:aDelivery);
/**
*
*/
   NotifyPaint();
/**
*
*/
   NotifyInit();
/**
*
*/
   NotifyTerminate();
/**
*
*/
   PushButton_Executed();
/**
*
*/
   NotifyButtonDown();
/**
*
*/
   NotifyMouseMove();
}
/**
*
*/
declare class OnlyReadMeAgent extends aUIAgent {
   ReadMe:aTextUIAgent;
   myText:aCStringControlAgent;
   myTextStaticText:aVoidAsXXXAgent;
}
/**
*
*/
declare class onlyConfigurationCandidatesAgent extends aUIAgent {
   StaticText:aVoidAsXXXAgent;
   Candidates:aPathThruUIAgent;
   theList:aListOfTreeUIAgent;
}
/**
*
*/
declare class ConfigPreparerUpdateDeliveriesAgent extends aUIAgent {
   aConfigPreparer001:BundleGenerationAgent;
}
/**
*
*/
declare class MainConfigPreparerAgent extends aUIAgent {
   Name:aCStringControlAgent;
   NameStaticText:aVoidAsXXXAgent;
   ConfigPreparerMain:ConfigPreparerMainAgent;
   SignatureStaticText:aVoidAsXXXAgent;
   Signature001:aCStringControlAgent;
   Gauge:aPathThruUIAgent;
   Laps:aCStringControlAgent;
}
/**
*
*/
declare class DeliveriesBundlePreparerDeliveriesAgent extends aUIAgent {
   OwnedDeliveries:aListOfCascadeUIAgent;
}
/**
*
*/
declare class RedesignDeliveriesBundlePreparerRedesignAgent extends aUIAgent {
   RedesignReferences:aListOfCascadeUIAgent;
}
/**
*
*/
declare class aRegexMatch extends aLightObject {
   ClassName();
   ClassId();
   Init();
   Kill();
   AddStringSubmatchesToSequence(submatchStrings:string);
   AddTextSubmatchesToSequence(submatchTexts:string);
   AddSubmatchPositionsToSequence(submatchPositions:string);
   MoveToNextMatch();
   GetString(_str:string);
   GetText(txt:string);
   IsValidMatch();
   GetPosition(pos:Number);
}
/**
*
*/
declare class aListIterator extends aLightObject {
   StringExtract();
   ClassName();
   ClassId();
   Init();
   Kill();
   current();
   ResetOn(onThisList:aListOfInstances);
   reset(atTop:Boolean);
   position(onThis:aLightObject, goingForward:Boolean);
   moveNext();
   MoveNextAndGet(tothis:string);
   MovePrevAndGet(tothis:string);
   movePrev();
   move(goingForward:Boolean);
   MoveToRank(thisRank:Number);
   currentItemAddress();
   currentRank();
   moveCurrent(goingForward:Boolean, currentInstance:aLightObject);
   moveCurrentItemAddress(goingForward:Boolean, currentElemAddress:string);
   CurrentAsString():string;
}
/**
*
*/
declare class aListofReftosIterator extends aListIterator {
   ClassName();
   ClassId();
   current();
   ResetOn();
   MoveNextAndGet();
   MovePrevAndGet();
}
/**
*
*/
declare class aDBMgr extends aLightObject {
   myDSV:string;
   LowNSId:Number;
   HighNSId:Number;
   isOpen:Boolean;
   isShared:Boolean;
   isReadWrite:Boolean;
   isLocked:Boolean;
   myDBDef:string;
   StatInfo:string;
   LastErrorNum:Number;
   LastErrorMsg:string;
   AlreadyCommited:Boolean;
   InTransaction:Boolean;
   myIdAP:string;
   myOtherAPs:string;
   DefaultLoaderPB:aPB;
   PbMustNotInitObjectAfterLoad:Boolean;
   DefaultOqlCursorBatchSize:Number;
   DefaultOqlCursorType:Number;
   HookDBMgr:string;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   loadMainFor(thisObject:aFullObject, FromThisFullId:string, myPB:aPB, IsCurrent:Number);
   AssignNSIdSlice(LowNsId:Number, HiNsId:Number);
   AssignContextualNSIdSlice(LowContext:Number, HiContext:Number);
   AppendToDBMgrList();
   RemoveFromDBMgrList();
   SetDataBase(NewDB:string);
   GetDataBase();
   ManagesThisMemo(theMemo:string);
   IsARemoteWideMotor();
   IsNearestWideMotorFor(thisWideMotorDataSet:Number);
   ClearLastError();
   SetLastError(WithErrorNum:Number, WithErrorMsg:string);
   fOpen(ThisBase:string, User:string, PassWord:string);
   fClose();
   FindClassIdAndIsCurrent(theInstanceFullId:string, theClassVersion:Number, theClassId:Number, IsCurrent:Number, IsAStub:Boolean);
   FindClassId(theInstanceId:string, theClassVersion:Number):Number;
   ProgramaticFindClassId(theInstanceId:string, theClassId:Number, theClassVersion:Number);
   Commit(really:Boolean);
   NameInDB(forDBDesc:aEntity):string;
   openAndDefine(thisBase:string, User:string, PassWord:string, ThisDataSet:string, fromNSId:Number, toNsId:Number, fromNSIdContext:Number, toNSIdContext:Number, withAPDs:string, ReadWrite:Boolean);
   LockDB(timeOut:Number);
   UnlockDB();
   HandleSpace(pOldMemo:string, somePointer:string, size:Number, PersistentPointer:string, CountSize:Number, myMemo:string, thePB:aPB);
   FindStorableRefForThing(theFullid:string, theFoundFullid:string);
   FindStorableRefForVersion(theFullid:string, theFoundFullid:string);
   storeListOf(someListOf:aListOfInstances, listOfReftos:Boolean, PersistentPointer:string, myMemo:string, theVarLink:string);
   updateListOf(someListOf:aListOfInstances, listToInsert:aListOfInstances, listToUpdate:aListOfInstances, listToDelete:aListOfInstances, listOfReftos:Boolean, PersistentPointer:string, myMemo:string, theVarLink:string);
   loadListOf(someListOf:aListOfInstances, PersistentPointer:string, fromThisObject:aFullObject, myMemo:string, theVarLink:string);
   needsToStoreList(someListOf:aListOfInstances, oldListOf:aListOfInstances, theVarLink:string);
   storeFloatingListOf(thisFloatingList:aFullObject, PersistentPointer:string, myPB:aPB);
   loadFloatingListOf(thisFloatingList:aFullObject, FromThisId:string, myPB:aPB);
   storeSpaceAndSize(somePointer:string, TheSize:Number, PersistentPointer:string, CountSize:Number, myMemo:string);
   loadSpaceAndSize(somePointer:string, CountSize:Number, myMemo:string);
   ZapSpace(somePointer:string);
   ZapMainFor(thisObject:aFullObject, FromThisId:string, myPB:aPB);
   storeMainFor(thisObject:aFullObject, PersistentPointer:string, myPB:aPB);
   updateMainFor(thisObject:aFullObject, PersistentPointer:string, myPB:aPB, changedVars:aListOfInstances);
   getVersionInfoFor(FromThisId:string, isFrozen:Boolean, theDate:Number, theTime:Number);
   storeInstance(thisObject:aFullObject, PersistentPointer:string, myMemo:string);
   NewLoadInstance(thisObject:aFullObject, PersistentPointer:string, myMemo:string);
   StoreAccessPlansFor(thisObject:aFullObject);
   UpdateAccessPlansFor(olderVersion:aFullObject, thisObject:aFullObject);
   ZapAccessPlansFor(thisObject:aFullObject);
   SearchForStoredVersions(FromThisId:string, theVersions:aListOfInstances, howMany:Number);
   RefCount(thisMemo:string, increment:Number);
   VersionCount(thisFullId:string, increment:Number);
   ThingCount(thisFullId:string, increment:Number);
   LockMain(thisFullId:string, LockedBy:Number, LockedUntil:Number);
   UnLockMain(thisFullId:string);
   VersionsKept(thisFullId:string);
   SetPrevVersionToNotCurrent(thisFullId:string);
   FreezeMain(thisFullId:string, thisObject:aFullObject, myPB:aPB, unFreeze:Boolean, affectsData:Boolean);
   RememberToZap(thisFullid:string);
   ToBeZapped(thisFullid:string);
   fCreate(ThisBase:string, withThisDSV:string);
   isOk();
   Manages(thisId:string, asClassFinder:Boolean);
   ManagesSmallerThan(thisContext:Number);
   ManagesThisReduced(NSId:Number);
   InstallNewAccessPlan(thisAPDesc:aAccessPlanDesc, populating:Boolean);
   DesinstallAccessPlan(thisAPDesc:aAccessPlanDesc);
   populate(thisAccessPlan:string);
   LatestVersionFor(theFullId:string);
   fullIdAccessPlan();
   FindAccessPlan(forThisAPDesc:aAccessPlanDesc);
   BackUp();
   FindAccessPlanForSelector(thisSelector:string, addInto:aListOfInstances);
   BuildNewSelectorForPicker();
   PreparePointerHeader(somePointer:string, theSize:Number, CountSize:Number, KrunchWith:Number, theHeader:string);
   CheckSlice(forNsId:Number);
   OpenDefault(theBase:string, DatasetId:Number);
   InstallAccessPlans(withAPDs:aListOfInstances, andPopulate:Boolean);
   UninstallAccessPlans(withAPDs:aListOfInstances);
   InitDefaultLoaderAPs();
   NewSelector();
   NewSqlSelector();
   SetPhantom(theFullId:string, Value:Boolean);
   IsThingKilled(theFullId:string);
   IsResponsibleForItsLife(theFullId:string);
   SetToNotResponsibleForItsLife(theFullId:string);
   ZapSpaceForRollBack(somePointer:string);
   ZapMainForRollBack(thisObject:aFullObject, FromThisId:string, myPB:aPB);
   BuildIdAccessPlan(theDesc:aAccessPlanDesc);
   BuildNameAccessPlan(theDesc:aAccessPlanDesc);
   BuildVarDependentAccessPlan(theDesc:aAccessPlanDesc);
   SearchObjectFromMemAndDBAndConnectIt(Fullid:string, theRefToType:aType, fromThisObject:aFullObject);
   NewNameSpace(ThisNameSpaceId:Number);
   LockCurrentVersionOf(thisObject:aFullObject);
   UnLockCurrentVersionOf(thisObject:aFullObject);
   UpdateListRefCount(ListOwner:aFullObject, theVarLink:string, PersistentPointer:string, increment:Number);
   NewPBFor(thisClass:string);
   NbrVersionsKept(forClassDef:aClassDef);
   SetToResponsibleForItsLife(theFullId:string);
   NewAPSelector(forAPDesc:aAccessPlanDesc);
   PrepareForIdAllocation();
   TerminateIdAllocation();
   PrepareForTransaction();
   TerminateTransaction();
   ZapListOf(someListOf:aListOfInstances, fromThisObject:aFullObject, myMemo:string, myPB:aPB, theVarLink:string);
   ReconnectFrom(ReleasableDBMgr:aDBMgr);
   LoadAllRefObjectMains(someListOf:aListOfInstances, PersistentPointer:string, fromThisObject:aFullObject, myMemo:string, theVarLink:string, BatchSize:Number);
   LoadObjectFromGivenBuffer(pCurPosOnLocalBuffer:string, ObjectsAreFetched:Boolean);
   RemoteOQLCompiledService(BindBuf:string, BindBufSize:Number, ProcessId:Number, ThreadId:Number, AnswerBuf:string, Fetched:Number, opOffset:Number, MethNsId:Number, MethId:Number, Broker:string);
   IsASystemDBMgr();
   Statistic(inText:string);
   FreeOptimizedFullId(FullId:string);
   SearchObjectFromMemAndDB(FullId:string);
   TerminateOQLRequestBroker(theOQLBroker:aLightObject);
   PurgeDB();
   HasMoreRecentVersionInDB(theFullId:string);
   NewOQLCursor();
   InitOQLRequestBroker(theOQLBroker:aLightObject);
   getDefaultLoaderPB();
   VersionCountForRollBack(thisFullId:string, increment:Number);
   CanReplayTransaction(thisTransaction:aTransaction);
   LockDBForIDAllocator(timeOut:Number);
   UnlockDBForIDAllocator();
   CanReplayOQLQuery(thisRequestBroker:string);
   UpdateIdDistributors(Really:Boolean);
   TransactionLockKind():string;
   BeginCountUpdate(firstFullId:string, ThingCount:Boolean, ReloadNewCountValue:Boolean, UpdateList:aListOfInstances);
   ExecuteCountUpdate(ThingCount:Boolean, AndReloadNewCountValue:Boolean, UpdateList:aListOfInstances);
   CanUpdateCountsByArray(ThingCount:Boolean);
   TerminateCountUpdate(ThingCount:Boolean, UpdateList:aListOfInstances);
   VersionCountByArray(thisFullId:string, increment:Number, UpdateList:aListOfInstances);
   ThingCountByArray(thisFullId:string, increment:Number, UpdateList:aListOfInstances);
   MustNotStoreListAlreadyStoredAgain(someListOf:aListOfInstances, PersistentPointer:string, myMemo:string, theVarLink:string);
   SetPrevVersionToNotCurrentWithCheck(thisFullId:string, WithCheck:Boolean);
}
/**
*
*/
declare class aODBCDBMgr extends aDBMgr {
   BaseName:string;
   hEnv:string;
   hDBC:string;
   hStmt:string;
   ODBCStatementText:string;
   ConversionBuffer:string;
   hMultiFetchStmt:string;
   myTracer:string;
   pFetchIndicator:string;
   IdDistributors:string;
   SelectForUpdateSyntax:Boolean;
   SkipSQLTruncationWarning:Boolean;
   SQLTruncationWarningSkipped:Boolean;
   FetchDummy:string;
   BadFetchDummy:string;
   FetchIndicator:string;
   BadFetchIndicator:string;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   Kill();
   loadMainFor();
   fOpen();
   fClose();
   FindClassIdAndIsCurrent();
   FindClassId();
   ProgramaticFindClassId();
   Commit();
   NameInDB();
   openAndDefine();
   HandleSpace();
   storeListOf();
   updateListOf();
   loadListOf();
   needsToStoreList();
   storeSpaceAndSize();
   loadSpaceAndSize();
   ZapSpace();
   ZapMainFor();
   storeMainFor();
   updateMainFor();
   getVersionInfoFor();
   StoreAccessPlansFor();
   UpdateAccessPlansFor();
   ZapAccessPlansFor();
   SearchForStoredVersions();
   RefCount();
   VersionCount();
   ThingCount();
   VersionsKept();
   FreezeMain();
   fCreate();
   isOk();
   InstallNewAccessPlan();
   LatestVersionFor();
   NewSelector();
   NewSqlSelector();
   SetPhantom();
   IsThingKilled();
   IsResponsibleForItsLife();
   SetToNotResponsibleForItsLife();
   ZapSpaceForRollBack();
   ZapMainForRollBack();
   BuildIdAccessPlan();
   BuildNameAccessPlan();
   BuildVarDependentAccessPlan();
   SearchObjectFromMemAndDBAndConnectIt();
   NewNameSpace();
   UpdateListRefCount();
   NewPBFor();
   NbrVersionsKept();
   SetToResponsibleForItsLife();
   ZapListOf();
   ReconnectFrom();
   LoadAllRefObjectMains();
   Statistic();
   FreeOptimizedFullId();
   SearchObjectFromMemAndDB();
   PurgeDB();
   HasMoreRecentVersionInDB();
   VersionCountForRollBack();
   UpdateIdDistributors();
   TransactionLockKind();
   BeginCountUpdate();
   ExecuteCountUpdate();
   TerminateCountUpdate();
   VersionCountByArray();
   ThingCountByArray();
   MustNotStoreListAlreadyStoredAgain();
   SetPrevVersionToNotCurrentWithCheck();
   SqlExecStr(theStatement:string);
   SqlExecText();
   SqlExecFromText(theText:string);
   SqlExecFromTextForStmt(theText:string, WithStmt:string);
   BindParameterInStmt(InhStmt:string, ParamCount:Number, ParmAddr:string, MemSize:Number, MMType:aType, TypeData:aSqlTypeData, DBType:aSqlType, Buffer:string);
   DoesTableExist(TableName:string);
   DoesColumnExist(TableName:string, ColumnName:string);
   SqlFreeStatement(hStmt:string, ClosingOpt:Number);
   SqlFetchStatement(hStmt:string);
   SqlAllocStatement(Stmt:string);
   GetLastError(hStmt:string);
   GetErrorForStatement(hStmt:string, ErrNum:Number, ErrMsg:string);
   RegisterDBConnection(ThisBase:string);
   ProcessPreviousToBind(hStmt:string, theSqlText:string);
   SetUpCursor(hStmt:string, CursorName:string, CursorType:Number, Option:string);
   SqlExecStrForStmt(theStatement:string, WithStmt:string);
   SqlFetchExtendedStatement(hStmt:string, NumToFetch:Number, NumFetched:Number);
   PrepareStmtForColumnWiseFetch(hStmt:string, NumToFetch:Number);
   SqlBindForExtendedFetch(InhStmt:string, ParamCount:Number, ParmAddr:string, MemSize:Number, MMType:aType, TypeData:aSqlTypeData, DBType:aSqlType, ArraySize:Number, pIndicator:string);
   SqlExecStatements();
   GetMaxVarCharLen();
   SqlBindForFetch(WithStmt:string, ParamCount:Number, ParmAddr:string, MemSize:Number, MMType:aType, TypeData:aSqlTypeData, DBType:aSqlType);
   AfterBindParameterInStmt(TypeData:aSqlTypeData, DBType:aSqlType, Buffer:string);
   AllocBuffer(CurPosInWorkBuffer:string, BuffSize:Number, mustBeInline:Boolean);
   FreeBuffer(CurPosInWorkBuffer:string, BuffSize:Number, mustBeInline:Boolean);
   AllocatedAddrFromBuffer(Buffer:string, SizeInBuf:Number, mustBeInline:Boolean);
   RaiseSQLMotorError(InFunction:string, Severity:string);
   RaiseSQLMotorErrorForStmt(theStmt:string, InFunction:string, Severity:string);
   SqlExecMultLineForStmt(theText:string, WithStmt:string, ErrNum:Number, ErrMsg:string);
   AddAP(thisAPDesc:aAccessPlanDesc, addInto:aListOfInstances);
   SqlClassDefRepFromId(FromId:Number);
   SqlRepresentation(forThisClass:string);
   FindMainTable(theInstanceId:string, ClassId:Number, ClassVersion:Number);
   FindSqlClassDefRepresentation(theInstanceId:string);
   loadCountsFor(FromThisId:string, theHeader:string);
   FastLoadListOf(someListOf:aListOfInstances, PersistentPointer:string, fromThisObject:aFullObject, myMemo:string, theVarLink:string);
   BindWhereVars(InhStmt:string, BindBuffer:string, MMTypes:aListOfInstances, TypeDatas:aListOfInstances, DBTypes:aListOfInstances, IgnoreBlankStrings:Boolean, WorkBuffer:string);
   AfterBindWhereVars(TypeDatas:aListOfInstances, DBTypes:aListOfInstances, IgnoreBlankStrings:Boolean, WorkBuffer:string);
   StoreHugeCols(thisObject:aFullObject, myPB:aPB, SqlClassRepr:aSqlClassDefRepresentation);
   LoadHugeCols(thisObject:aFullObject, FromThisId:string, myPB:aPB);
   IsFlagSetFor(theFullId:string, Flag:Number);
   SetFlagFor(theFullId:string, Flag:Number, SetIt:Boolean);
   UninstallAccessPlan(thisAPDesc:aAccessPlanDesc);
   ColumnDescription(TableName:string, ColumnName:string, theColType:Number, theColDesc:string, Precision:Number, theLength:Number, Scale:Number, Nullable:Number);
   SqlParseCString(theSqlText:string, hStmt:string);
   SqlParseText(theSqlText:string, hStmt:string);
   SetNamedLock(LockName:string);
   ReSetNamedLock(LockName:string);
   GetTables(LikeTableName:string, TableType:string);
   GetColumns(InTable:string);
   GetPrimaryKey(InTable:string, KeyName:string);
   FindClassVersion(theInstanceId:string, theClassId:Number, theClassVersion:Number);
   updateHeaderFor(FromThisId:string, theHeader:string);
   PrepareStmtForRowWiseFetch(hStmt:string, NumToFetch:Number, ArraySize:Number);
   BindInt4(InStmt:string, pInt4:string, Position:Number, Buffer:string);
   BindInt8(InStmt:string, pInt8:string, Position:Number, Buffer:string);
   BindCString(InStmt:string, pCString:string, Position:Number, Buffer:string);
   GetStatement(theStatementRank:Number, FreeingKind:Number, needParsing:Boolean);
   GetDynStatement();
   GetStatementForStr(theStatementRank:Number, FreeingKind:Number, theRequest:string);
   GetStatementFor(theStatementRank:Number, FreeingKind:Number, theRequest:string);
   GetMultiFetchStatementForStr(theStatementRank:Number, FreeingKind:Number, theRequest:string, NumToFetch:Number);
   SqlResetStatement(Stmt:string);
   SqlExecute(WithStmt:string);
   PRBExtension(:string);
   RegisterPRB(thePRB:string, thisClassId:Number);
   RegisterPRBClass(thePRBClassId:Number, thisClassId:Number);
   RequestBrokerFromClassId(thisClassId:Number);
   RegisterPRBs();
   RegisterRequestBrokerList();
   DeregisterRequestBrokerList();
   NewInstanceId(ForNSId:Number):Number;
   DBVersionInfo(DriverName:string, DriverVers:string, DBMSMajorVers:string, DBMSMinorVers:string, DBMSReleaseVers:string);
   RequestBrokerFromInstanceId(theInstanceId:string);
   SqlPrepareTextStatement(withStmt:string, theSqlText:string);
   SqlPrepareStrStatement(withStmt:string, theSqlStr:string);
   ArrayFetchFastLoadListOf(someListOf:aListOfInstances, PersistentPointer:string, fromThisObject:aFullObject, myMemo:string, theVarLink:string, BatchSize:Number);
   DBHandleIsValid(onError:Boolean);
   ODBCVarDependentOneTableAPIterator_position(PtrTo_onThisIndex:string, goingForward:Boolean, theAPIterator:string);
   ODBCVarDependentOneTableAPIterator_move(goingForward:Boolean, theAPIterator:string);
   GetMainTableInfo(thisFullId:string, MainTableName:string, IsMonoVersioned:Boolean);
   SetUpConnectionAttributsBeforeConnect();
   BindId(InStmt:string, pInt8:string, Position:Number, Buffer:string);
   GetListTableName(ListOwner:aFullObject, ListTableName:string, theVarLink:string);
   DoesIndexExist(TableName:string, IndexName:string);
   DoesIndexColumnExist(TableName:string, IndexName:string, ColumnName:string);
   AllocatedAddrFromBufferAndMoveNext(CurPosInWorkBuffer:string, SizeInBuf:Number, mustBeInline:Boolean);
   GetEncryptionBroker(ForClassId:Number);
   IsFetchedDataTruncated(pIndicator:string, BindedBufferSize:Number, ActualDataSize:Number);
   SqlBindCol(WithStmt:string, ParamCount:Number, CTypeKind:Number, ConversionKind:Number, BindAddr:string, MemSize:Number, pIndicator:string);
   GetRowCount(WithStmt:string);
}
/**
*
*/
declare class aTGVDBMgr extends aDBMgr {
   myTGV:string;
   myName:string;
   ToZapList:string;
   myOtherAPDs:string;
   myKruncher:string;
   NoKrunchListOfs:Boolean;
   ClassName();
   ClassId();
   Kill();
   loadMainFor();
   AssignNSIdSlice();
   AssignContextualNSIdSlice();
   SetDataBase();
   GetDataBase();
   ClearLastError();
   fOpen();
   fClose();
   FindClassId();
   Commit();
   openAndDefine();
   LockDB();
   UnlockDB();
   HandleSpace();
   FindStorableRefForVersion();
   storeListOf();
   loadListOf();
   needsToStoreList();
   storeFloatingListOf();
   loadFloatingListOf();
   storeSpaceAndSize();
   loadSpaceAndSize();
   ZapSpace();
   ZapMainFor();
   storeMainFor();
   getVersionInfoFor();
   storeInstance();
   NewLoadInstance();
   StoreAccessPlansFor();
   ZapAccessPlansFor();
   SearchForStoredVersions();
   RefCount();
   VersionCount();
   ThingCount();
   LockMain();
   UnLockMain();
   VersionsKept();
   FreezeMain();
   RememberToZap();
   ToBeZapped();
   fCreate();
   isOk();
   InstallNewAccessPlan();
   DesinstallAccessPlan();
   populate();
   LatestVersionFor();
   fullIdAccessPlan();
   BackUp();
   FindAccessPlanForSelector();
   BuildNewSelectorForPicker();
   PreparePointerHeader();
   OpenDefault();
   InitDefaultLoaderAPs();
   NewSelector();
   NewSqlSelector();
   SetPhantom();
   IsThingKilled();
   IsResponsibleForItsLife();
   SetToNotResponsibleForItsLife();
   BuildIdAccessPlan();
   BuildNameAccessPlan();
   BuildVarDependentAccessPlan();
   NewNameSpace();
   LockCurrentVersionOf();
   UnLockCurrentVersionOf();
   ReconnectFrom();
   findAddress(FromThisId:string);
   killOwned();
   findAddressWithNoLock(FromThisId:string);
   ClassIdFromAddress(theAddress:Number, theClassVersion:Number):Number;
   IsTransactionStatusOK();
   NotifyWrite();
}
/**
*
*/
declare class aBundleDBMgr extends aTGVDBMgr {
/**
*
*/
   needsToStoreList();
}
/**
*
*/
declare class aTGV extends aLightObject {
   f:Number;
   Header:Number;
   isOpen:Boolean;
   isShared:Boolean;
   isReadWrite:Boolean;
   LastIOResult:Number;
   myDBMgr:aDBMgr;
   ClassName();
   ClassId();
   Kill();
   Browse();
   FirstStore(AtThisAddress:Number, PtrTo_ThisBuffer:string, ThisSize:Number);
   Load(FromThisAddress:Number, PtrTo_InThisBuffer:string, ThisSize:Number);
   fCreate(ThisBase:string);
   fOpen(ThisBase:string);
   fClose();
   NewSpace(ThisSize:Number);
   DisposeSpace(ThisAddress:Number);
   RawStore(AtThisAddress:Number, PtrTo_ThisBuffer:string, ThisSize:Number);
   RawLoad(FromThisAddress:Number, PtrTo_InThisBuffer:string, ThisSize:Number);
   NewAndStore(PtrTo_ThisBuffer:string, ThisSize:Number);
   loadHeader(FromAddress:Number);
   isOk();
   SpaceSizeMesure(ThisSize:Number);
   BigRawStore(HeaderAddress:Number, chunksOffset:Number, PtrTo_ThisBuffer:string, ThisSize:Number);
   BigRawLoad(HeaderAddress:Number, chunksOffset:Number, PtrTo_InThisBuffer:string, ThisSize:Number);
   Lock(FromOffset:Number, Size:Number);
   UnLock(FromOffset:Number, Size:Number);
   LockIndexes();
   UnLockIndexes();
   LockAddress(add:Number);
   UnLockAddress(add:Number);
   SetAddressOfMain(AddrOfMain:Number);
   error(seriousness:string, comment:string);
   LockDB(timeOut:Number);
   UnLockDB();
   Flush();
   SharedLock(FromOffset:Number, Size:Number);
   SharedUnlock(FromOffset:Number, Size:Number);
   RaiseError(errorCode:Number, seriousness:string, comment:string);
   StoreStatus();
}
/**
*
*/
declare class aTGVBuffer extends aTGV {
   theBuffer:string;
   BuffSize:Number;
   SizeUsed:Number;
   AddrOfMainInst:Number;
   ClassName();
   ClassId();
   Kill();
   FirstStore();
   Load();
   NewSpace();
   RawStore();
   RawLoad();
   BigRawStore();
   BigRawLoad();
   Lock();
   UnLock();
   LockIndexes();
   UnLockIndexes();
   LockAddress();
   UnLockAddress();
   SetAddressOfMain();
}
/**
*
*/
declare class aAccessPlan extends aLightObject {
   myDesc:aAccessPlanDesc;
   found:Boolean;
   ClassName();
   ClassId();
   insertObject(thisObject:aFullObject, PtrTo_toThisAddress:string);
   deleteObject(thisObject:aFullObject, PtrTo_toThisAddress:string);
   updateObject(olderObject:aFullObject, newerObject:aFullObject, PtrTo_olderAddress:string, PtrTo_newerAddress:string);
   exists(PtrTo_ThisIndex:string);
   find(PtrTo_ThisIndex:string);
   findWhere(PtrTo_ThisIndex:string, where:Number);
   locateWhereToInsert(PtrTo_ThisIndex:string);
   locateWithAddress(PtrTo_ThisIndex:string, PtrTo_withThisAddress:string);
   insertIndex(PtrTo_ThisIndex:string, PtrTo_withThisAddress:string);
   deleteIndex(PtrTo_ThisIndex:string, PtrTo_withThisAddress:string);
   currentIndex();
   currentAddress();
   position(PtrTo_Thisindex:string, goingForward:Boolean);
   reset(atTop:Boolean);
   move(goingForward:Boolean);
   InstallYourself(inThisBase:string);
   isConsistent(datasToo:Boolean);
   NewIterator(ForThisSelector:string);
   DesinstallYourself();
   newSelector();
}
/**
*
*/
declare class aODBCAccessPlan extends aAccessPlan {
   ClassName();
   ClassId();
   deleteObject();
   InstallYourself();
   DesinstallYourself();
}
/**
*
*/
declare class aODBCVarDependentAccessPlan extends aODBCAccessPlan {
   ClassName();
   ClassId();
   Kill();
   insertObject();
   deleteObject();
   NewIterator();
}
/**
*
*/
declare class aODBCNameAccessPlan extends aODBCVarDependentAccessPlan {
   ClassName();
   ClassId();
   Kill();
   insertObject();
   deleteObject();
   NewIterator();
}
/**
*
*/
declare class aODBCIdAccessPlan extends aODBCAccessPlan {
   ClassName();
   ClassId();
   insertObject();
   updateObject();
}
/**
*
*/
declare class aMemoryAccessPlan extends aAccessPlan {
   ClassName();
   ClassId();
   Kill();
   NewIterator();
   newSelector();
}
/**
*
*/
declare class aBtree extends aAccessPlan {
   myTGV:aTGV;
   IndexLen:Number;
   RootAddress:Number;
   SizeOfNode:Number;
   lastPerPage:Number;
   noDuplicates:Boolean;
   InsertTactic:Number;
   deepest:Number;
   curNode:string;
   TheIndex:string;
   ClassName();
   ClassId();
   Kill();
   Browse();
   insertObject();
   deleteObject();
   updateObject();
   exists();
   find();
   findWhere();
   locateWhereToInsert();
   locateWithAddress();
   insertIndex();
   deleteIndex();
   currentIndex();
   currentAddress();
   position();
   reset();
   move();
   InstallYourself();
   isConsistent();
   DesinstallYourself();
   LoadNodeAtLevel(fromAddr:Number, Level:Number);
}
/**
*
*/
declare class aListOfInstances extends aLightObject {
   theList:string;
   StringExtract();
   ClassName();
   ClassId();
   ClassVersion();
   Init();
   Kill();
   InitVariables();
   Clone();
   AllocatedSize();
   initWithQuantum(incrementQuantum:Number);
   count();
   totalCount();
   setAt(ThisObj:string, rank:Number);
   insertAt(ThisObj:string, rank:Number);
   deleteAt(rank:Number);
   getAt(rank:Number);
   GetItemAddressAt(rank:Number);
   append(ThisObj:string);
   AppendObject(ThisObject:aLightObject);
   AppendInexistingObject(ThisObject:aLightObject);
   AppendInexisting(ThisObj:string);
   rankOf(ThisObj:string);
   rankOfrecord(ThisObj:string, size:Number);
   rankOfForward(ThisObj:string);
   concatAllLists();
   purge();
   purgeAndKillInstances();
   initForRecords(incrementQuantum:Number, recordSize:Number);
   current();
   reset(atTop:Boolean);
   position(onThis:aLightObject, goingForward:Boolean);
   move(goingForward:Boolean);
   traverse(DoItForEach:string, goingForward:Boolean);
   currentItemAddress();
   NewVersion();
   AsStringAt(Rank:Number):string;
   SortBy(ExtractKind:string, Param:Number, Ascending:Boolean);
   SwitchItems(thisRank:Number, withThisRank:Number);
   NewIterator();
   InsertObjectAt(ThisObject:aLightObject, atThisRank:Number);
   SetObjectAt(ThisObject:aLightObject, atThisRank:Number);
   GetObjectAt(atThisRank:Number);
   DeleteObjectAt(atThisRank:Number);
   rankOfObject(ThisObj:aLightObject);
   ContainsObject(ThisObj:aLightObject);
   RankOfOneVersionOfThisObject(ThisObj:aLightObject);
   ContainsOneVersionOfThisObject(ThisObj:aLightObject);
   SetNewVersionAt(ThisObject:aLightObject, atThisRank:Number);
   getLast();
   GetLastObject();
   CreateHashTable();
   RemoveObject(ThisObject:aLightObject);
   CopyFromList(ThisObj:string);
   OptimizeSize();
   adjust(number:Number);
   NumberOfObject(ThisObj:aLightObject);
   CopyRecordsFromList(ThisObj:string);
}
/**
*
*/
declare class aPickableList extends aListOfInstances {
   mySelector:aSelectorForPicker;
   ClassName();
   ClassId();
   getAt();
   AsStringAt();
}
/**
*
*/
declare class aListOfOneInstancePerThread extends aListOfInstances {
   FirstNotNullRank:Number;
   ClassName();
   ClassId();
   Kill();
   Clone();
   count();
   setAt();
   insertAt();
   deleteAt();
   getAt();
   GetItemAddressAt();
   append();
   AppendObject();
   AppendInexistingObject();
   rankOf();
   rankOfrecord();
   rankOfForward();
   concatAllLists();
   purge();
   purgeAndKillInstances();
   SortBy();
   SwitchItems();
   NewIterator();
   InsertObjectAt();
   SetObjectAt();
   DeleteObjectAt();
   rankOfObject();
   SetNewVersionAt();
   getLast();
   CreateHashTable();
   RemoveObject();
   CopyFromList();
   OptimizeSize();
   adjust();
   adjustFirstNotNullRank(rank:Number);
}
/**
*
*/
declare class aListOfThings extends aListOfInstances {
   ClassName();
   ClassId();
   AppendObject();
   AsStringAt();
   SortBy();
   NewIterator();
   InsertObjectAt();
   SetObjectAt();
   GetObjectAt();
   DeleteObjectAt();
   rankOfObject();
   GetLastObject();
   rankOfThing(ThisObj:aLightObject);
}
/**
*
*/
declare class aListOfRefTos extends aListOfThings {
   ClassName();
   ClassId();
   Init();
   initWithQuantum();
   AppendObject();
   SortBy();
   InsertObjectAt();
   SetObjectAt();
   GetObjectAt();
   DeleteObjectAt();
   rankOfObject();
   RankOfOneVersionOfThisObject();
   SetNewVersionAt();
   GetLastObject();
   CopyFromList();
   rankOfThing();
   wellInitialized();
   BootStrapAppend(toThisObject:aLightObject);
   FastGetObjectAt(atThisRank:Number);
   DeleteAllObjects();
   rankOfObjectId(thisNsId:Number, thisId:Number);
   ContainsObjectId(thisNsId:Number, thisId:Number);
   LoadAllRefObjects(BatchSize:Number);
}
/**
*
*/
declare class aNotLoadedListOfRefTos extends aListOfRefTos {
   StringExtract();
   ClassName();
   ClassId();
   count();
   setAt();
   insertAt();
   deleteAt();
   GetItemAddressAt();
   append();
   AppendObject();
   AppendInexistingObject();
   purge();
   NewIterator();
   InsertObjectAt();
   SetObjectAt();
   GetObjectAt();
   DeleteObjectAt();
   rankOfObject();
   RankOfOneVersionOfThisObject();
   SetNewVersionAt();
   GetLastObject();
   rankOfThing();
   FastGetObjectAt();
   DeleteAllObjects();
   rankOfObjectId();
   ContainsObjectId();
   LoadAllRefObjects();
}
/**
*
*/
declare class aListOfVersions extends aListOfThings {
   ClassName();
   ClassId();
   AppendObject();
   InsertObjectAt();
   SetObjectAt();
   rankOfObject();
}
/**
*
*/
declare class aSelector extends aLightObject {
   myDBMgr:string;
   SelectCriterion:string;
   DefaultIterator_DEPRECATED:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   NewIterator();
   ExecuteSelection(Criterion:string);
   BuildDefaultIterator_DEPRECATED();
   GetLastRequestErrorMsg(ErrorNum:Number, Message:string);
   MeetsCriterionForInstance(forInstance:string);
   SetDefaultIterator_DEPRECATED(defaultIterator:aSelectorIterator_DEPRECATED);
   SetCursorType(theCursorType:Number);
   moveNext();
   GetLastRequestErrorNum();
   ExecuteDeletion(Criterion:string);
   AcceptDeletion(Phase:Number);
}
/**
*
*/
declare class aMultiRequestBroker extends aSelector {
   List:aListOfInstances;
   curIt:aListIterator;
   curRequestBroker:string;
   forCursor:aSelector;
   MustNotLoadObject:Boolean;
   BatchSize:Number;
   LastErrNum:Number;
   LastErrMsg:string;
   OQLCursorMustBeDisposed:Boolean;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   Kill();
   GetLastRequestErrorMsg();
   SetCursorType();
   moveNext();
   AcceptDeletion();
   InitMonoTableRequestBrokers();
   AppendMonoTableBroker(theMonoBroker:string);
   CurrentDBName(:string);
   BindFetchValue(pValue:string, n:Number);
   ResetOn(onThisCursor:aOQLCursor);
   CopyBindForFetch(fromMRB:aMultiRequestBroker);
   GetFetchBindAddr(n:Number);
}
/**
*
*/
declare class aInterpMultiRequestBroker extends aMultiRequestBroker {
   WhereBindBuffer:string;
   WhereBindInfos:aListOfInstances;
   BindTypes:aListOfInstances;
   BindAddresses:aListOfInstances;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   Kill();
   ExecuteSelection();
   ExecuteDeletion();
   AcceptDeletion();
   InitMonoTableRequestBrokers();
   CopyBindForFetch();
   ResetForBind();
   BindWith(BindType:aType, IntoThisAddress:string);
}
/**
*
*/
declare class aOQLRequestBroker extends aSelector {
   myMultiBroker:aMultiRequestBroker;
   isInitialized:Boolean;
   noMore:Boolean;
   HasJustMovedPrevOnce:Boolean;
   LastResultSetRankFetched:Number;
   ClassName();
   ClassId();
   Init();
   Kill();
   moveNext();
   Execute();
   Fetch();
}
/**
*
*/
declare class aMonoTableRequestBroker extends aOQLRequestBroker {
   myStmt:string;
   myText:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   moveNext();
   Execute();
   Fetch();
   ExecuteRequest();
}
/**
*
*/
declare class aSqlInterpRequestBroker extends aMonoTableRequestBroker {
   SelectedCols:aListOfInstances;
   FetchColumnIterator:aListIterator;
   FetchColumnNumber:Number;
   Buffer:string;
   CurPosInBuf:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   moveNext();
   Execute();
   Fetch();
   ExecuteSelectionForClassDef(Criterion:string, ForClassDef:aClassDef);
   BindDataForFetch(IntoMMType:aType, IntoAvailableDBType:Number, IntoAddress:string, Position:Number);
   ConvertDataAfterFetch(IntoAddr:string, forType:aType);
   BindClassDataForFetch(IntoAddr:string, forType:aType);
   ConvertClassDataAfterFetch(IntoAddr:string, forType:aType);
}
/**
*
*/
declare class aSqlInterpDeleteRequestBroker extends aSqlInterpRequestBroker {
   mySelectText:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   AcceptDeletion();
   ExecuteDeletionForClassDef(Criterion:string, ForClassDef:aClassDef);
}
/**
*
*/
declare class aTGVRequestBroker extends aOQLRequestBroker {
   Selection:aListOfInstances;
   ClassName();
   ClassId();
   Init();
   Kill();
   Execute();
   Fetch();
}
/**
*
*/
declare class aTGVInterpRequestBroker extends aTGVRequestBroker {
   IntrinsicsBuff:string;
   CurIntrinsicsBufferPos:string;
   ForColumn:Number;
   ClassName();
   ClassId();
   Init();
   Kill();
   ExecuteSelection();
   ExecuteDeletion();
   AcceptDeletion();
   Execute();
   Fetch();
}
/**
*
*/
declare class aODBCMultiTableSelector_DEPRECATED extends aSelector {
   TableSelectors:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   NewIterator();
   ExecuteSelection();
   SetCursorType();
}
/**
*
*/
declare class aSqlSelector extends aSelector {
   SelectText:string;
   hStmt:string;
   QueryTimeOut:Number;
   LastErrNum:Number;
   LastErrMsg:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   ExecuteSelection();
   GetLastRequestErrorMsg();
   SetCursorType();
   moveNext();
   BindDataForFetch(IntoMMType:aType, IntoAvailableDBType:Number, IntoAddress:string, Position:Number);
}
/**
*
*/
declare class aODBCSelector_DEPRECATED extends aSqlSelector {
   SelectedCols:string;
   WhereBindBuffer:string;
   WhereBindInfos:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   NewIterator();
   ExecuteSelection();
}
/**
*
*/
declare class aTGVSelector_DEPRECATED extends aSelector {
   InstancesThatMeetCriterion:string;
   LoadValProc:string;
   NumIntrinsics:Number;
   ClassName();
   ClassId();
   Kill();
   NewIterator();
   ExecuteSelection();
}
/**
*
*/
declare class aOQLCursor extends aSelector {
   myMultiBroker:aMultiRequestBroker;
   BatchSize:Number;
   InTransaction:aTransaction;
   ClassIdRestrictions:string;
   Hints:string;
   MasterCursor:string;
   OwnedCursors:string;
   SkipUselessRequests:Boolean;
   ClassName();
   ClassId();
   Init();
   Kill();
   ExecuteSelection();
   GetLastRequestErrorMsg();
   SetCursorType();
   moveNext();
   ExecuteDeletion();
   AddDBMgrForSelect(theDBMgr:aDBMgr);
   AddDBMgrForSelectFromName(DBDefName:string);
   AddAllOpenedDBMgrsForSelect();
   RestrictAcceptedClasses(FromRank:Number, Accepting:Boolean, ToClassId:Number, IncludingDescendants:Boolean);
   AddHint(theHint:string);
   ConcatCursor(otherCursor:aOQLCursor, reordering:Boolean);
}
/**
*
*/
declare class aXAMLProductionContext extends aLightObject {
   xamlKind:string;
   multiLangMode:string;
   encoding:string;
   produceDebugInfo:Boolean;
   ClassName();
   ClassId();
   Init();
   Kill();
   GetResourceCategoryKey(ofThisCategory:string, withThisPrefix:string):string;
   GetResourceIndexer();
   CreateNextResourceIndex(forThisCategory:string);
   GetCurrentResourceIndex(forThisCategory:string);
}
/**
*
*/
declare class aVarAgent extends aLightObject {
   UpdateOtherAgent:Boolean;
   myAddress:string;
   myType:aLightObject;
   myVarDesc:aLightObject;
   HostVarAgent:aLightObject;
   TopVarAgent:aLightObject;
   UIAgents:string;
   SubVarAgents:string;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   Kill();
   GetBitmap();
   GetObject();
   RemoveVarAgent(theVarAgent:aVarAgent);
   RemoveUIAgent(theUIAgent:aUIAgent);
   LoadVarToControls();
   StoreControlToVar(thisUIAgent:aUIAgent);
   RefreshOtherUIAgents(ThanThisUIAgent:aUIAgent);
   AssignToVar(thisVar:string);
   ChangeAddress(theNewVarAddress:string, IMustReloadControls:Boolean);
   HostVarAgentAddressHasChanged();
   FindorCreateVarAgent(VarAddress:string, VarType:aType);
   IsPresentedBy(thisUIAgent:aUIAgent);
   GetSubVarAgentsTree(theObject:aFullObject, theVar:string, theType:aType);
   KillIfUnused(mySelf:string);
}
/**
*
*/
declare class aTextVarAgent extends aVarAgent {
   Cursor:Number;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aSystemVarAgent extends aVarAgent {
   ClassName();
   ClassId();
   GetObject();
   RemoveVarAgent();
   RemoveUIAgent();
   LoadVarToControls();
   FindorCreateVarAgent();
   IsPresentedBy();
}
/**
*
*/
declare class aBoundAttributeConverter extends aLightObject {
   varAgent:aVarAgent;
   uiAgent:aUIAgent;
   targetType:string;
   resourceName:string;
   resourceCategory:string;
   ClassName();
   ClassId();
   CanConvert(inputType:aType);
   AddAvailableTargetTypesToList(inputType:aType, list:aListOfInstances);
   LoadValue(varAddress:string, varType:aType, xamlControl:aXAMLControl);
   StoreValue(varAddress:string, varType:aType, xamlControl:aXAMLControl);
   CacheValue(varType:aType, stringValue:string);
   GetParameterListClass();
   Finalize(parameterList:aBAConverterParameterList);
}
/**
*
*/
declare class aListAsBAConverter extends aBoundAttributeConverter {
   StringExtract();
   ClassName();
   ClassId();
   Init();
   Kill();
   CanConvert();
   AddAvailableTargetTypesToList();
   LoadValue();
   StoreValue();
   CacheValue();
   GetParameterListClass();
   Finalize();
}
/**
*
*/
declare class aTextAsBAConverter extends aBoundAttributeConverter {
   StringExtract();
   ClassName();
   ClassId();
   CanConvert();
   AddAvailableTargetTypesToList();
   LoadValue();
   StoreValue();
   CacheValue();
}
/**
*
*/
declare class aStringAsBAConverter extends aBoundAttributeConverter {
   StringExtract();
   ClassName();
   ClassId();
   CanConvert();
   AddAvailableTargetTypesToList();
   LoadValue();
   StoreValue();
   CacheValue();
}
/**
*
*/
declare class aNumAsBAConverter extends aBoundAttributeConverter {
   StringExtract();
   ClassName();
   ClassId();
   CanConvert();
   AddAvailableTargetTypesToList();
   LoadValue();
   StoreValue();
   CacheValue();
}
/**
*
*/
declare class aBooleanAsBAConverter extends aBoundAttributeConverter {
   StringExtract();
   ClassName();
   ClassId();
   CanConvert();
   AddAvailableTargetTypesToList();
   LoadValue();
   StoreValue();
   CacheValue();
}
/**
*
*/
declare class aIntAsBAConverter extends aBoundAttributeConverter {
   StringExtract();
   ClassName();
   ClassId();
   CanConvert();
   AddAvailableTargetTypesToList();
   LoadValue();
   StoreValue();
   CacheValue();
}
/**
*
*/
declare class aSelectorForPicker extends aLightObject {
   ClassName();
   ClassId();
   ProduceBatch(maxItems:Number);
   ListItemAsDesc(ThisListItem:string):string;
   ListItemAsClassId(ThisListItem:string);
   ListItemAsFullId(ThisListItem:string):string;
   NoMore();
   InitForSelection();
   LoadFromListItem(ThisListItem:string);
}
/**
*
*/
declare class aAPSelector extends aSelectorForPicker {
   AcceptedClassDefs:string;
   AcceptedClassDefsAndDescendants:string;
   AcceptedOnlyDescendantsOfClassDefs:string;
   OnlyNotFinalCurrentVersion:Boolean;
   OnlyCurrentVersion:Boolean;
   ExactResearch:Boolean;
   myDesc:aAccessPlanDesc;
   myArgument:string;
   HasNoMore:Boolean;
   ClassName();
   ClassId();
   Kill();
   ProduceBatch();
   ListItemAsDesc();
   ListItemAsClassId();
   ListItemAsFullId();
   NoMore();
   InitForSelection();
   LoadFromListItem();
   ProduceBatchInto(maxItems:Number, into:aPickableList);
   AppendAcceptedClassDef(thisClassDef:aClassDef, AcceptDescendants:Boolean, AcceptOnlyDescendants:Boolean);
}
/**
*
*/
declare class aVarDependantAPSelector extends aAPSelector {
   ClassName();
   ClassId();
   ListItemAsClassId();
   InitForSelection();
}
/**
*
*/
declare class aIdAPSelector extends aAPSelector {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aNameAPSelector extends aAPSelector {
   ClassName();
   ClassId();
   Kill();
   InitForSelection();
   ProduceBatchInto();
}
/**
*
*/
declare class aMemorySelector extends aNameAPSelector {
   ClassName();
   ClassId();
   Kill();
   InitForSelection();
   ProduceBatchInto();
}
/**
*
*/
declare class aMultiBaseSelector extends aAPSelector {
   ClassName();
   ClassId();
   Kill();
   ProduceBatch();
   InitForSelection();
   LoadFromListItem();
}
/**
*
*/
declare class aClassIdAPSelector extends aAPSelector {
   ClassName();
   ClassId();
   Kill();
   InitForSelection();
   ProduceBatchInto();
}
/**
*
*/
declare class aAnnotation extends aLightObject {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aModelAnnotation extends aAnnotation {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aSingleRoleAnnotation extends aModelAnnotation {
   WhatCanIDo:string;
   AcceptDescendant:Boolean;
   CreateDescendants:Boolean;
   OnlyDescendants:Boolean;
   InChargeOfDeletingBackRef:Boolean;
   RoleClass:string;
   ConsultScenario:string;
   CreateScenario:string;
   ModifyScenario:string;
   PickerClass:string;
   PickerScenario:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aMultiRoleAnnotation extends aModelAnnotation {
   RoleClass:string;
   Roles:Number;
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aEntityAnnotation extends aModelAnnotation {
   Text:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aModuleDefAnnotation extends aEntityAnnotation {
   ModuleStatus:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aReimplemModuleDefAnnotation extends aModuleDefAnnotation {
   IsActive:Boolean;
   Priority:Number;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aClassDefAnnotation extends aEntityAnnotation {
   DefaultCreateScenario:string;
   DefaultModifyScenario:string;
   DefaultConsultScenario:string;
   DefaultPickerClass:string;
   DefaultPickerScenario:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aReimplemClassDefAnnotation extends aClassDefAnnotation {
   IsActive:Boolean;
   Priority:Number;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aReferenceTypeAnnotation extends aEntityAnnotation {
   StillsOnFreeze:Boolean;
   FreezeRefObject:Boolean;
   StoreExtract:Boolean;
   ExtractKind:string;
   ExtractParam:Number;
   ExtractMaxSize:Number;
   SingleRole:aSingleRoleAnnotation;
   MultiRole:aMultiRoleAnnotation;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aListofReftosTypeAnnotation extends aReferenceTypeAnnotation {
   CanMove:Boolean;
   Sorted:Boolean;
   ClassName();
   ClassId();
}
/**
*
*/
declare class SerializationAnnotation extends aAnnotation {
   name:string;
   ignore:Boolean;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aSystemService extends aLightObject {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aSystemHttpService extends aSystemService {
   ClassName();
   ClassId();
   Init();
   InitService(manager:aSystemServiceManager, url:string, map:aDataArchive);
   Help();
   InterpretHttpTransaction(transaction:aSystemHttpTransaction);
}
/**
*
*/
declare class aSystemServiceManager extends aSystemService {
   ClassName();
   ClassId();
   Init();
   InitService(config:aDataArchive);
   InstallService(name:string, configuration:aDataArchive);
   InstallMethod(kind:string, path:string, service:aSystemService, method:aMethodDesc);
   GetMethodFromUrn(url:string);
   GetSerializationContext();
   OpenIDE();
}
/**
*
*/
declare class aewammanager extends aSystemService {
   something:string;
/**
*
*/
   ManageConfig(transaction:aSystemHttpTransaction);
/**
*
*/
   GetBundles(transaction:aSystemHttpTransaction);
/**
*
*/
   GetNameSuggestor(transaction:aSystemHttpTransaction);
/**
*
*/
   SearchEntities(transaction:aSystemHttpTransaction);
/**
*
*/
   Get(name:aModuleDef, transaction:aSystemHttpTransaction);
/**
*
*/
   OpenEntity(transaction:aSystemHttpTransaction);
/**
*
*/
   GetModuleDef(transaction:aSystemHttpTransaction);
/**
*
*/
   DisplayIDEInfoViewer();
/**
*
*/
   CloseIDEInfoViewer();
/**
*
*/
   EditScenario(thescenario:aScenario);
/**
*
*/
   OpenScenario(transaction:aSystemHttpTransaction);
/**
*
*/
   Scenarios(transaction:aSystemHttpTransaction);
/**
*
*/
   Descendants(transaction:aSystemHttpTransaction);
/**
*
*/
   CheckIn(transaction:aSystemHttpTransaction);
/**
*
*/
   CheckOut(transaction:aSystemHttpTransaction);
/**
*
*/
   getClassNameFromSource(src:string):string;
/**
*
*/
   getAncestorNameFromSource(src:string):string;
/**
*
*/
   GetCreateOrModifyClassDef(transaction:aSystemHttpTransaction);
/**
*
*/
   entityStatus(transaction:aSystemHttpTransaction);
/**
*
*/
   ewamExRouter(transaction:aSystemHttpTransaction);
/**
*
*/
   InitService(manager:aSystemServiceManager, something:string);
}
/**
*
*/
declare class aSystemHttpVariable extends aLightObject {
   HttpNext:aSystemHttpVariable;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   Terminate();
   GetText();
   SetText(Value:string);
   GetString():string;
   SetString(Value:string);
   GotoVariable(Name:string);
   GetName();
}
/**
*
*/
declare class aSystemDirectory extends aLightObject {
   ClassName();
   ClassId();
   ClassName();
   ClassId();
}
/**
*
*/
declare class aSystemHttpTransaction extends aLightObject {
   HttpService:aSystemHttpService;
   HttpUrl:string;
   HttpIdentifier:string;
   HttpVerb:string;
   HttpMinorVersion:Number;
   HttpMajorVersion:Number;
   HttpStatusCode:Number;
   HttpRequestHeaders:aSystemHttpVariable;
   HttpResponseHeaders:aSystemHttpVariable;
   ClassName();
   ClassId();
   Init();
   Terminate();
   GetSystemVars(:string);
   GetRequestBodyText();
   SetResponseHeader(name:string);
   SetResponseBodyText(content:string);
   GetRequestHeader(name:string);
}
/**
*
*/
declare class aSystemMethodCaller extends aLightObject {
   StringExtract();
   ClassName();
   ClassId();
   Init();
   Terminate();
   SetMethod(theMethod:aMethodDesc);
   GetMethod();
   CallMethod(object:aLightObject);
   ResetMethodBuffers();
   GetParameterCount(:string);
   GetParameterIndex(name:string);
   GetParameterBuffer(index:Number, buffer:string, size:Number);
   GetParameterType(index:Number);
   GetParameter();
   IsInOutParameter(index:Number);
   GetResultBuffer(buffer:string, size:Number);
   GetResultType();
}
/**
*
*/
declare class aSystemServiceMethod extends aLightObject {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aDataAdapter extends aLightObject {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aAnnotProducedAdapter extends aDataAdapter {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aJsonTextAdapter extends aDataAdapter {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aJsonAnnotAdapter extends aJsonTextAdapter {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aSingleRoleVectorAdapter extends aDataAdapter {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aRecordAdapter extends aDataAdapter {
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aNumAdapter extends aDataAdapter {
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aPointerAdapter extends aDataAdapter {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aCStringAdapter extends aDataAdapter {
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aStringAdapter extends aCStringAdapter {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aDataArchiveAdapter extends aDataAdapter {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aTextAdapter extends aDataAdapter {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aEnumAdapter extends aDataAdapter {
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aSetAdapter extends aDataAdapter {
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aSequenceAdapter extends aDataAdapter {
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aListAdapter extends aDataAdapter {
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aClassAdapter extends aDataAdapter {
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aBooleanAdapter extends aDataAdapter {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIntAdapter extends aDataAdapter {
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aAnnotReader extends aLightObject {
   ClassName();
   ClassId();
   Init();
   Terminate();
}
/**
*
*/
declare class aAnnotationTable extends aLightObject {
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aAnnotationHandler extends aLightObject {
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aJsonReader extends aLightObject {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aDataAdapterContext extends aLightObject {
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aDataAdapterFactory extends aLightObject {
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aDataArchive extends aLightObject {
   ClassName();
   ClassId();
   Init();
   Terminate();
}
/**
*
*/
declare class aIRAny extends aLightObject {
   StringExtract();
   ClassName();
   ClassId();
   Kill();
   IRClassId():Number;
   ProduceGold(Where:string, Options:string);
   ProduceSQL(Where:string, Options:string);
   ProduceCPP(Where:string, Options:string);
   SubIdFromName(SubName:string);
   myMMDefObject();
   mySelf();
   myMMDefType();
   myMMAcceptedType();
   NumOfElements();
   ElementSize();
   AppendEntityToList(theEntity:string);
   OpenAllScopes(MostVisibleScope:string, MostVisibleUsesScope:string, OpenMyUsesToo:Boolean);
   SearchIdInScope(IDName:string);
   SearchIdInScopeCD(IDName:string);
   OpenAllUsesScopes(MostVisibleScope:string);
   OpenUsesScope(MostVisibleScope:string);
   AddToUses(theClassOrModuleID:string);
   SearchNextIdInScopeCD(IDName:string, PreviousId:string);
   MMName();
   MMClassId():Number;
   AnalyseMapping(forDBDef:string, message:string);
}
/**
*
*/
declare class aIROpNode extends aIRAny {
   Typ:aIRType;
   Flags:Number;
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   myMMDefObject();
   mySelf();
   myMMDefType();
   myMMAcceptedType();
   NumOfElements();
   ElementSize();
   OpIdentifier();
   LeftOp();
   IsImplicitLocalVar();
   Kind():string;
   EvaluateAsInt4();
   PostParse(pIDLL:string);
   EvaluateAsAddress(DefaultTempVar:string, CheckIfAssignable:Boolean);
   IsLValue();
   IsConstant();
   EvaluateAsInt8():Number;
   EvaluateAsNum():string;
   Priority():string;
   NonRunTimeMMType(TheProduced:string);
   IsOQLIntrinsic();
   RequestedType():string;
   EvaluateAsDecimal():string;
   BuildWhereBindInfos(TheProduced:string, TheOptions:string);
   MustBeBound(TheProduced:string, TheOptions:string);
   IsTGVImplicitLocalVar();
}
/**
*
*/
declare class aIROpIntrinsicWithParms extends aIROpNode {
   Args:aList;
   ClassName();
   ClassId();
   OpIdentifier();
   Kind();
   PostParse();
}
/**
*
*/
declare class aIrOpIntrinsicThrow extends aIROpIntrinsicWithParms {
   ThrowWhat:aList;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIrOpIntrinsicReThrow extends aIrOpIntrinsicThrow {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIrOpIntrinsicInstanceThrow extends aIrOpIntrinsicThrow {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIrOpIntrinsicClassDefThrow extends aIrOpIntrinsicThrow {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aOQLConditionalWhere extends aIROpIntrinsicWithParms {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   myMMDefObject();
   myMMDefType();
   EvaluateAsInt4();
   EvaluateAsAddress();
   RequestedType();
   BuildWhereBindInfos();
   MustBeBound();
   IsTGVImplicitLocalVar();
}
/**
*
*/
declare class aOpdelete extends aIROpIntrinsicWithParms {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aOpMove extends aIROpIntrinsicWithParms {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aOpFillchar extends aIROpIntrinsicWithParms {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aOpFileIO extends aIROpIntrinsicWithParms {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOpReadText extends aOpFileIO {
   isReadln:Boolean;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aOpReadTyped extends aOpFileIO {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aOpWriteText extends aOpFileIO {
   isWriteln:Boolean;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
   PostParse();
}
/**
*
*/
declare class aOpWriteTyped extends aOpFileIO {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpIntrinsicDispose extends aIROpIntrinsicWithParms {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
   PostParse();
}
/**
*
*/
declare class aIROpIntrinsicDisposePtr extends aIROpIntrinsicDispose {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpIntrinsicDisposeListOf extends aIROpIntrinsicDispose {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpIntrinsicDisposeRefTo extends aIROpIntrinsicDispose {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpIntrinsicNew extends aIROpIntrinsicWithParms {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
   PostParse();
}
/**
*
*/
declare class aIROpIntrinsicNewPtr extends aIROpIntrinsicNew {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpIntrinsicNewPtrWithSize extends aIROpIntrinsicNewPtr {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsInt4();
   PostParse();
}
/**
*
*/
declare class aIROpIntrinsicNewListOf extends aIROpIntrinsicNew {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpIntrinsicNewRefTo extends aIROpIntrinsicNew {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpIntrinsicVal extends aIROpIntrinsicWithParms {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
   PostParse();
}
/**
*
*/
declare class aOpIntrinsicMember extends aIROpIntrinsicWithParms {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   EvaluateAsInt4();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aOpIntrinsicMemberFromString extends aOpIntrinsicMember {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aOpSTR extends aIROpIntrinsicWithParms {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
   RequestedType();
}
/**
*
*/
declare class aOpInsert extends aIROpIntrinsicWithParms {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aOpConcat extends aIROpIntrinsicWithParms {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   RequestedType();
}
/**
*
*/
declare class aIROpBinary extends aIROpNode {
   L:aIROpNode;
   R:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   myMMDefType();
   OpIdentifier();
   LeftOp();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   EvaluateAsInt8();
   EvaluateAsNum();
   RequestedType();
   EvaluateAsDecimal();
   BuildWhereBindInfos();
   MustBeBound();
   IsTGVImplicitLocalVar();
}
/**
*
*/
declare class aOpFetchIntoVar extends aIROpBinary {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   myMMDefObject();
   myMMDefType();
   Kind();
   PostParse();
}
/**
*
*/
declare class aIROpRangeCheck extends aIROpBinary {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Kind();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpRange extends aIROpBinary {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   Kind();
}
/**
*
*/
declare class aIROpORD_GE extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpGEInt8 extends aIROpORD_GE {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpORD_GT extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpGTInt8 extends aIROpORD_GT {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpORD_LE extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpLEInt8 extends aIROpORD_LE {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpORD_LT extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpLTInt8 extends aIROpORD_LT {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpNE extends aIROpBinary {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   myMMDefType();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
   RequestedType();
   BuildWhereBindInfos();
}
/**
*
*/
declare class aIROpNEPointer extends aIROpNE {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpNEInt8 extends aIROpNE {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpBigSetNE extends aIROpNE {
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   EvaluateAsInt4();
   BuildWhereBindInfos();
}
/**
*
*/
declare class aIROpDynDBStringNE extends aIROpNE {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpDBStringNE extends aIROpNE {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpStringNE extends aIROpNE {
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpDecNE extends aIROpNE {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpNumNE extends aIROpNE {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpNEOnStack extends aIROpNE {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpObjectNERefto extends aIROpNE {
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpReftoNERefto extends aIROpNE {
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpReftoNEObject extends aIROpNE {
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpEQ extends aIROpBinary {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   myMMDefType();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
   RequestedType();
   BuildWhereBindInfos();
}
/**
*
*/
declare class aIROpEqPointer extends aIROpEQ {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpEqInt8 extends aIROpEQ {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpBigSetEQ extends aIROpEQ {
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   EvaluateAsInt4();
   BuildWhereBindInfos();
}
/**
*
*/
declare class aIROpDynDBStringEq extends aIROpEQ {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpDBStringEq extends aIROpEQ {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpStringEq extends aIROpEQ {
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpDecEQ extends aIROpEQ {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpNumEQ extends aIROpEQ {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpEQOnStack extends aIROpEQ {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpObjectEQRefto extends aIROpEQ {
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpReftoEQRefto extends aIROpEQ {
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpReftoEQObject extends aIROpEQ {
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpSet_LE extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpBigSetLE extends aIROpSet_LE {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpSetGE extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpBigSetGE extends aIROpSetGE {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpSetMul extends aIROpBinary {
   NumOfBits:Number;
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NumOfElements();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpSetSub extends aIROpBinary {
   NumOfBits:Number;
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NumOfElements();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpSetAdd extends aIROpBinary {
   NumOfBits:Number;
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NumOfElements();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpIndex extends aIROpBinary {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefObject();
   mySelf();
   myMMDefType();
   OpIdentifier();
   Kind();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   IsLValue();
   EvaluateAsInt8();
   EvaluateAsNum();
   NonRunTimeMMType();
   RequestedType();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpListOfIndex extends aIROpIndex {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   myMMAcceptedType();
   EvaluateAsInt4();
   EvaluateAsAddress();
}
/**
*
*/
declare class aIROpDynDBStringIndex extends aIROpIndex {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   EvaluateAsAddress();
   NonRunTimeMMType();
}
/**
*
*/
declare class aIROpDBStringIndex extends aIROpIndex {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aIROpStringIndex extends aIROpIndex {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aIROpSequenceIndex extends aIROpIndex {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
   EvaluateAsAddress();
}
/**
*
*/
declare class aIROpArrayIndex extends aIROpIndex {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aIROpNameSelect extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
}
/**
*
*/
declare class aIROpIdSelect extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
}
/**
*
*/
declare class aIROpSelect extends aIROpBinary {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   myMMDefObject();
   mySelf();
   myMMDefType();
   AnalyseMapping();
   IsImplicitLocalVar();
   Kind();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   IsLValue();
   EvaluateAsInt8();
   EvaluateAsNum();
   NonRunTimeMMType();
   RequestedType();
   EvaluateAsDecimal();
   BuildWhereBindInfos();
   MustBeBound();
   IsTGVImplicitLocalVar();
}
/**
*
*/
declare class aIROpModuleSelect extends aIROpSelect {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   PostParse();
   IsLValue();
}
/**
*
*/
declare class aIROpSelfModuleSelect extends aIROpModuleSelect {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
}
/**
*
*/
declare class aIROpExternalSelect extends aIROpSelfModuleSelect {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aIROpDefModuleSelect extends aIROpModuleSelect {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
}
/**
*
*/
declare class aIROpConstModuleSelect extends aIROpModuleSelect {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aIROpRefToSelect extends aIROpSelect {
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   ProduceCPP();
   myMMAcceptedType();
   AnalyseMapping();
   EvaluateAsInt4();
   EvaluateAsAddress();
}
/**
*
*/
declare class aIROpRecordSelect extends aIROpSelect {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsAddress();
}
/**
*
*/
declare class aIROpSelfSelect extends aIROpSelect {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   mySelf();
   IsImplicitLocalVar();
   PostParse();
   EvaluateAsAddress();
   IsLValue();
}
/**
*
*/
declare class aIROpBOL_XOR extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpBOL_OR extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpBOL_AND extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpDBDynStr_LK extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpDBStr_LK extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpStr_LK extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   ProduceCPP();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
}
/**
*
*/
declare class aIROpDBDynSTR_LE extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpDBSTR_LE extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpSTR_LE extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
}
/**
*
*/
declare class aIROpREA_LE extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
   Priority();
}
/**
*
*/
declare class aIROpNum8_LE extends aIROpREA_LE {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpNum4_LE extends aIROpREA_LE {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpDEC_LE extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpPTR_LE extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpDBDynSTR_GE extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpDBSTR_GE extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpSTR_GE extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
}
/**
*
*/
declare class aIROpREA_GE extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
   Priority();
}
/**
*
*/
declare class aIROpNum8_GE extends aIROpREA_GE {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpNum4_GE extends aIROpREA_GE {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpDEC_GE extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpPTR_GE extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpDBDynSTR_LT extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpDBSTR_LT extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpSTR_LT extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
}
/**
*
*/
declare class aIROpREA_LT extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
   Priority();
}
/**
*
*/
declare class aIROpNum8_LT extends aIROpREA_LT {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpNum4_LT extends aIROpREA_LT {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpDEC_LT extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpPTR_LT extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpDBDynSTR_GT extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpDBSTR_GT extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpSTR_GT extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
}
/**
*
*/
declare class aIROpREA_GT extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
   Priority();
}
/**
*
*/
declare class aIROpNum8_GT extends aIROpREA_GT {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpNum4_GT extends aIROpREA_GT {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpDEC_GT extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpPTR_GT extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpBIT_XOR extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpBIT8_XOR extends aIROpBIT_XOR {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpBIT_OR extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpBIT8_OR extends aIROpBIT_OR {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpPtrPtr_Sub extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpPtrInt_Sub extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpIntPtr_Add extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpPtrInt_Add extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Kind();
   EvaluateAsInt4();
   Priority();
}
/**
*
*/
declare class aIROpStr_DAnd extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   Priority();
}
/**
*
*/
declare class aIROpSTR_ADDS extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   Priority();
}
/**
*
*/
declare class aIROpREA_SUB extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
   Priority();
   RequestedType();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpNum8_SUB extends aIROpREA_SUB {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpNum4_SUB extends aIROpREA_SUB {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpDEC_SUB extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
   Priority();
   RequestedType();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpINT_SUB extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpINT8_SUB extends aIROpINT_SUB {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpSTR_ADD extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   PostParse();
   Priority();
}
/**
*
*/
declare class aIROpDBDynStr_ADD extends aIROpSTR_ADD {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   RequestedType();
}
/**
*
*/
declare class aIROpDBSTR_ADD extends aIROpSTR_ADD {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   RequestedType();
}
/**
*
*/
declare class aIROpCSTR_ADD extends aIROpSTR_ADD {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   RequestedType();
}
/**
*
*/
declare class aIROpREA_ADD extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
   Priority();
   RequestedType();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpNum8_ADD extends aIROpREA_ADD {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpNum4_ADD extends aIROpREA_ADD {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpDEC_ADD extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
   Priority();
   RequestedType();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpINT_ADD extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpINT8_ADD extends aIROpINT_ADD {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpBIT_AND extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpBIT8_AND extends aIROpBIT_AND {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpINT_ZFSHR extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Kind();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsInt8();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpINT8_ZFSHR extends aIROpINT_ZFSHR {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpINT_SHL extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpINT8_SHL extends aIROpINT_SHL {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpINT_SHR extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpINT8_SHR extends aIROpINT_SHR {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpREA_MOD extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpNum8_MOD extends aIROpREA_MOD {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpNum4_MOD extends aIROpREA_MOD {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpINT_MOD extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpINT8_MOD extends aIROpINT_MOD {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpREA_DIV extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
   Priority();
   RequestedType();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpNum8_DIV extends aIROpREA_DIV {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpNum4_DIV extends aIROpREA_DIV {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpDEC_DIV extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
   Priority();
   RequestedType();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpINT_DIV extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpINT8_DIV extends aIROpINT_DIV {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpREA_MUL extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
   Priority();
   RequestedType();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpNum8_MUL extends aIROpREA_MUL {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpNum4_MUL extends aIROpREA_MUL {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpDEC_MUL extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
   Priority();
   RequestedType();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpINT_MUL extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpINT8_MUL extends aIROpINT_MUL {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpIn extends aIROpBinary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
   myMMDefType();
   Kind();
   EvaluateAsInt4();
   PostParse();
   Priority();
   RequestedType();
   BuildWhereBindInfos();
}
/**
*
*/
declare class aIROpInBigSet extends aIROpIn {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpAssign extends aIROpBinary {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   Kind();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   EvaluateAsInt8();
   EvaluateAsNum();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpAssignRefto extends aIROpAssign {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpAssignListof extends aIROpAssign {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpAssignStack extends aIROpAssign {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpAssignNum8 extends aIROpAssign {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpAssignNum4 extends aIROpAssign {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpAssignInt8 extends aIROpAssign {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpAssignInt2 extends aIROpAssign {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpAssignInt1 extends aIROpAssign {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpTernary extends aIROpBinary {
   Third:aIROpNode;
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   OpIdentifier();
   LeftOp();
   Kind();
   PostParse();
   EvaluateAsAddress();
   RequestedType();
}
/**
*
*/
declare class aIROpBetween extends aIROpTernary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Kind();
   EvaluateAsInt4();
   EvaluateAsAddress();
   Priority();
   RequestedType();
}
/**
*
*/
declare class aIROpCondition extends aIROpTernary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsAddress();
   RequestedType();
}
/**
*
*/
declare class aIROpBasicUnary extends aIROpNode {
   theOpNode:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   myMMDefObject();
   mySelf();
   myMMDefType();
   OpIdentifier();
   LeftOp();
   IsImplicitLocalVar();
   Kind();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   IsLValue();
   IsConstant();
   EvaluateAsInt8();
   EvaluateAsNum();
   Priority();
   NonRunTimeMMType();
   RequestedType();
   EvaluateAsDecimal();
   BuildWhereBindInfos();
   MustBeBound();
   IsTGVImplicitLocalVar();
}
/**
*
*/
declare class aIROpIntrinsicWithParm extends aIROpBasicUnary {
   TempValue:Number;
   ClassName();
   ClassId();
   OpIdentifier();
   Kind();
   EvaluateAsAddress();
   EvaluateAsInt8();
   EvaluateAsNum();
   RequestedType();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aOQLSelectSum extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   myMMDefObject();
   myMMDefType();
   Kind();
   PostParse();
   EvaluateAsAddress();
   IsOQLIntrinsic();
}
/**
*
*/
declare class aOQLSelectSumDecimal extends aOQLSelectSum {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOQLSelectSumNum extends aOQLSelectSum {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOQLSelectSumInt8 extends aOQLSelectSum {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOQLSelectMin extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   myMMDefObject();
   myMMDefType();
   Kind();
   EvaluateAsAddress();
   IsOQLIntrinsic();
}
/**
*
*/
declare class aOQLSelectMax extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   myMMDefObject();
   myMMDefType();
   Kind();
   EvaluateAsAddress();
   IsOQLIntrinsic();
}
/**
*
*/
declare class aIROpIntrinsicUpcaseStr extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   PostParse();
   RequestedType();
}
/**
*
*/
declare class aIROpIntrinsicOQLUpcaseStr extends aIROpIntrinsicUpcaseStr {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceSQL();
}
/**
*
*/
declare class aIROpIntrinsicOQLUpdateTime extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   myMMDefObject();
   myMMDefType();
   EvaluateAsInt4();
   EvaluateAsInt8();
   RequestedType();
}
/**
*
*/
declare class aIROpIntrinsicOQLUpdateDate extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   myMMDefObject();
   myMMDefType();
   EvaluateAsInt4();
   EvaluateAsInt8();
   RequestedType();
}
/**
*
*/
declare class aIROpIntrinsicOQLClassId extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   myMMDefObject();
   myMMDefType();
   EvaluateAsInt4();
   EvaluateAsInt8();
   RequestedType();
}
/**
*
*/
declare class aIROpIntrinsic__LINE__ extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpIntrinsicMMEntity extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   EvaluateAsInt4();
   EvaluateAsAddress();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpIntrinsicSizeOfType extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   EvaluateAsInt4();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpIntrinsicSizeOf extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   EvaluateAsInt4();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpIntrinsicChr extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpIntrinsicOrd extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   EvaluateAsInt4();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpIntrinsicPred extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpIntrinsicSucc extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpIntrinsicLast extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   EvaluateAsInt4();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpIntrinsicFirst extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   EvaluateAsInt4();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpIntrinsicLength extends aIROpIntrinsicWithParm {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   EvaluateAsInt4();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpIntrinsicSequenceLength extends aIROpIntrinsicLength {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpIntrinsicSetLength extends aIROpIntrinsicLength {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpIntrinsicDBDynStrLength extends aIROpIntrinsicLength {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpIntrinsicDBStrLength extends aIROpIntrinsicLength {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpIntrinsicTextLength extends aIROpIntrinsicLength {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsInt4();
}
/**
*
*/
declare class aOQLOpOrderBy extends aIROpBasicUnary {
   IsAscending:Boolean;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   Kind();
}
/**
*
*/
declare class aOQLOpGlobalOrderBy extends aOQLOpOrderBy {
   SelectVarRank:Number;
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aIROpTypeOf extends aIROpBasicUnary {
   MMTypeTempVar:aType;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefObject();
   mySelf();
   myMMDefType();
   Kind();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   EvaluateAsInt8();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpTypeOfInstance extends aIROpTypeOf {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   myMMDefObject();
   mySelf();
   myMMDefType();
   EvaluateAsAddress();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpSqrRoot extends aIROpBasicUnary {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   EvaluateAsInt4();
   EvaluateAsInt8();
   EvaluateAsNum();
}
/**
*
*/
declare class aOpSqrInt extends aIROpBasicUnary {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
   EvaluateAsInt8();
   EvaluateAsNum();
}
/**
*
*/
declare class aOpSqrReal extends aOpSqrInt {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOpAbsInt extends aIROpBasicUnary {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   EvaluateAsInt4();
   EvaluateAsInt8();
   EvaluateAsNum();
}
/**
*
*/
declare class aOpAbsReal extends aOpAbsInt {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aIROpCast extends aIROpBasicUnary {
   RecastAsTypeIdOp:aIROpIdentifier;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   myMMDefType();
   myMMAcceptedType();
   Kind();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   EvaluateAsInt8();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpCastReturnValue extends aIROpCast {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOpCallRetSet extends aIROpBasicUnary {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aIROpUnary extends aIROpBasicUnary {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   myMMDefType();
   EvaluateAsInt4();
   EvaluateAsAddress();
   IsLValue();
   IsConstant();
   EvaluateAsInt8();
   EvaluateAsNum();
   Priority();
   NonRunTimeMMType();
   RequestedType();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aOpMakeSet extends aIROpUnary {
   NumOfBits:Number;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   NumOfElements();
   Kind();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsInt8();
   RequestedType();
}
/**
*
*/
declare class aOpWriteElement extends aIROpUnary {
   Modifiers:aIROpNode;
   ModifiersBis:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   PostParse();
   NonRunTimeMMType();
}
/**
*
*/
declare class aIROpDereference extends aIROpUnary {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefObject();
   mySelf();
   myMMDefType();
   Kind();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   IsLValue();
   EvaluateAsInt8();
   EvaluateAsNum();
   NonRunTimeMMType();
   RequestedType();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpC2S extends aIROpUnary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Kind();
}
/**
*
*/
declare class aIROpD2R extends aIROpUnary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
   Priority();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpR2D extends aIROpUnary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
   Priority();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpI2R extends aIROpUnary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
   Priority();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpADDR extends aIROpUnary {
   ClassName();
   ClassId();
   IRClassId();
   ElementSize();
   Kind();
   EvaluateAsInt4();
   NonRunTimeMMType();
}
/**
*
*/
declare class aIROpBOL_NOT extends aIROpUnary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpNotNil extends aIROpBOL_NOT {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   myMMDefType();
   Kind();
   EvaluateAsInt4();
   Priority();
   RequestedType();
   BuildWhereBindInfos();
}
/**
*
*/
declare class aIROpBIT_NOT extends aIROpUnary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpBIT8_NOT extends aIROpBIT_NOT {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpRea_Chs extends aIROpUnary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpNum8_Chs extends aIROpRea_Chs {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpNum4_Chs extends aIROpRea_Chs {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpDec_Chs extends aIROpUnary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsNum();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpInt_Chs extends aIROpUnary {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   PostParse();
}
/**
*
*/
declare class aIROpInt8_Chs extends aIROpInt_Chs {
   ClassName();
   ClassId();
   IRClassId();
   Kind();
   EvaluateAsInt4();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpOpAssign extends aIROpUnary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Kind();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsInt8();
   EvaluateAsNum();
   RequestedType();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpOpAssignStack extends aIROpOpAssign {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpOpAssignDec extends aIROpOpAssign {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpOpAssignNum8 extends aIROpOpAssign {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpOpAssignNum4 extends aIROpOpAssign {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
   EvaluateAsInt8();
}
/**
*
*/
declare class aIROpOpAssignPointer extends aIROpOpAssign {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpOpAssignInt8 extends aIROpOpAssign {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpOpAssignInt2 extends aIROpOpAssign {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpOpAssignInt1 extends aIROpOpAssign {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPreDec extends aIROpUnary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Kind();
   EvaluateAsInt4();
   PostParse();
   RequestedType();
}
/**
*
*/
declare class aIROpPreDecDec extends aIROpPreDec {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPreDecNum8 extends aIROpPreDec {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPreDecNum4 extends aIROpPreDec {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPreDecInt8 extends aIROpPreDec {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPreDecInt2 extends aIROpPreDec {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPreDecInt1 extends aIROpPreDec {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPreInc extends aIROpUnary {
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Kind();
   EvaluateAsInt4();
   PostParse();
   RequestedType();
}
/**
*
*/
declare class aIROpPreIncDec extends aIROpPreInc {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPreIncNum8 extends aIROpPreInc {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPreIncNum4 extends aIROpPreInc {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPreIncInt8 extends aIROpPreInc {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPreIncInt2 extends aIROpPreInc {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPreIncInt1 extends aIROpPreInc {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPostDec extends aIROpUnary {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Kind();
   EvaluateAsInt4();
   PostParse();
   RequestedType();
}
/**
*
*/
declare class aIROpPostDecDec extends aIROpPostDec {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPostDecNum8 extends aIROpPostDec {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPostDecNum4 extends aIROpPostDec {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPostDecInt8 extends aIROpPostDec {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPostDecInt2 extends aIROpPostDec {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPostDecInt1 extends aIROpPostDec {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPostInc extends aIROpUnary {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Kind();
   EvaluateAsInt4();
   PostParse();
   RequestedType();
}
/**
*
*/
declare class aIROpPostIncDec extends aIROpPostInc {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPostIncNum8 extends aIROpPostInc {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPostIncNum4 extends aIROpPostInc {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPostIncInt8 extends aIROpPostInc {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPostIncInt2 extends aIROpPostInc {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpPostIncInt1 extends aIROpPostInc {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aOpConversion extends aIROpBasicUnary {
   SizeToCopy:Number;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aOpSetToSet extends aOpConversion {
   NumBitsToConvertTo:Number;
   ClassName();
   ClassId();
   IRClassId();
   NumOfElements();
   EvaluateAsInt4();
}
/**
*
*/
declare class aOpIntToInt8 extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   EvaluateAsInt8();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpDBCharToDBString extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpDBCharToChar extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   EvaluateAsInt4();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpCharToDBChar extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   EvaluateAsInt4();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpDBStringToDynDBString extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpDynDBStringToDBString extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpStringToDynDBString extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpCStringToDynDBString extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpDynDBStringToString extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpDynDBStringToCString extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpStringToDBString extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpCStringToDBString extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpDBStringToString extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpDBStringToCString extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpDBStringToDBString extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpCStringToString extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpStringToCString extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpCStringToCString extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpStringToString extends aOpConversion {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   NonRunTimeMMType();
}
/**
*
*/
declare class aOpPushParameter extends aIROpBasicUnary {
   ClassName();
   ClassId();
   ProduceCPP();
}
/**
*
*/
declare class aOpPushRefToListOf extends aOpPushParameter {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
}
/**
*
*/
declare class aOpPushTempVarByAddress extends aOpPushParameter {
   TempVarSize:Number;
   TempVarOffset:Number;
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOpPushByAddress extends aOpPushParameter {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOpPushMySelf extends aOpPushParameter {
   ClassName();
   ClassId();
   IRClassId();
   PostParse();
}
/**
*
*/
declare class aOpPushDecimalByValue extends aOpPushParameter {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOpPushNum10ByValue extends aOpPushParameter {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOpPushNum8ByValue extends aOpPushParameter {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOpPushNum4ByValue extends aOpPushParameter {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOpPushByValue extends aOpPushParameter {
   ParamSize:Number;
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOpPushPointerByValue extends aOpPushByValue {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOpPushDBDynStrByValueOnStack extends aOpPushByValue {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOpPushByValueOnStack extends aOpPushByValue {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOpPushDerefOffset extends aOpPushByValue {
   Offset:Number;
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOpPushInt8ByValue extends aOpPushParameter {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aIROpScenarioSelect extends aIROpBasicUnary {
   MMDefObject:string;
   RunTimeScen:string;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   mySelf();
   myMMDefType();
   EvaluateAsInt4();
   EvaluateAsAddress();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aOpCallRetInstance extends aIROpBasicUnary {
   theInstance:string;
   ClassName();
   ClassId();
   IRClassId();
   myMMAcceptedType();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   EvaluateAsInt8();
}
/**
*
*/
declare class aOpCallRetOnStack extends aOpCallRetInstance {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
   EvaluateAsAddress();
   EvaluateAsInt8();
}
/**
*
*/
declare class aOQLSelectCount extends aIROpNode {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   myMMDefObject();
   myMMDefType();
   Kind();
   PostParse();
   EvaluateAsAddress();
   IsOQLIntrinsic();
   RequestedType();
}
/**
*
*/
declare class aIROpIdentifier extends aIROpNode {
   Id:aIRAny;
   MMDefObject:string;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefObject();
   mySelf();
   myMMDefType();
   OpIdentifier();
   IsImplicitLocalVar();
   Kind();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   IsLValue();
   EvaluateAsInt8();
   EvaluateAsNum();
   RequestedType();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aOQLSelectAll extends aIROpIdentifier {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   Kind();
   PostParse();
}
/**
*
*/
declare class aOQLOpFromDef extends aIROpIdentifier {
   AllVersionsOf:Boolean;
   AcceptDescendants:Boolean;
   PhantomsToo:Boolean;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   Kind();
   PostParse();
   BuildWhereBindInfos();
}
/**
*
*/
declare class aOQLOpFromDefRestricted extends aOQLOpFromDef {
   RestrictOp:aIROpNode;
   OQLActionKind:Number;
   Conditional:Boolean;
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   PostParse();
}
/**
*
*/
declare class aOQLOpFromDefWithJoins extends aOQLOpFromDefRestricted {
   OuterJoinOnImplicitOps:aList;
   ExplicitJoinConditionOp:aIROpNode;
   ExplicitJoinKind:Number;
   ExplicitJoinedToRank:Number;
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   PostParse();
   BuildWhereBindInfos();
}
/**
*
*/
declare class aIROpOQLImplicitIdentifier extends aIROpIdentifier {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   EvaluateAsAddress();
   IsLValue();
   MustBeBound();
   IsTGVImplicitLocalVar();
}
/**
*
*/
declare class aIROpRecordVariantVarIdentifier extends aIROpIdentifier {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
}
/**
*
*/
declare class aIROpResult extends aIROpIdentifier {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefObject();
   mySelf();
   myMMDefType();
   OpIdentifier();
   IsImplicitLocalVar();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpControlIdentifier extends aIROpIdentifier {
   ClassName();
   ClassId();
   IRClassId();
   RequestedType();
}
/**
*
*/
declare class aIROpSelf extends aIROpIdentifier {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefObject();
   myMMDefType();
   OpIdentifier();
   IsImplicitLocalVar();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   IsLValue();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpEnumIdentifier extends aIROpIdentifier {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   myMMDefType();
   MMClassId();
   IsImplicitLocalVar();
   EvaluateAsInt4();
   EvaluateAsAddress();
   IsLValue();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpConstantIdentifier extends aIROpIdentifier {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   myMMDefType();
   IsImplicitLocalVar();
   EvaluateAsInt4();
   EvaluateAsAddress();
   IsLValue();
   EvaluateAsNum();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpOwnedIdentifier extends aIROpIdentifier {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aIROpModuleIdentifier extends aIROpIdentifier {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   EvaluateAsInt4();
   EvaluateAsAddress();
   RequestedType();
}
/**
*
*/
declare class aIROpSystemModuleIdentifier extends aIROpModuleIdentifier {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aIROpCallReturnValue extends aIROpIdentifier {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   myMMDefObject();
   mySelf();
   myMMDefType();
   IsImplicitLocalVar();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpInt4Identifier extends aIROpIdentifier {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
   EvaluateAsInt8();
   EvaluateAsNum();
}
/**
*
*/
declare class aIROpMMIdentifier extends aIROpIdentifier {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   myMMDefType();
   IsImplicitLocalVar();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   IsLValue();
}
/**
*
*/
declare class aIROpDBDynStrIdentifier extends aIROpIdentifier {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aOpDBExec extends aIROpNode {
   RTSelector:string;
   UsingCursor:aIROpNode;
   ClassName();
   ClassId();
   IRClassId();
   myMMDefObject();
   mySelf();
   myMMDefType();
   Kind();
   EvaluateAsAddress();
   RequestedType();
}
/**
*
*/
declare class aOpSqlExec extends aOpDBExec {
   SqlString:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   EvaluateAsInt4();
   PostParse();
}
/**
*
*/
declare class aOpSqlTextExec extends aOpSqlExec {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   PostParse();
}
/**
*
*/
declare class aOQLOpSelect extends aOpDBExec {
   VarsList:aList;
   FromList:aList;
   WhereOp:aIROpNode;
   OrderBy:aList;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   AnalyseMapping();
   EvaluateAsInt4();
   PostParse();
   ProduceSQLTextForDBDef(inThisText:string, forThisDBDef:string, forClassDef:aClassDef, OnlyPKWhenSelectStar:Boolean);
   BuildClassDefList(inThisList:aListOfInstances, forThisDBDef:string, OnlyPKWhenSelectStar:Boolean);
   BuildClassDefTupleList(inThisList:aListOfInstances, forThisDBDef:string, OnlyPKWhenSelectStar:Boolean);
   HasRestrictTo();
   GetTopOp();
}
/**
*
*/
declare class aOQLOpDelete extends aOQLOpSelect {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   PostParse();
   ProduceSQLTextForDBDef();
}
/**
*
*/
declare class aOQLOpSelectWTop extends aOQLOpSelect {
   TopOp:aIROpNode;
   ClassName();
   ClassId();
   IRClassId();
   PostParse();
   GetTopOp();
}
/**
*
*/
declare class aOQLOpSelectWGroup extends aOQLOpSelect {
   GroupBy:aList;
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   PostParse();
}
/**
*
*/
declare class aIROpIntrinsicMethodName extends aIROpNode {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   Kind();
   PostParse();
   EvaluateAsAddress();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpIntrinsicModuleName extends aIROpNode {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   Kind();
   PostParse();
   EvaluateAsAddress();
   NonRunTimeMMType();
   RequestedType();
}
/**
*
*/
declare class aIROpCall extends aIROpNode {
   Routine:aIROpNode;
   Args:aList;
   SizeOfTempVars:Number;
   ReturnValueSize:Number;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   myMMDefObject();
   myMMDefType();
   OpIdentifier();
   LeftOp();
   Kind();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   EvaluateAsInt8();
   EvaluateAsNum();
   NonRunTimeMMType();
   RequestedType();
   EvaluateAsDecimal();
   BuildWhereBindInfos();
   MustBeBound();
   IsTGVImplicitLocalVar();
}
/**
*
*/
declare class aIROpStackCall extends aIROpCall {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
   EvaluateAsInt8();
   EvaluateAsNum();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpStackCallFromAddress extends aIROpStackCall {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpVirtualStackCall extends aIROpStackCall {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aIROpCallFromAddress extends aIROpCall {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
}
/**
*
*/
declare class aIROpReimplementedCall extends aIROpCall {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Kind();
   PostParse();
}
/**
*
*/
declare class aIROpReimplementedStackCall extends aIROpReimplementedCall {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
   EvaluateAsInt8();
   EvaluateAsNum();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpInheritedCall extends aIROpCall {
   NumberOfClassLevels:Number;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Kind();
   PostParse();
}
/**
*
*/
declare class aIROpInheritedStackCall extends aIROpInheritedCall {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
   EvaluateAsInt8();
   EvaluateAsNum();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpVirtualCall extends aIROpCall {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aIROpConstant extends aIROpNode {
   Co:string;
   ClassName();
   ClassId();
   Kind();
   EvaluateAsInt4();
   PostParse();
}
/**
*
*/
declare class aOpConstant extends aIROpConstant {
   ClassName();
   ClassId();
   IRClassId();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   EvaluateAsInt8();
   RequestedType();
}
/**
*
*/
declare class aOpIntConstant extends aOpConstant {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   MMClassId();
   EvaluateAsInt4();
   EvaluateAsAddress();
   EvaluateAsInt8();
   EvaluateAsNum();
   RequestedType();
}
/**
*
*/
declare class aOpPointerConstant extends aOpIntConstant {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   MMClassId();
   RequestedType();
}
/**
*
*/
declare class aOpBoolConstant extends aOpIntConstant {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   MMClassId();
   RequestedType();
}
/**
*
*/
declare class aOpEnumConstant extends aOpIntConstant {
   ClassName();
   ClassId();
   IRClassId();
   myMMDefType();
   MMClassId();
   RequestedType();
}
/**
*
*/
declare class aOpDBCharConstant extends aOpIntConstant {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   MMClassId();
   RequestedType();
}
/**
*
*/
declare class aOpCharConstant extends aOpIntConstant {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   MMClassId();
   RequestedType();
}
/**
*
*/
declare class aOpInt8Constant extends aOpIntConstant {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   MMClassId();
   EvaluateAsInt4();
   EvaluateAsAddress();
   EvaluateAsInt8();
   EvaluateAsNum();
}
/**
*
*/
declare class aOpTextConstant extends aOpConstant {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   MMClassId();
   EvaluateAsInt4();
   EvaluateAsAddress();
   RequestedType();
}
/**
*
*/
declare class aOpDBStringConstant extends aOpConstant {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   MMClassId();
   EvaluateAsInt4();
   EvaluateAsAddress();
   RequestedType();
}
/**
*
*/
declare class aOpStringConstant extends aOpConstant {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   MMClassId();
   EvaluateAsInt4();
   EvaluateAsAddress();
   RequestedType();
}
/**
*
*/
declare class aOpRealConstant extends aOpConstant {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   myMMDefType();
   MMClassId();
   EvaluateAsInt4();
   EvaluateAsAddress();
   EvaluateAsNum();
   RequestedType();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpError extends aIROpNode {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   myMMDefType();
   Kind();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsAddress();
   EvaluateAsNum();
   RequestedType();
   EvaluateAsDecimal();
}
/**
*
*/
declare class aIROpSet extends aIROpNode {
   Values:aList;
   NumOfBits:Number;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   myMMDefType();
   NumOfElements();
   Kind();
   EvaluateAsInt4();
   PostParse();
   EvaluateAsInt8();
   RequestedType();
}
/**
*
*/
declare class aIRStatement extends aIRAny {
   NextStatic:aIRStatement;
   StringExtract();
   ClassName();
   ClassId();
   ProduceGold();
   Execute();
}
/**
*
*/
declare class aIrBlockOfStatements extends aIRStatement {
   Statements:aIRStatement;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aIrStatementTry extends aIrBlockOfStatements {
   Catches:aList;
   CatchDefault:aIRStatement;
   FinalizeStatements:aIRStatement;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementSynchronized extends aIrBlockOfStatements {
   SynchronizedWhat:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementLoop extends aIrBlockOfStatements {
   LoopStatements:aIRStatement;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementForEach extends aIrStatementLoop {
   Down:Boolean;
   Item:aIROpNode;
   Domain:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementForEachUsingCounter extends aIrStatementForEach {
   Counter:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   Execute();
}
/**
*
*/
declare class aIrStatementWhile extends aIrStatementLoop {
   Cond:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementRepeat extends aIrStatementWhile {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementRepeatWithIncident extends aIrStatementRepeat {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementWhileWithIncident extends aIrStatementWhile {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementFor extends aIrStatementLoop {
   Down:Boolean;
   Index:aIROpNode;
   Start:aIROpNode;
   Stop:aIROpNode;
   ForStep:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementForWithIncident extends aIrStatementFor {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementForInt8WithIncident extends aIrStatementForWithIncident {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementForInt2WithIncident extends aIrStatementForWithIncident {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementForInt1WithIncident extends aIrStatementForWithIncident {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementForInt8 extends aIrStatementFor {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementForInt2 extends aIrStatementFor {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementForInt1 extends aIrStatementFor {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementLabeledBlock extends aIrBlockOfStatements {
   theLabel:string;
   OffsetInFlatBuffer:Number;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementWith extends aIrBlockOfStatements {
   WithOpId:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aOQLStDelete extends aIRStatement {
   DeleteOp:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aOQLStFetch extends aIRStatement {
   UsingCursor:aIROpNode;
   IntoList:aList;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aSQLStFetch extends aOQLStFetch {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aSqlExecSt extends aIRStatement {
   ExecOp:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aOQLStSelect extends aIRStatement {
   SelectOp:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aStCopyLocalParms extends aIRStatement {
   theOpParameter:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   Execute();
}
/**
*
*/
declare class aIrStatementCase extends aIRStatement {
   Value:aIROpNode;
   Choices:aList;
   Default:aIRStatement;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementCaseStringOf extends aIrStatementCase {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementSwitch extends aIrStatementCase {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementIf extends aIRStatement {
   Cond:aIROpNode;
   ifunc_Statements:aIRStatement;
   Else_Statements:aIRStatement;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementIfElseIf extends aIrStatementIf {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
}
/**
*
*/
declare class aIrStatementReturn extends aIRStatement {
   Value:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementDecimalReturn extends aIrStatementReturn {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementPointerReturn extends aIrStatementReturn {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementNumReturn extends aIrStatementReturn {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementDBDynStrReturn extends aIrStatementReturn {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementStackReturn extends aIrStatementReturn {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementCall extends aIRStatement {
   Call:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementIntrinsic extends aIrStatementCall {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aIrStatementComment extends aIRStatement {
   pComment:string;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
}
/**
*
*/
declare class aIrStatementEOLComment extends aIrStatementComment {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aIrStatementExit extends aIRStatement {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementContinue extends aIRStatement {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementContinueLabeled extends aIrStatementContinue {
   theLabelStatement:string;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementBreak extends aIRStatement {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementBreakLabeled extends aIrStatementBreak {
   theLabelStatement:string;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementAssign extends aIRStatement {
   L:aIROpNode;
   R:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementDec extends aIrStatementAssign {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementDecByConst extends aIrStatementDec {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementDecByOne extends aIrStatementDecByConst {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   Execute();
}
/**
*
*/
declare class aIrStatementDecWordByConst extends aIrStatementDecByConst {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementDecByteByConst extends aIrStatementDecByConst {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementDecPointerByConst extends aIrStatementDecByConst {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementDecPointer extends aIrStatementDec {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementDecSet extends aIrStatementDec {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementDecDec extends aIrStatementDec {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementDecNum extends aIrStatementDec {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementDecInt8 extends aIrStatementDec {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementDecWord extends aIrStatementDec {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementDecByte extends aIrStatementDec {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementInc extends aIrStatementAssign {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementIncPointer extends aIrStatementInc {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementIncByConst extends aIrStatementInc {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementIncWordByConst extends aIrStatementIncByConst {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementIncByteByConst extends aIrStatementIncByConst {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementIncPointerByConst extends aIrStatementIncByConst {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementIncByOne extends aIrStatementIncByConst {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   Execute();
}
/**
*
*/
declare class aIrStatementIncCStr extends aIrStatementInc {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementIncStr extends aIrStatementIncCStr {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementIncText extends aIrStatementInc {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementIncSet extends aIrStatementInc {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementIncDec extends aIrStatementInc {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementIncNum extends aIrStatementInc {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementIncInt8 extends aIrStatementInc {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementIncWord extends aIrStatementInc {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementIncByte extends aIrStatementInc {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementTextAssign extends aIrStatementAssign {
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementTextStrAssign extends aIrStatementTextAssign {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementRoutineAssign extends aIrStatementAssign {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementSetAssign extends aIrStatementAssign {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementSubRangeAssign extends aIrStatementAssign {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementControlAssign extends aIrStatementAssign {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementListOfAssign extends aIrStatementAssign {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementRefToAssign extends aIrStatementAssign {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
   Execute();
}
/**
*
*/
declare class aIrStatementDecimalAssign extends aIrStatementAssign {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementNum10Assign extends aIrStatementAssign {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementNum8Assign extends aIrStatementAssign {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementNum4Assign extends aIrStatementAssign {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementStackAssign extends aIrStatementAssign {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementDBDynStrStackAssign extends aIrStatementStackAssign {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementByteAssign extends aIrStatementAssign {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementEnumAssign extends aIrStatementByteAssign {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aIrStatementPointerAssign extends aIrStatementAssign {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementInt8Assign extends aIrStatementAssign {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aIrStatementWordAssign extends aIrStatementAssign {
   ClassName();
   ClassId();
   IRClassId();
   Execute();
}
/**
*
*/
declare class aList extends aIRAny {
   Count:Number;
   CurRank:Number;
   MaxRank:Number;
   Members:string;
   ClassName();
   ClassId();
   Kill();
   Clone();
   Add(it:string);
   MakeFixedInAllocBlocks(PtrTo_myself:string);
}
/**
*
*/
declare class aListOfAny extends aList {
   StringExtract();
   ClassName();
   ClassId();
   SizeOfInstance();
   IRClassId();
   ProduceGold();
   ProduceSQL();
   ProduceCPP();
   Add();
   MakeFixedInAllocBlocks();
}
/**
*
*/
declare class aListOfCatches extends aListOfAny {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
}
/**
*
*/
declare class aListOfSetMembers extends aListOfAny {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
}
/**
*
*/
declare class aListOfInstructionArgs extends aListOfAny {
   ClassName();
   ClassId();
   IRClassId();
   ProduceCPP();
}
/**
*
*/
declare class aListOfMethodInstructionArgs extends aListOfInstructionArgs {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
}
/**
*
*/
declare class aListOfFunctionArgs extends aListOfAny {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
}
/**
*
*/
declare class aListOfMethodFunctionArgs extends aListOfFunctionArgs {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
}
/**
*
*/
declare class aListOfChoiceRanges extends aListOfAny {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
}
/**
*
*/
declare class aListOfCaseChoices extends aListOfAny {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
}
/**
*
*/
declare class aListWithCommas extends aListOfAny {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
}
/**
*
*/
declare class aListOfCaseValues extends aListWithCommas {
   ClassName();
   ClassId();
   IRClassId();
}
/**
*
*/
declare class aIROpCatch extends aIRAny {
   ExceptionId:aIROpIdentifier;
   Statements:aIRStatement;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
}
/**
*
*/
declare class aIRChoiceRange extends aIRAny {
   Min:aIROpNode;
   Max:aIROpNode;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
}
/**
*
*/
declare class aCaseChoiceValue extends aIRChoiceRange {
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
}
/**
*
*/
declare class aIRCaseChoice extends aIRAny {
   Values:aList;
   Statements:aIRStatement;
   StringExtract();
   ClassName();
   ClassId();
   IRClassId();
   ProduceGold();
   ProduceCPP();
}
/**
*
*/
declare class aIRType extends aIRAny {
   Kind:Number;
   Id:aIRIdentifier;
   Duplicates:aIRType;
   MMDefObject:string;
   MMImplemObject:string;
   MetaInfos.annotations:string;
   MetaInfos.comment:string;
   MetaInfos.model:string;
   StringExtract();
   ClassName();
   ClassId();
   NumOfElements();
   MMName();
   TypeSize();
   BaseType();
   ResultingType();
}
/**
*
*/
declare class aIRTypText extends aIRType {
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypObject extends aIRType {
   Is_Packed:Boolean;
   Parent:aIRType;
   FieldsHasher:string;
   Fields:aList;
   Forwards:aList;
   Imports:aList;
   Constraints:aList;
   pDeclAllocBlocks:string;
   pFlatExtsBlocks:string;
   HasFlat:Boolean;
   Interfaces:aList;
   ClassName();
   ClassId();
   SubIdFromName();
   AppendEntityToList();
   OpenAllScopes();
   SearchIdInScope();
   SearchIdInScopeCD();
   OpenAllUsesScopes();
   OpenUsesScope();
   SearchNextIdInScopeCD();
}
/**
*
*/
declare class aIRTypRecord extends aIRTypObject {
   myMMDefLists:string;
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIrTypNativeRecord extends aIRTypRecord {
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIrTypVariantRecord extends aIRTypRecord {
   Variants:aList;
   HasSelector:Boolean;
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypClass extends aIRTypObject {
   ClassName();
   ClassId();
   OpenAllScopes();
   SearchIdInScope();
   OpenUsesScope();
   AddToUses();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypBased extends aIRType {
   Base:aIRType;
   ClassName();
   ClassId();
   BaseType();
}
/**
*
*/
declare class aIRTypPointer extends aIRTypBased {
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypFile extends aIRTypPointer {
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypSet extends aIRTypBased {
   ClassName();
   ClassId();
   NumOfElements();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypListOf extends aIRTypBased {
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypRefto extends aIRTypBased {
   IsVersioned:Boolean;
   InTransaction:Boolean;
   IsOwner:Boolean;
   IsCurProject:Boolean;
   IsIntegral:Boolean;
   IsActive:Boolean;
   Classes:aList;
   Inverses:aList;
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypSubRange extends aIRTypBased {
   Min:aIROpNode;
   Max:aIROpNode;
   MMMinConst:string;
   MMMaxConst:string;
   ClassName();
   ClassId();
   NumOfElements();
   MMClassId();
   TypeSize();
   ResultingType();
}
/**
*
*/
declare class aIRTypEnum extends aIRTypBased {
   Values:aList;
   BuildLists:string;
   ClassName();
   ClassId();
   SubIdFromName();
   NumOfElements();
   AppendEntityToList();
   MMClassId();
   TypeSize();
   BaseType();
}
/**
*
*/
declare class aIRTypInstanceOf extends aIRType {
   ClassToInstantiate:aIRIdType;
   BehaviorIRType:aIRType;
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
   ResultingType();
}
/**
*
*/
declare class aIRTypArray extends aIRType {
   ElementType:aIRType;
   IndexType:aIRType;
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypSequence extends aIRTypArray {
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypSizeable extends aIRType {
   Size:Number;
   ClassName();
   ClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypDynDBString extends aIRTypSizeable {
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypDBString extends aIRTypSizeable {
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypString extends aIRTypSizeable {
   Is_C:Boolean;
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypReal extends aIRTypSizeable {
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRTypDBChar extends aIRTypSizeable {
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRTypChar extends aIRTypSizeable {
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRTypInteger extends aIRTypSizeable {
   Signed:Boolean;
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRTypRoutine extends aIRType {
   Params:aList;
   RET_TYPE:aIRType;
   myMMDefLists:string;
   ClassName();
   ClassId();
   SubIdFromName();
   AppendEntityToList();
   MMClassId();
   TypeSize();
   ResultingType();
}
/**
*
*/
declare class aIRTypDecimal extends aIRType {
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypBoolean extends aIRType {
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypAny extends aIRType {
   ClassName();
   ClassId();
   MMClassId();
   TypeSize();
}
/**
*
*/
declare class aIRTypError extends aIRType {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIRTypNone extends aIRType {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aHashable extends aIRAny {
   Name:string;
   StringExtract();
   ClassName();
   ClassId();
   Kill();
}
/**
*
*/
declare class aIRIdentifier extends aHashable {
   Alias:string;
   Owner:aIRIdentifier;
   Kind:Number;
   MMDefObject:string;
   MMImplemObject:string;
   GenerationRank:Number;
   Modifiers:string;
   ClassName();
   ClassId();
   Kill();
   MMName();
}
/**
*
*/
declare class aIRIdTyped extends aIRIdentifier {
   Typ:aIRType;
   LanguageSpecific:Number;
   InLineTypeCount:Number;
   MetaInfos.annotations:string;
   MetaInfos.comment:string;
   MetaInfos.model:string;
   ClassName();
   ClassId();
   CantBeSeen();
   IsWConfidential();
   MMClassId();
}
/**
*
*/
declare class aIRIdType extends aIRIdTyped {
   State:Number;
   myMMDefLists:string;
   myMMImplemLists:string;
   ClassName();
   ClassId();
   SubIdFromName();
   AppendEntityToList();
   SearchIdInScope();
   SearchIdInScopeCD();
   SearchNextIdInScopeCD();
}
/**
*
*/
declare class aIRIdScoped extends aIRIdType {
   LocalsHasher:string;
   Locals:aList;
   Imports:aList;
   Forwards:aList;
   Statements:aIRStatement;
   pDeclAllocBlocks:string;
   pCodeAllocBlocks:string;
   pFlatExtsBlocks:string;
   HasFlat:Boolean;
   ClassName();
   ClassId();
   SubIdFromName();
   AppendEntityToList();
   SearchIdInScope();
   SearchIdInScopeCD();
   OpenAllUsesScopes();
   AddToUses();
   SearchNextIdInScopeCD();
}
/**
*
*/
declare class aIRIdModule extends aIRIdScoped {
   ClassName();
   ClassId();
   OpenAllScopes();
   OpenUsesScope();
   MMClassId();
}
/**
*
*/
declare class aIRIdRoutine extends aIRIdScoped {
   IsForwarded:Boolean;
   IsRemote:Boolean;
   IsClassMethod:Boolean;
   ThrowsClasses:aList;
   ReimplemRoutine:aIRIdRoutine;
   ClassName();
   ClassId();
   OpenAllScopes();
   MMClassId();
}
/**
*
*/
declare class aIRIdExternalRoutine extends aIRIdRoutine {
   DllName:string;
   DllRoutineName:string;
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRIdOverrideRoutine extends aIRIdRoutine {
   OverriddenRoutine:aIRIdRoutine;
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRIdRecord extends aIRIdType {
   ClassName();
   ClassId();
   OpenAllScopes();
   AddToUses();
}
/**
*
*/
declare class aIRIdClass extends aIRIdRecord {
   ClassName();
   ClassId();
   OpenAllScopes();
   OpenAllUsesScopes();
   OpenUsesScope();
   AddToUses();
}
/**
*
*/
declare class aIRIdRenamingType extends aIRIdType {
   RenamedIRId:aIRIdType;
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRIdEnum extends aIRIdTyped {
   Value:Number;
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRIdParameter extends aIRIdTyped {
   IsAVar:string;
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRIdVariable extends aIRIdTyped {
   Value:aIROpNode;
   OverriddenVar:aIRIdVariable;
   AbsoluteForVar:aIRIdVariable;
   VarKind:Number;
   IsClassVar:Boolean;
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRIdImplicitLocalVar extends aIRIdVariable {
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRIdAbsoluteSelfVariable extends aIRIdVariable {
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRIdAbsoluteResultVariable extends aIRIdVariable {
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRIdAbsoluteVariable extends aIRIdVariable {
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRIdAbsoluteRecordVariable extends aIRIdAbsoluteVariable {
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRIdOverrideVariable extends aIRIdVariable {
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRIdRecordVariable extends aIRIdVariable {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIRIdSelf extends aIRIdTyped {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIRIdResult extends aIRIdTyped {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIRIdError extends aIRIdTyped {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIRIdConstant extends aIRIdTyped {
   Value:aIROpNode;
   ClassName();
   ClassId();
   MMClassId();
}
/**
*
*/
declare class aIRIdIntrinsic extends aIRIdentifier {
   Intrinsic:Number;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIRConstant extends aIRAny {
   Kind:Number;
   MMObject:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIrConstStructured extends aIRConstant {
   Value:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIrConstText extends aIrConstStructured {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIrConstPointer extends aIRConstant {
   Value:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIrConstString extends aIRConstant {
   Value:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIrConstReal extends aIRConstant {
   Value:string;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIrConstBoolean extends aIRConstant {
   Value:Boolean;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIrConstEnum extends aIRConstant {
   Value:Number;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIrConstChar extends aIRConstant {
   Value:Number;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIrConstInteger extends aIRConstant {
   Value:Number;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aException extends aLightObject {
   WithoutCallStack:Boolean;
   MustBeKeptAlive:Boolean;
   Message:string;
   Source:string;
   CallStack:aCallStack;
   ClassName();
   ClassId();
   Kill();
   AfterCaught();
}
/**
*
*/
declare class aSystemException extends aException {
   Code:Number;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aArithmeticException extends aSystemException {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aOverflowException extends aArithmeticException {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aDivideByZeroException extends aArithmeticException {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aControlCExitException extends aSystemException {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aStackOverflowException extends aSystemException {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aAccessViolationException extends aSystemException {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aCallStack extends aLightObject {
   FramesInfo:string;
   ClassName();
   ClassId();
   Init();
   Terminate();
}
/**
*
*/
declare class aCallStackFrameInfo extends aLightObject {
   MethodName:string;
   ModuleName:string;
   SourceFile:string;
   LineNumber:Number;
   ImageName:string;
   Interpreted:Boolean;
   ClassName();
   ClassId();
}
/**
*
*/
declare class aConnectionInformation extends aLightObject {
   ClassName();
   ClassId();
   Init();
   Kill();
   FindInformation(Key:string);
   ReadInformation(Key:string):string;
   ReadInformationAsText(Key:string, VarAddress:string);
}
/**
*
*/
declare class aThread extends aLightObject {
   MustBeKeptAlive:Boolean;
   ClassName();
   ClassId();
   Init();
   Terminate();
   Create(InheritHandle:Boolean, StackSize:Number, Priority:Number);
   ThreadBegin();
   ThreadBody();
   ThreadEnd();
   GetThreadId();
   GetPriority();
   SetPriority(Priority:Number);
}
/**
*
*/
declare class aWydeWebTimerThread extends aThread {
   ClassName();
   ClassId();
   ThreadBody();
}
/**
*
*/
declare class aWedThread extends aThread {
   NoDBConnectionAvailable:Boolean;
   ClassName();
   ClassId();
   Create();
   ThreadBegin();
   ThreadEnd();
   ThreadIndex();
}
/**
*
*/
declare class aWydeWebThread extends aWedThread {
   ClassName();
   ClassId();
   Init();
   ThreadBegin();
   ThreadBody();
   ThreadEnd();
}
/**
*
*/
declare class aWydeWebSession extends aLightObject {
   LastConnectedTime:Number;
   LastActivityTime:Number;
   theWydeWebThread:string;
   Version:Number;
   theClassName:string;
   theMethodName:string;
   theInstance:aLightObject;
   theMethodAddr:string;
   Canceled:Boolean;
   IsTerminating:Boolean;
   CancelReason:Number;
   Options:Number;
   UserName:string;
   UserComputerName:string;
   UserIPAddress:string;
   UserLogin:string;
   UserOS:Number;
   UserProcessId:Number;
   WorkingWindow:string;
   LastExecutedField:string;
   LastUsedField:string;
   IsRunning:Boolean;
   ConnectionTimeout:Number;
   ActivityTimeout:Number;
   MessageState:Number;
   MessageTitle:string;
   MessageBody:string;
   FullObjectNumber:Number;
   ClassName();
   ClassId();
   Init();
   Kill();
   Cancel(Reason:Number);
   WriteInBuffer(theValue:string);
   ProcessNextCommand();
   InitApplication(theClassName:string, theMethodName:string);
   StartApplication();
   UpdateCppClient();
   AlertOnRestart();
   InterpretWydeWebCommand(Buffer:string, theUIComponent:string, theMethod:Number);
   InterpretWydeWebBuffer(CharBufIn:string, CharBufInSize:Number);
   SetEventLevel(WydeWebEventSet:Number);
   GetCreationTime();
   GetExecutionTime();
   GetLastConnectionTime();
   GetLastActivityTime();
   WriteMessage(MessageTitle:string, MessageBody:string);
   ResetMessageStateIfRead();
}
/**
*
*/
declare class aHasher extends aLightObject {
   ClassName();
   ClassId();
   Init();
   Kill();
   Search(forString:string);
   SearchHashed(forString:string, Hashcode:Number, theResult:aHashable);
   Insert(HashToInsert:string);
   RemoveElement(Element:string);
   SearchCD(forString:string);
   SearchHashedCD(forString:string, Hashcode:Number, theResult:aHashable);
   SearchHashedOnlyPublic(forString:string, Hashcode:Number, theResult:aHashable);
   SearchHashedOnlyPublicCD(forString:string, Hashcode:Number, theResult:aHashable);
}
/**
*
*/
declare class aSource extends aLightObject {
   ClassName();
   ClassId();
   Init();
   WatchChar();
   ConsumeChar();
   WatchAndConsume();
   ConsumeAndWatch();
   NbLinesRead();
   PosInLine();
   PosInSource();
}
/**
*
*/
declare class aMemorySource extends aSource {
   ClassName();
   ClassId();
   Init();
   WatchChar();
   ConsumeChar();
   WatchAndConsume();
   ConsumeAndWatch();
   NbLinesRead();
   PosInLine();
   PosInSource();
}
/**
*
*/
declare class aParser extends aLightObject {
   theParserOptions:string;
   ErrorList:string;
   GlobalScopes:string;
   LocalScopes:string;
   ParseTime:Number;
   LastTime:Number;
   ImplemBeingParsed:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   ParseOpenModuleScope(theIRModule:string);
   OpenScopeFor(theIRScoped:aIRAny);
   CloseScope();
   CurScopeId();
   SearchIdentifier(Name:string);
   Disactivate();
   ReportParseError(ErrorNum:Number, ErrorSpot:string, ExtraMsg:string);
   OpenScopesForIRModuleFromName(ModuleName:string);
   SearchIdentifierCD(Name:string);
   OpenScopesForIRModuleFromNameCD(ModuleName:string);
   ParseOpenClassScope(theIRClass:string);
   ParseOpenRoutineScope(theIRRoutine:string);
   SearchNextIdentifierCD(Name:string, PreviousId:string);
   IREntityFromSource(theEntity:string, theSource:aSource, theUsesList:aListOfRefTos);
   StartIREntityFromSource(theEntity:string, theSource:aSource, theUsesList:aListOfRefTos, CloseScopeMarker:aScope, theMostVisibleUsesScope:aScope, theMostVisibleScope:aScope, ppOldAllocBlock:string);
   FinishIREntityFromSource(CloseScopeMarker:aScope, theMostVisibleUsesScope:aScope, theMostVisibleScope:aScope, ppOldAllocBlock:string);
   Activate(ErrorsList:aListOfInstances, IsTiming:Boolean, ParseWhat:string);
}
/**
*
*/
declare class aVParser extends aParser {
   VPConsumer:string;
   VPLexer:string;
   VPYaccer:string;
   MaxProductions:Number;
   ProductionStrings:string;
   MaxTokens:Number;
   TokenStrings:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   ParseOpenModuleScope();
   Activate();
   VPisReducing(ProductionRule:Number, Size:Number);
   VPisShifting(Result:string, Size:Number);
   VPisLexing(Result:string, Size:Number);
   VPisConsuming(Result:string, Size:Number);
   VPGetStackElement(Index:Number);
   VPGetStackDepth(Dummy:Number);
   VPGetSomethingMore(Index:Number, param:Number);
   VPProductionAsText(RuleNumber:Number):string;
   VPMaxProductions();
   VPInitProductionStrings();
   VPTokenText(fromThisToken:string):string;
   VPLexemeAsText(TokenKind:Number):string;
   VPGetLastLexeme();
   VPTablesName():string;
   VPStore(RuleNumber:Number, ProductionString:string);
   VPAfterParsing(Errors:Number, DoProduce:Boolean);
}
/**
*
*/
declare class aGOLDParser extends aParser {
   IsParsingOQLSelect:Boolean;
   OQLImplicitVars:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   ParseOpenModuleScope();
   ParseOpenClassScope();
   ParseOpenRoutineScope();
   Activate();
   SpecializedParseRoutineImplem(theIRRoutine:aIRIdRoutine, PtrTo_theSynch:string, ppOldAllocBlock:string, EndToken:Number);
}
/**
*
*/
declare class aScope extends aLightObject {
   thePrevScope:string;
   Hasher:string;
   Identifiers:string;
   ScopeId:string;
   ClassName();
   ClassId();
   Kill();
   InsertIdentifier(Id:string);
   SearchIdentifier(name:string);
   SearchIdentifierInThisScope(name:string);
   InsertIdentifiersOnlyInSymbolsTable(fromThisList:string);
   OpenScopeForName(ScopeName:string);
   Close();
   CloseToMarker(MarkerScope:string);
   InsertIdentifierOnlyInSymbolsTable(Id:string);
   InsertIdentifierOnlyInChildrenList(Id:string);
   SearchIdentifierCD(name:string);
   SearchIdentifierInThisScopeCD(name:string);
   OpenScopeForNameCD(ScopeName:string);
   SearchNextIdentifierCD(name:string, PreviousId:string);
   SearchIdentifierOnlyPublic(name:string);
   SearchIdentifierOnlyPublicCD(name:string);
}
/**
*
*/
declare class aAPIterator extends aLightObject {
   myAP:aAccessPlan;
   onlyCurrentVersions:Boolean;
   onlyNotFinalVersions:Boolean;
   AcceptedClassDefs:aListOfInstances;
   AcceptedClassDefsAndDescendants:aListOfInstances;
   AcceptedOnlyDescendantsOfClassDefs:aListOfInstances;
   ClassName();
   ClassId();
   current(perspectiveId:Number);
   initOn(onAP:aAccessPlan);
   reset(atTop:Boolean);
   position(PtrTo_onThisIndex:string, goingForward:Boolean);
   move(goingForward:Boolean);
   currentIndex();
   currentAddress();
   CanReturnOnlyCurrentVersions();
   CanReturnOnlyNotFinalVersions();
   currentClassId(FromThispIndex:string);
}
/**
*
*/
declare class aODBCAPIterator extends aAPIterator {
   myDBMgr:aODBCDBMgr;
   hStmt:string;
   curIdAsString:string;
   curIndexBuffer:string;
   ClassName();
   ClassId();
   Kill();
   initOn();
   position();
   move();
   currentIndex();
}
/**
*
*/
declare class aODBCVarDependentAPIterator extends aODBCAPIterator {
   ClassName();
   ClassId();
   Kill();
   initOn();
   reset();
   position();
   move();
   CanReturnOnlyCurrentVersions();
   CanReturnOnlyNotFinalVersions();
   currentClassId();
}
/**
*
*/
declare class aODBCNameAPIterator extends aODBCVarDependentAPIterator {
   ClassName();
   ClassId();
   Kill();
   initOn();
   reset();
   position();
   move();
   CanReturnOnlyCurrentVersions();
   CanReturnOnlyNotFinalVersions();
   currentClassId();
}
/**
*
*/
declare class aODBCVarDependentOneTableAPIterator extends aODBCAPIterator {
   theSqlAPDesc:string;
   curPrimaryKeyBuffer:string;
   curPrimaryKeyBufferSize:Number;
   LegacyTableAP:Boolean;
   FetchIntoConversionBuffer:string;
   WhereConversionBuffer:string;
   CurrentVersionFlag:Number;
   IsKilledFlag:Number;
   ClassName();
   ClassId();
   Kill();
   reset();
   position();
   move();
   CanReturnOnlyCurrentVersions();
   CanReturnOnlyNotFinalVersions();
}
/**
*
*/
declare class aBTreeIterator extends aAPIterator {
   ClassName();
   ClassId();
   Kill();
   current();
   initOn();
   reset();
   position();
   move();
   currentIndex();
   currentAddress();
}
/**
*
*/
declare class aSqlTracer extends aLightObject {
   TraceStmt:Boolean;
   TraceBind:Boolean;
   TraceFetch:Boolean;
   TraceFree:Boolean;
   WriteInFile:Boolean;
   FileName:string;
   ClassName();
   ClassId();
   DoStmtTrace(theStatement:string, theString:string);
   DoFreeTrace(theStatement:string, ClosingOpt:Number);
   DoFetchTrace(theStatement:string);
   WriteLn(theString:string);
   DoStmtBindParameter(theStatement:string, ParamCount:Number, BindAddr:string, MemSize:Number, MMType:aType, TypeData:aSqlTypeData, DBType:aSqlType);
}
/**
*
*/
declare class aSqlEncryptionBroker extends aLightObject {
   ClassName();
   ClassId();
   MaxCryptedSizeFor(MMType:aType, MemSize:Number, EncryptionBrokerData:aDBEntity);
   Encrypt(Encrypted:string, EncryptedMaxSize:Number, Decrypted:string, DecryptedMaxSize:Number, MMType:aType, EncryptionBrokerData:aDBEntity, forDBMgr:aDBMgr);
   Decrypt(Encrypted:string, EncryptedMaxSize:Number, Decrypted:string, DecryptedMaxSize:Number, CryptedMMType:aType, EncryptionBrokerData:aDBEntity, forDBMgr:aDBMgr);
   BestFitDBType(forDBDef:aODBCDBDef, theMMType:aType, TypeData:aSqlTypeData);
   NewEncryptionBrokerData(forDBDef:aODBCDBDef, theMMType:aType);
   AcceptExistingData(forDBDef:aODBCDBDef, theMMType:aType, EncryptionBrokerData:aDBEntity);
}
/**
*
*/
declare class aSelectorIterator_DEPRECATED extends aLightObject {
   myDBMgr:string;
   forSelector:string;
   curRank:Number;
   BindTypes:string;
   BindAddresses:string;
   MustNotLoadObject:Boolean;
   ClassName();
   ClassId();
   Kill();
   ResetOn(onThisSelector:aSelector);
   currentRank();
   MoveNextAndGet();
   ResetForBind();
   BindWith(BindType:aType, IntoThisAddress:string);
}
/**
*
*/
declare class aODBCMultiTableSelectorIterator_DEPRECATED extends aSelectorIterator_DEPRECATED {
   SelectorIterator:string;
   SingleTableIterator:string;
   ClassName();
   ClassId();
   Kill();
   ResetOn();
   MoveNextAndGet();
   ResetForBind();
   BindWith();
}
/**
*
*/
declare class aSqlSelectorIterator_DEPRECATED extends aSelectorIterator_DEPRECATED {
   hStmt:string;
   CursorName:string;
   IsDeclared:Boolean;
   Buffer:string;
   CurPosInBuf:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   ResetOn();
   ResetForBind();
}
/**
*
*/
declare class aODBCSelectorIterator_DEPRECATED extends aSqlSelectorIterator_DEPRECATED {
   FetchColumnIterator:string;
   ClassName();
   ClassId();
   Kill();
   ResetOn();
   MoveNextAndGet();
   ResetForBind();
}
/**
*
*/
declare class aTGVSelectorIterator_DEPRECATED extends aSelectorIterator_DEPRECATED {
   MeetsCriterionIt:string;
   forColumn:Number;
   HasFetchedIntrinsic:Boolean;
   ClassName();
   ClassId();
   Kill();
   ResetOn();
   MoveNextAndGet();
}
/**
*
*/
declare class aUIComponent extends aLightObject {
   myUIAgent:string;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   Kill(PtrTo_myself:string);
   ChangePos(X:Number, Y:Number, Width:Number, Height:Number);
   GetClientWidth();
   GetClientHeight();
   Select(Pos:Number);
   Popup(Param1:string);
   WillBeRemoved();
   DisableWhenDebugging(LockAll:Boolean);
   EnableAfterDebugging(UnLockAll:Boolean);
   ValueChanged();
   GetFocus();
   LoseFocus();
   Selected(Value:Number);
   Executed(Sel:Number, Option:Number);
   ReceiveDroppedObject(X:Number, Y:Number, thisObject:string);
   CanReceiveDroppedObject(X:Number, Y:Number, thisObject:string);
   Buttondown(no:Number, x:Number, y:Number);
   ButtonUp(no:Number, x:Number, y:Number);
   ButtonDblClk(no:Number, x:Number, y:Number);
   MouseMove(x:Number, y:Number);
   GetChar(Ch:Number, VKey:string, CharCount:Number, Flags:Number);
   CaptureMouse();
   ReleaseMouse();
   Show();
   Hide();
   IsHidden();
   Maximize();
   Minimize();
   Restore();
   IsMinimized();
   IsMaximized();
   GetXPos();
   GetYPos();
   GetWidth();
   GetHeight();
   GetClientX();
   GetClientY();
   GetAbsoluteXPos();
   GetAbsoluteYPos();
   ChangeClientWidthHeight(Width:Number, Height:Number);
   ChangeClientAreaForInternet(Left:Number, Bottom:Number, Right:Number, Top:Number);
   SetRange(Value:Number, Min:Number, Max:Number);
   GetCursor(X:Number, Y:Number);
   SetCursor(X:Number, Y:Number);
   Lock();
   Unlock();
   IsLocked();
   Enable();
   Disable();
   IsDisabled();
   SetFocus();
   SetValue(theValue:string);
   SetValueForInternet(theValue:string);
   GetValue():string;
   SetAllowedChars(AllowedChars:string);
   GetAllowedChars():string;
   SetTitle(theTitle:string);
   GetTitle():string;
   Check();
   SetForeColor(ForeColor:string);
   GetForeColor():string;
   SetBackColor(backColor:string);
   GetBackColor():string;
   SetButtonBackColor(backColor:string);
   GetButtonBackColor():string;
   SetAt(Text:string, pos:Number);
   GetAt(pos:Number):string;
   InsertAt(Text:string, pos:Number, Ascending:Boolean);
   InsertAtend(Text:string);
   DeleteAt(pos:Number);
   DeleteAll();
   UpDate();
   NoUpDate();
   SelectForInternet(Pos:Number);
   UnSelect(Pos:Number);
   UnSelectForInternet(Pos:Number);
   IsSelected(Pos:Number);
   Selection();
   Count();
   ShowAt(Pos:Number);
   HideAt(Pos:Number);
   IsHiddenAt(Pos:Number);
   EnableAt(Pos:Number);
   DisableAt(Pos:Number);
   IsDisabledAt(Pos:Number);
   SetForeColorAt(Pos:Number, tColors ForeColor:string);
   GetForeColorAt(Pos:Number):string;
   SetBackColorAt(Pos:Number, BackColor:string);
   GetBackColorAt(Pos:Number):string;
   SetFontAt(Pos:Number, FontName:string, FontSize:Number, FontSels:string);
   GetFontNameAt(Pos:Number):string;
   GetFontSizeAt(Pos:Number);
   GetFontSelsAt(Pos:Number):string;
   SetRelief(ReliefKind:string);
   GetRelief():string;
   SetExplanation(Text:string, ForeColor:string, BackColor:string, Font:string, ExplanationKinds:Number);
   SetIcon(IconName:string);
   SetTabulations(NbTabs:Number, PtrTo_Tabs:string);
   GetNbTabulations();
   GetTabulations(NbMaxTabs:Number, PtrTo_Tabs:string);
   SetSeparators(PtrTo_Separators:string);
   GetSeparators(PtrTo_Separators:string);
   EnableMessageOnClose();
   DisableMessageOnClose();
   SetFont(FontName:string, FontSize:Number, FontSels:string);
   GetFontName():string;
   GetFontSize();
   GetFontSels():string;
   ClipboardCut();
   ClipboardCopy();
   ClipboardPaste();
   SetShortKey(VKey:string, Flags:string, Ch:Number);
   GetShortKey(VKey:string, Flags:string, Ch:Number);
   SetNextTab(NextTab:aUIComponent);
   Flash(FlashMode:Number, Message:string, FlashOn:Boolean);
   SetNeededEvents(UserEventSet:string);
   GetNeededEvents():string;
   ProcessMessages();
   GetName():string;
   SetName(theName:string);
   GetItemFromPosition(X:Number, Y:Number);
   SetMinSize(MinWidth:Number, MinHeight:Number);
   GetMinSize(MinWidth:Number, MinWHeight:Number);
}
/**
*
*/
declare class aDlgWindow extends aUIComponent {
   Handle:string;
   QuitStatus:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   ChangePos();
   GetClientWidth();
   GetClientHeight();
   WillBeRemoved();
   GetFocus();
   LoseFocus();
   ReceiveDroppedObject();
   CanReceiveDroppedObject();
   Buttondown();
   ButtonUp();
   ButtonDblClk();
   MouseMove();
   GetChar();
   CaptureMouse();
   ReleaseMouse();
   Show();
   Hide();
   IsHidden();
   Maximize();
   Minimize();
   Restore();
   IsMinimized();
   IsMaximized();
   GetXPos();
   GetYPos();
   GetWidth();
   GetHeight();
   GetClientX();
   GetClientY();
   GetAbsoluteXPos();
   GetAbsoluteYPos();
   ChangeClientWidthHeight();
   ChangeClientAreaForInternet();
   Lock();
   Unlock();
   IsLocked();
   Enable();
   Disable();
   IsDisabled();
   SetFocus();
   SetTitle();
   GetTitle();
   Check();
   SetForeColor();
   GetForeColor();
   SetBackColor();
   GetBackColor();
   UpDate();
   NoUpDate();
   SetIcon();
   EnableMessageOnClose();
   DisableMessageOnClose();
   SetFont();
   GetFontName();
   GetFontSize();
   GetFontSels();
   ProcessMessages();
   GetName();
   SetName();
   SetMinSize();
   GetMinSize();
   Paint(ps:string, x:Number, y:Number, Width:Number, Height:Number);
   AddControl(theControl:aControl);
   DelControl(theControl:aControl);
   FindControlById(Id:Number);
   CreatePopupMenu(FatherWindow:aDlgWindow);
   ExecutePopupMenu(X:Number, Y:Number);
   CreateShellIcon(FatherWindow:aDlgWindow);
   DisableCallBack();
   EnableCallBack();
   OutControlGetFocus(theControl:aControl);
   OnGridEnter(theControl:aControl, Shift:Boolean);
   RangeHasChanged(OldWidth:Number, OldHeight:Number, NewWidth:Number, NewHeight:Number);
   PosHasChanged(OldX:Number, OldY:Number, NewX:Number, NewY:Number);
   Timer(IdTimer:Number);
   OnTerminate();
   HorzScrollBarSelected(Value:Number);
   VertScrollBarSelected(Value:Number);
   ChangePosForInternet(X:Number, Y:Number, Width:Number, Height:Number);
   SetOrgPos(X:Number, Y:Number, Width:Number, Height:Number);
   ChangeClientWidthHeightForInternet(Width:Number, Height:Number);
   GetClientXPos();
   GetClientYPos();
   GetBorderWidth();
   DelayedSetFocus(theControl:aControl, WithBeep:Boolean);
   IsFocusing();
   StartTimer(IdTimer:Number, Pulsation:Number);
   KillTimer(IdTimer:Number);
   SetMouseCaptingUIAgent(theNewMouseCaptingUIAgent:aUIAgent);
   Invalidate(x:Number, y:Number, Width:Number, Height:Number);
   InvalidateWindow();
   ScrollWindow(X:Number, Y:Number, W:Number, H:Number, dX:Number, dY:Number);
   OpenPS();
   ClosePS(PS:string);
   SetEnterControl(theControl:aControl);
   SetEscapeControl(theControl:aControl);
   EnterControl();
   EscapeControl();
   SetModal();
   Modalize(Time:Number);
   UnModalize(Id:Number);
   SetToolBarKind(Resizeable:Boolean);
   IsToolBarResizeable();
   SetToolBarSize(Size:Number);
   SetToolBarSizeForInternet(Size:Number);
   GetToolBarSize();
   Close(WithConfirmation:Boolean);
   DismissOrClose(WithConfirmation:Boolean);
   DropObject(X:Number, Y:Number, thisObject:aLightObject);
   DropObjectEx(X:Number, Y:Number, thisObject:aLightObject, TargetComponent:aUIComponent);
   CanDropObject(X:Number, Y:Number, thisObject:aLightObject);
   CanDropObjectEx(X:Number, Y:Number, thisObject:aLightObject, TargetComponent:aUIComponent);
   SetScroll(Horz:Boolean, Value:Number, Min:Number, Max:Number);
   IsInTopFolderWindow();
   SetScrollableWindow(ScrollableWindow:aDlgWindow, ScrollableWindowKinds:string);
   SetMaxScrollableWindowPos(MaxHScrollPos:Number, MaxVScrollPos:Number);
}
/**
*
*/
declare class aMenuWindow extends aDlgWindow {
   ClassName();
   ClassId();
   Init();
   Kill();
   GetFocus();
   LoseFocus();
   Executed();
   ReceiveDroppedObject();
   CanReceiveDroppedObject();
   Buttondown();
   ButtonUp();
   ButtonDblClk();
   MouseMove();
   GetChar();
   Paint();
   RangeHasChanged();
   OnTerminate();
}
/**
*
*/
declare class aDesignWindow extends aDlgWindow {
   myFrames:string;
   myMenu:string;
   IsShift:Boolean;
   IsDelete:Boolean;
   IsCtrl:Boolean;
   IsAlt:Boolean;
   Locked:Boolean;
   HasFocus:Boolean;
   MemPS:string;
   StartX:Number;
   StartY:Number;
   TrackX:Number;
   TrackY:Number;
   TopX:Number;
   TopY:Number;
   CharWidth:Number;
   CharHeight:Number;
   RulerWidth:Number;
   RulerHeight:Number;
   ZoomFactor:string;
   BackColor:string;
   MovingKind:Number;
   Tracking:Boolean;
   FastMoveMode:Boolean;
   TimerForSlowMoveCount:Number;
   DefaultFontName:string;
   UnityWidth:Number;
   UnityHeight:Number;
   IsPrinting:Boolean;
   XPage:Number;
   YPage:Number;
   WidthPage:Number;
   HeightPage:Number;
   PrinterPS:string;
   ManageZOrder:Boolean;
   ForceSlowMove:Boolean;
   TreeFrameMode:Boolean;
   SelectSmallerFrame:Boolean;
   ClassName();
   ClassId();
   Init();
   Kill();
   Select();
   GetFocus();
   LoseFocus();
   Buttondown();
   ButtonUp();
   ButtonDblClk();
   MouseMove();
   GetChar();
   Show();
   Hide();
   Lock();
   Unlock();
   IsLocked();
   SetBackColor();
   Paint();
   RangeHasChanged();
   Timer();
   OnTerminate();
   OpenPS();
   ClosePS();
   SetRulerWidthHeight(NewRulerWidth:Number, NewRulerHeight:Number);
   PutMenu();
   AssociateFrames();
   DissociateFrames();
   SelectAllFrames(X:Number, Y:Number, Width:Number, Height:Number);
   GetSelectedFramesPos(XMin:Number, YMin:Number, XMax:Number, YMax:Number, WithLinksPos:Boolean);
   GetFirstSelectedFrame();
   GetTopSelectedFrame();
   GetBottomSelectedFrame();
   GetNbSelectedFrames();
   GetNextFrame(thisFrame:aFrame, theNextFrame:aFrame, theNextFrameRank:Number);
   GetPrevFrame(thisFrame:aFrame, theNextFrame:aFrame, theNextFrameRank:Number);
   UnSelectAllFrames(XMin:Number, YMin:Number, XMax:Number, YMax:Number);
   AlignSelectedFrames(XMin:Number, YMin:Number, XMax:Number, YMax:Number, AlignKind:Number);
   MovingOperation(Xpos:Number, Ypos:Number, theSelectedFrame:aFrame, theSelectedFrameRank:Number);
   MoveFrames(WithThisMovingKind:Number, dx:Number, dy:Number, XMin:Number, YMin:Number, XMax:Number, YMax:Number);
   MoveFast(WithThisMovingKind:Number, OldDx:Number, OldDy:Number, dx:Number, dy:Number);
   AddFrame(thisFrame:aFrame, UnSelectOtherFrames:Boolean, DrawFrame:Boolean);
   CreateFrame(thisUIAgent:aUIAgent, X:Number, Y:Number, Width:Number, Height:Number, IAmSelected:Boolean, UnSelectOtherFrames:Boolean, DrawFrame:Boolean, FrameOwner:aFrame);
   TryToDeleteSelectedFrames();
   DestroyToDeleteFrames(XMin:Number, YMin:Number, XMax:Number, YMax:Number);
   UpDateGroupOfFramesPos();
   CreateMemPS();
   DestroyMemPS();
   DrawFrames(ps:string, x:Number, y:Number, Width:Number, Height:Number);
   DrawBackLinks(ps:string, x:Number, y:Number, Width:Number, Height:Number);
   DrawRulers(ps:string, x:Number, y:Number, Width:Number, Height:Number);
   InvalidateFrames(X:Number, Y:Number, Width:Number, Height:Number);
   MoveFramesWithCursor(VKey:string, BorderMove:Boolean, GreatMove:Boolean, AlignMove:Boolean);
   SelectFramesWithKeyboard(VKey:string);
   HorzReverseSelectedFrames();
   VertReverseSelectedFrames();
   EnterPressed();
   MoreSelectedFrameInfo();
   SelectedFramesChanged();
   RecalcPosOfFrames(OldTopX:Number, OldTopY:Number, OldZoomFactor:string, OldRulerWidth:Number, OldRulerHeight:Number, NewTopX:Number, NewTopY:Number, NewZoomFactor:string, NewRulerWidth:Number, NewRulerHeight:Number);
   SetZoomFactor(NewZoomFactor:string, X:Number, Y:Number);
   OpenFontPool(Ps:string);
   CloseFontPool(Ps:string);
   SelectFont(Ps:string, FontName:string, FontSize:Number, FontSels:string);
   SetDefaultFont(FontName:string);
   SetUnityWidthHeight(NewUnityWidth:Number, NewUnityHeight:Number);
   GetFrameAt(X:Number, Y:Number);
   Print(ps:string, X:Number, Y:Number, Width:Number, Height:Number);
   SendToFront();
   SendToBack();
   MakeFrameVisible(ThisFrame:aFrame);
   SetTop(X:Number, Y:Number);
   CenterOnPos(X:Number, Y:Number);
   DrawLinks(ps:string, x:Number, y:Number, Width:Number, Height:Number, Fore:Boolean);
   DrawForeLinks(ps:string, x:Number, y:Number, Width:Number, Height:Number);
   SetSlowMove();
}
/**
*
*/
declare class aWPFWrapperDlgWindow extends aDlgWindow {
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aGetBoxWindow extends aDlgWindow {
   ClassName();
   ClassId();
   Init();
   Executed();
   Buttondown();
   ButtonUp();
   MouseMove();
   GetChar();
   Paint();
   OnTerminate();
}
/**
*
*/
declare class aGraphicWindow extends aDlgWindow {
   ClassName();
   ClassId();
   ChangePos();
   SetOrgPos();
}
/**
*
*/
declare class aReportWindow extends aGraphicWindow {
   ClassName();
   ClassId();
   Kill();
   ReceiveDroppedObject();
   CanReceiveDroppedObject();
   GetChar();
   Paint();
   RangeHasChanged();
   Timer();
}
/**
*
*/
declare class aFolderWindow extends aGraphicWindow {
   theFolderList:string;
   theCurrentRank:Number;
   ClassName();
   ClassId();
   Init();
   Kill();
   Select();
   CanReceiveDroppedObject();
   Buttondown();
   ButtonDblClk();
   MouseMove();
   SetForeColor();
   GetForeColor();
   SetBackColor();
   GetBackColor();
   SetAt();
   GetAt();
   InsertAt();
   InsertAtend();
   DeleteAt();
   DeleteAll();
   UpDate();
   NoUpDate();
   SelectForInternet();
   UnSelect();
   IsSelected();
   Selection();
   Count();
   ShowAt();
   HideAt();
   IsHiddenAt();
   EnableAt();
   DisableAt();
   IsDisabledAt();
   SetForeColorAt();
   GetForeColorAt();
   SetBackColorAt();
   GetBackColorAt();
   SetFontAt();
   GetFontNameAt();
   GetFontSizeAt();
   GetFontSelsAt();
   SetFont();
   GetFontName();
   GetFontSize();
   GetFontSels();
   Paint();
   Timer();
   GetDossierX();
   GetDossierY();
   GetDossierWidth();
   GetDossierHeight();
   Append(thisString:string, thisWidth:Number);
   CalculateAutoWidth();
   SetFirstVisibleFolder(Pos:Number);
   Clear();
   Redraw();
   DossierResize();
}
/**
*
*/
declare class aTreeWindow extends aGraphicWindow {
   ClassName();
   ClassId();
   Init();
   Kill();
   Select();
   DisableWhenDebugging();
   EnableAfterDebugging();
   LoseFocus();
   Executed();
   Buttondown();
   ButtonUp();
   ButtonDblClk();
   MouseMove();
   Lock();
   Unlock();
   Enable();
   Disable();
   IsDisabled();
   UpDate();
   NoUpDate();
   SelectForInternet();
   Selection();
   RangeHasChanged();
   Timer();
   NodeFromKey(Key:Number);
   KeyFromNode(Node:string);
   NewNode(father:string, Data:string, ForceChild:Boolean, NameOfNode:string);
   InsertNewNode(Before:string, Data:string, ForceChild:Boolean, NameOfNode:string);
   Purge();
   ExpandBranch(Node:string);
   Expand(Node:string);
   Collapse(Node:string);
   CollapseBranch(Node:string);
   ExpandForInternet(Node:string);
   CollapseForInternet(Node:string);
   GetData(Node:string);
   GetText(Node:string):string;
   GetNodeGeometry(Node:string, x:Number, y:Number, w:Number, h:Number);
   NodeFromXY(X:Number, Y:Number);
   SelectNode(Node:string);
   DraggedNode();
   SetDraggedNode(Node:string);
   FatherNodeOf(thisNode:string);
   ChildNodeOf(thisNode:string);
   SetTextTo(thisNode:string, thisText:string);
   SetDataTo(thisNode:string, thisData:string);
   SetInfoTo(thisNode:string, ForceChild:Boolean, Data:string);
   GetInfoFrom(thisNode:string, Expanded:Boolean, ForceChild:Boolean, Father:string, Child:string, PreviousNode:string, NextNode:string, Text:string, Data:string);
   PrevNodeOf(thisNode:string);
   NextNodeOf(thisNode:string);
   RootNode();
   LastNode();
   IterateNextNodeOf(thisNode:string);
   GetRankFromNode(Node:string);
   GetNodeFromRank(Rank:Number);
   GetChildIndex(Father:string, Child:string);
   GetIndexedChild(Father:string, Index:Number);
   SelectedNode();
   DisposeNode(thisNode:string);
   DisposeChilds(thisNode:string);
   FindNodeFromData(thisData:string);
   NodeExist(PossibleNode:string);
   MakeThisNodeVisible(thisNode:string);
   BeginLabelEdit(Node:string);
   EndLabelEdit(Node:string, NewText:string);
}
/**
*
*/
declare class aBubbleWindow extends aGraphicWindow {
   ClassName();
   ClassId();
   Paint();
}
/**
*
*/
declare class aPresentWindow extends aDlgWindow {
   ClassName();
   ClassId();
   Init();
   Kill();
   Paint();
   Timer();
}
/**
*
*/
declare class aSplitWindow extends aDlgWindow {
   ClassName();
   ClassId();
   Init();
   Kill();
   ChangePos();
   Buttondown();
   ButtonUp();
   MouseMove();
   Paint();
   Timer();
   SetOrgPos();
   Append(Percent:string);
   GetZoneX(Rank:Number);
   GetZoneY(Rank:Number);
   GetZoneWidth(Rank:Number);
   GetZoneHeight(Rank:Number);
   ZoneMoved(NumZone:Number, Percent:string);
   SetSeparatorPosition(SeparatorRank:Number, Percent:string);
}
/**
*
*/
declare class aConsoleWindow extends aDlgWindow {
   ClassName();
   ClassId();
   Init();
}
/**
*
*/
declare class aDelayedCancellerWindow extends aDlgWindow {
   ClassName();
   ClassId();
   Init();
   Timer();
}
/**
*
*/
declare class aMenu extends aUIComponent {
   ClassName();
   ClassId();
   Init();
   Kill();
   ReceiveDroppedObject();
   CanReceiveDroppedObject();
   UpDate();
}
/**
*
*/
declare class aMenuItem extends aUIComponent {
   ClassName();
   ClassId();
   Init();
   Kill();
   ReceiveDroppedObject();
   CanReceiveDroppedObject();
}
/**
*
*/
declare class aSeparatorMenuItem extends aMenuItem {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aConstructorMenuItem extends aMenuItem {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aFrame extends aUIComponent {
   X:Number;
   Y:Number;
   Width:Number;
   Height:Number;
   IAmSelected:Boolean;
   Locked:Boolean;
   IMustBeDeleted:Boolean;
   myWindow:string;
   myGroup:string;
   myBelongings:string;
   myOwner:string;
   myAttachedFrames:string;
   myMaster:string;
   FramesLinkedFromMe:string;
   FramesLinkedToMe:string;
   mDx:Number;
   mDy:Number;
   ExpectedX:Number;
   ExpectedY:Number;
   ExpectedWidth:Number;
   ExpectedHeight:Number;
   ClassName();
   ClassId();
   Init();
   Kill();
   Select();
   Buttondown();
   ButtonUp();
   MouseMove();
   CaptureMouse();
   ReleaseMouse();
   Lock();
   Unlock();
   IsLocked();
   ScreenX();
   ScreenY();
   IsMeOrMyGroupSelected();
   MustBeMoved();
   Paint(ps:string, xPaint:Number, yPaint:Number, WidthPaint:Number, HeightPaint:Number, LineKind:Number, BorderColor:string, SizeBorderColor:string);
   DrawBackLinks(ps:string, xPaint:Number, yPaint:Number, WidthPaint:Number, HeightPaint:Number);
   DrawWhenFastDrag(PS:string, OldDX:Number, OldDY:Number, OldDW:Number, OldDH:Number, NewDX:Number, NewDY:Number, NewDW:Number, NewDH:Number);
   PrepareDrag(PS:string);
   FinishDrag(PS:string);
   CalcRectFromPos(xMin:Number, yMin:Number, xMax:Number, yMax:Number);
   CalcRectFromLinks(xMin:Number, yMin:Number, xMax:Number, yMax:Number);
   CalcRectFromPosAndLinks(xMin:Number, yMin:Number, xMax:Number, yMax:Number);
   MovingOperation(Xpos:Number, Ypos:Number);
   UpDatePos();
   UpDateGroupPos(XMin:Number, YMin:Number, XMax:Number, YMax:Number);
   AuthorizedDx(Dx:Number);
   AuthorizedDy(Dy:Number);
   AuthorizedDw(Dw:Number);
   AuthorizedDh(Dh:Number);
   CalcAuthorizedDxDyDwDh(Dx:Number, Dy:Number, Dw:Number, Dh:Number, DxAuthorized:Number, DyAuthorized:Number, DwAuthorized:Number, DhAuthorized:Number);
   CalcAuthorizedDxDyDwDhFor(thisPoint:aFrame, Dx:Number, Dy:Number, Dw:Number, Dh:Number, DxAuthorized:Number, DyAuthorized:Number, DwAuthorized:Number, DhAuthorized:Number);
   CanChangeWidth();
   CanChangeHeight();
   IncX(Dx:Number);
   IncY(Dy:Number);
   IncWidth(Dw:Number);
   IncHeight(Dh:Number);
   FrameButtonDblClk(no:Number, XPos:Number, YPos:Number, IsShift:Boolean, IsCtrl:Boolean, IsAlt:Boolean);
   FrameGetChar(Ch:Number, VKey:string, CharCount:Number, Flags:string);
   MoreInfo();
   SetPos(NewX:Number, NewY:Number, NewW:Number, NewH:Number, MustRepaint:Boolean);
   CanBeDeleted();
   Destroy();
   DestroyOnlyDesign();
   MarkLinksToDestroy();
   DestroyToDeleteFrames(XMin:Number, YMin:Number, XMax:Number, YMax:Number);
   RecalcPos(OldTopX:Number, OldTopY:Number, OldZoomFactor:string, OldRulerWidth:Number, OldRulerHeight:Number, NewTopX:Number, NewTopY:Number, NewZoomFactor:string, NewRulerWidth:Number, NewRulerHeight:Number);
   HasLinkTo(thisFrame:aFrame);
   HasLinkFrom(thisFrame:aFrame);
   ReposPoints(OldX:Number, OldY:Number, OldWidth:Number, OldHeight:Number);
   FrameCenterX();
   FrameCenterY();
   SetFrameCenter(NewCenterX:Number, NewCenterY:Number);
   ResetPos(MustRepaint:Boolean);
   DrawLinks(ps:string, xPaint:Number, yPaint:Number, WidthPaint:Number, HeightPaint:Number, Fore:Boolean);
   CanBeSelected();
   PutToMoveList(MoveList:aListOfInstances);
   ReposPoint(CurPoint:aFrame, OldX:Number, OldY:Number, OldWidth:Number, OldHeight:Number, Dx:Number, Dy:Number, Dw:Number, Dh:Number);
   Move(WithThisMovingKind:Number, CurDx:Number, CurDy:Number, dx:Number, dy:Number, XMin:Number, YMin:Number, XMax:Number, YMax:Number);
   GiveForm();
   DefaultAdjust();
   CalcExpectedPos();
   RestoreForm();
   SetPosToExpected(MustRepaint:Boolean);
   CalcExpectedReposForFrame(ThisFrame:aFrame);
   DefaultCalcExpectedReposFromMaster();
}
/**
*
*/
declare class aGroupOfFrames extends aFrame {
   myFrames:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   Lock();
   Unlock();
   Paint();
   DrawWhenFastDrag();
   PrepareDrag();
   FinishDrag();
   CalcRectFromLinks();
   UpDatePos();
   CanChangeWidth();
   CanChangeHeight();
   FrameButtonDblClk();
   SetPos();
   CanBeDeleted();
   Destroy();
   MarkLinksToDestroy();
   DestroyToDeleteFrames();
   RecalcPos();
   DrawLinks();
   CalcExpectedReposForFrame();
}
/**
*
*/
declare class aLine extends aFrame {
   myPoints:string;
   ClassName();
   ClassId();
   Init();
   Kill();
}
/**
*
*/
declare class aPoint extends aFrame {
   PrevPoint:string;
   NextPoint:string;
   ForeLink:Boolean;
   ClassName();
   ClassId();
   Init();
   Kill();
   DrawWhenFastDrag();
   PrepareDrag();
   CalcRectFromLinks();
   MovingOperation();
   AuthorizedDx();
   AuthorizedDy();
   AuthorizedDw();
   AuthorizedDh();
   CanChangeWidth();
   CanChangeHeight();
   MarkLinksToDestroy();
   RecalcPos();
   DrawLinks();
   CenterX();
   CenterY();
   SetCenter(NewCenterX:Number, NewCenterY:Number);
}
/**
*
*/
declare class aControl extends aUIComponent {
   ClassName();
   ClassId();
   Init();
   Kill();
   ChangePos();
   GetClientWidth();
   GetClientHeight();
   Select();
   WillBeRemoved();
   DisableWhenDebugging();
   EnableAfterDebugging();
   CaptureMouse();
   ReleaseMouse();
   Show();
   Hide();
   IsHidden();
   GetXPos();
   GetYPos();
   GetWidth();
   GetHeight();
   GetClientX();
   GetClientY();
   GetAbsoluteXPos();
   GetAbsoluteYPos();
   ChangeClientAreaForInternet();
   SetRange();
   GetCursor();
   SetCursor();
   Lock();
   Unlock();
   IsLocked();
   Enable();
   Disable();
   IsDisabled();
   SetFocus();
   SetValue();
   SetValueForInternet();
   GetValue();
   SetAllowedChars();
   GetAllowedChars();
   SetTitle();
   GetTitle();
   Check();
   SetForeColor();
   GetForeColor();
   SetBackColor();
   GetBackColor();
   SetButtonBackColor();
   GetButtonBackColor();
   SetAt();
   GetAt();
   InsertAt();
   InsertAtend();
   DeleteAt();
   DeleteAll();
   UpDate();
   NoUpDate();
   SelectForInternet();
   UnSelect();
   UnSelectForInternet();
   IsSelected();
   Selection();
   Count();
   SetRelief();
   GetRelief();
   SetExplanation();
   SetFont();
   GetFontName();
   GetFontSize();
   GetFontSels();
   ClipboardCut();
   ClipboardCopy();
   ClipboardPaste();
   SetShortKey();
   GetShortKey();
   SetNextTab();
   ProcessMessages();
   GetName();
   SetName();
   GetItemFromPosition();
}
/**
*
*/
declare class aXAMLControl extends aControl {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aWPFControl extends aXAMLControl {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aWPFEmbeddedControl extends aWPFControl {
   ClassName();
   ClassId();
   Kill();
   SetForeColor();
   GetForeColor();
   SetBackColor();
   GetBackColor();
}
/**
*
*/
declare class aWPFContainerControl extends aWPFControl {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aMonthCalCtrl extends aControl {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aDateTimeCtrl extends aControl {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aListCtrl extends aControl {
   ClassName();
   ClassId();
   SetValueForInternet();
   SetTabulations();
   GetNbTabulations();
   GetTabulations();
   SetSeparators();
   GetSeparators();
   Flash();
   GetStringWidth(Text:string);
}
/**
*
*/
declare class aListTreeCtrl extends aListCtrl {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aMenuItemControl extends aControl {
   ClassName();
   ClassId();
   Kill();
   ChangePos();
   Executed();
}
/**
*
*/
declare class aBitMapControl extends aControl {
   ClassName();
   ClassId();
   Executed();
   SetValue();
}
/**
*
*/
declare class aOleControl extends aControl {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aIconControl extends aControl {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aPushButton extends aControl {
   ClassName();
   ClassId();
   Executed();
   SetBackColorAt();
   SetTransparency(Value:Boolean);
   GetTransparency();
}
/**
*
*/
declare class aCheckBox extends aControl {
   ClassName();
   ClassId();
   Flash();
}
/**
*
*/
declare class aRadioButton extends aControl {
   ClassName();
   ClassId();
   Selected();
   Flash();
}
/**
*
*/
declare class aScrollBar extends aControl {
   ClassName();
   ClassId();
   SelectForInternet();
}
/**
*
*/
declare class aVertScrollBar extends aScrollBar {
   ClassName();
   ClassId();
   Selected();
   SetValue();
   SetValueForInternet();
   GetValue();
}
/**
*
*/
declare class aHorzScrollBar extends aScrollBar {
   ClassName();
   ClassId();
   Selected();
   SetValue();
   SetValueForInternet();
   GetValue();
}
/**
*
*/
declare class aComboBoxEntry extends aControl {
   ClassName();
   ClassId();
   SetValueForInternet();
}
/**
*
*/
declare class aComboBox extends aControl {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aListBox extends aControl {
   ClassName();
   ClassId();
   SetValueForInternet();
   SetTabulations();
   GetNbTabulations();
   GetTabulations();
   SetSeparators();
   GetSeparators();
}
/**
*
*/
declare class aMLE extends aControl {
   ClassName();
   ClassId();
   Select();
   SetValueForInternet();
}
/**
*
*/
declare class aEntryField extends aControl {
   ClassName();
   ClassId();
   SetValueForInternet();
}
/**
*
*/
declare class aGroupBox extends aControl {
   ClassName();
   ClassId();
   ChangePos();
}
/**
*
*/
declare class aStaticText extends aControl {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aGauge extends aLightObject {
   Laps:string;
   ClassName();
   ClassId();
   SetTo(Value:Number);
   SetMaxTo(Value:Number);
   Dec(Value:Number);
   inc(Value:Number);
}
/**
*
*/
declare class aTextSearcher extends aLightObject {
   WholeWord:Boolean;
   UpCaseDependent:Boolean;
   AskConfirmation:Boolean;
   OnlyInSelection:Boolean;
   WantedString:string;
   NewString:string;
   theObjectWithText:string;
   ptheTextVar:string;
   theTextType:string;
   line:Number;
   column:Number;
   curPos:Number;
   TextHasChanged:Boolean;
   ChangesNumber:Number;
   DisplayGauge:Boolean;
   theApplication:aApplication;
   BatchMode:Boolean;
   Found:Boolean;
   ClassName();
   ClassId();
   Init();
   Kill();
   Search();
   SearchNext();
   SearchPrev();
   SearchAndReplace();
   UISearch(theUIAgent:aUIAgent);
   UISearchNext(theUIAgent:aUIAgent);
   UISearchPrev(theUIAgent:aUIAgent);
   UISearchAndReplace(theUIAgent:aUIAgent);
   PopupSearchBox(theUIAgent:aUIAgent);
}
/**
*
*/
declare class aDynamicMultiLangBrokerRoot extends aLightObject {
   ClassName();
   ClassId();
   GetTextFor(ThisEntity:aEntity):string;
   GetExplanationTextFor(Qualifier:aQVPWithExplanation):string;
   GetConstAddressValueFor(theConstString:aConstString);
   GetConstTranslationForLanguage(theConstString:aConstString, LanguageRank:Number):string;
   GetNoneStringFor(theEntity:aEntity):string;
   GetCurrentTraductionRank();
   GetCurrentLanguage();
   SetCurrentLanguage(theLanguage:aEntity);
   GetCurrentEntityTranslation(theEntity:aEntity);
}
/**
*
*/
declare class aHistorianItem extends aLightObject {
   NsId:Number;
   Id:Number;
   Version:Number;
   IsFrozen:Boolean;
   CreationDate:string;
   CreationTime:Number;
   StringExtract();
   ClassName();
   ClassId();
}
/**
*
*/
declare class aHistorian extends aLightObject {
   Versions:string;
   StringExtract();
   ClassName();
   ClassId();
   Kill();
   DeleteFrozenVersion(theUIAgent:aUIAgent);
}
/**
*
*/
declare class aClassInfo extends aLightObject {
   theClass:string;
   theCurrentClassInfo:string;
   otherVersions:string;
   isCurrent:Boolean;
   theClassName:string;
   theClassId:Number;
   theClassVersion:Number;
   StringExtract();
   ClassName();
   ClassId();
   Kill();
   CurrentClassInfo();
}
/**
*
*/
declare class aSystemInfo extends aLightObject {
   systemInterpretedClasses:string;
   systemCompiledClasses:string;
   ApplicativeInterpretedClasses:string;
   ApplicativeCompiledClasses:string;
   nbreLightClasses:Number;
   nbreFullClasses:Number;
   SearchedClassName:string;
   NumberFOFound:Number;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   Kill();
   GetFullObjectNumber();
   GetLightObjectNumber();
   GetNbAllocatedBlocks();
   GetAllocatedBlocksSize();
   MemorySpaceTaken();
   UpdateFONumberFromClassName();
}
/**
*
*/
declare class aClassDispatcher extends aLightObject {
   allModules:string;
   allClasses:string;
   currentModule:string;
   CurrentModuleClasses:string;
   ClassName();
   ClassId();
   GetCurrentModuleName():string;
}
/**
*
*/
declare class aFilePicker extends aLightObject {
   FileToSelect:string;
   theCurrentDirFilesList:string;
   theDirectoriesList:string;
   theDisksList:string;
   mustCheckExistanceOfFile:Boolean;
   ClassName();
   ClassId();
   Init();
   IsValid();
   ParamInteract();
   CurrentDirectory():string;
   FullFileName():string;
}
/**
*
*/
declare class aThreadMessage extends aLightObject {
   ClassName();
   ClassId();
   Post();
   ExecuteMessageAndKillIt(Param:Number);
}
/**
*
*/
declare class aConsoleLauncher extends aLightObject {
   InternalNonPartageAbleOutText:string;
   OutText:string;
   CmdLine:string;
   MustWait:Boolean;
   AbortMsg:string;
   Aborted:Boolean;
   NbrLine:Number;
   NbrLineMax:Number;
   ExtendedCmdLine:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   Execute();
   BlankText();
   AddProcessToExecute(CmdLine:string);
   ExecuteExtendedCmdLine();
}
/**
*
*/
declare class aFontPool extends aLightObject {
   ClassName();
   ClassId();
   Kill();
   SelectFont(Ps:string, FontName:string, FontSize:Number, FontSels:string);
}
/**
*
*/
declare class aFont extends aLightObject {
   ClassName();
   ClassId();
   Kill();
}
/**
*
*/
declare class aPickableCandidate extends aLightObject {
   Description:string;
   theFullId:string;
   theClassId:Number;
   MemoryObject:string;
   StringExtract();
   ClassName();
   ClassId();
   Kill();
   GetObject();
   IsAFakeOf(thisObject:aFullObject);
}
/**
*
*/
declare class aInListPicker extends aLightObject {
   Candidates:string;
   SelectedRank:Number;
   SelectedObject:string;
   Title:string;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   GetObjectFromGetBoxAt(X:Number, Y:Number, ExtractKind:string, ExtractLength:Number, ExtractParam:Number);
   Consult(theUIAgent:aUIAgent);
}
/**
*
*/
declare class aPicker extends aInListPicker {
   AcceptedClassDefs:string;
   AcceptedClassDefsAndDescendants:string;
   AcceptedOnlyDescendantsOfClassDefs:string;
   theAPDesc:aAccessPlanDesc;
   DescendantsAccepted:Boolean;
   OnlyDescendantsAccepted:Boolean;
   OnlyCurrentVersion:Boolean;
   OnlyNotFinalCurrentVersion:Boolean;
   LoadedCandidates:aListOfInstances;
   onlyLoadedCandidates:Boolean;
   mustCheckInMem:Boolean;
   SelectionArgument:string;
   ConsultScenario:string;
   PickerWithoutArgument:Boolean;
   myList:string;
   noMore:Boolean;
   mySelector:string;
   FromThisObject:aFullObject;
   ToBeRemovedxxxxxxxxxxxxxxxxxxxxxxforThisRole:string;
   ToBeRemovedxxxxxxxxxxxxxxxxxxxxxxFromThisObject:string;
   ToBeRemovedxxxxxxxxxxxxxxxxxxxxxxpFromThisVar:string;
   ToBeRemovedxxxxxxxxxxxxxxxxxxxxxxAcceptedClass:string;
   StringExtract();
   ClassName();
   ClassId();
   Kill();
   NewSelector();
   FirstPage();
   ViewObject(theUIAgent:aUIAgent);
   Pick(theUIAgent:aUIAgent);
   Select();
   SearchAndPickxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxToBeRemoved(Argument:string, usingSelectionScenario:aScenario, AcceptedClassIfNoRole:string, FromThisRole:aSingleRoleType, FromThatObject:aFullObject, FromThisVar:string);
   CandidateStringExtract(thisCandidate:aPickableCandidate):string;
   UpdateCadidatesFromMyList();
   AlertNoChoice();
   SearchAndPick(Argument:string, usingSelectionScenario:aScenario);
   ReInitWhatIsAccepted();
   AppendAcceptedClassDef(thisClassDef:aClassDef, AcceptDescendants:Boolean, AcceptOnlyDescendants:Boolean);
   NewCandidate();
   NextPage();
   BatchSize();
   GetObjectFromCandidateRank(r:Number);
}
/**
*
*/
declare class aRegex extends aLightObject {
   ClassName();
   ClassId();
   Init();
   Kill();
   SetString(_str:string);
   SetText(txt:string);
   SetMatchOptions(options:string);
   MatchesString(_str:string);
   MatchesText(txt:string);
   IsValidRegex();
   SetFormatString(_str:string);
   SetFormatText(txt:string);
   ReplaceString(_str:string);
   ReplaceText(txt:string);
   SetFormatOptions(options:string);
   AddStringMatchesToSequence(_str:string, matches:string);
   GetFirstStringMatch(_str:string);
   AddTextMatchesToSequence(txt:string, matches:string);
   GetFirstTextMatch(txt:string);
   GetMatchOptions():string;
   GetOptions():string;
   GetFormatOptions():string;
   SetOptions(options:string);
   GetString(_str:string);
   GetText(txt:string);
   GetFormatString(_str:string);
   GetFormatText(txt:string);
}
/**
*
*/
declare class aXAMLRuntimeAgent extends aLightObject {
   ClassName();
   ClassId();
   NotifyResourceChanged(name:string, value:string);
   NotifyEvent(eventName:string, serializedEvent:string);
}
/**
*
*/
declare class aXTRTEventHandler extends aXAMLRuntimeAgent {
   ClassName();
   ClassId();
   NotifyResourceChanged();
   NotifyEvent();
}
/**
*
*/
declare class aListItemBindingBroker extends aXAMLRuntimeAgent {
   ClassName();
   ClassId();
   NotifyResourceChanged();
   NotifyEvent();
   CreateBinding(pBindingData:string, pListItem:string, hostUIAgent:aXAMLUIAgent, xamlControl:aXAMLControl);
   UpdateBinding(pBindingData:string, pListItem:string, hostUIAgent:aXAMLUIAgent, xamlControl:aXAMLControl);
   DeleteBinding(pBindingData:string, hostUIAgent:aXAMLUIAgent, xamlControl:aXAMLControl);
   GetParameterListClass();
   FreeBindingData(pBindingData:string);
}
/**
*
*/
declare class aLOIExtractIBB extends aListItemBindingBroker {
   ClassName();
   ClassId();
   NotifyResourceChanged();
   CreateBinding();
   UpdateBinding();
   DeleteBinding();
   GetParameterListClass();
   FreeBindingData();
}
/**
*
*/
declare class aBAUIAgentToXAMLRTAgentAdapter extends aXAMLRuntimeAgent {
   ClassName();
   ClassId();
   NotifyResourceChanged();
   NotifyEvent();
}
/**
*
*/
declare class aXAMLUIAgentToXAMLRTAgentAdapter extends aXAMLRuntimeAgent {
   ClassName();
   ClassId();
   NotifyResourceChanged();
   NotifyEvent();
}
/**
*
*/
declare class aXAMLResourceIndexer extends aLightObject {
   ClassName();
   ClassId();
   Init();
   Kill();
   CreateNextIndex(forThisCategory:string);
   GetCurrentIndex(forThisCategory:string);
   GetResourceCategoryKey(ofThisCategory:string, withThisPrefix:string):string;
}
/**
*
*/
declare class aXAMLEntityVisitor extends aLightObject {
   ClassName();
   ClassId();
   VisitTemplateFragment(fragment:aXAMLTemplateFragment);
   VisitXTVBWithScen(xtvbWithScen:aXTVBWithScen);
   VisitXTVBForAttribute(xtvbForAttribute:aXTVBForAttribute);
   VisitXTMLText(xtmlText:aXTMLText);
   VisitXAMLEntity(xamlEntity:aXAMLEntity);
   VisitXTComponentEventsDesc(xtEventHandlerDesc:aXTComponentEventsDesc);
   VisitXTEventDesc(xtEventDesc:aXTEventDesc);
   VisitXTImageSource(xtImageSource:aXTImageSource);
   VisitXTInsertionPoint(xtInsertionPoint:aXTInsertionPoint);
}
/**
*
*/
declare class aXTEventDescLister extends aXAMLEntityVisitor {
   eventDescs:string;
   ClassName();
   ClassId();
   Init();
   VisitXTEventDesc();
}
/**
*
*/
declare class aXAMLEntityLister extends aXAMLEntityVisitor {
   xamlEntities:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   VisitTemplateFragment();
   VisitXTVBWithScen();
   VisitXTVBForAttribute();
   VisitXTMLText();
   VisitXAMLEntity();
   VisitXTComponentEventsDesc();
   VisitXTEventDesc();
   VisitXTImageSource();
   VisitXTInsertionPoint();
}
/**
*
*/
declare class aXTMLTextLister extends aXAMLEntityVisitor {
   mlTexts:string;
   ClassName();
   ClassId();
   Init();
   VisitXTMLText();
}
/**
*
*/
declare class aXTVBLister extends aXAMLEntityVisitor {
   vbWithScens:string;
   vbForAttributes:string;
   ClassName();
   ClassId();
   Init();
   VisitXTVBWithScen();
   VisitXTVBForAttribute();
}
/**
*
*/
declare class aReport extends aLightObject {
   ReportIsCreated:Boolean;
   DefaultX:Number;
   DefaultY:Number;
   StringExtract();
   ClassName();
   ClassId();
   Init();
   Kill();
   Write(theString:string);
   WriteLn(theString:string);
   CreateReportWindow();
   CloseReportWindow(WithConfirmation:Boolean);
   SetFocusOnReportWindow();
   Pause(theString:string);
   CloseAllReports();
}
/**
*
*/
declare class aPainter extends aLightObject {
   ManualProcessing:Boolean;
   ClassName();
   ClassId();
   ProcessNext();
   Paint(ps:string, Width:Number, Height:Number);
}
/**
*
*/
declare class aAproposPainter extends aPainter {
   Pts:string;
   Faces:string;
   Alpha:string;
   Beta:string;
   Gamma:string;
   ClassName();
   ClassId();
   Init();
   Kill();
   ProcessNext();
   Paint();
   InitFacesAndPoints();
   appendPoint(x:string, y:string, z:string);
   AppendNewFace(Color:string, DrawBorder:Boolean);
   AppendPointsToLastFace(thisPointsRank:Number);
   SetLineColorToLastFace(Color:string);
}
/**
*
*/
declare class aProduced extends aLightObject {
   curMethodDesc:aMethodDesc;
   ppText:string;
   pListOfEntities:string;
   FileName:string;
   numCharIndent:Number;
   ClassName();
   ClassId();
   Write(WriteWhat:string);
   Writeln(WriteWhat:string);
   Indent();
   Unindent();
   AppendEntity(ThisEntity:aEntity);
   InitProduce(P:string);
   TerminateProduce(Options:string);
   IsFileDifferent();
   FlushInFile();
   AppendWhereBindInfo(MMType:aType, OpNode:string, ConvertEnumToSet:Boolean, ConvertTo:aType);
}
/**
*
*/
declare class aProducedSQL extends aProduced {
   SelectedCols:aListOfInstances;
   SelectedColInfos:aListOfInstances;
   theSQLTableList:aListOfInstances;
   WhereBindInfos:aListOfInstances;
   WhereBindBuffer:string;
   FromClass:aListOfInstances;
   ProduceCPP:Boolean;
   DontProduceSQLString:Boolean;
   OnlyPKWhenSelectStar:Boolean;
   ProducingForDelete:Boolean;
   ProducingDeleteForAlias:Number;
   ProducingDeleteFor:aSqlClassDefRepresentation;
   theAcceptDescendantsOriginalClassDefList:aListOfInstances;
   CurAcceptDescendantSelectAllRank:Number;
   ClassName();
   ClassId();
   Kill();
   InitProduce();
   TerminateProduce();
   AppendWhereBindInfo();
   ProduceFromTables(Options:string);
   AddLastVersionForClass(forClass:aClassDef, VarFullName:string);
   ProduceWhereJoins(Options:string, WriteAnd:Boolean);
   ProduceImplicitWhereClause(Options:string, WriteAnd:Boolean);
   AddImplicitJoin(JoinTableDesc:aSqlTableDesc, JoinClassRepresented:aClassDef, JoinColDesc:aSqlDesc, JoinVarFullName:string, ToTableDesc:aSqlTableDesc, ToClassRepresented:aClassDef, ToVarFullName:string, PreciseVersion:Boolean);
}
/**
*
*/
declare class aProducedGold extends aProduced {
   theLines:string;
   theIdentifiersOrigin:string;
   NumWrappedLines:Number;
   WithIds:Boolean;
   WithDebugInfo:Boolean;
   WrapAtAndOr:Boolean;
   ClassName();
   ClassId();
   InitProduce();
}
/**
*
*/
declare class aProdCPP extends aProduced {
   WhereBindInfos:aListOfInstances;
   ClassName();
   ClassId();
   Kill();
   InitProduce();
   AppendWhereBindInfo();
   UniqueOqlRequestName(:string);
   UniqueOqlRequestNameForDBDef(forDBDef:aDBDef):string;
}
/**
*
*/
declare class aKruncher extends aLightObject {
   inBuffer:string;
   outBuffer:string;
   outTotalLen:Number;
   isInError:Boolean;
   fillerHandle:string;
   flusherHandle:string;
   ClassName();
   ClassId();
   fillExpandFlush();
   endCompress();
   compressAll();
   initialize(whatFor:Number, inputBufferSize:Number, outputBufferSize:Number);
   ReInitialize(whatFor:Number, inputBufferSize:Number, outputBufferSize:Number);
   destroy();
   acceptInput(PtrTo_buffer:string, bufferSize:Number);
   acceptOutput(PtrTo_buffer:string, bufferSize:Number);
   acceptFiller(fillerFunc:string, theFillerHandle:string);
   acceptFlusher(flusherFunc:string, theFlusherHandle:string);
}
/**
*
*/
declare class aFileKruncher extends aKruncher {
   ClassName();
   ClassId();
}
/**
*
*/
declare class aErrorManager extends aLightObject {
   ClassName();
   ClassId();
   RTRaiseError(fromModule:string, fromProcedure:string, comment:string, seriousness:string);
}
/**
*
*/
declare class aAddressManager extends aLightObject {
   ClassName();
   ClassId();
   GetDBMgrFor(thisFullId:string, asClassFinder:Boolean);
   GetDBMgrForNewInst(thisObject:aFullObject);
}
/**
*
*/
declare class aExecutionSpace extends aLightObject {
   ClassName();
   ClassId();
   Kill();
   ExecuteModuleProc(WithStack:string, theModule:string, myMethodBody:string, SizeOfParms:Number);
   ExecuteMethodCall(theSelf:string, WithStack:string, theLightClass:string, myMethodBody:string, SizeOfParms:Number);
}
/**
*
*/
declare class aInterpretedExecutionSpace extends aExecutionSpace {
   ClassName();
   ClassId();
   ExecuteModuleProc();
}
/**
*
*/
declare class aMethodInvocation extends aLightObject {
   myLocals:string;
   myLocalUIAgentsUnderWatch:string;
   myMethodImplem:string;
   myCaller:string;
   myExecutionContext:string;
   CurStatement:string;
   LocalsFrame:string;
   SizeOfLocals:Number;
   SizeOfParameters:Number;
   myUIAgent:string;
   mySelftoInterp:string;
   pReturnValue:string;
   myText:string;
   NestedLoopCount:Number;
   ExitLoopCount:Number;
   hasBeenPreparedForPresentation:Boolean;
   WantsStepping:Boolean;
   MustStep:Boolean;
   ElapsedTime:Number;
   ImplicitOQLCursor:string;
   OldTOS:string;
   ParametersFrame:string;
   isDirect:Boolean;
   StringExtract();
   ClassName();
   ClassId();
   IsSystemCloseAccepted();
   Kill();
   InitVariables();
   ParamInteract();
   PleaseStep(theUIAgent:aUIAgent);
   PleaseStepInto(theUIAgent:aUIAgent);
   PleaseStepOutOf(theUIAgent:aUIAgent);
   PleaseRunOutOf(theUIAgent:aUIAgent);
   PleaseRun(theUIAgent:aUIAgent);
   WatchCaller(theUIAgent:aUIAgent);
   ToggleTimings(theUIAgent:aUIAgent);
   SetOrRemoveStopPoint(theUIAgent:aUIAgent);
   SetOrRemoveInvisiblePoint(theUIAgent:aUIAgent);
   ShowWatches(theUIAgent:aUIAgent);
   ShowCallers(theUIAgent:aUIAgent);
   ShowReportWindows(theUIAgent:aUIAgent);
   putCallersIn(theUIAgent:aUIAgent);
   Rip(theUIAgent:aUIAgent);
   SetOrRemoveBreakPoint(theUIAgent:aUIAgent);
   Animate(theUIAgent:aUIAgent);
   AddSelectedWatch(theUIAgent:aUIAgent);
   AddAllWatch(theUIAgent:aUIAgent);
   DelSelectedWatches(theUIAgent:aUIAgent);
   DelAllWatches(theUIAgent:aUIAgent);
   OrganizeWatches(theUIAgent:aUIAgent);
   ShowConfig(theUIAgent:aUIAgent);
   PleaseRunOutOfLoop(theUIAgent:aUIAgent);
   PleaseExitFromLoop(theUIAgent:aUIAgent);
   PleaseExitFromMethod(theUIAgent:aUIAgent);
   AddSelectedModifWatch(theUIAgent:aUIAgent);
   PleaseMarkMemory(theUIAgent:aUIAgent);
   PleaseDisplayMemoryInfo(theUIAgent:aUIAgent);
   PleaseRemoveDumpedDbgBlock(theUIAgent:aUIAgent);
   MyGod();
   PleaseStopInCaller(theUIAgent:aUIAgent);
   GetTextSearcher();
}
/**
*
*/
declare class aUITerminator extends aLightObject {
   ClassName();
   ClassId();
   NotifyTerminate(theUIAgent:aUIAgent);
}
/**
*
*/
declare class aListSorter extends aLightObject {
   List:string;
   ClassName();
   ClassId();
   Kill();
   InitOn(onThisList:string);
   sort(OrderingFunction:string, ascending:Boolean);
   SaveOrder();
   RestoreOrder();
   IsInferior(PtrTo_ThisIsInferior:string, PtrTo_toThat:string, OrderingFunction:string);
   ArraySortUp(A:string, l:Number, r:Number, ItemSize:Number, OrderingFunction:string);
   ArraySortDown(A:string, l:Number, r:Number, ItemSize:Number, OrderingFunction:string);
}
/**
*
*/
declare class aRecordCache extends aLightObject {
   ClassName();
   ClassId();
   Init();
   SetCacheSize(CacheSize:Number);
   SetPolicyKind(CachePolicyKind:string);
   SetRecordSizes(DataRecordSize:Number, HashRecordSize:Number);
   HashCode(HashRecord:string);
   AppendRecord(DataRecord:string, HashRecord:string);
   DeleteRecord(HashRecord:string);
   RecordExists(HashRecord:string);
   GetRecord(DataRecord:string, HashRecord:string);
   ChangeRecord(DataRecord:string, HashRecord:string);
   Purge();
}
/**
*
*/
declare class aHashTable extends aLightObject {
   pHashArray:string;
   ArraySize:Number;
   Count:Number;
   AutoResizable:Boolean;
   ClassName();
   ClassId();
   Init();
   Kill();
   SetHashArraySize(ArraySize:Number);
   Statistic();
   Allocate(pKey:string);
   Free(pHashElement:string);
   Compare(pHashElement:string, pKey:string);
   HashCode(pKey:string);
   Append(pKey:string);
   Delete(pKey:string);
   Exists(pKey:string);
   Find(pKey:string);
   FindOrAppend(pKey:string);
   Explore();
   OnExplore(pHashElement:string);
   Purge();
   GetData(pHashElement:string, Data:string);
   GetKey(pHashElement:string, Key:string);
   GetInt4(pHashElement:string);
   GetCString(pHashElement:string):string;
   GetObject(pHashElement:string);
}
/**
*
*/
declare class aRecordHashTable extends aHashTable {
   DataRecordSize:Number;
   HashRecordSize:Number;
   ClassName();
   ClassId();
   Allocate();
   Free();
   Compare();
   HashCode();
   GetData();
   GetKey();
   InitRecordSizes(DataRecordSize:Number, HashRecordSize:Number);
   AppendRecord(DataRecord:string, HashRecord:string);
   DeleteRecord(HashRecord:string);
   RecordExists(HashRecord:string);
   GetRecord(DataRecord:string, HashRecord:string);
   ChangeRecord(DataRecord:string, HashRecord:string);
   GetRecordFromHashElement(pHashElement:string);
}
/**
*
*/
declare class aDataByObjectHashTable extends aHashTable {
   ClassName();
   ClassId();
   Init();
   Allocate();
   Free();
   Compare();
   HashCode();
   GetData();
   GetKey();
   GetInt4();
   GetCString();
   GetObject();
   AppendPointer(Data:string, theObject:string);
   AppendInt4(Data:Number, theObject:string);
   DeleteObject(theObject:string);
   ObjectExists(theObject:string);
   GetPointerFromObject(thePointer:string, theObject:string);
   GetInt4FromObject(theInt4:Number, theObject:string);
   ChangePointerFromObject(thePointer:string, theObject:string);
   ChangeInt4FromObject(theInt4:Number, theObject:string);
   GetPointerFromHashElement(pHashElement:string);
   GetInt4FromHashElement(pHashElement:string);
}
/**
*
*/
declare class aDataByStringHashTable extends aHashTable {
   CaseDependant:Boolean;
   ClassName();
   ClassId();
   Init();
   Allocate();
   Free();
   Compare();
   HashCode();
   GetData();
   GetKey();
   GetInt4();
   GetCString();
   GetObject();
   AppendPointer(Data:string, theString:string);
   AppendInt4(Data:Number, theString:string);
   DeleteString(theString:string);
   StringExists(theString:string);
   GetPointerFromString(thePointer:string, theString:string);
   GetInt4FromString(theInt4:Number, theString:string);
   ChangePointerFromString(thePointer:string, theString:string);
   ChangeInt4FromString(theInt4:Number, theString:string);
   FindOrAppendPointer(Data:string, theString:string);
   FindOrAppendInt4(Data:Number, theString:string);
}
/**
*
*/
declare class aStringByStringHashTable extends aDataByStringHashTable {
   ClassName();
   ClassId();
   Kill();
   GetData();
   GetInt4();
   GetCString();
   AppendString(Data:string, theString:string);
   GetStringFromString(theDataString:string, theString:string);
   ChangeStringFromString(theDataString:string, theString:string);
   FindOrAppendString(Data:string, theString:string):string;
}
/**
*
*/
declare class aStringHashTable extends aHashTable {
   CaseDependant:Boolean;
   ClassName();
   ClassId();
   Init();
   Allocate();
   Free();
   Compare();
   HashCode();
   GetData();
   GetKey();
   GetInt4();
   GetCString();
   AppendString(theString:string);
   DeleteString(theString:string);
   StringExists(theString:string);
}
/**
*
*/
declare class aHashTableIterator extends aLightObject {
   StringExtract();
   ClassName();
   ClassId();
   Init();
   Kill();
   Current();
   ResetOn(onThisTable:aHashTable);
   Reset();
   MoveNext();
   MoveNextAndGet(pHashElement:string);
   MovePrevAndGet(pHashElement:string);
   MovePrev();
   Move(goingForward:Boolean);
   GetData(Data:string);
   GetKey(Key:string);
   GetInt4();
   GetCString():string;
   GetObject();
}
/**
*
*/
declare class aAlert extends aLightObject {
   Message:string;
   ReturnAction:string;
   ClassName();
   ClassId();
   ActionValid();
   ActionCancel();
   ActionNo(theUIAgent:aUIAgent);
}
/**
*
*/
declare class aTransaction extends aLightObject {
   AllObjects:string;
   Accepted:Boolean;
   WellAccepted:Boolean;
   Gauge:string;
   AllThingsToDelete:string;
   AllThingsToKill:string;
   LastDBErrNum:Number;
   LastDBErrMsg:string;
   allPBs:string;
   ClassName();
   ClassId();
   Init();
   Accept();
   Kill();
   GetAllObjectsList();
   GetIndependantObjectsList();
   AppendObject(thisObject:string);
   AppendOwnedObject(thisObject:string);
   _FreezeObjects_DEPRECATED(unFreeze:Boolean);
   CancelObjects();
   HasBeenWellAccepted();
   GetError(errNum:Number, errMsg:string);
   PrepareThings();
   DeleteThing(NsId:Number, Id:Number);
   SetPhantom(Obj:aFullObject, NsId:Number, Id:Number, Value:Boolean);
   SetPhantomWithOwned(Obj:aFullObject, Value:Boolean);
   StoreThings();
   TreatPhantoms();
   TreatDeletion();
   TreatStore();
   BeforeCommitStore();
   BeforeCommitDelete();
   BeforeCommitPhantom();
   AppendAllObjectsOfAnOtherTransaction(thisOtherTransaction:aTransaction);
   Freeze(Obj:aFullObject);
   UnFreeze(theObj:aFullObject);
   LockSharedDBsChance(thisLockKind:string);
   TryToReplayTransaction();
   AreSharedDBsLocked();
   BuildTransientLists();
   KillTransientLists();
   SetErrorNum(WithErrorNum:Number, WithErrorMsg:string);
   TreatFreeze();
   UnFreezeFromId(NsId:Number, Id:Number, Version:Number);
   FreezeFromId(NsId:Number, Id:Number, Version:Number);
   TreatOQLDelete();
   SetLastUpdateForAllObjects(theDate:Number, theTime:Number, UseCurrent:Boolean);
   IsEmpty();
}
