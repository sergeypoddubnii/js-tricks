import React from 'react';
import Card from 'Components/card';
import InfoLink from 'Components/info-link';

const UrlBrowserProcess = () => {
	return (
		<Card title={'Url browser process'}>
			<ol>
				<li>Input Url</li>
				<li>
					The browser checks the cache for a DNS record to find the corresponding IP address. To find the DNS record, the browser checks four caches:
					<ul>
						<li>Browser cache</li>
						<li>OS cache</li>
						<li>Router cache</li>
						<li>ISP cache</li>
					</ul>
				</li>
				<li>If the requested URL is not in the cache, ISP’s DNS server initiates a DNS query to find the IP address of the server</li>
				<li>The browser initiates a TCP connection with the server</li>
				<li>The browser sends an HTTP request to the webserver</li>
				<li>The server handles the request and sends back a response</li>
				<li>The browser displays the HTML content</li>
			</ol>
			<InfoLink path={'https://medium.com/@maneesa/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a'}/>
			<br/>
			<InfoLink path={'https://aws.amazon.com/ru/blogs/mobile/what-happens-when-you-type-a-url-into-your-browser/'}/>
			<br/>
			<InfoLink path={'https://medium.com/jspoint/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969'}/>
		</Card>
	);
};

export default UrlBrowserProcess;
