import { LightningElement, api } from 'lwc';

export default class LevelThree extends LightningElement {
    @api recordId
    @api whatColor
    @api whichObject


    get colorspec(){
        return this.whatColor.toLowerCase();
    }

    get isRecordPage(){
        return typeof this.recordId !== "undefined";
    }

    get talkbubble(){
        switch(this.whatColor){
            case "Blue":
                return "talk-bubble-in round left-top shadow tri-right-Blue protonLightBlue slds-m-top_medium";
            case "Yellow":
                return "talk-bubble-in round left-top shadow tri-right-Yellow protonLightYellow slds-m-top_medium";
            case "Green":
                return "talk-bubble-in round left-top shadow tri-right-Green protonLightGreen slds-m-top_medium";
            case "Purple":
                return "talk-bubble-in round left-top shadow tri-right-Indigo protonLightIndigo slds-m-top_medium";
            default:
                return "talk-bubble-in round left-top shadow tri-right-White protonWhite slds-m-top_medium";
        }
    }
    
}