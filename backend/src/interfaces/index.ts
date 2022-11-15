export class ApiResponse {
	statuscode: number;
	message: string;
	constructor(statuscode: number = 200, message: string) {
		this.statuscode = statuscode;
		this.message = message;
	}
}

export interface Payload {
	contact_name: string
	contact_email: string
	contact_message: string
}