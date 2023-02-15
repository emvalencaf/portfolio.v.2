// service
import { SuccessState } from "../../../shared-types/async-success-error";
import SettingsService from "../../services/settings";

// type
export type SettingsControllerCreate = {
	data: {

	},
	successMessage: SuccessState;
}

export default class SettingsController {
	static async create(data, formData: FormData, token: string){
		try{
			return await SettingsService.create(formData, token);
		} catch (err) {
			throw new Error(err.message);
		}
	}
}