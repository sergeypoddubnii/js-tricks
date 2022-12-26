import React from 'react';
import Card from '../../../Components/Card';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeExample = 'import React, {Component} from \'react\';\n' +
	'\n' +
	'class CodeExample extends Component <any, any> {\n' +
	'\n' +
	'\tconstructor(props:any) {\n' +
	'\t\tsuper(props);\n' +
	'\t\tthis.state = {\n' +
	'\t\t\tfirstName: \'\',\n' +
	'\t\t\tlastName: \'\',\n' +
	'\t\t};\n' +
	'\t}\n' +
	'\n' +
	'\thandleChange = (e:React.ChangeEvent<HTMLInputElement>) => {\n' +
	'\t\tconst name = e.target.name;\n' +
	'\t\tconst value = e.target.value;\n' +
	'\n' +
	'\t\tthis.setState((prev:any) => ({\n' +
	'\t\t\t...prev,\n' +
	'\t\t\t[name]: value,\n' +
	'\t\t}));\n' +
	'\t};\n' +
	'\n' +
	'\trender() {\n' +
	'\t\treturn (\n' +
	'\t\t\t<>\n' +
	'\t\t\t\t<input\n' +
	'\t\t\t\t\tname=\'firstName\'\n' +
	'\t\t\t\t\tvalue={this.state.firstName}\n' +
	'\t\t\t\t\tonChange={this.handleChange}\n' +
	'\t\t\t\t/>\n' +
	'\t\t\t\t<input\n' +
	'\t\t\t\t\tname=\'lastName\'\n' +
	'\t\t\t\t\tvalue={this.state.lastName}\n' +
	'\t\t\t\t\tonChange={this.handleChange}\n' +
	'\t\t\t\t/>\n' +
	'\t\t\t</>\n' +
	'\t\t);\n' +
	'\t}\n' +
	'}\n' +
	'export default CodeExample;\n';

const SwitchEvent = () => {
	return <>
		<Card title='Switch Event'>
			<h3>Switch Event body</h3>
			<SyntaxHighlighter language="javascript" style={docco}>
				{codeExample}
			</SyntaxHighlighter>
		</Card>
	</>;
};

export default SwitchEvent;
