import axios from "axios";
import http, { buildPath } from "../utils/http";

export const searchWord = async(word: string | null) => {
    return await http.get(`/${word}`);
}

interface searchWordsProps {
    words: string[];
    recordsToTake: number;
    recordsToSkip: number;
}


export const searchWords = async({words, recordsToTake, recordsToSkip = 0}: searchWordsProps) => {
    const currentWordsToSearch = [...words].splice(recordsToSkip, recordsToTake + recordsToSkip);
    const requests = currentWordsToSearch.map((word) => {
        return axios.get(buildPath(`/${word}`));
    })
    return await Promise.allSettled(requests).then(axios.spread((...responses) => {
        const allData = responses.map(({ status, value, reason }: any) => {
            const url = status === "fulfilled" 
                ? value?.config.url
                : reason?.response?.config.url;

            const urlSplit = url.split('/');
            const word = urlSplit[urlSplit.length - 1];
            return {
                status,
                word,
                data: value?.data && value?.data[0],
                error: reason?.response?.data
            }
        })
        return {
            data: allData,
            recordsToSkip,
            recordsToTake,
            totalCount: words.length,
        }
    }))
}