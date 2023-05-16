import { api } from "@/services/api";
import axios from "axios";

export const getRestarauntsList = async() => {
    return api.get('/restaurants')
}
