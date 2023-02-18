// services
import SectionService from "../../services/section";

// types
import { CreateSectionData } from "../../../shared-types/portfolio";

export default class SectionController{
	static async create(data: CreateSectionData, formData: FormData, token: string) {
		return await SectionService.create(formData, token);
	}
}