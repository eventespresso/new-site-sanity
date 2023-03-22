export interface BlockSpan {
	_key: string;
	_type: 'span';
	marks: Array<string>;
	text: string;
}

export interface ContentBlock {
	_key: string;
	_type: 'block';
	children: Array<BlockSpan>;
	markDefs: Array<any>;
	style: string;
}

export type Content = Array<ContentBlock>;
