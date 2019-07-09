import { IProject, IProjectContainer } from "../../models/project.interface";
import { TableComponent } from "src/app/custom/ant-design/table/table.component";
import { FormComponent } from "src/app/custom/ant-design/form/form.component";
import { CalendarComponent } from "../../custom/ant-design/calendar/calendar.component";
import { IProfile } from "src/app/models/project.interface";
import { IUser } from "src/app/models/user.interface";

export interface IProjectState {
	projects: any;
	newProject: IProject;
	selectedProject: IProject;
	container: IProjectContainer[];
	profile: IUser
}

export const initialProjectState: IProjectState = {
	projects: [],
	newProject: null,
	selectedProject: null,
	container: [
		{
			name: "Form",
			type: FormComponent
		},
		{
			name: "Table",
			type: TableComponent
		},
		{
			name: "Calendar",
			type: CalendarComponent
		}
	],
	profile: null
};