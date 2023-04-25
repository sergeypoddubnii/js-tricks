import React from 'react';
import PageLayout from 'core/layout/page-layout';
import CodeSyntax from 'Components/code-syntax';
import ReferenceList from 'Components/reference/reference-list';
import Thesis from 'Components/section/thesis/thesis';
import Code from 'Components/section/code';

const jwtReferences = [
	'https://codex.so/jwt',
	'https://cyberpolygon.com/ru/materials/security-of-json-web-tokens-jwt/',
	'https://www.loginradius.com/blog/identity/refresh-tokens-jwt-interaction/',
	'https://dev.to/lico/react-apollo-refresh-tokens-5h0k',
	'https://medium.com/@vishnu_prabhu/apollo-link-jwt-token-refresh-using-graphql-react-jwt-apollo-client-44e625b6d45c',
	'https://www.apollographql.com/docs/react/networking/authentication/'
];

const JWTToken = () => {
	return (
		<PageLayout title={'JWT Token'}>
			<Thesis title={'Description'}>
				<p>JWT consist from 3 parts: header, payload(data), signature</p>
			</Thesis>
			<Thesis title={'Header'}>
				Header includes two fields: type of token and signature hashing algorithm
			</Thesis>
			<Thesis title={'Payload'}>
				Any data what you want to put.
				<Code>Payload</Code> is not encrypted when using a token, so you should not transfer data in it that should not be made publicly available.
			</Thesis>
			<Thesis title={'Signature'}>
				The caption is calculated based on the title and payload.
				Thus, if someone tries to change the data in the token,
				he will not be able to change the signature without knowing the private key.
				When authenticating, the private key can be the user s password (or a hash of the password).
			</Thesis>
			<CodeSyntax code={'// header and payload to JSON format and use base64\nHeader: someHeaderString;\nPayload: somePayloadString;\n//concat header and payload with \'.\' and hashed with algorithm what we have in header\nHS256("someHeaderString" + "." + "somePayloadString","yourPassword") = "signature";\n// concat header payload and signature with \'.\'\n\'someHeaderString.somePayloadString.signature\''}/>
			<CodeSyntax code={'import axios from "axios";\n\nconst url = "some url";\n\nconst api = axios.create({ baseURL: url });\n\n// intercentor for requests put access token to header\napi.interceptors.request.use((config) => {\n  config.headers.Authorization = `Barear someAccessToken`;\n  return config;\n});\n\n// intercentor for response =====\n\nconst onSuccess = (config) => {\n  return config;\n};\n\nconst onError = (error) => {\n  // request config from original request\n  const originalRequestConfig = error.config;\n  let isRetry = false;\n  // if we unauthorized condition and condition to stop infinity loop\n  const unauthorizedCondition =\n    error.status === 401 && originalRequestConfig && isRetry;\n  if (unauthorizedCondition) {\n    // if user unauthorized to stop infinity loop\n    isRetry = true;\n    //  send request to new couple of tokens\n    api\n      .get("auth/refresh")\n      .then((response) => {\n        localStorage.setItem("accessToken", response.data.accessToken);\n        localStorage.setItem("refreshToken", response.data.refreshToken);\n      })\n      // if our refresh token is dead we will get error\n      .catch((error) => {\n        console.log("you unauthorized");\n      });\n    // after refreshing out token we send original request\n    // on which we got 410 error\n    return api.request(originalRequestConfig);\n  }\n  // if we have anouther error => thow error\n  throw error;\n};\n\napi.interceptors.response.use(onSuccess, onError);\n\napi.request("heloo");\n'}/>
			<ReferenceList references={jwtReferences}/>
		</PageLayout>
	);
};

export default JWTToken;
