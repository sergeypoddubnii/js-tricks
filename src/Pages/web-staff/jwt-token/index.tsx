import React from 'react';
import PageLayout from 'core/layout/page-layout';
import CodeSyntax from 'Components/code-syntax';
import ReferenceList from 'Components/reference/reference-list';

const jwtReferences = [
	'https://codex.so/jwt',
	'https://cyberpolygon.com/ru/materials/security-of-json-web-tokens-jwt/',
	'https://www.loginradius.com/blog/identity/refresh-tokens-jwt-interaction/',
];

const JWTToken = () => {
	return (
		<PageLayout title={'JWT Token'}>
			<p>JWT Token</p>
			<CodeSyntax code={'import axios from "axios";\n\nconst url = "some url";\n\nconst api = axios.create({ baseURL: url });\n\n// intercentor for requests put access token to header\napi.interceptors.request.use((config) => {\n  config.headers.Authorization = `Barear someAccessToken`;\n  return config;\n});\n\n// intercentor for response =====\n\nconst onSuccess = (config) => {\n  return config;\n};\n\nconst onError = (error) => {\n  // request config from original request\n  const originalRequestConfig = error.config;\n  let isRetry = false;\n  // if we unauthorized condition and condition to stop infinity loop\n  const unauthorizedCondition =\n    error.status === 401 && originalRequestConfig && isRetry;\n  if (unauthorizedCondition) {\n    // if user unauthorized to stop infinity loop\n    isRetry = true;\n    //  send request to new couple of tokens\n    api\n      .get("auth/refresh")\n      .then((response) => {\n        localStorage.setItem("accessToken", response.data.accessToken);\n        localStorage.setItem("refreshToken", response.data.refreshToken);\n      })\n      // if our refresh token is dead we will get error\n      .catch((error) => {\n        console.log("you unauthorized");\n      });\n    // after refreshing out token we send original request\n    // on which we got 410 error\n    return api.request(originalRequestConfig);\n  }\n  // if we have anouther error => thow error\n  throw error;\n};\n\napi.interceptors.response.use(onSuccess, onError);\n\napi.request("heloo");\n'}/>
			<ReferenceList references={jwtReferences}/>
		</PageLayout>
	);
};

export default JWTToken;
