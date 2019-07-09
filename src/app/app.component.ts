import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { IAppState } from "./store/state/app.state";
import {
	GetConfig,
	OpenDrawer,
	CloseDrawer,
	GetSettings
} from "./store/actions/config.actions";
import { GetUserAuth, GoogleLogin, Logout } from "./store/actions/auth.actions";

import { selectConfig } from "./store/selectors/config.selector";
import { selectLoggedInUser } from "./store/selectors/auth.selectors";
import { selectMessage } from "./store/selectors/message.selectors";
import { userProjects } from "./store/selectors/project.selector";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
	configs$ = this._store.pipe(select(selectConfig));
	loggedInUser$ = this._store.pipe(select(selectLoggedInUser));
	message$ = this._store.pipe(select(selectMessage));
	userProjects$ = this._store.pipe(select(userProjects));
	isCollapsed = true;
	
	constructor(private _store: Store<IAppState>) {}

	ngOnInit() {
		this._store.dispatch(new GetSettings());
		this._store.dispatch(new GetUserAuth());
	}
	ngAfterViewInit() {
		this._store.dispatch(new GetConfig());
	}
	openDrawer = () => {
		this._store.dispatch(new OpenDrawer());
	};

	closeDrawer = () => {
		this._store.dispatch(new CloseDrawer());
	};

	googleLogin() {
		this._store.dispatch(new GoogleLogin());
	}

	logout() {
		this._store.dispatch(new Logout());
	}
}
