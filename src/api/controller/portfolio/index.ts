import PortfolioService from "../../services/portfolio";

type PortfolioData = {

}

export default class PortfolioController{
	static async create(dataProject: PortfolioData,formData: FormData, token: string) {
		const response =  await PortfolioService.create(formData, token);

	}

	static async get(){
		return await PortfolioService.get();
	}
}