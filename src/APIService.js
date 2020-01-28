import axios from 'axios';

const API_URL = 'http://localhost:4000';

const auth = {
    headers: {'access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNTgwMjAxNDUzLCJleHAiOjE1ODAyMDI4OTN9.XfUVhSvkX3nKeyOBx8OdkfcCMPWka_UeqpIXyRVo0_8'} 
}

export class APIService{
	constructor(){}

	getProjects(){
		const url = `${API_URL}/api/projects/`;
		return axios.get(url, auth).then(response => response.data);
	}

	getProject(id){
		const url = `${API_URL}/api/projects/${id}`;
		return axios.get(url, auth).then(response => response.data);
	}
}