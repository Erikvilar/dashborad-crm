import axios from "axios";
import apiUrlBase from "./ApiUrlBase";

const {IPconnection, PORTconnection} = apiUrlBase.network;

const {update, create, baseUrl } = apiUrlBase.general;

const {login, auth} = apiUrlBase.authentication;

export const axiosGeneralRequest = {

  login:async (data) => {
    try {
      const response = await axios.post(`http://${IPconnection}:${PORTconnection}${auth}${login}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  get: async (token) => {
    try {
      const response = await axios.get(`http://${IPconnection}:${PORTconnection}${baseUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response; 
    } catch (error) {
      throw error; 
    }
  },

  put:async(data,token)=>{
    try {
      const response = await axios.put(`http://${IPconnection}:${PORTconnection}${baseUrl}${update}`, data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  post: async (data, token) => {
    try {
      const response = await axios.post(`http://${IPconnection}:${PORTconnection}${baseUrl}${create}`, data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },


  delete:async(data,token)=>{
    try {
      const response = await axios.delete(`http://${IPconnection}:${PORTconnection}${baseUrl}/${data}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
  
}

export default axiosGeneralRequest

