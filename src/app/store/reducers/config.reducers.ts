import { ConfigActions, EConfigActions } from "../actions/config.actions";
import { initialConfigState, IConfigState } from "./../state/config.state";

export function configReducers(
	state = initialConfigState,
	action: ConfigActions
): IConfigState {
	switch (action.type) {
		case EConfigActions.GetConfigSuccess: {
			return {
				...state,
				config: action.payload
			};
		}
		case EConfigActions.OpenDrawer: {
			return {
				...state
			};
		}
		case EConfigActions.CloseDrawer: {
			return {
				...state
			};
		}
		case EConfigActions.DrawerStatus: {
			return {
				...state,
				config: action.payload
			};
		}

		default:
			return state;
	}
}
