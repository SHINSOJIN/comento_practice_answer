import axios from 'axios'
import {HOST} from '../config';

export async function getResult(keywordIdx){
    try {
        const res = await axios.get(`${HOST}/stock/news?idx=${keywordIdx}`)
        return res.data;
    } catch (err) {
        return null;
    }
}