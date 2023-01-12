import { useState } from "react";

export type getMarvelComicsResourceUrlFn = (endpoint: string) => string;

type GenericObject = { [key: string]: any };

type RequestConfig = {
    endpoint: string;
    method?: string;
    headers?: {
        "Content-Type"?: string;
    };
    body?: GenericObject;
};

export type fetchDataFn = (requestConfig: RequestConfig) => Promise<GenericObject>;

const useRequest = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    const getMarvelComicsResourceUrl: getMarvelComicsResourceUrlFn = (
        endpoint
    ) => {
        const serviceEndpoint = endpoint;
        let timestamp = new Date().getTime();
        timestamp = 1669230418424;
        const hashInputData = `${timestamp}${process.env.NEXT_PUBLIC_MARVEL_API_KEY_PRIVATE}${process.env.NEXT_PUBLIC_MARVEL_API_KEY_PUBLIC}`;
        const crypto = require("crypto");
        const hash = crypto
            .createHash("md5")
            .update(hashInputData)
            .digest("hex");
        const requestUrl = `${serviceEndpoint}ts=${timestamp}&apikey=${process.env.NEXT_PUBLIC_MARVEL_API_KEY_PUBLIC}&hash=${hash}`;
        return requestUrl;
    };

    const fetchData: fetchDataFn = async (requestConfig) => {
        try {
            console.log("Fetching Data");
            setIsLoading(true);
            setIsSuccess(false);
            setHasError(false);
            const response = await fetch(requestConfig.endpoint, {
                method: requestConfig.method || "GET",
                headers: requestConfig.headers || {},
                body: requestConfig.body
                    ? JSON.stringify(requestConfig.body)
                    : null,
            });
            if (response.status !== 200) {
                throw new Error(response.status.toString());
            }
            const responseData = await response.json();
            console.log("Data Retrieved");
            return responseData;
        } catch (error) {
            console.log(error);
            console.log("Inside error");
            setHasError(true);
        }
    };

    return {
        getMarvelComicsResourceUrl,
        fetchData,
        isLoading,
        setIsLoading,
        isSuccess,
        setIsSuccess,
        hasError,
        setHasError,
    };
};

export default useRequest;
