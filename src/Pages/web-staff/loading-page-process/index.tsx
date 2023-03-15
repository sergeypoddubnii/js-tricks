import React from 'react';
import Card from 'Components/containers/card';
import InfoLinks from 'Components/link/info-links';
import {useAppSelector} from 'store/hooks';
import {selectLoadingPageProcessSlice} from './loadingPageProcessSlice';
import img from 'assets/images/load-page-process.png';
import InfoLink from '../../../Components/link/info-link';

const LoadingPageProcess = () => {
	const loadingPageProcess = useAppSelector(selectLoadingPageProcessSlice);

	return (
		<Card title={'Loading page process'}>
			<img src={img}/>
			<h4>2. The browser checks the cache for a DNS record to find the corresponding IP address</h4>
			<h4>3. If the requested URL is not in the cache, ISP’s DNS server initiates a DNS query to find the IP address of the server that hosts</h4>
			<p>
				DNS(Domain Name System) is a database that maintains the name of the website (URL) and the particular IP address it links to. Every single URL on the internet has a unique IP address assigned to it.

				DNS is essential for the functioning of the internet, as it allows computers to communicate with each other using domain names that are easier for people to remember and use than IP addresses. DNS also helps to distribute internet traffic across multiple servers, improving the speed and reliability of internet connections.

				There are many different DNS servers and services available, including both public and private options. Some common public DNS services include Google Public DNS, OpenDNS, and Cloudflare DNS.
			</p>
			<ol>
				<li>First, it checks the browser cache</li>
				<li>Second, the browser checks the OS cache</li>
				<li>Third, it checks the router cache</li>
				<li>Fourth, it checks the ISP cache</li>
			</ol>
			<InfoLink path={'https://en.wikipedia.org/wiki/Domain_Name_System'} />
			<h4>4. The browser initiates a TCP(Transmission Control Protocol) connection with the server.</h4>
			<p>To transfer data packets between client and the server, it is important to have a TCP connection established. This connection is established using a process called the TCP/IP three-way handshake</p>
			<ol>
				<li>The client machine sends a synchronize packet to the server over the internet, asking if it is open for new connections.</li>
				<li>If the server has open ports that can accept and initiate new connections, it’ll respond with an acknowledge of the synchronize packet using a synchronize/acknowledge packet.</li>
				<li>The client will receive the synchronize/acknowledge packet from the server and will acknowledge it by sending an acknowledge packet.</li>
				<li>Fourth, it checks the ISP cache</li>
			</ol>
			<h4>5. The browser sends an HTTP request to the webserver.</h4>
			<p>..........add INFO</p>
			<h4>6. The server sends out an HTTP response.</h4>
			<p>..........add INFO</p>
			<InfoLinks links={loadingPageProcess.links}/>
		</Card>
	);
};

export default LoadingPageProcess;
