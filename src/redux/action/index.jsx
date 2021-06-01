import {Actiontype} from './action-type'
export const charactersaction = (props) => {
    return {
        type: Actiontype.characters,
        payload: props
    };
}
export const queryAction =  (props) => {
    return {
        type: Actiontype.query,
        payload: props
    }
}