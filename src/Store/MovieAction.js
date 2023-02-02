import { axiosInstance } from "../Network/axiosInstance";

export const MovieAction = (data) => (dispatch) => {
    return axiosInstance.get(`?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k&page=${data}`, {

    })
        .then((res) => dispatch({
            type: "MOVIES",
            payload: res.data.results
        }))
        .catch((err) => console.log(err))

}