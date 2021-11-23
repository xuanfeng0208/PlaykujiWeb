import { get } from "@/api/http";
export const getData = (params) => get("/product", params);
export const productID = () => get("https://playkuji-api.azurewebsites.net/api/product/1d88846a-f9fb-4842-b176-9039841c3e82");

// export const productID = () => get("https://playkuji-api.azurewebsites.net/api/product/0b5c41d6-999a-436b-a608-f9472e74e3f8");

// export const getData1 = (product) => post("https://playkuji-api.azurewebsites.net/api/", product);
//此處如果有引數傳入給後端就需要寫上引數 params/data 否則可以為空
// export const getData = () => get("https://playkuji-api.azurewebsites.net/api/");
// export const getData1 = () => post("https://playkuji-api.azurewebsites.net/api/");