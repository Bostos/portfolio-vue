import axios from 'axios';

const API_URL = 'http://localhost:4000';

export class APIService{
	constructior(){}

	getProjects(){
		const url = `${API_URL}/api/projects/`;
		return axios.get(url).then(response => response.data);
	}

	getProject(id){
		const url = `${API_URL}/api/projects/${id}`;
		return axios.get(url).then(response => response.data);
	}
}