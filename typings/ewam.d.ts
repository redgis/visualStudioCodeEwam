


declare class aLightObject  { 
    /**
             * This function returns whether or not an instance is a project (i.e. a version that can be modified) or not.
             */
    StringExtract(OfThisClassId : string):string;
    ClassName(OfThisClassId : string):string;
    ClassId(OfThisClassId : string):string;
    Accept;
    /**
             * This function returns whether or not an instance is a project (i.e. a version that can be modified) or not.
             */
    ClassVersion(OfThisClassId : string):string;
    
}

declare class aFullObject extends aLightObject   { NSId: number; id: number; Version: number }

/**
 * Wyde framework descriptor
 */
declare class aWFDesc extends aFullObject  { 
    /**
     * Name of the resources. Usually mandatory
     */
    Name: string 
}


declare module Motor {
    function NewInst(OfThisClassId : string) : string;
    function NewInstFromMotorClass(MotorClass : string) : string ;
    function CurrentVersionOf(ThisObject : aFullObject) : aFullObject ;
    function CurrentProjectOf(ThisObject : aFullObject) : aFullObject ;

    /** 
    *This function returns the last version of an instance.  If the an instance is in project state, this function returns the project.  If the instance isn't a project, this function returns the most recently accepted version.
    */
    function LastVersionOf(ThisObject : aFullObject) : aFullObject ;

    function LastVersionInMemOf(ThisObject : aFullObject) : string ;

                /**
                 * This function returns whether or not an instance is a project (i.e. a version that can be modified) or not.
                 */
    function IsAProject(ThisObject : aFullObject) : Boolean ;

    function IsCurrent(ThisObject : aFullObject) : Boolean ;

    function IsNew(ThisObject : aFullObject) : Boolean ;
}



