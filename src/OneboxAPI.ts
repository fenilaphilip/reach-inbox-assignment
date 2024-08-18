import axios from "axios";

const url: string = process.env.REACT_APP_API_BASE_URL ?? "";
const list_all_path = `${url}/onebox/list`;
const fetch_thread_path = `${url}/onebox/messages/`;

export interface Mail {
    "id": number;
    "fromName": string;
    "fromEmail": string;
    "toName": string;
    "toEmail": string;
    "cc": string | null;
    "bcc": string | null;
    "threadId": number;
    "messageId": string;
    "inReplyTo": string;
    "references": string;
    "subject": string;
    "body": string;
    "isRead": boolean;
    "folder": string;
    "uid": number;
    "sentAt": string;
    "archivedAt": string | null;
    "createdAt": string;
    "updatedAt": string | null;
    "deletedAt": string | null;
}

export default class OneboxApi {

    constructor(token: string | null) {
        if (token !== null) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
    }

    async getAllMails(): Promise<Array<Mail>> {
        try {
            const response = await axios.get(list_all_path);
            if (response.status === 200) {
                const data = response.data;
                console.debug(`Got ${JSON.stringify(data)} from ${list_all_path}`);
                return data.data;
            } else {
                console.error(`Got error response ${response}`);
                throw new Error(`Got error response from one box status=${response.status}`);
            }
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getAllReplies(threadId: number): Promise<Array<Mail>> {
        try {
            const response = await axios.get(`${fetch_thread_path}/${threadId}`);
            if (response.status === 200) {
                const data = response.data;
                console.debug(`Got ${JSON.stringify(data)} from thread fetching`);
                return data.data;
            } else {
                console.error(`Got error response ${response}`);
                throw new Error(`Got error response from one box status=${response.status}`);
            }
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

}